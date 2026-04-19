import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/HeroSection";
import BackgroundAudio from "@/components/BackgroundAudio";
import HavanCard from "@/components/HavanCard";
import PanditSection from "@/components/PanditSection";
import CallSection from "@/components/CallSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import MandirLocationSection from "@/components/MandirLocationSection";
import BookingForm from "@/components/BookingForm";
import { havans } from "@/data/havans";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";
import anushthan36000 from "@/assets/anushthan-36000.jpg";
import anushthanSavalakh from "@/assets/anushthan-savalakh.jpg";
import anushthanPanchlakshi from "@/assets/anushthan-panchlakshi.jpg";

const anushthanTypes = [
  {
    id: "36000",
    title: "36,000 मंत्र सिद्धि अनुष्ठान",
    description: "6 अनुभवी ब्राह्मणों द्वारा माँ बगलामुखी के बीज मंत्रों का 36,000 बार जाप एवं दशांश हवन। त्वरित सिद्धि प्रदान करने वाली साधना।",
    duration: "1-2 दिन",
    price: "₹31,000",
    image: anushthan36000,
  },
  {
    id: "savalakh",
    title: "सवा लाख (1.25 लाख मंत्र) महाजाप अनुष्ठान",
    description: "11 विद्वान पंडितों द्वारा लगभग 6 घंटे का अखंड मंत्र जाप एवं शास्त्रोक्त हवन। बड़े संकटों के निवारण हेतु अत्यंत प्रभावी।",
    duration: "1 दिन",
    price: "₹61,000",
    image: anushthanSavalakh,
  },
  {
    id: "panchlakshi",
    title: "पंचलक्षी (5,00,000 मंत्र) महा-साधना अनुष्ठान",
    description: "21 सिद्ध ब्राह्मणों द्वारा 5,00,000 मंत्रों का महा-जाप एवं विशाल महा-हवन। ‘असंभव को संभव’ करने वाली महा-साधना।",
    duration: "1 दिन",
    price: "₹1,51,000",
    image: anushthanPanchlakshi,
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
      <Helmet>
        <title>Maa Baglamukhi Hawan Service | मां बगलामुखी हवन सेवा | Hawan Booking in Madhya Pradesh</title>
        <meta name="description" content="Book Maa Baglamukhi Hawan Service and Hawan Booking in Madhya Pradesh. हम मां बगलामुखी हवन, अनुष्ठान और पंडित सेवा प्रदान करते हैं। Trusted and quick booking." />
        <link rel="canonical" href="https://maa-baglamukhi-hawan-pujan.lovable.app/" />
      </Helmet>
      <HeroSection />
      <BackgroundAudio />

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
                className="rounded-xl overflow-hidden hover:shadow-golden transition-all group flex flex-col"
                style={{ background: '#F57C00', border: '1px solid rgba(255,215,0,0.4)', boxShadow: '0 4px 20px rgba(0,0,0,0.25)' }}
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={a.image}
                    alt={`${a.title} - baglamukhi anushthan, online booking`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2 text-golden-outline" style={{ color: '#FFD700' }}>{a.title}</h3>
                  <p className="text-white text-sm mb-4 leading-relaxed flex-1">{a.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-white/90 text-sm">⏱️ {a.duration}</span>
                    <span className="font-extrabold text-lg md:text-xl text-golden-outline" style={{ color: '#FFD700' }}>{a.price}</span>
                  </div>
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
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/anushthan"
              className="inline-flex items-center gap-2 font-semibold hover:underline"
              style={{ color: '#FFD700' }}
            >
              सभी अनुष्ठान देखें <ArrowRight className="h-4 w-4" />
            </Link>
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

      {/* FAQ Section - SEO */}
      <section className="py-14" style={{ background: '#6B0000' }}>
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: '#FFD700' }}>
            अक्सर पूछे जाने वाले प्रश्न (FAQ)
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "बगलामुखी हवन क्या है?",
                a: "बगलामुखी हवन माँ बगलामुखी की कृपा प्राप्त करने के लिए किया जाने वाला विशेष वैदिक अनुष्ठान है — शत्रु नाश, मुकदमे में विजय और जीवन की बाधाओं के निवारण के लिए।",
              },
              {
                q: "हवन पंडित कैसे बुक करें?",
                a: "आप हमारी वेबसाइट पर बुकिंग फ़ॉर्म भरकर या +91 70000 54787 पर कॉल/WhatsApp करके हवन बुक कर सकते हैं। 24 घंटे में हमारी टीम संपर्क करेगी।",
              },
              {
                q: "क्या ऑनलाइन हवन बुकिंग संभव है?",
                a: "हाँ, ऑनलाइन हवन बुकिंग की सुविधा उपलब्ध है। आप विश्व के किसी भी स्थान से माँ बगलामुखी पूजा सेवा एवं हवन बुक कर सकते हैं। हमारी सेवा ऑनलाइन एवं ऑफलाइन दोनों माध्यमों से उपलब्ध है।",
              },
            ].map((f) => (
              <div
                key={f.q}
                className="rounded-lg p-5"
                style={{ background: 'rgba(255,140,0,0.15)', border: '1px solid rgba(255,215,0,0.3)' }}
              >
                <h3 className="font-bold mb-2" style={{ color: '#FFD700' }}>{f.q}</h3>
                <p className="text-white/85 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-10" style={{ background: '#5A0000' }}>
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4" style={{ color: '#FFD700' }}>
            Maa Baglamukhi Hawan Service — Worldwide Booking
          </h2>
          <p className="text-white/80 text-sm md:text-base leading-relaxed">
            <strong style={{ color: '#FFD700' }}>आप विश्व के किसी भी स्थान से माँ बगलामुखी पूजा सेवा एवं हवन बुक कर सकते हैं।</strong> हमारी सेवा ऑनलाइन एवं ऑफलाइन दोनों माध्यमों से उपलब्ध है।
            अनुभवी पंडित जी द्वारा माँ बगलामुखी हवन, अनुष्ठान और विशेष पूजा — विश्वसनीय एवं त्वरित बुकिंग।
          </p>
          <p className="text-white/60 text-xs md:text-sm mt-4">
            ऑनलाइन हवन बुकिंग • बगलामुखी पूजा सेवा • हवन पंडित का नंबर • baglamukhi pandit near me • book hawan online • हवन सेवा मध्य प्रदेश
          </p>
        </div>
      </section>
    </main>
  );
};

export default Index;
