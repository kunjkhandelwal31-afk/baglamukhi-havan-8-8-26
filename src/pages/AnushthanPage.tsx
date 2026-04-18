import { Link } from "react-router-dom";
import { BookOpen, ArrowRight } from "lucide-react";
import { anushthanList } from "@/data/anushthan";

const AnushthanPage = () => {
  return (
    <main className="py-16 pb-24 yantra-bg" style={{ background: '#8B0000' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#FFD700' }}>
            अनुष्ठान के प्रकार
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            माँ बगलामुखी की विभिन्न दिव्य अनुष्ठान सेवाएं — गहन साधना, मंत्र जाप, हवन और तर्पण सहित।
            अनुभवी पंडित जी द्वारा पूर्ण विधि-विधान से संपन्न।
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {anushthanList.map((a) => (
            <article
              key={a.id}
              className="rounded-xl overflow-hidden flex flex-col"
              style={{ background: '#F57C00', border: '1px solid rgba(255,215,0,0.4)', boxShadow: '0 4px 20px rgba(0,0,0,0.25)' }}
            >
              <div className="w-full bg-black/20 overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <img
                  src={a.image}
                  alt={`${a.title} - baglamukhi anushthan, mantra jaap, online booking`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'top center' }}
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h2 className="text-lg md:text-xl font-bold mb-2 text-golden-outline" style={{ color: '#FFD700' }}>
                  {a.title}
                </h2>
                <div className="mb-3 text-lg md:text-xl font-extrabold tracking-wide text-golden-outline" style={{ color: '#FFD700' }}>
                  {a.price}
                </div>
                <p className="text-white text-sm leading-relaxed flex-1 mb-4">{a.shortDescription}</p>

                <div className="space-y-2 mt-auto">
                  <Link
                    to={`/anushthan/${a.id}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all hover:scale-105"
                    style={{ background: 'rgba(139,0,0,0.55)', color: '#FFD700', border: '1px solid rgba(255,215,0,0.4)' }}
                  >
                    विस्तार से देखें <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/booking"
                    className="btn-shimmer w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all hover:scale-105"
                  >
                    <BookOpen className="h-4 w-4" /> अभी अनुष्ठान बुक करें
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default AnushthanPage;
