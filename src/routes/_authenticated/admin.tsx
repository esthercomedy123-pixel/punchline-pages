import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Inbox, LogOut, Mail, RefreshCw, Trash2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";

type BookingRequest = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  venue: string;
  event_date: string | null;
  location: string;
  event_type: string;
  details: string | null;
  status: string;
  created_at: string;
};

type ContactMessage = {
  id: string;
  name: string;
  email: string;
  reason: string;
  message: string;
  status: string;
  created_at: string;
};

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({
    meta: [
      { title: "Admin inbox | Bookings & messages" },
      {
        name: "description",
        content: "Private dashboard for reviewing booking requests and contact messages.",
      },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Admin inbox" },
      { property: "og:description", content: "Private dashboard for bookings and messages." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AdminPage,
  errorComponent: ({ error }) => (
    <main className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="font-display text-3xl uppercase">Couldn't load the inbox</h1>
      <p className="mt-3 text-sm text-muted-foreground">{error.message}</p>
    </main>
  ),
  notFoundComponent: () => (
    <main className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="font-display text-3xl uppercase">Nothing here</h1>
    </main>
  ),
});

function formatDate(value: string) {
  return new Date(value).toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function AdminPage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [email, setEmail] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

  useEffect(() => {
    let active = true;
    (async () => {
      const { data: userData } = await supabase.auth.getUser();
      if (!active) return;
      setEmail(userData.user?.email ?? null);
      const { data } = await supabase
        .from("user_roles")
        .select("role")
        .eq("role", "admin")
        .maybeSingle();
      if (active) setIsAdmin(Boolean(data));
    })();
    return () => {
      active = false;
    };
  }, []);

  const bookings = useQuery({
    queryKey: ["admin", "bookings"],
    enabled: isAdmin === true,
    queryFn: async (): Promise<BookingRequest[]> => {
      const { data, error } = await supabase
        .from("booking_requests")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data ?? [];
    },
  });

  const messages = useQuery({
    queryKey: ["admin", "messages"],
    enabled: isAdmin === true,
    queryFn: async (): Promise<ContactMessage[]> => {
      const { data, error } = await supabase
        .from("contact_messages")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data ?? [];
    },
  });

  const setStatus = useMutation({
    mutationFn: async ({
      table,
      id,
      status,
    }: {
      table: "booking_requests" | "contact_messages";
      id: string;
      status: string;
    }) => {
      const { error } = await supabase.from(table).update({ status }).eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin"] });
    },
    onError: (error) => toast.error(error.message),
  });

  const remove = useMutation({
    mutationFn: async ({
      table,
      id,
    }: {
      table: "booking_requests" | "contact_messages";
      id: string;
    }) => {
      const { error } = await supabase.from(table).delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      toast.success("Deleted");
      queryClient.invalidateQueries({ queryKey: ["admin"] });
    },
    onError: (error) => toast.error(error.message),
  });

  async function handleSignOut() {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  }

  const newBookings = bookings.data?.filter((b) => b.status === "new").length ?? 0;
  const newMessages = messages.data?.filter((m) => m.status === "new").length ?? 0;

  return (
    <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-display text-xs tracking-[0.24em] text-accent uppercase">Backstage</p>
          <h1 className="mt-2 font-display text-4xl tracking-wide uppercase sm:text-5xl">
            The inbox
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Signed in as {email ?? "…"}
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => queryClient.invalidateQueries({ queryKey: ["admin"] })}
          >
            <RefreshCw className="size-4" /> Refresh
          </Button>
          <Button variant="outline" onClick={handleSignOut}>
            <LogOut className="size-4" /> Sign out
          </Button>
        </div>
      </div>

      {isAdmin === false ? (
        <div className="mt-10 rounded-3xl border-2 border-border bg-card p-8">
          <h2 className="font-display text-2xl uppercase">Not on the list</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            This account doesn't have admin access. Sign in with the first account that was
            created for this site.
          </p>
        </div>
      ) : (
        <Tabs defaultValue="bookings" className="mt-10">
          <TabsList>
            <TabsTrigger value="bookings">
              <Inbox className="size-4" /> Bookings
              {newBookings > 0 ? <Badge className="ml-2">{newBookings}</Badge> : null}
            </TabsTrigger>
            <TabsTrigger value="messages">
              <Mail className="size-4" /> Messages
              {newMessages > 0 ? <Badge className="ml-2">{newMessages}</Badge> : null}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="bookings" className="mt-6 grid gap-4">
            {bookings.isPending || isAdmin === null ? (
              <Skeleton className="h-32 w-full rounded-3xl" />
            ) : bookings.data?.length ? (
              bookings.data.map((b) => (
                <article key={b.id} className="rounded-3xl border-2 border-border bg-card p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-xl tracking-wide uppercase">{b.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {b.email}
                        {b.phone ? ` • ${b.phone}` : ""}
                      </p>
                    </div>
                    <Badge variant={b.status === "new" ? "default" : "secondary"}>{b.status}</Badge>
                  </div>
                  <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                    <Row label="Event type" value={b.event_type} />
                    <Row label="Venue" value={b.venue} />
                    <Row label="Date" value={b.event_date ?? "Not given"} />
                    <Row label="Location" value={b.location} />
                  </dl>
                  {b.details ? (
                    <p className="mt-4 rounded-2xl bg-muted/40 p-4 text-sm whitespace-pre-line">
                      {b.details}
                    </p>
                  ) : null}
                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    <span className="mr-auto text-xs text-muted-foreground">
                      {formatDate(b.created_at)}
                    </span>
                    <Button variant="outline" size="sm" asChild>
                      <a href={`mailto:${b.email}`}>Reply</a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        setStatus.mutate({
                          table: "booking_requests",
                          id: b.id,
                          status: b.status === "new" ? "handled" : "new",
                        })
                      }
                    >
                      {b.status === "new" ? "Mark handled" : "Mark new"}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => remove.mutate({ table: "booking_requests", id: b.id })}
                    >
                      <Trash2 className="size-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </article>
              ))
            ) : (
              <EmptyState label="No booking requests yet. The phone's not ringing — yet." />
            )}
          </TabsContent>

          <TabsContent value="messages" className="mt-6 grid gap-4">
            {messages.isPending || isAdmin === null ? (
              <Skeleton className="h-32 w-full rounded-3xl" />
            ) : messages.data?.length ? (
              messages.data.map((m) => (
                <article key={m.id} className="rounded-3xl border-2 border-border bg-card p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-xl tracking-wide uppercase">{m.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {m.email} • {m.reason}
                      </p>
                    </div>
                    <Badge variant={m.status === "new" ? "default" : "secondary"}>{m.status}</Badge>
                  </div>
                  <p className="mt-4 rounded-2xl bg-muted/40 p-4 text-sm whitespace-pre-line">
                    {m.message}
                  </p>
                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    <span className="mr-auto text-xs text-muted-foreground">
                      {formatDate(m.created_at)}
                    </span>
                    <Button variant="outline" size="sm" asChild>
                      <a href={`mailto:${m.email}`}>Reply</a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        setStatus.mutate({
                          table: "contact_messages",
                          id: m.id,
                          status: m.status === "new" ? "handled" : "new",
                        })
                      }
                    >
                      {m.status === "new" ? "Mark handled" : "Mark new"}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => remove.mutate({ table: "contact_messages", id: m.id })}
                    >
                      <Trash2 className="size-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </article>
              ))
            ) : (
              <EmptyState label="No messages yet. Enjoy the silence." />
            )}
          </TabsContent>
        </Tabs>
      )}
    </main>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-display text-xs tracking-[0.18em] text-muted-foreground uppercase">
        {label}
      </dt>
      <dd className="mt-1">{value}</dd>
    </div>
  );
}

function EmptyState({ label }: { label: string }) {
  return (
    <div className="rounded-3xl border-2 border-dashed border-border p-10 text-center text-sm text-muted-foreground">
      {label}
    </div>
  );
}
