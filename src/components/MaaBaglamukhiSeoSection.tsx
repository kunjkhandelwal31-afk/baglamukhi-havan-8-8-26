import { Link } from "react-router-dom";

interface SeoBlock {
  hindiHeading: string;
  hindiContent: string;
  englishHeading: string;
  englishContent: string;
}

const blocks: SeoBlock[] = [
  {
    hindiHeading: "माँ बगलामुखी का धार्मिक और आध्यात्मिक महत्व",
    hindiContent:
      "माँ बगलामुखी को दस महाविद्याओं में अत्यंत शक्तिशाली देवी माना जाता है। भक्तों का विश्वास है कि माँ बगलामुखी अपने भक्तों को शत्रुओं, नकारात्मक शक्तियों, भय, मानसिक तनाव और जीवन की बाधाओं से रक्षा प्रदान करती हैं। विशेष रूप से न्यायालय संबंधी समस्याएं, शत्रु बाधा, व्यापार में रुकावट, वैवाहिक जीवन की समस्याएं तथा मानसिक अशांति दूर करने हेतु माँ बगलामुखी की पूजा, हवन एवं अनुष्ठान अत्यंत प्रभावी माने जाते हैं। नलखेड़ा स्थित माँ बगलामुखी धाम भारत के प्रमुख शक्ति पीठों में से एक माना जाता है जहां दूर-दूर से श्रद्धालु हवन एवं पूजा कराने आते हैं।",
    englishHeading: "Religious and Spiritual Importance of Maa Baglamukhi",
    englishContent:
      "Maa Baglamukhi is considered one of the most powerful forms among the ten Mahavidyas in Hinduism. Devotees believe that Maa Baglamukhi protects her followers from enemies, negative energies, fear, mental stress, and life obstacles. Her worship is especially considered effective for court-related matters, enemy protection, business obstacles, marriage problems, and spiritual stability. The famous Maa Baglamukhi Temple in Nalkheda is regarded as a sacred spiritual center where devotees from across India visit for havan, puja, and anushthan.",
  },
  {
    hindiHeading: "माँ बगलामुखी हवन का महत्व",
    hindiContent:
      "माँ बगलामुखी हवन वैदिक विधि से किया जाने वाला अत्यंत प्रभावशाली धार्मिक अनुष्ठान है। इस हवन के माध्यम से भक्त माँ बगलामुखी की कृपा प्राप्त करने का प्रयास करते हैं। विशेष रूप से शत्रु बाधा निवारण, न्यायालय मामलों में सफलता, नकारात्मक शक्तियों से रक्षा, व्यापार वृद्धि, मानसिक शांति एवं पारिवारिक सुख के लिए यह हवन कराया जाता है। योग्य ब्राह्मणों द्वारा वैदिक मंत्रों एवं विशेष सामग्री के साथ सम्पन्न किया गया हवन अत्यंत शुभ एवं फलदायी माना जाता है।",
    englishHeading: "Importance of Maa Baglamukhi Havan",
    englishContent:
      "Maa Baglamukhi Havan is considered a highly powerful Vedic ritual performed to seek divine blessings and spiritual protection. Devotees organize this havan for enemy protection, court case success, business growth, removal of negative energies, mental peace, and family prosperity. When performed by experienced priests using authentic Vedic rituals and sacred ingredients, this havan is believed to bring positive spiritual transformation and divine blessings.",
  },
  {
    hindiHeading: "लाल मिर्च हवन क्या है?",
    hindiContent:
      "लाल मिर्च हवन माँ बगलामुखी साधना में विशेष महत्व रखता है। यह हवन मुख्य रूप से शत्रु बाधा निवारण, नकारात्मक ऊर्जा समाप्त करने, तांत्रिक बाधाओं से रक्षा तथा मानसिक भय को दूर करने हेतु किया जाता है। इस हवन में विशेष वैदिक विधि से लाल मिर्च आहुति दी जाती है। धार्मिक मान्यता के अनुसार यह हवन व्यक्ति के जीवन से बाधाओं को दूर कर सकारात्मक ऊर्जा प्रदान करता है।",
    englishHeading: "What is Lal Mirch Havan?",
    englishContent:
      "Lal Mirch Havan holds a special place in Maa Baglamukhi spiritual practices. It is primarily performed for enemy destruction, protection from negative energies, tantric obstacles, and fear removal. During this ritual, red chilies are offered into the sacred fire through Vedic procedures. Devotees believe that this havan removes obstacles and creates a powerful positive spiritual shield around the individual.",
  },
  {
    hindiHeading: "माँ बगलामुखी नलखेड़ा धाम",
    hindiContent:
      "मध्यप्रदेश के आगर मालवा जिले में स्थित माँ बगलामुखी नलखेड़ा धाम देशभर के श्रद्धालुओं के लिए अत्यंत प्रसिद्ध धार्मिक स्थल है। यह मंदिर लाखों भक्तों की आस्था का केंद्र माना जाता है। यहां विशेष रूप से माँ बगलामुखी हवन, अनुष्ठान, जाप एवं पूजा सम्पन्न कराई जाती है। माना जाता है कि सच्चे मन से की गई प्रार्थना एवं पूजा से भक्तों की मनोकामनाएं पूर्ण होती हैं।",
    englishHeading: "Maa Baglamukhi Nalkheda Dham",
    englishContent:
      "Located in the Agar Malwa district of Madhya Pradesh, Maa Baglamukhi Nalkheda Dham is one of the most respected spiritual destinations for devotees across India. The temple is considered a sacred center for havan, mantra chanting, anushthan, and spiritual worship. Devotees believe that sincere prayers and rituals performed here help fulfill wishes and remove life obstacles.",
  },
  {
    hindiHeading: "माँ बगलामुखी की स्थापना",
    hindiContent:
      "धार्मिक मान्यताओं के अनुसार माँ बगलामुखी की उत्पत्ति संसार को विनाशकारी शक्तियों से बचाने हेतु हुई थी। पौराणिक कथाओं में वर्णन मिलता है कि जब सम्पूर्ण ब्रह्मांड में अत्यधिक तूफान एवं विनाशकारी शक्तियों का प्रभाव बढ़ गया था, तब भगवान विष्णु ने हरिद्रा सरोवर के समीप कठोर तपस्या की। उनकी तपस्या से प्रसन्न होकर माँ बगलामुखी प्रकट हुईं और उन्होंने समस्त नकारात्मक शक्तियों का नाश किया। तभी से माँ बगलामुखी को शत्रु स्तंभन, वाणी नियंत्रण तथा रक्षा की देवी माना जाता है। भारत में स्थित माँ बगलामुखी के मंदिर विशेष रूप से तांत्रिक साधना एवं शक्ति उपासना के प्रमुख केंद्र माने जाते हैं।",
    englishHeading: "Origin and Establishment of Maa Baglamukhi",
    englishContent:
      "According to Hindu mythology, Maa Baglamukhi manifested to protect the universe from destructive energies and chaos. Ancient scriptures mention that when powerful storms and negative forces disturbed cosmic balance, Lord Vishnu performed intense penance near the sacred Haridra Sarovar. Pleased by his devotion, Maa Baglamukhi appeared and destroyed the negative powers. Since then, she has been worshipped as the goddess of protection, enemy control, speech power, and spiritual strength. Temples dedicated to Maa Baglamukhi are considered important centers of tantric worship and divine spiritual practices.",
  },
  {
    hindiHeading: "माँ बगलामुखी का इतिहास",
    hindiContent:
      "माँ बगलामुखी का इतिहास प्राचीन हिंदू धर्म एवं तांत्रिक परंपराओं से जुड़ा हुआ है। उन्हें दस महाविद्याओं में आठवीं महाविद्या माना जाता है। धार्मिक ग्रंथों के अनुसार माँ बगलामुखी पीले रंग से विशेष रूप से जुड़ी हुई हैं, इसलिए उनकी पूजा में पीले वस्त्र, हल्दी, पीले पुष्प एवं पीली सामग्री का विशेष महत्व होता है। प्राचीन काल से राजा-महाराजा, योद्धा एवं साधक विजय प्राप्ति, शत्रु बाधा निवारण तथा राज्य सुरक्षा हेतु माँ बगलामुखी की साधना करते रहे हैं। आज भी लाखों श्रद्धालु माँ बगलामुखी मंदिरों में हवन, जाप एवं अनुष्ठान कराकर आध्यात्मिक शक्ति एवं जीवन में सफलता की कामना करते हैं।",
    englishHeading: "History of Maa Baglamukhi",
    englishContent:
      "The history of Maa Baglamukhi is deeply connected with ancient Hindu traditions and tantric worship practices. She is regarded as the eighth Mahavidya among the ten Mahavidyas in Hinduism. Maa Baglamukhi is strongly associated with the color yellow, which symbolizes power, victory, positivity, and spiritual energy. Therefore, yellow clothes, turmeric, yellow flowers, and sacred yellow offerings are commonly used in her worship rituals. Historically, kings, warriors, and spiritual practitioners worshipped Maa Baglamukhi for victory, enemy destruction, protection, and divine blessings. Even today, millions of devotees perform havan, mantra chanting, and anushthan dedicated to Maa Baglamukhi for spiritual growth and success.",
  },
  {
    hindiHeading: "माँ बगलामुखी पूजा का महत्व",
    hindiContent:
      "माँ बगलामुखी की पूजा को अत्यंत प्रभावशाली एवं चमत्कारी माना जाता है। भक्तों का विश्वास है कि सच्चे मन एवं श्रद्धा से की गई पूजा व्यक्ति के जीवन में आने वाली बाधाओं, शत्रुओं, भय, मानसिक तनाव एवं नकारात्मक ऊर्जा को दूर करती है। विशेष रूप से न्यायालय संबंधी समस्याएं, व्यापार में रुकावट, करियर संबंधी परेशानियां तथा वैवाहिक जीवन की कठिनाइयों के समाधान हेतु माँ बगलामुखी की पूजा अत्यंत लाभकारी मानी जाती है। नियमित पूजा एवं मंत्र जाप से आध्यात्मिक शांति, आत्मविश्वास तथा सकारात्मक ऊर्जा प्राप्त होती है।",
    englishHeading: "Importance of Maa Baglamukhi Worship",
    englishContent:
      "The worship of Maa Baglamukhi is considered highly powerful and spiritually transformative. Devotees believe that sincere prayers and rituals dedicated to Maa Baglamukhi help remove obstacles, enemies, fear, mental stress, and negative energies from life. Her worship is especially considered beneficial for court-related matters, business growth, career success, and relationship stability. Regular prayers, havan, and mantra chanting are believed to bring spiritual peace, confidence, positivity, and divine protection.",
  },
  {
    hindiHeading: "माँ बगलामुखी साधना",
    hindiContent:
      "माँ बगलामुखी साधना को अत्यंत गुप्त एवं शक्तिशाली साधना माना जाता है। यह साधना मुख्य रूप से मानसिक शक्ति, आत्मविश्वास, आध्यात्मिक उन्नति तथा शत्रु बाधा निवारण हेतु की जाती है। योग्य गुरु एवं विद्वान ब्राह्मणों के मार्गदर्शन में की गई साधना विशेष रूप से फलदायी मानी जाती है। साधना के दौरान विशेष मंत्र जाप, हवन, ध्यान एवं वैदिक अनुष्ठानों का पालन किया जाता है। धार्मिक मान्यता के अनुसार यह साधना व्यक्ति को नकारात्मक शक्तियों से सुरक्षा एवं जीवन में सफलता प्रदान करती है।",
    englishHeading: "Maa Baglamukhi Sadhana",
    englishContent:
      "Maa Baglamukhi Sadhana is regarded as a highly sacred and powerful spiritual practice. It is mainly performed for inner strength, confidence, spiritual growth, and protection from enemies and negativity. When performed under the guidance of experienced priests and spiritual gurus, this sadhana is believed to produce powerful spiritual results. The practice includes mantra chanting, havan rituals, meditation, and Vedic procedures. Devotees believe that Maa Baglamukhi Sadhana creates divine protection and brings success, positivity, and spiritual balance into life.",
  },
];

