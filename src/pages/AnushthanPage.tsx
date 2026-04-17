import { Link } from "react-router-dom";
import { BookOpen, ArrowRight, CheckCircle } from "lucide-react";

interface Anushthan {
  id: string;
  emoji: string;
  title: string;
  price: string;
  intro: string;
  vidhi: string;
  special: string;
  benefits: string[];
}

const anushthanList: Anushthan[] = [
  {
    id: "36000",
    emoji: "🔴",
    title: "1. 36,000 मंत्र सिद्धि अनुष्ठान",
    price: "₹31,000",
    intro:
      "यह अनुष्ठान उन श्रद्धालुओं के लिए अत्यंत प्रभावशाली है जो अपने जीवन में आ रही बाधाओं को शीघ्र समाप्त करना चाहते हैं या किसी विशेष मनोकामना की पूर्ति चाहते हैं। यह साधना “त्वरित सिद्धि” प्रदान करने वाली मानी जाती है।",
    vidhi:
      "इस अनुष्ठान में 6 अनुभवी एवं विद्वान ब्राह्मणों द्वारा माँ बगलामुखी के बीज मंत्रों का लगभग 36,000 बार शुद्ध उच्चारण के साथ जाप किया जाता है। संपूर्ण प्रक्रिया पूर्ण शुद्धता, विधि-विधान और आस्था के साथ सम्पन्न होती है।",
    special:
      "मंत्र जाप पूर्ण होने के पश्चात विधिपूर्वक दशांश हवन किया जाता है, जिससे मंत्रों की शक्ति जागृत होकर सिद्ध हो जाती है।",
    benefits: [
      "कार्यों में आ रही बाधाएं दूर होती हैं",
      "शत्रु पक्ष कमजोर एवं शांत होता है",
      "मानसिक तनाव और भय समाप्त होता है",
      "मनोकामना पूर्ण होने की संभावना बढ़ती है",
      "जीवन में सकारात्मक ऊर्जा का संचार होता है",
    ],
  },
  {
    id: "savalakh",
    emoji: "🟠",
    title: "2. सवा लाख (1.25 लाख मंत्र) महाजाप अनुष्ठान",
    price: "₹61,000",
    intro:
      "यह अनुष्ठान शास्त्रों में अत्यंत प्रभावशाली और सिद्धि प्रदान करने वाला माना गया है। सवा लाख मंत्र जाप को आध्यात्मिक शक्ति जागरण का प्रमुख माध्यम माना जाता है, जो जीवन के बड़े संकटों को दूर करने में सहायक होता है।",
    vidhi:
      "इसमें 11 विद्वान पंडितों की टोली द्वारा लगभग 6 घंटे तक अखंड मंत्र जाप किया जाता है। प्रत्येक मंत्र का उच्चारण पूर्ण शुद्धता और नियमों के अनुसार किया जाता है।",
    special:
      "मंत्र जाप पूर्ण होने के बाद सभी पंडित मिलकर शास्त्रोक्त हवन करते हैं, जिससे अनुष्ठान की प्रभावशीलता कई गुना बढ़ जाती है।",
    benefits: [
      "शत्रुओं पर विजय प्राप्त होती है",
      "कोर्ट-कचहरी एवं कानूनी मामलों में सफलता मिलती है",
      "नकारात्मक शक्तियों एवं बाधाओं का नाश होता है",
      "जीवन में स्थिरता और सुरक्षा बढ़ती है",
      "आत्मविश्वास और निर्णय क्षमता में वृद्धि होती है",
    ],
  },
  {
    id: "panchlakshi",
    emoji: "🟡",
    title: "3. पंचलक्षी (5,00,000 मंत्र) महा-साधना अनुष्ठान",
    price: "₹1,51,000",
    intro:
      "यह माँ बगलामुखी की सबसे विशाल, दिव्य और शक्तिशाली साधना मानी जाती है। इसे ‘असंभव को संभव’ करने वाली महा-साधना कहा जाता है, जो अत्यंत जटिल समस्याओं के समाधान हेतु की जाती है।",
    vidhi:
      "इस अनुष्ठान में 21 अत्यंत सिद्ध एवं अनुभवी ब्राह्मणों द्वारा 5,00,000 मंत्रों का महा-जाप किया जाता है, जिससे अत्यधिक आध्यात्मिक ऊर्जा उत्पन्न होती है।",
    special:
      "लगभग 6 घंटे की गहन साधना के पश्चात एक विशाल महा-हवन किया जाता है, जो पूरे अनुष्ठान को पूर्णता और दिव्यता प्रदान करता है।",
    benefits: [
      "राजनीति एवं प्रतिस्पर्धा में विजय प्राप्ति",
      "व्यापार एवं करियर में असाधारण वृद्धि",
      "अत्यंत जटिल समस्याओं से मुक्ति",
      "जीवन में स्थायी सफलता और उन्नति",
      "नकारात्मक ऊर्जा का पूर्ण नाश",
    ],
  },
];

const AnushthanPage = () => {
  return (
    <main className="py-16 pb-24 yantra-bg" style={{ background: '#8B0000' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#FFD700' }}>
            🔱 अनुष्ठान के प्रकार
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            माँ बगलामुखी की विभिन्न दिव्य अनुष्ठान सेवाएं — गहन साधना, मंत्र जाप, हवन और तर्पण सहित।
            अनुभवी पंडित जी द्वारा पूर्ण विधि-विधान से संपन्न।
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {anushthanList.map((a) => (
            <article
              key={a.id}
              className="rounded-xl p-6 md:p-8"
              style={{ background: '#F57C00', border: '1px solid rgba(255,215,0,0.4)', boxShadow: '0 4px 20px rgba(0,0,0,0.25)' }}
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <h2 className="text-xl md:text-2xl font-bold text-golden-outline" style={{ color: '#FFD700' }}>
                  {a.emoji} {a.title}
                </h2>
                <span
                  className="text-lg md:text-xl font-bold px-4 py-1.5 rounded-lg text-golden-outline"
                  style={{ background: 'rgba(139,0,0,0.55)', color: '#FFD700', border: '1px solid rgba(255,215,0,0.4)' }}
                >
                  {a.price}
                </span>
              </div>

              <p className="text-white text-sm md:text-base leading-relaxed mb-5">{a.intro}</p>

              <div className="mb-4">
                <h3 className="font-bold mb-1" style={{ color: '#FFD700' }}>विधि:</h3>
                <p className="text-white/90 text-sm md:text-base leading-relaxed">{a.vidhi}</p>
              </div>

              <div className="mb-5">
                <h3 className="font-bold mb-1" style={{ color: '#FFD700' }}>विशेष प्रक्रिया:</h3>
                <p className="text-white/90 text-sm md:text-base leading-relaxed">{a.special}</p>
              </div>

              <div className="mb-6">
                <h3 className="font-bold mb-2" style={{ color: '#FFD700' }}>लाभ:</h3>
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
                  <BookOpen className="h-4 w-4" /> अभी हवन बुक करें
                </Link>
                <Link
                  to="/contact"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold text-sm md:text-base transition-all hover:scale-105"
                  style={{ background: 'rgba(139,0,0,0.55)', color: '#FFD700', border: '1px solid rgba(255,215,0,0.4)' }}
                >
                  संपर्क करें <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default AnushthanPage;
