GRANT INSERT ON public.booking_requests TO anon, authenticated;
GRANT INSERT ON public.contact_messages TO anon, authenticated;

CREATE POLICY "Anyone can submit a booking request"
ON public.booking_requests FOR INSERT TO anon, authenticated
WITH CHECK (status = 'new');

CREATE POLICY "Anyone can send a contact message"
ON public.contact_messages FOR INSERT TO anon, authenticated
WITH CHECK (status = 'new');