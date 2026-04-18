import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { Havan } from "@/data/havans";

const HavanCard = ({ havan }: { havan: Havan }) => {
  return (
    <div
      className="rounded-xl overflow-hidden hover:shadow-golden transition-all duration-300 group flex flex-col"
      style={{ background: '#FF8C00', border: '1px solid rgba(255,215,0,0.4)', boxShadow: '0 4px 20px rgba(0,0,0,0.25)' }}
    >
      <Link
        to={`/havan/${havan.id}`}
        className="w-full bg-black/20 flex items-center justify-center block"
        style={{ aspectRatio: '4/3' }}
      >
        <img
          src={havan.image}
          alt={`${havan.name} - baglamukhi hawan pandit, online hawan booking service, हवन पूजा पंडित बुकिंग मध्य प्रदेश`}
          loading="lazy"
          className="w-full h-full object-contain"
        />
      </Link>

      <div className="p-5 flex flex-col flex-1">
        <Link to={`/havan/${havan.id}`}>
          <h3 className="text-lg font-bold mb-1 transition-colors text-golden-outline" style={{ color: '#FFD700' }}>
            {havan.name}
          </h3>
        </Link>
        <div className="mb-3 text-lg md:text-xl font-extrabold tracking-wide text-golden-outline" style={{ color: '#FFD700' }}>
          {havan.price}
        </div>
        <p className="text-sm text-white mb-4 leading-relaxed flex-1">
          {havan.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
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

        <div className="space-y-2 mt-auto">
          <Link
            to={`/havan/${havan.id}`}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all hover:scale-105"
            style={{ background: 'rgba(139,0,0,0.55)', color: '#FFD700', border: '1px solid rgba(255,215,0,0.4)' }}
          >
            विस्तार से देखें <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to={`/booking?havan=${havan.id}`}
            className="btn-shimmer w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-bold text-sm transition-all hover:scale-105"
          >
            👉 अभी हवन बुक करें
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HavanCard;
