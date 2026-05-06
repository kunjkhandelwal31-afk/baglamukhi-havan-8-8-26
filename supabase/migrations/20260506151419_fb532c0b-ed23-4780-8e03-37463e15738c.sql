
-- Fix set_updated_at search_path
CREATE OR REPLACE FUNCTION public.set_updated_at() RETURNS TRIGGER
LANGUAGE plpgsql SECURITY INVOKER SET search_path = public AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END; $$;

-- Lock down has_role execution to authenticated only (it's used by RLS)
REVOKE EXECUTE ON FUNCTION public.has_role(UUID, public.app_role) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.has_role(UUID, public.app_role) TO authenticated;

-- Replace permissive insert policies with column/value-aware checks
DROP POLICY "Anyone can log page view" ON public.page_views;
CREATE POLICY "Anyone can log page view" ON public.page_views FOR INSERT TO anon, authenticated
  WITH CHECK (path IS NOT NULL AND char_length(path) <= 500);

DROP POLICY "Anyone can log interaction" ON public.interaction_events;
CREATE POLICY "Anyone can log interaction" ON public.interaction_events FOR INSERT TO anon, authenticated
  WITH CHECK (event_type IS NOT NULL AND char_length(event_type) <= 100);

DROP POLICY "Anyone can submit booking" ON public.bookings;
CREATE POLICY "Anyone can submit booking" ON public.bookings FOR INSERT TO anon, authenticated
  WITH CHECK (
    char_length(name) BETWEEN 1 AND 200
    AND char_length(phone) BETWEEN 5 AND 30
    AND status = 'pending'
  );
