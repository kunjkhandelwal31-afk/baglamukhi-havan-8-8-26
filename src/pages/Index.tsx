import HeroSection from "@/components/HeroSection";
import HavanCard from "@/components/HavanCard";
import PanditSection from "@/components/PanditSection";
import CallSection from "@/components/CallSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import MandirLocationSection from "@/components/MandirLocationSection";
import BookingForm from "@/components/BookingForm";
import { havans } from "@/data/havans";
import { products } from "@/data/products";
import { Link } from "react-router-dom";
import { ArrowRight, Star, ShoppingCart, BookOpen, Shield, Sparkles } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const anushthanTypes = [
  {
    icon: "🔱",
    title: "बगलामुखी अनुष्ठान",
    description: "शत्रु नाश, मुकदमे में विजय और सभी बाधाओं के निवारण के लिए 11,000 मंत्र जाप सहित पूर्ण अनुष्ठान।",
    duration: "3-7 दिन",
    price: "₹21,000 से",
  },
  {
    icon: "📿",
    title: "सवा लाख मंत्र जाप",
    description: "1,25,000 मंत्र जाप के साथ हवन और तर्पण — अत्यंत शक्तिशाली अनुष्ठान।",
    duration: "11 दिन",
    price: "₹51,000 से",
  },
  {
    icon: "🪔",
    title: "नवरात्रि विशेष अनुष्ठान",
    description: "नवरात्रि के 9 दिनों में विशेष विधि-विधान से माँ बगलामुखी का पूर्ण अनुष्ठान।",
    duration: "9 दिन",
    price: "₹31,000 से",
  },
];

const Index = () => {
  return (
    <main className="pb-16">
      <HeroSection />

      {/* Top Havans */}
      <section id="hawan-section" className="py-20 yantra-bg" style={{ background: 'linear-gradient(135deg, #8B0000, #6B0000)' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#FFD700' }}>
              🔥 हवन सेवाएं
            </h2>
            <p className="text-white/80 max-w-xl mx-auto">
              माँ बगलामुखी की कृपा से जीवन की हर समस्या का समाधान — अनुभवी पंडित जी द्वारा विधिवत हवन
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {havans.slice(0, 4).map((h) => (
              <HavanCard key={h.id} havan={h} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/havan-types"
              className="inline-flex items-center gap-2 font-semibold hover:underline"
              style={{ color: '#FFD700' }}
            >
              सभी हवन देखें <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Anushthan Section */}
      <section id="anushthan-section" className="py-20 yantra-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#FFD700' }}>
              📿 अनुष्ठान सेवाएं
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              गहन साधना और विशेष अनुष्ठान — माँ बगलामुखी की शक्ति से जीवन की हर कठिनाई का समाधान।
              पूर्ण विधि-विधान, मंत्र जाप, हवन और तर्पण सहित।
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {anushthanTypes.map((a) => (
              <div
                key={a.title}
                className="rounded-xl p-6 border border-border hover:shadow-golden transition-all group"
                style={{ background: '#8B0000', borderColor: 'rgba(255,215,0,0.2)', boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
              >
                <div className="text-4xl mb-4">{a.icon}</div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#FFD700' }}>{a.title}</h3>
                <p className="text-white/75 text-sm mb-4 leading-relaxed">{a.description}</p>
                <div className="flex items-center justify-between text-sm mb-4">
                  <span className="text-white/60">⏱️ {a.duration}</span>
                  <span className="font-bold" style={{ color: '#FFD700' }}>{a.price}</span>
                </div>
                <Link
                  to="/booking"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all hover:scale-105"
                  style={{ background: '#FFD700', color: '#1a1a1a' }}
                >
                  <BookOpen className="h-4 w-4" /> अनुष्ठान बुक करें
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products from Shop */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #6B0000, #8B0000)' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#FFD700' }}>
              🛕 दिव्य आध्यात्मिक उत्पाद
            </h2>
            <p className="text-white/70 max-w-xl mx-auto">
              पंडित जी द्वारा अभिमंत्रित सिद्ध सामग्री — सीधे घर पर मंगवाएं
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {products
              .filter((p) => ["tabiz", "kavach"].includes(p.id))
              .map((product) => (
                <div
                  key={product.id}
                  className="rounded-xl border overflow-hidden transition-all group"
                  style={{ background: '#8B0000', borderColor: 'rgba(255,215,0,0.2)', boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      width={512}
                      height={512}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {product.tag && (
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold"
                            style={{ background: '#8B0000', color: '#FFD700' }}>
                        {product.tag === "Best Seller" ? "⭐ बेस्ट सेलर" : product.tag === "Most Powerful" ? "🔥 सबसे शक्तिशाली" : "⏰ सीमित स्टॉक"}
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-lg mb-1" style={{ color: '#FFD700' }}>{product.name}</h3>
                    <p className="text-white/70 text-sm mb-3">{product.description}</p>
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                    <p className="font-bold text-xl mb-4" style={{ color: '#FFD700' }}>{product.priceRange}</p>
                    <Link
                      to="/shop"
                      className="inline-flex items-center gap-2 w-full justify-center px-4 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
                      style={{ background: '#FFD700', color: '#1a1a1a' }}
                    >
                      <ShoppingCart className="h-4 w-4" /> अभी खरीदें
                    </Link>
                  </div>
                </div>
              ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 font-semibold hover:underline"
              style={{ color: '#FFD700' }}
            >
              सभी उत्पाद देखें <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <PanditSection />
      <CallSection />
      <MandirLocationSection />

      {/* Booking CTA */}
      <section className="py-20 yantra-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#FFD700' }}>
                अभी बुकिंग करें
              </h2>
              <p className="text-white/70 mb-6 leading-relaxed">
                माँ बगलामुखी की कृपा से अपने जीवन की हर समस्या का समाधान पाएं।
                फ़ॉर्म भरें, हम 24 घंटे में आपसे संपर्क करेंगे।
              </p>
              <div className="p-4 rounded-lg text-sm font-medium" style={{ background: '#8B0000', color: '#FFD700' }}>
                ⏰ सीमित स्लॉट उपलब्ध — जल्दी बुक करें!
              </div>
            </div>
            <BookingForm />
          </div>
        </div>
      </section>

      <TestimonialsSection />
    </main>
  );
};

export default Index;
