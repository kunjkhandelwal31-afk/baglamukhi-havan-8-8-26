-- Grant admin role to the bootstrap admin email and add a SECURITY DEFINER
-- function that future logins can call to ensure the role exists.

INSERT INTO public.user_roles (user_id, role)
SELECT id, 'admin'::app_role FROM auth.users WHERE email = 'admin@baglamukhi.local'
ON CONFLICT DO NOTHING;

CREATE OR REPLACE FUNCTION public.ensure_bootstrap_admin()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  uid uuid;
BEGIN
  SELECT id INTO uid FROM auth.users WHERE email = 'admin@baglamukhi.local';
  IF uid IS NOT NULL THEN
    INSERT INTO public.user_roles (user_id, role)
    VALUES (uid, 'admin'::app_role)
    ON CONFLICT (user_id, role) DO NOTHING;
  END IF;
END;
$$;

GRANT EXECUTE ON FUNCTION public.ensure_bootstrap_admin() TO anon, authenticated;