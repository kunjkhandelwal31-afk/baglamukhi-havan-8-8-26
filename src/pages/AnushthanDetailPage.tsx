import React from "react";
import { Link, useParams } from "react-router-dom";
import { BookOpen, ArrowRight, CheckCircle, ChevronLeft } from "lucide-react";
import { anushthans } from "@/data/anushthans";
import NotFound from "./NotFound";

const AnushthanDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const a = anushthans.find((x) => x.id === id);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!a) return <NotFound />;

  return (
    <main className="py-10 pb-24 yantra-bg" style={{ background: '#8B0000' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/anushthan"
            className="inline-flex items-center gap-1 mb-4 text-sm font-semibold hover:underline"
            style={{ color: '#FFD700' }}
          >
            <ChevronLeft className="h-4 w-4" /> सभी अनुष्ठान
          </Link>

          <article
            className="rounded-xl overflow-hidden"
            style={{ background: '#F57C00', border: '1px solid rgba(255,215,0,0.4)', boxShadow: '0 4px 20px rgba(0,0,0,0.25)' }}
          >
            <div className="relative w-full aspect-[16/9] overflow-hidden">
              <img
                src={a.image}
                alt={`${a.title} - baglamukhi anushthan, mantra jaap, online booking`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <h1 className="text-xl md:text-2xl font-bold text-golden-outline" style={{ color: '#FFD700' }}>
                  {a.title}
                </h1>
                <span
                  className="text-sm md:text-base font-semibold px-4 py-1.5 rounded-lg text-golden-outline tracking-wide"
                  style={{ background: 'rgba(139,0,0,0.55)', color: '#FFD700', border: '1px solid rgba(255,215,0,0.4)' }}
                >
                  संपर्क करें विवरण हेतु
                </span>
              </div>

              <p className="text-white text-sm md:text-base leading-relaxed mb-5">{a.intro}</p>

              <div className="mb-4">
                <h2 className="font-bold mb-1" style={{ color: '#FFD700' }}>विधि:</h2>
                <p className="text-white/90 text-sm md:text-base leading-relaxed">{a.vidhi}</p>
              </div>

              <div className="mb-5">
                <h2 className="font-bold mb-1" style={{ color: '#FFD700' }}>विशेष प्रक्रिया:</h2>
                <p className="text-white/90 text-sm md:text-base leading-relaxed">{a.special}</p>
              </div>

              <div className="mb-6">
                <h2 className="font-bold mb-2" style={{ color: '#FFD700' }}>लाभ:</h2>
                <ul className="space-y-2">
                  {a.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-white text-sm md:text-base">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: '#FFD700' }} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/booking"
                  className="btn-shimmer flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-bold text-sm md:text-base transition-all hover:scale-105"
                >
                  <BookOpen className="h-4 w-4" /> अभी अनुष्ठान बुक करें
                </Link>
                <Link
                  to="/contact"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold text-sm md:text-base transition-all hover:scale-105"
                  style={{ background: 'rgba(139,0,0,0.55)', color: '#FFD700', border: '1px solid rgba(255,215,0,0.4)' }}
                >
                  संपर्क करें <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
};

export default AnushthanDetailPage;
