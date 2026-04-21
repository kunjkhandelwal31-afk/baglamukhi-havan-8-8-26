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
import anushthan36000 from "@/assets/anushthan-36000.webp";
import anushthanSavalakh from "@/assets/anushthan-savalakh.webp";
import anushthanPanchlakshi from "@/assets/anushthan-panchlakshi.webp";

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
        <title>Baglamukhi Havan Booking | Maa Baglamukhi Puja & Anushthan</title>
        <meta name="description" content="Book Baglamukhi Havan & Puja with experienced pandits. Lal Mirch Havan, Tantra Nivaran & Anushthan services available worldwide. Contact now." />
        <link rel="canonical" href="https://www.baglamukhihavananushthan.com/" />
      </Helmet>
      <HeroSection />

      {/* SEO H1 — sits below hero, semantic for Google */}
      <section className="py-8" style={{ background: '#5A0000' }}>
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h1 className="text-2xl md:text-4xl font-extrabold text-golden-shadow" style={{ color: '#FFD700' }}>
            Baglamukhi Havan & Anushthan Booking | Maa Baglamukhi Puja Services
          </h1>
          <p className="text-white/85 mt-3 text-sm md:text-base">
            अनुभवी पंडितों द्वारा <strong>baglamukhi havan</strong>, <strong>lal mirch havan</strong>, <strong>baglamukhi anushthan</strong> एवं
            tantra nivaran हवन — India एवं worldwide booking उपलब्ध।
          </p>
        </div>
      </section>

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

      {/* Long-form SEO content — 800+ words */}
      <section className="py-14" style={{ background: '#5A0000' }}>
        <div className="container mx-auto px-4 max-w-3xl text-white/85 leading-relaxed text-sm md:text-base">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#FFD700' }}>
            Baglamukhi Havan Benefits — बगलामुखी हवन के लाभ
          </h2>
          <p className="mb-4">
            <strong style={{ color: '#FFD700' }}>Baglamukhi Havan</strong> दस महाविद्याओं में आठवीं शक्ति माँ बगलामुखी
            की उपासना का सिद्ध रूप है। यह हवन शत्रु-स्तंभन, <strong>vijay prapti havan</strong>,{" "}
            <strong>court case havan</strong> एवं तंत्र-बाधा निवारण के लिए जाना जाता है। नियमित बगलामुखी पूजा
            एवं हवन से जीवन में सुरक्षा-कवच बनता है, गुप्त शत्रुओं के षड्यंत्र निष्फल होते हैं और साधक को
            माँ की विशेष कृपा प्राप्त होती है।
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#FFD700' }}>
            Types of Havan Services — हवन सेवाओं के प्रकार
          </h2>
          <p className="mb-3">
            हम विभिन्न प्रकार के हवन एवं अनुष्ठान सम्पन्न कराते हैं —
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li><Link to="/baglamukhi-havan" className="underline" style={{ color: '#FFD700' }}>बगलामुखी हवन</Link> — शत्रु नाश एवं vijay prapti</li>
            <li><Link to="/lal-mirch-havan" className="underline" style={{ color: '#FFD700' }}>Lal Mirch Havan</Link> — tantra nivaran एवं nazar dosh havan</li>
            <li><Link to="/baglamukhi-anushthan" className="underline" style={{ color: '#FFD700' }}>बगलामुखी अनुष्ठान</Link> — 36000, सवा लाख, पंचलक्षी</li>
            <li>Court Case Havan — कानूनी मामलों में विजय</li>
            <li>नवग्रह शांति हवन — ग्रह दोष निवारण</li>
            <li>वास्तु शांति एवं गृह प्रवेश हवन</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#FFD700' }}>
            What is Baglamukhi Havan — बगलामुखी हवन क्या है
          </h2>
          <p className="mb-4">
            बगलामुखी हवन माँ बगलामुखी के बीज मंत्र — <em>"ॐ ह्लीं बगलामुखी सर्वदुष्टानां वाचं मुखं पदं
            स्तम्भय जिह्वां कीलय बुद्धिं विनाशय ह्लीं ॐ स्वाहा"</em> — के निर्धारित संख्या में जाप एवं
            दशांश हवन से सम्पन्न होता है। यह वैदिक अनुष्ठान साधक के चारों ओर रक्षात्मक ऊर्जा-क्षेत्र
            बनाता है और शत्रुओं की बुद्धि एवं वाणी को स्तंभित कर देता है।
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#FFD700' }}>
            Who Should Perform This Havan — यह हवन किसे करवाना चाहिए
          </h2>
          <p className="mb-4">
            जिन्हें बार-बार court case में पराजय का सामना करना पड़ रहा है, business में अकारण हानि एवं
            षड्यंत्र हो रहे हैं, गुप्त शत्रुओं का भय है, या <strong>nazar dosh havan</strong> एवं तांत्रिक
            बाधा का अनुभव हो रहा है — उनके लिए <strong>baglamukhi puja</strong> एवं हवन विशेष फलदायी है।
            यह हवन पुरुष, स्त्री एवं संपूर्ण परिवार के निमित्त सम्पन्न कराया जा सकता है। प्रतियोगी परीक्षा,
            नौकरी, विवाह में अड़चन एवं स्वास्थ्य संबंधी समस्याओं में भी यह हवन अद्भुत फल देता है।
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#FFD700' }}>
            Process of Havan — हवन की विधि
          </h2>
          <ol className="list-decimal pl-6 space-y-1 mb-4">
            <li>साधक के नाम-गोत्र से संकल्प</li>
            <li>गणपति, कलश एवं नवग्रह स्थापन</li>
            <li>माँ बगलामुखी का यंत्र पूजन एवं आवाहन</li>
            <li>निर्धारित संख्या में बीज मंत्र का अखंड जाप</li>
            <li>दशांश हवन — पीली सरसों, हल्दी, गुग्गुल एवं विशेष शास्त्रोक्त सामग्री से</li>
            <li>पूर्णाहुति, ब्राह्मण भोज एवं प्रसाद वितरण</li>
            <li>साधक को हवन का video/photo proof एवं प्रसाद/यंत्र भेजा जाता है</li>
          </ol>

          <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#FFD700' }}>
            Why Choose Us — हमारी सेवा क्यों चुनें
          </h2>
          <p className="mb-3">
            हम मां बगलामुखी मंदिर, नलखेड़ा (जिला आगर मालवा, मध्यप्रदेश) के सिद्ध स्थान से सेवा प्रदान
            करते हैं। हमारी विशेषताएँ —
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li>अनुभवी एवं विद्वान <strong>baglamukhi pandit</strong></li>
            <li>पूर्ण शास्त्रोक्त विधि-विधान — कोई shortcut नहीं</li>
            <li>India + worldwide service — कहीं से भी online <strong>havan booking</strong></li>
            <li>पारदर्शी pricing — ₹5,100 से प्रारंभ, कोई छुपा शुल्क नहीं</li>
            <li>Video / photo proof of complete हवन</li>
            <li>247+ संतुष्ट साधकों की 4.9/5 रेटिंग</li>
            <li>50% advance पर booking, बाकी हवन दिवस पर</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#FFD700' }}>
            Book Baglamukhi Havan — अभी बुकिंग करें
          </h2>
          <p className="mb-4">
            <strong>हम भारत एवं विश्वभर में बगलामुखी हवन एवं पूजा सेवा प्रदान करते हैं।</strong> बुकिंग के
            लिए <Link to="/havan-booking" className="underline" style={{ color: '#FFD700' }}>online booking page</Link> पर
            जाएँ या +91 70000 54787 पर कॉल / WhatsApp करें। हमारी टीम 24 घंटे के भीतर आपसे संपर्क करेगी।
            अधिक जानकारी के लिए हमारा{" "}
            <Link to="/blog" className="underline" style={{ color: '#FFD700' }}>spiritual blog</Link> भी पढ़ें।
          </p>

          <p className="text-white/60 text-xs md:text-sm mt-6">
            Keywords: baglamukhi havan • baglamukhi havan booking • baglamukhi puja • baglamukhi anushthan •
            lal mirch havan • baglamukhi pandit • havan booking • tantra nivaran havan • court case havan •
            nazar dosh havan • vijay prapti havan • online havan booking • Nalkheda Agar Malwa Madhya Pradesh
          </p>
        </div>
      </section>
    </main>
  );
};

export default Index;
