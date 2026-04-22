import { Link } from "react-router-dom";
import { BookOpen, ArrowRight, CheckCircle } from "lucide-react";
import { anushthans } from "@/data/anushthans";
import Seo from "@/components/Seo";

const AnushthanPage = () => {
  return (
    <main className="py-16 pb-24 yantra-bg" style={{ background: '#8B0000' }}>
      <Seo
        title="Baglamukhi Anushthan | बगलामुखी अनुष्ठान सेवा"
        description="Book Baglamukhi Anushthan in Nalkheda, Madhya Pradesh for 3–11 day mantra jaap, puja, protection, success and spiritual strength."
        path="/anushthan"
        keywords="baglamukhi anushthan, baglamukhi puja, mantra jaap, pandit for havan, havan booking"
      />
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
          {anushthans.map((a) => (
            <article
              key={a.id}
              className="rounded-xl overflow-hidden"
              style={{ background: '#F57C00', border: '1px solid rgba(255,215,0,0.4)', boxShadow: '0 4px 20px rgba(0,0,0,0.25)' }}
            >
              <div className="relative w-full aspect-[16/9] overflow-hidden">
                <img
                  src={a.image}
                  alt={`${a.title} - baglamukhi anushthan, mantra jaap, online booking`}
                  loading="lazy"
                  width={768}
                  height={432}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <h2 className="text-xl md:text-2xl font-bold text-golden-outline" style={{ color: '#FFD700' }}>
                    {a.title}
                  </h2>
                  <span
                    className="text-xl md:text-2xl font-extrabold px-4 py-1.5 rounded-lg text-golden-outline tracking-wide"
                    style={{ background: 'rgba(139,0,0,0.55)', color: '#FFD700', border: '1px solid rgba(255,215,0,0.4)' }}
                  >
                    {a.price}
                  </span>
                </div>

                <p className="text-white text-sm md:text-base leading-relaxed mb-5">{a.intro}</p>

                <div className="mb-5">
                  <h3 className="font-bold mb-2" style={{ color: '#FFD700' }}>मुख्य लाभ:</h3>
                  <ul className="space-y-2">
                    {a.benefits.slice(0, 3).map((b) => (
                      <li key={b} className="flex items-start gap-2 text-white text-sm md:text-base">
                        <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: '#FFD700' }} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to={`/anushthan/${a.id}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold text-sm md:text-base transition-all hover:scale-105"
                    style={{ background: 'rgba(139,0,0,0.55)', color: '#FFD700', border: '1px solid rgba(255,215,0,0.4)' }}
                  >
                    विस्तार से देखें <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/booking"
                    className="btn-shimmer flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-bold text-sm md:text-base transition-all hover:scale-105"
                  >
                    <BookOpen className="h-4 w-4" /> अभी अनुष्ठान बुक करें
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <section className="max-w-4xl mx-auto mt-14 text-white/85 leading-relaxed text-sm md:text-base space-y-4">
          <h2 className="text-2xl font-bold" style={{ color: '#FFD700' }}>
            बगलामुखी अनुष्ठान क्या है?
          </h2>
          <p>
            बगलामुखी अनुष्ठान माँ बगलामुखी की गहन मंत्र साधना है, जिसमें निर्धारित संख्या में मंत्र जाप, पूजन, हवन, तर्पण और पूर्णाहुति की जाती है। सामान्य पूजा की तुलना में अनुष्ठान अधिक अनुशासित और विस्तृत होता है, क्योंकि इसमें साधक के संकल्प के अनुसार कई दिनों तक मंत्र ऊर्जा को जागृत किया जाता है। यह सेवा उन श्रद्धालुओं के लिए उपयुक्त है जो शत्रु बाधा, कोर्ट केस, व्यापारिक समस्या, पारिवारिक तनाव, नज़र दोष, मानसिक भय या जीवन में लगातार आने वाली रुकावटों से समाधान की प्रार्थना करना चाहते हैं।
          </p>
          <p>
            माँ बगलामुखी को स्तंभन शक्ति की देवी माना जाता है। उनकी कृपा से नकारात्मक वाणी, विरोधी विचार, झूठे आरोप और हानिकारक प्रभाव शांत हों — इसी भावना से बगलामुखी अनुष्ठान किया जाता है। नलखेड़ा, मध्य प्रदेश, भारत में माँ बगलामुखी की उपासना का प्राचीन महत्व है, इसलिए अनेक भक्त यहाँ अनुष्ठान करवाने को विशेष रूप से शुभ मानते हैं। हर अनुष्ठान में पहले श्रद्धालु का नाम, गोत्र और उद्देश्य लेकर संकल्प किया जाता है, फिर विद्वान पंडितों द्वारा शुद्ध उच्चारण के साथ मंत्र जाप संपन्न होता है।
          </p>

          <h2 className="text-xl font-bold pt-4" style={{ color: '#FFD700' }}>
            अवधि, प्रकार और विधि
          </h2>
          <p>
            बगलामुखी अनुष्ठान सामान्यतः 3 से 11 दिनों तक किया जा सकता है। 36,000 मंत्र सिद्धि अनुष्ठान शीघ्र बाधा निवारण और मनोकामना पूर्ति के लिए उपयुक्त माना जाता है। सवा लाख मंत्र महाजाप गंभीर समस्याओं, court case havan से जुड़े संकल्प, शत्रु नाश और बड़ी बाधाओं के लिए कराया जाता है। पंचलक्षी महा-साधना अत्यंत विशेष और विस्तृत अनुष्ठान है, जिसमें अधिक मंत्र संख्या, अधिक पंडित और अधिक गहन विधि शामिल होती है। प्रत्येक साधना के अंत में दशांश हवन, पूर्णाहुति और प्रसाद की व्यवस्था की जाती है।
          </p>
          <p>
            यदि कोई भक्त पहली बार baglamukhi puja या baglamukhi anushthan करवाना चाहता है, तो पंडित जी पहले समस्या को ध्यान से समझते हैं। इसके बाद उचित मंत्र संख्या, दिन, मुहूर्त और पूजा विधि बताई जाती है। हमारा प्रयास रहता है कि श्रद्धालु को स्पष्ट जानकारी मिले और वह अपनी श्रद्धा, आवश्यकता और सामर्थ्य के अनुसार सही अनुष्ठान चुन सके।
          </p>

          <h2 className="text-xl font-bold pt-4" style={{ color: '#FFD700' }}>
            लाभ और उपयोग
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>शत्रु बाधा, विरोध, झूठे आरोप और अनावश्यक विवादों से सुरक्षा की प्रार्थना।</li>
            <li>कोर्ट केस, संपत्ति विवाद और कानूनी तनाव में धैर्य तथा विजय प्राप्ति का संकल्प।</li>
            <li>व्यापार, नौकरी, राजनीति, प्रतियोगिता और महत्वपूर्ण निर्णयों में सफलता की कामना।</li>
            <li>तंत्र बाधा, नज़र दोष और नकारात्मक spiritual energy से मुक्ति की साधना।</li>
            <li>आत्मविश्वास, मानसिक शांति, परिवार की सुरक्षा और आध्यात्मिक स्थिरता।</li>
          </ul>

          <h2 className="text-2xl font-bold pt-8" style={{ color: '#FFD700' }}>
            What is Baglamukhi Anushthan?
          </h2>
          <p>
            Baglamukhi Anushthan is a disciplined spiritual practice dedicated to Maa Baglamukhi, performed through mantra jaap, puja, havan and final offerings. Unlike a short puja, an anushthan continues for a fixed duration and follows a clear sankalp. Devotees choose it for protection, success, court disputes, enemy-related problems, business obstacles and deep mental stress. The focus is not fear-based; it is a devotional process that brings clarity, courage and spiritual support through mantra shakti.
          </p>
          <p>
            The duration can be 3 to 11 days depending on the selected mantra count and purpose. A 36,000 mantra anushthan is suitable for focused wishes and quick obstacle removal. A 1.25 lakh mantra anushthan is preferred for serious problems such as legal pressure, strong opposition and repeated failures. A Panchlakshi anushthan is a major practice for intense situations where a devotee wants a larger and more powerful puja process. The service is connected with Nalkheda, Madhya Pradesh, India, and devotees from India or abroad can complete havan booking and anushthan booking through phone or WhatsApp.
          </p>

          <h2 className="text-xl font-bold pt-4" style={{ color: '#FFD700' }}>
            FAQs
          </h2>
          <div className="space-y-3">
            {[
              { q: "अनुष्ठान कितने दिन का होता है?", a: "संकल्प और मंत्र संख्या के अनुसार बगलामुखी अनुष्ठान सामान्यतः 3 से 11 दिनों तक किया जाता है।" },
              { q: "Is Baglamukhi Anushthan suitable for court case problems?", a: "Yes, devotees often choose this puja for court case stress, victory prayers, protection and stability during legal matters." },
              { q: "क्या ऑनलाइन बुकिंग हो सकती है?", a: "हाँ, baglamukhi puja booking online फोन या WhatsApp द्वारा की जा सकती है।" },
            ].map((f) => (
              <div key={f.q} className="rounded-lg p-4" style={{ background: 'rgba(255,140,0,0.12)', border: '1px solid rgba(255,215,0,0.25)' }}>
                <h3 className="font-bold mb-1 text-sm" style={{ color: '#FFD700' }}>{f.q}</h3>
                <p className="text-white/80 text-sm">{f.a}</p>
              </div>
            ))}
          </div>

          <p className="pt-3">
            आगे बढ़ने के लिए <Link to="/contact" className="underline" style={{ color: '#FFD700' }}>संपर्क और बुकिंग</Link> देखें, <Link to="/havan" className="underline" style={{ color: '#FFD700' }}>हवन के प्रकार</Link> पढ़ें, या <Link to="/" className="underline" style={{ color: '#FFD700' }}>मुख्य पेज</Link> पर वापस जाएँ।
          </p>
        </section>
      </div>
    </main>
  );
};

export default AnushthanPage;
