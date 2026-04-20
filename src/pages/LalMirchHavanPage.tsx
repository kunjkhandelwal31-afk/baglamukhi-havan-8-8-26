import Seo from "@/components/Seo";
import SeoCta from "@/components/SeoCta";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

const LalMirchHavanPage = () => (
  <>
    <Seo
      title="Lal Mirch Havan | लाल मिर्च हवन — Tantra Nivaran & शत्रु बाधा निवारण"
      description="Lal Mirch Havan booking by experienced baglamukhi pandit. लाल मिर्च हवन से tantra nivaran, नज़र दोष, काला जादू एवं शत्रु बाधा का निवारण। Worldwide booking."
      path="/lal-mirch-havan"
      keywords="lal mirch havan, tantra nivaran havan, nazar dosh havan, baglamukhi havan, baglamukhi pandit, kala jadu nivaran"
    />
    <main className="py-14" style={{ background: '#6B0000', color: 'white' }}>
      <article className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-golden-shadow" style={{ color: '#FFD700' }}>
          Lal Mirch Havan — लाल मिर्च हवन
        </h1>
        <p className="text-white/85 text-lg leading-relaxed mb-6">
          <strong style={{ color: '#FFD700' }}>Lal Mirch Havan</strong> माँ बगलामुखी की उग्र साधना का अंग है,
          जो विशेष रूप से <em>tantra nivaran</em>, शत्रु बाधा, नज़र दोष एवं काला जादू समाप्त करने हेतु
          किया जाता है। यह अत्यंत शीघ्र फलदायी हवन माना जाता है। आप{" "}
          <Link to="/havan-booking" className="underline" style={{ color: '#FFD700' }}>online havan booking</Link>{" "}
          से तुरंत संपर्क कर सकते हैं।
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-3" style={{ color: '#FFD700' }}>
          Lal Mirch Havan क्या है?
        </h2>
        <p className="text-white/85 leading-relaxed mb-4">
          इस हवन में लाल मिर्च, पीली सरसों, गुग्गुल एवं विशेष तंत्रोक्त सामग्री से माँ बगलामुखी के
          बीज मंत्र की आहुतियाँ दी जाती हैं। लाल मिर्च की उष्ण ऊर्जा साधक के चारों ओर सुरक्षा-कवच
          बनाती है और शत्रु पक्ष की नकारात्मक ऊर्जा को नष्ट करती है।
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-3" style={{ color: '#FFD700' }}>
          कब करवाएँ Lal Mirch Havan
        </h2>
        <ul className="space-y-2 mb-4">
          {[
            "बार-बार बीमारी, अकारण भय, बुरे सपने आ रहे हों",
            "घर में अशांति, झगड़े, धन-हानि हो रही हो",
            "किसी ने काला जादू / टोना-टोटका किया हो",
            "Court case में शत्रु पक्ष भारी पड़ रहा हो",
            "Business में नज़र दोष लगा हो",
            "बच्चों पर ऊपरी हवा का प्रभाव हो",
          ].map((b) => (
            <li key={b} className="flex items-start gap-2 text-white/90">
              <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" style={{ color: '#FFD700' }} /> {b}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-3" style={{ color: '#FFD700' }}>
          Benefits — लाल मिर्च हवन के लाभ
        </h2>
        <ul className="space-y-2 mb-4">
          {[
            "Tantra nivaran — सभी तांत्रिक बाधाओं का निर्मूलन",
            "नज़र दोष एवं ऊपरी हवा का तत्काल निवारण",
            "शत्रुओं के षड्यंत्रों का नाश",
            "घर एवं business में सकारात्मक ऊर्जा",
            "मानसिक शांति एवं आत्मविश्वास की वृद्धि",
            "ग्रह दोष शांति",
          ].map((b) => (
            <li key={b} className="flex items-start gap-2 text-white/90">
              <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" style={{ color: '#FFD700' }} /> {b}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-3" style={{ color: '#FFD700' }}>
          हवन की विधि
        </h2>
        <p className="text-white/85 leading-relaxed mb-4">
          संकल्प, गणपति पूजन, कलश स्थापन, माँ बगलामुखी यंत्र पूजन, बीज मंत्र जाप, लाल मिर्च
          सहित विशेष सामग्री से दशांश हवन एवं पूर्णाहुति के साथ अनुष्ठान सम्पन्न होता है।
          सम्पूर्ण विधि का video/photo proof साधक को भेजा जाता है।
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-3" style={{ color: '#FFD700' }}>
          Why Choose Our Service
        </h2>
        <p className="text-white/85 leading-relaxed mb-4">
          हम नलखेड़ा (Agar Malwa, MP) के सिद्ध बगलामुखी मंदिर के अनुभवी पंडितों द्वारा हवन
          सम्पन्न कराते हैं। पूर्ण शास्त्रोक्त विधि, पारदर्शी pricing और India + worldwide
          booking — सब एक ही स्थान पर।
        </p>

        <SeoCta headline="Book Lal Mirch Havan Now" />

        <p className="text-white/70 text-sm">
          अधिक पढ़ें: <Link to="/baglamukhi-havan" className="underline" style={{ color: '#FFD700' }}>Baglamukhi Havan</Link> •{" "}
          <Link to="/baglamukhi-anushthan" className="underline" style={{ color: '#FFD700' }}>Anushthan</Link> •{" "}
          <Link to="/blog/lal-mirch-havan-importance" className="underline" style={{ color: '#FFD700' }}>Blog: Importance of Lal Mirch Havan</Link>
        </p>
      </article>
    </main>
  </>
);

export default LalMirchHavanPage;
