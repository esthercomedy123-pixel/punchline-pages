-- Inline admin checks so has_role no longer needs to be callable by signed-in users
DROP POLICY "Admins can view booking requests" ON public.booking_requests;
DROP POLICY "Admins can update booking requests" ON public.booking_requests;
DROP POLICY "Admins can delete booking requests" ON public.booking_requests;
DROP POLICY "Admins can view contact messages" ON public.contact_messages;
DROP POLICY "Admins can update contact messages" ON public.contact_messages;
DROP POLICY "Admins can delete contact messages" ON public.contact_messages;

CREATE POLICY "Admins can view booking requests" ON public.booking_requests
FOR SELECT TO authenticated
USING (EXISTS (SELECT 1 FROM public.user_roles ur WHERE ur.user_id = auth.uid() AND ur.role = 'admin'::public.app_role));

CREATE POLICY "Admins can update booking requests" ON public.booking_requests
FOR UPDATE TO authenticated
USING (EXISTS (SELECT 1 FROM public.user_roles ur WHERE ur.user_id = auth.uid() AND ur.role = 'admin'::public.app_role))
WITH CHECK (EXISTS (SELECT 1 FROM public.user_roles ur WHERE ur.user_id = auth.uid() AND ur.role = 'admin'::public.app_role));

CREATE POLICY "Admins can delete booking requests" ON public.booking_requests
FOR DELETE TO authenticated
USING (EXISTS (SELECT 1 FROM public.user_roles ur WHERE ur.user_id = auth.uid() AND ur.role = 'admin'::public.app_role));

CREATE POLICY "Admins can view contact messages" ON public.contact_messages
FOR SELECT TO authenticated
USING (EXISTS (SELECT 1 FROM public.user_roles ur WHERE ur.user_id = auth.uid() AND ur.role = 'admin'::public.app_role));

CREATE POLICY "Admins can update contact messages" ON public.contact_messages
FOR UPDATE TO authenticated
USING (EXISTS (SELECT 1 FROM public.user_roles ur WHERE ur.user_id = auth.uid() AND ur.role = 'admin'::public.app_role))
WITH CHECK (EXISTS (SELECT 1 FROM public.user_roles ur WHERE ur.user_id = auth.uid() AND ur.role = 'admin'::public.app_role));

CREATE POLICY "Admins can delete contact messages" ON public.contact_messages
FOR DELETE TO authenticated
USING (EXISTS (SELECT 1 FROM public.user_roles ur WHERE ur.user_id = auth.uid() AND ur.role = 'admin'::public.app_role));

REVOKE ALL ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO service_role;