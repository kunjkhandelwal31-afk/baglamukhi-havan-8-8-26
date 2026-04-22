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

      {/* FAQ Section - SEO with Accordion */}
      <section className="py-14" style={{ background: '#6B0000' }}>
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: '#FFD700' }}>
            अक्सर पूछे जाने वाले प्रश्न — Baglamukhi Havan FAQ
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "बगलामुखी हवन क्या है? (What is Baglamukhi Havan?)",
                a: "बगलामुखी हवन दस महाविद्याओं में आठवीं शक्ति माँ बगलामुखी की उपासना का सिद्ध वैदिक अनुष्ठान है। इसमें माँ बगलामुखी के बीज मंत्र का जाप एवं दशांश हवन किया जाता है — यह शत्रु-स्तंभन, कोर्ट केस विजय, तांत्रिक बाधा निवारण और जीवन की समस्याओं के समाधान के लिए प्रसिद्ध है।",
              },
              {
                q: "Baglamukhi Havan कैसे बुक करें? (How to book Havan?)",
                a: "आप हमारी वेबसाइट पर ऑनलाइन बुकिंग फ़ॉर्म भरकर या +91 70000 54787 पर कॉल / WhatsApp करके हवन बुक कर सकते हैं। भारत एवं विश्व के किसी भी स्थान से booking उपलब्ध है। 24 घंटे में हमारी टीम संपर्क करेगी।",
              },
              {
                q: "लाल मिर्च हवन किसके लिए होता है? (Who needs Lal Mirch Havan?)",
                a: "Lal Mirch Havan विशेष रूप से तांत्रिक बाधा, काला जादू, नज़र दोष, ऊपरी हवा और शत्रुओं के षड्यंत्र से पीड़ित व्यक्तियों के लिए किया जाता है। यह अत्यंत उग्र एवं शीघ्र फलदायी माना जाता है।",
              },
              {
                q: "क्या हवन ऑनलाइन करवा सकते हैं? (Is online havan possible?)",
                a: "हाँ, ऑनलाइन हवन बुकिंग की पूर्ण सुविधा उपलब्ध है। हवन नलखेड़ा (Nalkheda, Agar Malwa, Madhya Pradesh) के सिद्ध बगलामुखी मंदिर में अनुभवी पंडितों द्वारा सम्पन्न होता है और आपको live video, photo proof एवं प्रसाद/यंत्र भेजा जाता है।",
              },
              {
                q: "बगलामुखी अनुष्ठान और हवन में क्या अंतर है?",
                a: "बगलामुखी हवन एक छोटी अवधि की पूजा है (1-3 घंटे), जबकि अनुष्ठान में 36,000 से 5,00,000 तक मंत्रों का जाप एवं दशांश हवन शामिल है। अनुष्ठान अधिक शक्तिशाली एवं स्थायी फल प्रदान करता है — जटिल समस्याओं जैसे लम्बे court case, गंभीर शत्रु बाधा या व्यापार में बड़ी हानि के लिए अनुष्ठान विशेष प्रभावी है।",
              },
              {
                q: "Baglamukhi Havan की cost कितनी है?",
                a: "सामान्य बगलामुखी हवन ₹5,100 से प्रारंभ होता है। लाल मिर्च हवन ₹11,000 से, 36,000 मंत्र अनुष्ठान ₹31,000, सवा लाख अनुष्ठान ₹61,000 और पंचलक्षी महा-अनुष्ठान ₹1,51,000 में उपलब्ध है। सभी pricing पारदर्शी है — कोई छुपा शुल्क नहीं।",
              },
              {
                q: "हवन के बाद क्या मिलता है?",
                a: "हवन / अनुष्ठान के बाद सम्पूर्ण विधि का video और photo proof, सिद्ध प्रसाद, माँ बगलामुखी का अभिमंत्रित यंत्र और ब्राह्मणों का आशीर्वाद — सब कुछ कूरियर द्वारा आपके घर पहुँचाया जाता है।",
              },
              {
                q: "Best pandit for Baglamukhi Havan कहाँ मिलेंगे?",
                a: "नलखेड़ा (जिला आगर मालवा, मध्यप्रदेश) के सिद्ध बगलामुखी मंदिर के विद्वान एवं अनुभवी पंडित हमारी सेवा में हैं। 247+ संतुष्ट साधकों ने 4.9/5 की rating दी है।",
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

      {/* Long-form SEO content — 1200+ words, semantic keyword clusters */}
      <section className="py-14" style={{ background: '#5A0000' }}>
        <div className="container mx-auto px-4 max-w-3xl text-white/85 leading-relaxed text-sm md:text-base">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#FFD700' }}>
            Baglamukhi Havan — माँ बगलामुखी हवन की सम्पूर्ण जानकारी
          </h2>
          <p className="mb-4">
            <strong style={{ color: '#FFD700' }}>माँ बगलामुखी</strong> दस महाविद्याओं में आठवीं शक्ति हैं।
            इन्हें "स्तंभन की देवी" कहा जाता है — ये शत्रुओं की वाणी, बुद्धि एवं षड्यंत्रों को स्तंभित
            करने वाली परम शक्ति हैं। <strong>Baglamukhi Havan</strong> इनकी उपासना का सबसे प्रभावी माध्यम है,
            जो वैदिक एवं तांत्रिक दोनों परम्पराओं में सिद्ध माना गया है। यह अनुष्ठान विशेषकर शत्रु नाश,
            मुकदमे में विजय (court case victory), तांत्रिक बाधा निवारण (tantra nivaran), नज़र दोष (nazar dosh)
            एवं जीवन की विभिन्न समस्याओं के समाधान हेतु किया जाता है।
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3" style={{ color: '#FFD700' }}>
            बगलामुखी हवन का महत्व — Spiritual Significance
          </h3>
          <p className="mb-4">
            शास्त्रों के अनुसार माँ बगलामुखी की आराधना से साधक को "वाक्-सिद्धि" एवं "स्तंभन-शक्ति" की
            प्राप्ति होती है। पीताम्बरा देवी के रूप में इनकी पूजा पीले वस्त्र, पीले पुष्प, हल्दी एवं
            पीली सरसों से की जाती है। हवन में विशेष मंत्रों की आहुतियाँ दी जाती हैं जो साधक के चारों ओर
            एक अदृश्य रक्षा-कवच (spiritual protection shield) बनाती हैं। यह ऊर्जा शत्रुओं को निष्क्रिय
            करती है और साधक को मानसिक शांति, आत्मविश्वास एवं सफलता प्रदान करती है।
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#FFD700' }}>
            Benefits of Baglamukhi Havan — हवन के विस्तृत लाभ
          </h2>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>शत्रु नाश एवं स्तंभन (Enemy Destruction)</strong> — गुप्त एवं प्रत्यक्ष शत्रुओं की बुद्धि, वाणी एवं षड्यंत्रों को स्तंभित करता है। प्रतिस्पर्धा, राजनीति एवं व्यापार में विरोधियों से सुरक्षा।</li>
            <li><strong>कोर्ट केस विजय (Court Case Victory)</strong> — मुकदमे, कानूनी विवाद एवं सम्पत्ति के झगड़ों में अनुकूल निर्णय हेतु court case havan अत्यंत प्रभावी है।</li>
            <li><strong>तांत्रिक बाधा निवारण (Tantra Nivaran)</strong> — काला जादू, टोना-टोटका, भूत-प्रेत बाधा एवं ऊपरी हवा के प्रभाव से मुक्ति। Lal Mirch Havan विशेष रूप से इसी उद्देश्य हेतु किया जाता है।</li>
            <li><strong>नज़र दोष निवारण (Nazar Dosh Nivaran)</strong> — बच्चों, व्यापार, सम्पत्ति एवं परिवार पर लगी बुरी नज़र का तत्काल निवारण।</li>
            <li><strong>विजय प्राप्ति (Success & Victory)</strong> — चुनाव, प्रतियोगी परीक्षा, साक्षात्कार, खेल प्रतियोगिता एवं व्यापार में सफलता।</li>
            <li><strong>धन एवं समृद्धि (Wealth & Prosperity)</strong> — आर्थिक बाधाओं का निवारण, ऋण मुक्ति एवं business growth havan से व्यापार में वृद्धि।</li>
            <li><strong>ग्रह दोष शांति</strong> — शनि, राहु, केतु एवं अन्य ग्रहों के बाधक प्रभाव का निवारण।</li>
            <li><strong>मानसिक शांति एवं आत्मविश्वास</strong> — भय, चिंता, तनाव, अनिद्रा एवं नकारात्मक विचारों से मुक्ति।</li>
            <li><strong>विवाह बाधा निवारण</strong> — विवाह में आ रही अड़चनें, मंगल दोष एवं वैवाहिक कलह का समाधान।</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#FFD700' }}>
            Types of Havan — हवन सेवाओं के प्रकार
          </h2>
          <p className="mb-3">
            हम विभिन्न प्रकार की <strong>baglamukhi puja</strong> एवं हवन सेवाएं प्रदान करते हैं — प्रत्येक
            साधना का उद्देश्य एवं विधि भिन्न है:
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li><Link to="/baglamukhi-havan" className="underline" style={{ color: '#FFD700' }}>बगलामुखी हवन</Link> — शत्रु स्तंभन, विजय प्राप्ति एवं सुरक्षा</li>
            <li><Link to="/lal-mirch-havan" className="underline" style={{ color: '#FFD700' }}>लाल मिर्च हवन (Lal Mirch Havan)</Link> — tantra nivaran, काला जादू निवारण एवं उग्र शत्रु नाश</li>
            <li><Link to="/baglamukhi-anushthan" className="underline" style={{ color: '#FFD700' }}>बगलामुखी अनुष्ठान</Link> — 36,000 / सवा लाख / पंचलक्षी मंत्र जाप सहित महा-साधना</li>
            <li>शत्रु नाश हवन (Shatru Nash Havan) — विशेष शत्रु-विनाशक अनुष्ठान</li>
            <li>विजय प्राप्ति हवन (Vijay Prapti Havan) — प्रतियोगिता, चुनाव एवं व्यापार में सफलता</li>
            <li>धन प्राप्ति हवन — आर्थिक समृद्धि एवं business growth</li>
            <li>नवग्रह शांति हवन — ग्रह दोष निवारण</li>
            <li>वास्तु शांति एवं गृह प्रवेश हवन</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#FFD700' }}>
            Who Should Perform Baglamukhi Havan — किसे करवाना चाहिए
          </h2>
          <p className="mb-4">
            जिन व्यक्तियों को जीवन में निम्नलिखित समस्याओं का सामना करना पड़ रहा है, उन्हें
            <strong> baglamukhi puja</strong> एवं हवन अवश्य करवाना चाहिए:
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li>लंबे समय से चल रहे <strong>court case</strong> में बार-बार पराजय</li>
            <li>Business में अकारण हानि, षड्यंत्र या प्रतिस्पर्धियों का भारी दबाव</li>
            <li>गुप्त शत्रुओं का भय — ऑफिस, पड़ोस या परिवार में</li>
            <li>तांत्रिक बाधा, काला जादू, टोना-टोटका का अनुभव</li>
            <li>बार-बार बीमारी, अकारण भय, बुरे सपने या अनिद्रा</li>
            <li>प्रतियोगी परीक्षा, नौकरी या चुनाव में सफलता की कामना</li>
            <li>विवाह में बाधा, वैवाहिक कलह या पारिवारिक अशांति</li>
            <li>ग्रह दोष — विशेषकर शनि, राहु, केतु का बाधक प्रभाव</li>
          </ul>
          <p className="mb-4">
            यह हवन पुरुष, स्त्री, बालक एवं संपूर्ण परिवार के निमित्त सम्पन्न कराया जा सकता है।
            NRI / overseas साधक भी <Link to="/havan-booking" className="underline" style={{ color: '#FFD700' }}>online booking</Link> द्वारा सेवा प्राप्त कर सकते हैं।
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#FFD700' }}>
            Havan Process — हवन की विस्तृत विधि
          </h2>
          <p className="mb-3">
            प्रत्येक <strong>baglamukhi havan</strong> पूर्ण शास्त्रोक्त विधि-विधान से सम्पन्न होता है:
          </p>
          <ol className="list-decimal pl-6 space-y-1 mb-4">
            <li><strong>संकल्प</strong> — साधक के नाम, गोत्र एवं कामना के अनुसार संकल्प</li>
            <li><strong>गणपति-कलश पूजन</strong> — विघ्न-निवारण हेतु गणेश जी एवं कलश स्थापना</li>
            <li><strong>नवग्रह एवं षोडश मातृका पूजन</strong> — ग्रह शांति एवं दिक्पालन</li>
            <li><strong>माँ बगलामुखी यंत्र स्थापन एवं आवाहन</strong> — सिद्ध यंत्र पर माँ का आह्वान</li>
            <li><strong>बीज मंत्र जाप</strong> — निर्धारित संख्या में अखंड मंत्र जाप</li>
            <li><strong>दशांश हवन</strong> — पीली सरसों, हल्दी, गुग्गुल एवं विशेष तांत्रिक सामग्री से आहुतियाँ</li>
            <li><strong>तर्पण एवं मार्जन</strong> — शुद्धि एवं ऊर्जा संचार</li>
            <li><strong>पूर्णाहुति एवं ब्राह्मण भोज</strong> — अनुष्ठान सम्पूर्ण</li>
            <li><strong>प्रसाद / यंत्र</strong> — सिद्ध प्रसाद एवं यंत्र साधक को कूरियर द्वारा</li>
          </ol>
          <p className="mb-4">
            सम्पूर्ण हवन का <strong>live video</strong> एवं <strong>photo documentation</strong> आपको भेजा जाता है
            ताकि आप विश्वासपूर्वक अनुष्ठान देख सकें।
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#FFD700' }}>
            Why Choose Our Service — हमारी सेवा क्यों चुनें
          </h2>
          <p className="mb-3">
            हम <strong>मां बगलामुखी मंदिर, नलखेड़ा</strong> (जिला आगर मालवा, मध्यप्रदेश) — माँ बगलामुखी के
            प्रसिद्ध सिद्ध स्थान से सेवा प्रदान करते हैं। हमारी विशेषताएँ:
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li>अनुभवी एवं विद्वान <strong>baglamukhi pandit</strong> — 15+ वर्षों का अनुभव</li>
            <li>पूर्ण शास्त्रोक्त विधि — कोई shortcut नहीं, कोई अधूरा कर्मकांड नहीं</li>
            <li><strong>India + worldwide service</strong> — भारत एवं विश्व के किसी भी स्थान से बुकिंग</li>
            <li>पारदर्शी pricing — ₹5,100 से प्रारंभ, कोई छुपा शुल्क नहीं</li>
            <li>सम्पूर्ण हवन का video / photo proof</li>
            <li>247+ संतुष्ट साधक — 4.9/5 की rating</li>
            <li>50% advance पर booking confirm, शेष राशि हवन दिवस पर</li>
            <li>सिद्ध प्रसाद एवं अभिमंत्रित यंत्र कूरियर द्वारा</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#FFD700' }}>
            Book Baglamukhi Havan — अभी बुकिंग करें
          </h2>
          <p className="mb-4">
            <strong>हम भारत एवं विश्वभर में बगलामुखी हवन, पूजा एवं अनुष्ठान सेवा प्रदान करते हैं।</strong>{" "}
            बुकिंग के लिए <Link to="/havan-booking" className="underline" style={{ color: '#FFD700' }}>online booking page</Link> पर
            जाएँ या <strong>+91 70000 54787</strong> पर कॉल / WhatsApp करें। हमारी टीम 24 घंटे के भीतर आपसे
            संपर्क करेगी। अधिक जानकारी एवं आध्यात्मिक मार्गदर्शन के लिए हमारा{" "}
            <Link to="/blog" className="underline" style={{ color: '#FFD700' }}>spiritual blog</Link> भी पढ़ें।
          </p>
          <p className="mb-4 text-white/70 text-xs">
            सेवा क्षेत्र: Nalkheda, Agar Malwa, Madhya Pradesh, India — Delhi, Mumbai, Bangalore, Hyderabad, Kolkata, Chennai,
            Pune, Jaipur, Lucknow, Ahmedabad, Bhopal, Indore, USA, UK, Canada, Australia, Dubai, Singapore एवं सम्पूर्ण विश्व।
          </p>
        </div>
      </section>
    </main>
  );
};

export default Index;
