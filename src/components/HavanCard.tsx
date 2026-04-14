import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import type { Havan } from "@/data/havans";

const HavanCard = ({ havan }: { havan: Havan }) => {
  return (
    <div
      className="rounded-xl overflow-hidden hover:shadow-golden transition-all duration-300 group flex flex-col"
      style={{ background: '#FF8C00', border: '1px solid rgba(255,215,0,0.4)', boxShadow: '0 4px 20px rgba(0,0,0,0.25)' }}
    >
      <Link to={`/havan/${havan.id}`} className="relative h-48 overflow-hidden block">
        <img
          src={havan.image}
          alt={havan.name}
          loading="lazy"
          width={512}
          height={512}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </Link>

      <div className="p-5 flex flex-col flex-1">
        <Link to={`/havan/${havan.id}`}>
          <h3 className="text-lg font-bold mb-2 transition-colors" style={{ color: '#FFD700' }}>
            {havan.name}
          </h3>
        </Link>
        <p className="text-sm text-white mb-4 leading-relaxed flex-1">
          {havan.description}
        </p>

        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {havan.benefits.slice(0, 3).map((b) => (
              <span
                key={b}
                className="text-xs px-2.5 py-1 rounded-full font-medium"
                style={{ background: 'rgba(139,0,0,0.5)', color: '#FFD700' }}
              >
                {b}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 text-sm text-white/80">
            <Clock className="h-4 w-4" />
            <span>{havan.duration}</span>
          </div>

          <div className="flex items-center justify-between pt-3 gap-2" style={{ borderTop: '1px solid rgba(255,215,0,0.25)' }}>
            <Link
              to={`/havan/${havan.id}`}
              className="text-sm font-medium hover:underline inline-flex items-center gap-1"
              style={{ color: '#FFD700' }}
            >
              विस्तार से देखें <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              to={`/booking?havan=${havan.id}`}
              className="btn-shimmer px-4 py-2 rounded-lg text-sm font-bold inline-flex items-center gap-1.5 shadow-golden hover:shadow-lg hover:scale-105 transition-all"
            >
              👉 अभी बुक करें
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HavanCard;
