import HavanCard from "@/components/HavanCard";
import { havans } from "@/data/havans";
import Seo from "@/components/Seo";
import SeoCta from "@/components/SeoCta";
import { Link } from "react-router-dom";

const HavanTypes = () => {
  return (
    <main className="pb-16">
      <Seo
        title="Baglamukhi Havan Booking | हवन के प्रकार"
        description="Book Baglamukhi Havan in Nalkheda, Madhya Pradesh for protection, court case victory, shatru nash, success and spiritual energy."
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
            </p>
            <p className="text-white/70 max-w-2xl mx-auto mt-3">
              Choose a complete Baglamukhi Havan service for protection, victory, peace and spiritual strength.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {havans.map((h) => (
              <HavanCard key={h.id} havan={h} />
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content — Hindi first, English second */}
      <section className="py-14" style={{ background: '#5A0000' }}>
        <div className="container mx-auto px-4 max-w-3xl text-white/85 leading-relaxed text-sm md:text-base space-y-4">
          <h2 className="text-2xl font-bold" style={{ color: '#FFD700' }}>
            बगलामुखी हवन क्या है?
          </h2>
          <p>
            माँ बगलामुखी दस महाविद्याओं में स्तंभन शक्ति की अधिष्ठात्री मानी जाती हैं। बगलामुखी हवन वह विशेष वैदिक साधना है जिसमें मंत्र, आहुति, संकल्प और अग्नि के माध्यम से साधक के जीवन में रक्षा, साहस और विजय की ऊर्जा जागृत की जाती है। यह हवन विशेष रूप से उन लोगों के लिए किया जाता है जो शत्रु बाधा, कोर्ट केस, व्यापारिक रुकावट, मानसिक भय, नकारात्मक ऊर्जा या लगातार असफलता से परेशान हैं। नलखेड़ा, मध्य प्रदेश, भारत में माँ बगलामुखी की उपासना का विशेष महत्व है, इसलिए यहाँ किया गया पूजन श्रद्धालुओं के लिए अत्यंत आस्था और विश्वास का विषय रहता है।
          </p>
          <p>
            बगलामुखी हवन में सबसे पहले संकल्प लिया जाता है, फिर गणेश पूजन, गुरु पूजन, नवग्रह शांति, माँ बगलामुखी मंत्र जाप और अंत में विधिपूर्वक हवन किया जाता है। लाल मिर्च हवन, शत्रु नाश हवन, कोर्ट केस हवन, विजय प्राप्ति हवन और सर्व कार्य सिद्धि हवन जैसी सेवाएँ अलग-अलग जीवन स्थितियों के अनुसार चुनी जाती हैं। हमारा उद्देश्य डर फैलाना नहीं, बल्कि शास्त्रसम्मत मार्गदर्शन, स्पष्ट प्रक्रिया और श्रद्धा के साथ पूजा सेवा प्रदान करना है।
          </p>

          <h2 className="text-xl font-bold pt-4" style={{ color: '#FFD700' }}>
            हवन के प्रकार और उपयोग
          </h2>
          <p>
            लाल मिर्च हवन को तंत्र बाधा, नज़र दोष और तीव्र विरोध की स्थिति में उपयोगी माना जाता है। शत्रु नाश हवन उन लोगों के लिए कराया जाता है जिन्हें विरोधियों, झूठे आरोपों या अनावश्यक विवादों से परेशानी हो। कोर्ट केस हवन कानूनी मामलों में मानसिक स्थिरता, सही निर्णय और विजय की प्रार्थना के लिए किया जाता है। विजय प्राप्ति हवन प्रतियोगिता, राजनीति, व्यापारिक मुकाबले और महत्वपूर्ण कार्यों में सफलता के लिए उपयोगी माना जाता है। सामान्य बगलामुखी पूजा और हवन परिवार की शांति, सुरक्षा और आध्यात्मिक ऊर्जा के लिए कराया जा सकता है।
          </p>

          <h2 className="text-xl font-bold pt-4" style={{ color: '#FFD700' }}>
            बगलामुखी हवन के लाभ
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>शत्रु बाधा, विरोध और अनावश्यक विवादों से सुरक्षा की भावना मजबूत होती है।</li>
            <li>कोर्ट केस और कानूनी तनाव में धैर्य, स्पष्टता और सकारात्मक परिणाम की प्रार्थना की जाती है।</li>
            <li>व्यापार, नौकरी, राजनीति और प्रतियोगिता में सफलता के लिए विजय प्राप्ति की साधना होती है।</li>
            <li>तंत्र बाधा, नज़र दोष और नकारात्मक ऊर्जा से मुक्ति के लिए मंत्र शक्ति का सहारा लिया जाता है।</li>
            <li>परिवार में शांति, आत्मविश्वास, मानसिक स्थिरता और आध्यात्मिक protection की भावना बढ़ती है।</li>
          </ul>

          <h2 className="text-2xl font-bold pt-8" style={{ color: '#FFD700' }}>
            What is Baglamukhi Havan?
          </h2>
          <p>
            Baglamukhi Havan is a sacred fire ritual dedicated to Maa Baglamukhi, the divine power associated with stillness, protection, victory and control over harmful speech or negative actions. Devotees usually seek this puja when they are facing enemies, court disputes, business pressure, repeated obstacles or fear created by unseen negativity. A properly guided baglamukhi havan is not a shortcut or a superstition; it is a disciplined spiritual process performed with sankalp, mantra chanting and offerings into the sacred fire.
          </p>
          <p>
            At Nalkheda in Madhya Pradesh, India, Maa Baglamukhi worship has a strong traditional presence. Many devotees prefer baglamukhi havan in nalkheda because the location carries deep spiritual faith. The process may include Ganesh puja, guru vandana, navgrah shanti, Baglamukhi mantra jaap, dashansh havan and final prayers for protection and success. For devotees outside India, havan booking can be completed online, and photos or video updates can be shared after the ritual.
          </p>

          <h2 className="text-xl font-bold pt-4" style={{ color: '#FFD700' }}>
            Types, Process and Duration
          </h2>
          <p>
            Lal mirch havan is chosen for intense negativity, tantra nivaran and shatru nash situations. Court case havan is requested by devotees who want strength, patience and divine support during legal matters. Vijay prapti havan supports success in competition, leadership, public life and business decisions. A general baglamukhi puja is suitable for peace, confidence and protection. Most havans take one to three hours, depending on the sankalp, materials and mantra count. The pandit for havan guides the devotee about the right service after understanding the purpose respectfully.
          </p>

          <h2 className="text-xl font-bold pt-4" style={{ color: '#FFD700' }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-3 mt-2">
            {[
              { q: "क्या बगलामुखी हवन शत्रुओं के लिए कराया जाता है?", a: "हाँ, baglamukhi havan for enemies के रूप में यह साधना शत्रु बाधा, झूठे आरोप और विरोध की स्थिति में रक्षा और स्थिरता के लिए कराई जाती है।" },
              { q: "Can I book Baglamukhi Puja online?", a: "Yes, baglamukhi puja booking online is available for devotees in India and worldwide. You can confirm details by phone or WhatsApp." },
              { q: "Where is the havan performed?", a: "The service is connected with Nalkheda, Madhya Pradesh, India, and guidance is provided for devotees searching for baglamukhi havan near me." },
            ].map((f) => (
              <div key={f.q} className="rounded-lg p-4" style={{ background: 'rgba(255,140,0,0.12)', border: '1px solid rgba(255,215,0,0.25)' }}>
                <h3 className="font-bold mb-1 text-sm" style={{ color: '#FFD700' }}>{f.q}</h3>
                <p className="text-white/80 text-sm">{f.a}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold pt-4" style={{ color: '#FFD700' }}>
            आंतरिक लिंक
          </h2>
          <p>
            हवन सेवा देखने के बाद आप <Link to="/anushthan" className="underline" style={{ color: '#FFD700' }}>बगलामुखी अनुष्ठान</Link> की विस्तृत साधना, <Link to="/contact" className="underline" style={{ color: '#FFD700' }}>संपर्क और बुकिंग</Link> प्रक्रिया, या <Link to="/" className="underline" style={{ color: '#FFD700' }}>मुख्य पेज</Link> पर उपलब्ध प्रमुख सेवाएँ देख सकते हैं।
          </p>

          <div className="flex flex-wrap gap-3 pt-4">
            <Link to="/baglamukhi-havan" className="underline" style={{ color: '#FFD700' }}>बगलामुखी हवन →</Link>
            <Link to="/lal-mirch-havan" className="underline" style={{ color: '#FFD700' }}>लाल मिर्च हवन →</Link>
            <Link to="/baglamukhi-anushthan" className="underline" style={{ color: '#FFD700' }}>अनुष्ठान →</Link>
            <Link to="/havan-booking" className="underline" style={{ color: '#FFD700' }}>बुकिंग →</Link>
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
