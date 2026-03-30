import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import type { Havan } from "@/data/havans";

const HavanCard = ({ havan }: { havan: Havan }) => {
  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-golden transition-all duration-300 group flex flex-col">
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
          <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
            {havan.name}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">
          {havan.description}
        </p>

        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {havan.benefits.slice(0, 3).map((b) => (
              <span
                key={b}
                className="text-xs bg-primary/15 text-accent-foreground px-2.5 py-1 rounded-full font-medium"
              >
                {b}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{havan.duration}</span>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-border gap-2">
            <Link
              to={`/havan/${havan.id}`}
              className="text-sm text-accent font-medium hover:underline inline-flex items-center gap-1"
            >
              विस्तार से देखें <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              to={`/booking?havan=${havan.id}`}
              className="gradient-golden text-primary-foreground px-4 py-2 rounded-lg text-sm font-bold inline-flex items-center gap-1.5 shadow-golden hover:shadow-lg transition-all"
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
