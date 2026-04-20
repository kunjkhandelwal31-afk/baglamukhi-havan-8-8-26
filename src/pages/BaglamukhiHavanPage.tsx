import Seo from "@/components/Seo";
import SeoCta from "@/components/SeoCta";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

const BaglamukhiHavanPage = () => {
  return (
    <>
      <Seo
        title="Baglamukhi Havan | बगलामुखी हवन बुकिंग — विद्वान पंडित द्वारा"
        description="Baglamukhi Havan booking with experienced pandits. शत्रु नाश, court case विजय, tantra nivaran के लिए विधिवत बगलामुखी हवन। India + worldwide service."
        path="/baglamukhi-havan"
        keywords="baglamukhi havan, baglamukhi havan booking, baglamukhi puja, baglamukhi pandit, vijay prapti havan, court case havan"
      />
      <main className="py-14" style={{ background: '#6B0000', color: 'white' }}>
        <article className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-golden-shadow" style={{ color: '#FFD700' }}>
            Baglamukhi Havan — बगलामुखी हवन बुकिंग
          </h1>
          <p className="text-white/85 text-lg leading-relaxed mb-6">
            <strong style={{ color: '#FFD700' }}>Baglamukhi Havan</strong> माँ बगलामुखी की शक्ति-प्राप्ति के लिए
            किया जाने वाला अत्यंत प्रभावी वैदिक अनुष्ठान है। दस महाविद्याओं में आठवीं शक्ति माँ बगलामुखी
            शत्रु-स्तंभन, वाक्-स्तंभन और विजय की देवी मानी जाती हैं। हम{" "}
            <Link to="/havan-booking" className="underline" style={{ color: '#FFD700' }}>online havan booking</Link>{" "}
            की सुविधा देते हैं — आप विश्व के किसी भी स्थान से बगलामुखी हवन बुक कर सकते हैं।
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-3" style={{ color: '#FFD700' }}>
            बगलामुखी हवन क्या है? (What is Baglamukhi Havan)
          </h2>
          <p className="text-white/85 leading-relaxed mb-4">
            बगलामुखी हवन माँ बगलामुखी के बीज मंत्र{" "}
            <em>"ॐ ह्लीं बगलामुखी सर्वदुष्टानां वाचं मुखं पदं स्तम्भय जिह्वां कीलय बुद्धिं विनाशय ह्लीं ॐ स्वाहा"</em> के
            जाप एवं विधिवत हवन के द्वारा सम्पन्न होता है। यह हवन शत्रुओं की बुद्धि-वाणी को स्तंभित कर
            साधक को विजय एवं सुरक्षा प्रदान करता है।
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-3" style={{ color: '#FFD700' }}>
            Benefits of Baglamukhi Havan — लाभ
          </h2>
          <ul className="space-y-2 mb-4">
            {[
              "शत्रु बाधा एवं षड्यंत्रों का नाश",
              "Court case एवं कानूनी मामलों में विजय",
              "Tantra nivaran — काला जादू और तांत्रिक प्रभावों से रक्षा",
              "नज़र दोष, ऊपरी हवा एवं नकारात्मक ऊर्जा का निवारण",
              "व्यापार, सरकारी नौकरी एवं प्रतियोगी परीक्षाओं में सफलता",
              "विवाह में आ रही अड़चनों का समाधान",
              "मानसिक भय, तनाव एवं अनिद्रा से मुक्ति",
            ].map((b) => (
              <li key={b} className="flex items-start gap-2 text-white/90">
                <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" style={{ color: '#FFD700' }} /> {b}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-3" style={{ color: '#FFD700' }}>
            यह हवन किसे करवाना चाहिए? (Who should perform this Havan)
          </h2>
          <p className="text-white/85 leading-relaxed mb-4">
            जिन्हें कोर्ट केस, business में षड्यंत्र, शत्रुओं की बाधा, बार-बार असफलता, गुप्त शत्रुओं का
            भय, नज़र दोष या तांत्रिक बाधा का अनुभव हो रहा है — उनके लिए <strong>baglamukhi puja</strong> और हवन
            विशेष फलदायी है। यह हवन पुरुष, स्त्री एवं संपूर्ण परिवार के निमित्त सम्पन्न कराया जा सकता है।
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-3" style={{ color: '#FFD700' }}>
            Process — हवन की विधि
          </h2>
          <ol className="list-decimal pl-6 space-y-2 text-white/85 mb-4">
            <li>संकल्प एवं गणपति-कलश पूजन</li>
            <li>नवग्रह स्थापन एवं षोडश मातृका पूजन</li>
            <li>माँ बगलामुखी का यंत्र पूजन एवं आवाहन</li>
            <li>बीज मंत्र का निर्धारित संख्या में जाप (अनुष्ठान के अनुसार)</li>
            <li>दशांश हवन — पीली सरसों, हल्दी, गुग्गुल एवं विशेष सामग्री से</li>
            <li>पूर्णाहुति, ब्राह्मण भोज एवं आशीर्वाद</li>
          </ol>

          <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-3" style={{ color: '#FFD700' }}>
            Why Choose Us — हमारी सेवा क्यों चुनें
          </h2>
          <ul className="space-y-2 mb-6">
            {[
              "नलखेड़ा (आगर मालवा) के सिद्ध बगलामुखी मंदिर के अनुभवी पंडित",
              "पूर्ण शास्त्रोक्त विधि-विधान — कोई shortcut नहीं",
              "Online + offline दोनों माध्यम से booking",
              "पारदर्शी pricing — कोई छुपा शुल्क नहीं",
              "सम्पूर्ण हवन की video/photo proof",
              "247+ संतुष्ट साधकों की रेटिंग 4.9/5",
            ].map((b) => (
              <li key={b} className="flex items-start gap-2 text-white/90">
                <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" style={{ color: '#FFD700' }} /> {b}
              </li>
            ))}
          </ul>

          <SeoCta />

          <p className="text-white/70 text-sm">
            संबंधित: <Link to="/lal-mirch-havan" className="underline" style={{ color: '#FFD700' }}>Lal Mirch Havan</Link> •{" "}
            <Link to="/baglamukhi-anushthan" className="underline" style={{ color: '#FFD700' }}>Baglamukhi Anushthan</Link> •{" "}
            <Link to="/havan-booking" className="underline" style={{ color: '#FFD700' }}>Havan Booking</Link> •{" "}
            <Link to="/blog/baglamukhi-havan-benefits" className="underline" style={{ color: '#FFD700' }}>Blog: हवन के लाभ</Link>
          </p>
        </article>
      </main>
    </>
  );
};

export default BaglamukhiHavanPage;
