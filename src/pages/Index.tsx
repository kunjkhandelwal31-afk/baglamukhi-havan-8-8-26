import HeroSection from "@/components/HeroSection";
import HavanCard from "@/components/HavanCard";
import PanditSection from "@/components/PanditSection";
import CallSection from "@/components/CallSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import MandirLocationSection from "@/components/MandirLocationSection";
import BookingForm from "@/components/BookingForm";
import { havans } from "@/data/havans";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";

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

// Show only these 4 havans on home page in this order
const homeHavanIds = ["lal-mirch", "shanti", "vijay-prapti", "dhan-prapti"];
const homeHavans = homeHavanIds
  .map((id) => havans.find((h) => h.id === id))
  .filter(Boolean) as typeof havans;

const Index = () => {
  return (
    <main className="pb-16">
      <HeroSection />

      {/* Top Havans */}
      <section id="hawan-section" className="py-20 yantra-bg" style={{ background: '#8B0000' }}>
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
            {homeHavans.map((h, i) => (
              <div key={h.id} className="relative">
                {i === 0 && (
                  <span className="absolute -top-3 left-4 z-10 px-3 py-1 rounded-full text-xs font-bold animate-pulse"
                        style={{ background: '#FFD700', color: '#8B0000' }}>
                    🔥 सबसे लोकप्रिय
                  </span>
                )}
                <HavanCard havan={h} />
              </div>
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
      <section id="anushthan-section" className="py-20 yantra-bg" style={{ background: '#6B0000' }}>
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
                className="rounded-xl p-6 hover:shadow-golden transition-all group"
                style={{ background: '#F57C00', border: '1px solid rgba(255,215,0,0.4)', boxShadow: '0 4px 20px rgba(0,0,0,0.25)' }}
              >
                <div className="text-4xl mb-4">{a.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-golden-outline" style={{ color: '#FFD700' }}>{a.title}</h3>
                <p className="text-white text-sm mb-4 leading-relaxed">{a.description}</p>
                <div className="flex items-center justify-between text-sm mb-4">
                  <span className="text-white/90">⏱️ {a.duration}</span>
                  <span className="font-bold text-golden-outline" style={{ color: '#FFD700' }}>{a.price}</span>
                </div>
                <Link
                  to="/booking"
                  className="btn-shimmer w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all hover:scale-105"
                >
                  <BookOpen className="h-4 w-4" /> अनुष्ठान बुक करें
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PanditSection />
      <CallSection />
      <MandirLocationSection />

      {/* Booking CTA */}
      <section className="py-20 yantra-bg" style={{ background: '#6B0000' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#FFD700' }}>
                अभी बुकिंग करें
              </h2>
              <p className="text-white/80 mb-6 leading-relaxed">
                माँ बगलामुखी की कृपा से अपने जीवन की हर समस्या का समाधान पाएं।
                फ़ॉर्म भरें, हम 24 घंटे में आपसे संपर्क करेंगे।
              </p>
              <div className="p-4 rounded-lg text-sm font-medium" style={{ background: '#FF8C00', color: '#FFD700' }}>
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
