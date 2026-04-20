import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

const MANTRA = "ॐ ह्लीं बगलामुखी सर्वदुष्टानां वाचं मुखं पदं स्तम्भय जिह्वां कीलय बुद्धिं विनाशय ह्लीं ॐ स्वाहा ॥";

const StickyTopBar = () => {
  return (
    <div
      className="relative w-full overflow-hidden border-b border-yellow-900/30"
      style={{ background: '#8B0000' }}
      aria-label="Baglamukhi Mantra & Booking CTA"
    >
      <div className="flex items-center gap-3 py-2">
        <div className="mantra-marquee whitespace-nowrap flex-1 overflow-hidden">
          <span
            className="mantra-track inline-block font-semibold text-sm md:text-base"
            style={{ color: '#FFD700' }}
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="mx-12">
                {MANTRA}
              </span>
            ))}
          </span>
        </div>
        <Link
          to="/booking"
          aria-label="Book Havan Now"
          className="shrink-0 mr-2 md:mr-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs md:text-sm font-bold whitespace-nowrap transition-transform hover:scale-105"
          style={{ background: '#FFD700', color: '#5A0000' }}
        >
          <BookOpen className="h-3.5 w-3.5 md:h-4 md:w-4" />
          Book Havan Now
        </Link>
      </div>
    </div>
  );
};

export default StickyTopBar;
