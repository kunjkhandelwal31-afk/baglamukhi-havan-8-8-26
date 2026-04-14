

## Plan: Update Header with Video Background, Buttons & Add Instagram Floating Button

### What changes

**1. Copy uploaded video to project assets**
- Copy `user-uploads://...mp4` to `src/assets/hero-video.mp4`

**2. Update `src/components/HeroSection.tsx`**
- Replace the `<img>` background with a `<video>` element: `autoPlay`, `loop`, `muted`, `playsInline`, `object-cover`
- Update the dark overlay from current gradient to `bg-black/35` (35% dark overlay)
- Add stronger `text-shadow: 2px 2px 8px rgba(0,0,0,0.8)` on heading and paragraph text
- Update Button 1 text to "अभी हवन बुक करें" with `btn-shimmer` class (existing glow animation)
- Update Button 2 text to "हवन के प्रकार" with transparent/outline golden style (already similar, just update label)

**3. Update `src/components/WhatsAppButton.tsx`**
- Add an Instagram button below WhatsApp button, same circular style (`w-14 h-14 rounded-full`)
- Instagram gradient background (`linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)`)
- Use `Instagram` icon from `lucide-react`
- Link to Instagram profile (will use a placeholder URL that can be updated)
- Add `shadow-lg` for depth, same hover effects as other buttons

### Files modified
- `src/components/HeroSection.tsx` — video background + button text updates
- `src/components/WhatsAppButton.tsx` — add Instagram button

### No changes to
- Layout structure, color theme, navbar, footer, or other sections

