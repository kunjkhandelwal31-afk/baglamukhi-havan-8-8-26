# Maa Baglamukhi Havan & Anushthan — Remix Guide

This is a Hindi spiritual-services booking website for **Baglamukhi Havan, Lal Mirch Havan, Anushthan, and related pooja services**. It includes online booking forms, service pages, blog, live darshan placeholder, admin dashboard, WhatsApp/Instagram floating buttons, and SEO-ready structured data.

## Quick start after remixing

1. **Update contact details** — edit `src/lib/contact.ts` once; changes flow everywhere:
   - Phone number (WhatsApp + call)
   - WhatsApp default message
   - Instagram URL

2. **Replace business identity** — search and update across:
   - `index.html` — title, meta description, canonical URL, address, phone, schemas
   - `src/components/Footer.tsx` — business name, email, address, copyright
   - `src/components/Seo.tsx` — `SITE` constant if your domain changes
   - `src/components/StickyTopBar.tsx` — top bar phone/message
   - `src/components/Navbar.tsx` — logo text

3. **Connect your own backend** — the project uses Lovable Cloud (Supabase). You’ll need to:
   - Enable Lovable Cloud
   - Create a `bookings` table (or run the existing migrations)
   - Set up `user_roles` if you plan to use the admin dashboard
   - Configure Google auth if you want admin login via OAuth

4. **Update analytics & payments** — replace IDs in:
   - `index.html` — Google Analytics measurement ID (`G-...`)
   - Razorpay integration in booking/payment flows

5. **Publish** — click the **Publish** button to make it live, then connect a custom domain from Project Settings → Domains.

## Key files

| Purpose | File |
| --- | --- |
| All contact info | `src/lib/contact.ts` |
| Site metadata / SEO | `index.html`, `src/components/Seo.tsx` |
| Footer | `src/components/Footer.tsx` |
| Header / nav | `src/components/Navbar.tsx`, `src/components/StickyTopBar.tsx` |
| Hero section | `src/components/HeroSection.tsx` |
| Booking form | `src/components/BookingForm.tsx` |
| Services data | `src/data/havans.ts`, `src/data/anushthans.ts` |
| Blog posts | `src/data/blogPosts.ts`, `src/content/blog/` |
| Admin pages | `src/pages/AdminLoginPage.tsx`, `src/pages/AdminDashboardPage.tsx` |

## Need help?

Ask in chat: *“Update my phone number to X”*, *“Change the business name to Y”*, or *“Publish this site”* and the assistant will make the edits.
