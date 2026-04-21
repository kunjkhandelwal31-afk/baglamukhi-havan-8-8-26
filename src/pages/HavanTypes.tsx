import HavanCard from "@/components/HavanCard";
import { havans } from "@/data/havans";
import Seo from "@/components/Seo";
import SeoCta from "@/components/SeoCta";
import { Link } from "react-router-dom";

const HavanTypes = () => {
  return (
    <main className="pb-16">
      <Seo
        title="हवन के प्रकार | Baglamukhi Havan Types & Booking"
        description="Explore all types of Baglamukhi Havan — Lal Mirch Havan, Shatru Nash, Vijay Prapti, Dhan Prapti & more. Book with experienced pandits. India & worldwide service."
        path="/havan"
        keywords="baglamukhi havan, havan types, lal mirch havan, shatru nash havan, havan booking, pandit for havan"
      />

      <section className="py-16 pb-8 yantra-bg" style={{ background: '#8B0000' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#FFD700' }}>
              हवन के प्रकार — Types of Baglamukhi Havan Services
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto">
              माँ बगलामुखी की विभिन्न हवन सेवाओं में से अपनी आवश्यकता के अनुसार चयन करें।
              सभी हवन अनुभवी पंडित जी द्वारा पूर्ण सामग्री सहित कराए जाते हैं।
              We provide <strong>baglamukhi havan</strong> services across India and worldwide.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {havans.map((h) => (
              <HavanCard key={h.id} havan={h} />
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-14" style={{ background: '#5A0000' }}>
        <div className="container mx-auto px-4 max-w-3xl text-white/85 leading-relaxed text-sm md:text-base space-y-4">
          <h2 className="text-2xl font-bold" style={{ color: '#FFD700' }}>
            Baglamukhi Havan — बगलामुखी हवन क्या है
          </h2>
          <p>
            <strong>Baglamukhi Havan</strong> दस महाविद्याओं में से एक माँ बगलामुखी की उपासना का सबसे प्रभावशाली माध्यम है।
            यह वैदिक अनुष्ठान शत्रु-स्तंभन, <strong>court case havan</strong>, <strong>nazar dosh havan</strong> एवं
            तंत्र-बाधा निवारण के लिए विश्वभर में प्रसिद्ध है। हमारे अनुभवी <strong>pandit for havan</strong> माँ बगलामुखी
            मंदिर, नलखेड़ा (Nalkheda) में पूर्ण विधि-विधान से हवन सम्पन्न कराते हैं।
          </p>

          <h2 className="text-xl font-bold pt-4" style={{ color: '#FFD700' }}>
            Benefits of Baglamukhi Havan — हवन के लाभ
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>शत्रु नाश (Enemy Destruction)</strong> — शत्रुओं की वाणी एवं बुद्धि स्तंभित होती है</li>
            <li><strong>Court Case Victory</strong> — कानूनी मामलों एवं मुकदमों में विजय प्राप्ति</li>
            <li><strong>तंत्र-बाधा निवारण</strong> — काला जादू, नज़र दोष एवं नकारात्मक ऊर्जा का नाश</li>
            <li><strong>Vijay Prapti</strong> — चुनाव, प्रतियोगिता एवं व्यापार में सफलता</li>
            <li><strong>धन लाभ</strong> — आर्थिक समृद्धि एवं ऋण मुक्ति</li>
            <li><strong>मानसिक शांति</strong> — भय, चिंता एवं तनाव से मुक्ति</li>
          </ul>

          <h2 className="text-xl font-bold pt-4" style={{ color: '#FFD700' }}>
            Who Should Perform Havan — यह हवन किसे करवाना चाहिए
          </h2>
          <p>
            जो व्यक्ति शत्रुओं के षड्यंत्र, court case, business loss, nazar dosh, तांत्रिक बाधा या
            जीवन में बार-बार असफलता का सामना कर रहे हैं — उनके लिए <strong>baglamukhi puja</strong> एवं हवन
            विशेष रूप से फलदायी है। यह हवन पुरुष, स्त्री एवं संपूर्ण परिवार के लिए किया जा सकता है।
          </p>

          <h2 className="text-xl font-bold pt-4" style={{ color: '#FFD700' }}>
            Havan Process — हवन की प्रक्रिया
          </h2>
          <p>
            प्रत्येक हवन में संकल्प, गणपति पूजन, नवग्रह पूजन, माँ बगलामुखी मंत्र जाप, दशांश हवन,
            तर्पण, मार्जन एवं ब्राह्मण भोजन शामिल है। हवन की अवधि 1-3 घंटे की होती है।
            सम्पूर्ण हवन की <strong>live video</strong> एवं <strong>photo documentation</strong> आपको भेजी जाती है।
          </p>

          <div className="flex flex-wrap gap-3 pt-4">
            <Link to="/baglamukhi-havan" className="underline" style={{ color: '#FFD700' }}>बगलामुखी हवन →</Link>
            <Link to="/lal-mirch-havan" className="underline" style={{ color: '#FFD700' }}>लाल मिर्च हवन →</Link>
            <Link to="/baglamukhi-anushthan" className="underline" style={{ color: '#FFD700' }}>अनुष्ठान →</Link>
            <Link to="/contact" className="underline" style={{ color: '#FFD700' }}>संपर्क →</Link>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-3xl">
        <SeoCta />
      </div>
    </main>
  );
};

export default HavanTypes;
