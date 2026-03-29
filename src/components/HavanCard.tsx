import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import type { Havan } from "@/data/havans";

const HavanCard = ({ havan }: { havan: Havan }) => {
  return (
    <div className="bg-card rounded-xl border border-border p-6 hover:shadow-golden transition-all duration-300 group flex flex-col">
      <div className="text-4xl mb-3">{havan.icon}</div>
      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
        {havan.name}
      </h3>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">
        {havan.description}
      </p>

      <div className="space-y-3">
        <div className="flex flex-wrap gap-2">
          {havan.benefits.map((b) => (
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
          <span className="mx-1">•</span>
          <span>पूरी सामग्री सहित</span>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-border">
          <span className="text-xl font-bold text-gradient-golden">{havan.price}</span>
          <Link
            to={`/booking?havan=${havan.id}`}
            className="gradient-golden text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold inline-flex items-center gap-1.5 hover:shadow-golden transition-all"
          >
            अभी बुक करें
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HavanCard;