const MaaBaglamukhiSeoSection = () => {
  return (
    <section
      className="py-14"
      style={{ background: "#5A0000" }}
      aria-label="Maa Baglamukhi spiritual information"
    >
      <div className="container mx-auto px-4 max-w-3xl">
        <header className="text-center mb-10">
          <h2
            className="text-2xl md:text-4xl font-extrabold text-golden-shadow"
            style={{ color: "#FFD700" }}
          >
            माँ बगलामुखी — सम्पूर्ण आध्यात्मिक जानकारी
          </h2>
          <p className="text-white/80 mt-3 text-sm md:text-base">
            Maa Baglamukhi — Complete Spiritual Guide, History, Worship, Havan & Sadhana
          </p>
        </header>

        <div className="space-y-10 text-white/85 leading-relaxed text-sm md:text-base">
          {blocks.map((b, i) => (
            <article key={i} className="space-y-4">
              <h3
                className="text-xl md:text-2xl font-bold"
                style={{ color: "#FFD700" }}
              >
                {b.hindiHeading}
              </h3>
              <p>{b.hindiContent}</p>

              <h3
                className="text-xl md:text-2xl font-bold pt-2"
                style={{ color: "#FFD700" }}
              >
                {b.englishHeading}
              </h3>
              <p>{b.englishContent}</p>
            </article>
          ))}

          <div
            className="rounded-xl p-5 md:p-6 mt-6 text-center"
            style={{
              background: "rgba(255,140,0,0.15)",
              border: "1px solid rgba(255,215,0,0.35)",
            }}
          >
            <p className="text-white/90 text-sm md:text-base">
              अधिक जानकारी एवं बुकिंग के लिए —{" "}
              <Link
                to="/havan-booking"
                className="underline font-semibold"
                style={{ color: "#FFD700" }}
              >
                हवन बुकिंग
              </Link>{" "}
              •{" "}
              <Link
                to="/baglamukhi-havan"
                className="underline font-semibold"
                style={{ color: "#FFD700" }}
              >
                बगलामुखी हवन
              </Link>{" "}
              •{" "}
              <Link
                to="/lal-mirch-havan"
                className="underline font-semibold"
                style={{ color: "#FFD700" }}
              >
                लाल मिर्च हवन
              </Link>{" "}
              •{" "}
              <Link
                to="/baglamukhi-anushthan"
                className="underline font-semibold"
                style={{ color: "#FFD700" }}
              >
                बगलामुखी अनुष्ठान
              </Link>{" "}
              •{" "}
              <Link
                to="/contact"
                className="underline font-semibold"
                style={{ color: "#FFD700" }}
              >
                संपर्क करें
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaaBaglamukhiSeoSection;
