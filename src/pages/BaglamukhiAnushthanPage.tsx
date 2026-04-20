import Seo from "@/components/Seo";
import SeoCta from "@/components/SeoCta";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

const BaglamukhiAnushthanPage = () => (
  <>
    <Seo
      title="Baglamukhi Anushthan | बगलामुखी अनुष्ठान बुकिंग — सवा लाख & पंचलक्षी"
      description="Baglamukhi Anushthan — 36,000, सवा लाख और पंचलक्षी मंत्र अनुष्ठान booking with experienced pandits. कठिन समस्याओं के निवारण हेतु महा-साधना। Worldwide service."
      path="/baglamukhi-anushthan"
      keywords="baglamukhi anushthan, baglamukhi havan, vijay prapti havan, court case havan, sawalakh anushthan, panchlakshi anushthan"
    />
    <main className="py-14" style={{ background: '#6B0000', color: 'white' }}>
      <article className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-golden-shadow" style={{ color: '#FFD700' }}>
          Baglamukhi Anushthan — बगलामुखी अनुष्ठान
        </h1>
        <p className="text-white/85 text-lg leading-relaxed mb-6">
          <strong style={{ color: '#FFD700' }}>Baglamukhi Anushthan</strong> माँ बगलामुखी की दीर्घ साधना है
          जिसमें निर्धारित संख्या में बीज मंत्र का जाप एवं दशांश हवन किया जाता है। यह सामान्य हवन
          से अधिक शक्तिशाली एवं स्थायी फल देने वाला होता है।
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-3" style={{ color: '#FFD700' }}>
          अनुष्ठान के प्रकार
        </h2>
        <ul className="space-y-3 mb-4">
          <li className="text-white/90"><strong style={{ color: '#FFD700' }}>36,000 मंत्र अनुष्ठान</strong> — 6 ब्राह्मणों द्वारा 1-2 दिन में मंत्र जाप एवं हवन। ₹31,000।</li>
          <li className="text-white/90"><strong style={{ color: '#FFD700' }}>सवा लाख मंत्र अनुष्ठान</strong> — 11 पंडितों द्वारा 6 घंटे का अखंड जाप एवं हवन। ₹61,000।</li>
          <li className="text-white/90"><strong style={{ color: '#FFD700' }}>पंचलक्षी (5 लाख) महा-अनुष्ठान</strong> — 21 सिद्ध ब्राह्मणों द्वारा महा-जाप एवं विशाल हवन। ₹1,51,000।</li>
        </ul>

        <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-3" style={{ color: '#FFD700' }}>
          अनुष्ठान कब करवाएँ?
        </h2>
        <ul className="space-y-2 mb-4">
          {[
            "लंबे समय से चल रहे court case में निर्णायक विजय हेतु",
            "Business में बार-बार हो रही हानि एवं षड्यंत्र",
            "गंभीर शत्रु बाधा या तांत्रिक प्रभाव",
            "विवाह, संतान या स्वास्थ्य की कठिन समस्याएँ",
            "ग्रह दोष — विशेषकर शनि, राहु, केतु से जुड़े बाधक योग",
            "साधक स्वयं की आध्यात्मिक उन्नति के लिए",
          ].map((b) => (
            <li key={b} className="flex items-start gap-2 text-white/90">
              <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" style={{ color: '#FFD700' }} /> {b}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-3" style={{ color: '#FFD700' }}>
          Benefits — लाभ
        </h2>
        <p className="text-white/85 leading-relaxed mb-4">
          अनुष्ठान का प्रभाव सामान्य हवन से कई गुना अधिक एवं स्थायी होता है। मंत्र संख्या जितनी
          अधिक, फल उतना ही गहन। साधक को विजय, स्तंभन-शक्ति, शत्रु-नाश एवं माँ की विशेष कृपा
          प्राप्त होती है।
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-3" style={{ color: '#FFD700' }}>
          अनुष्ठान की प्रक्रिया
        </h2>
        <ol className="list-decimal pl-6 space-y-2 text-white/85 mb-4">
          <li>साधक के नाम-गोत्र से संकल्प</li>
          <li>गणपति, कलश, नवग्रह एवं यंत्र पूजन</li>
          <li>निर्धारित संख्या में अखंड बीज मंत्र जाप</li>
          <li>दशांश हवन — विशेष शास्त्रोक्त सामग्री से</li>
          <li>तर्पण, मार्जन एवं ब्राह्मण भोज</li>
          <li>पूर्णाहुति एवं प्रसाद / यंत्र साधक को भेजा जाता है</li>
        </ol>

        <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-3" style={{ color: '#FFD700' }}>
          Why Choose Us
        </h2>
        <p className="text-white/85 leading-relaxed mb-4">
          नलखेड़ा (Agar Malwa, MP) के सिद्ध बगलामुखी मंदिर के अनुभवी पंडित, पूर्ण शास्त्रोक्त
          विधि, पारदर्शी pricing, video/photo proof एवं India + worldwide booking — हम 247+ संतुष्ट
          साधकों की 4.9/5 रेटिंग के साथ सेवा दे रहे हैं।
        </p>

        <SeoCta headline="Book Baglamukhi Anushthan Now" />

        <p className="text-white/70 text-sm">
          संबंधित: <Link to="/baglamukhi-havan" className="underline" style={{ color: '#FFD700' }}>Baglamukhi Havan</Link> •{" "}
          <Link to="/lal-mirch-havan" className="underline" style={{ color: '#FFD700' }}>Lal Mirch Havan</Link> •{" "}
          <Link to="/anushthan" className="underline" style={{ color: '#FFD700' }}>सभी अनुष्ठान देखें</Link>
        </p>
      </article>
    </main>
  </>
);

export default BaglamukhiAnushthanPage;
