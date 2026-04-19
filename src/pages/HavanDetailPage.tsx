import React from "react";
import { useParams, Link } from "react-router-dom";
import { havans } from "@/data/havans";
import { Clock, CheckCircle, ArrowRight, Shield, Star, Users, ChevronLeft } from "lucide-react";
import NotFound from "./NotFound";
import ContactStrip from "@/components/ContactStrip";

const HavanDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const havan = havans.find((h) => h.id === id);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!havan) return <NotFound />;

  return (
    <main className="pb-16">
      {/* Hero Image - clean, no overlay */}
      <section className="w-full">
        <img
          src={havan.image}
          alt={havan.name}
          className="w-full h-auto max-h-[60vh] object-cover block"
        />
      </section>

      {/* Title & Price below image */}
      <section className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-6 md:py-8">
          <Link
            to="/havan-types"
            className="inline-flex items-center gap-1 text-primary mb-3 text-sm font-medium hover:underline"
          >
            <ChevronLeft className="h-4 w-4" /> सभी हवन
          </Link>
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <h1 className="text-2xl md:text-4xl font-extrabold text-foreground mb-2">
                {havan.icon} {havan.name}
              </h1>
              <p className="text-base md:text-lg text-muted-foreground">
                {havan.description}
              </p>
            </div>
            <span
              className="text-xl md:text-2xl font-extrabold px-4 py-2 rounded-lg tracking-wide whitespace-nowrap text-golden-outline"
              style={{ background: '#F57C00', color: '#FFD700', border: '1px solid rgba(255,215,0,0.4)', boxShadow: '0 4px 12px rgba(0,0,0,0.25)' }}
            >
              {havan.price}
            </span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Left content */}
          <div className="md:col-span-2 space-y-8">
            {/* Description */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                विस्तृत <span className="text-gradient-golden">जानकारी</span>
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-4">
                <p>{havan.longDescription || havan.description}</p>
                <p>
                  यह हवन शास्त्रोक्त विधि-विधान से अनुभवी पंडित जी द्वारा सम्पन्न कराया जाता है।
                  सम्पूर्ण सामग्री पंडित जी द्वारा उपलब्ध कराई जाती है। हवन के दौरान विशेष मंत्रों का जाप
                  किया जाता है जो माँ बगलामुखी की कृपा प्रदान करता है।
                </p>
              </div>
            </section>

            {/* Benefits */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                हवन के <span className="text-gradient-golden">लाभ</span>
              </h2>
              <ul className="space-y-3">
                {havan.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{b}</span>
                  </li>
                ))}
                {havan.extraBenefits?.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{b}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Vidhi */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                हवन <span className="text-gradient-golden">विधि</span>
              </h2>
              <ol className="space-y-3 list-decimal list-inside text-muted-foreground">
                {(havan.vidhi || [
                  "संकल्प एवं गणेश पूजन",
                  "नवग्रह पूजन एवं कलश स्थापना",
                  "माँ बगलामुखी का आवाहन एवं षोडशोपचार पूजन",
                  "हवन कुंड स्थापना एवं अग्नि प्रज्वलन",
                  "विशेष मंत्रों से आहुतियाँ",
                  "पूर्णाहुति एवं आरती",
                  "प्रसाद वितरण एवं आशीर्वाद",
                ]).map((step, i) => (
                  <li key={i} className="pl-2">{step}</li>
                ))}
              </ol>
            </section>

            {/* Duration & Samagri */}
            <section className="flex flex-wrap gap-6">
              <div className="bg-card border border-border rounded-xl p-5 flex items-center gap-3">
                <Clock className="h-6 w-6 text-accent" />
                <div>
                  <div className="text-sm text-muted-foreground">अवधि</div>
                  <div className="font-bold text-foreground">{havan.duration}</div>
                </div>
              </div>
              <div className="bg-card border border-border rounded-xl p-5 flex items-center gap-3">
                <Shield className="h-6 w-6 text-accent" />
                <div>
                  <div className="text-sm text-muted-foreground">सामग्री</div>
                  <div className="font-bold text-foreground">पंडित द्वारा उपलब्ध</div>
                </div>
              </div>
            </section>
          </div>

          {/* Right sidebar - Pricing & CTA */}
          <div className="space-y-6">
            <div className="bg-card border-2 border-primary/30 rounded-xl p-6 shadow-golden md:sticky md:top-24">
              <div className="text-center mb-4">
                <div className="text-sm text-muted-foreground mb-1">हवन शुल्क</div>
                <div className="text-3xl font-extrabold text-gradient-golden">{havan.price}</div>
                <div className="text-xs text-muted-foreground mt-1">सम्पूर्ण सामग्री सहित</div>
              </div>

              <div className="bg-accent/10 text-accent-foreground text-center text-sm font-semibold py-2 rounded-lg mb-4">
                ⭐ Best Value — पूरी विधि के साथ
              </div>

              <Link
                to={`/booking?havan=${havan.id}`}
                className="w-full gradient-golden text-primary-foreground py-3.5 rounded-lg font-bold text-lg shadow-golden hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                👉 अभी हवन बुक करें
                <ArrowRight className="h-5 w-5" />
              </Link>

              <p className="text-xs text-center text-muted-foreground mt-3">
                ⏰ सीमित स्लॉट • 50% अग्रिम भुगतान
              </p>

              <ContactStrip compact className="mt-4" />
            </div>

            {/* Trust */}
            <div className="bg-card border border-border rounded-xl p-5 space-y-4">
              <h3 className="font-bold text-foreground text-center">हम पर भरोसा करें</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Star className="h-5 w-5 text-accent" />
                  <span className="text-sm text-foreground">5000+ हवन सम्पन्न</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-accent" />
                  <span className="text-sm text-foreground">1000+ संतुष्ट भक्तगण</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-accent" />
                  <span className="text-sm text-foreground">100% शास्त्रोक्त विधि</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HavanDetailPage;
