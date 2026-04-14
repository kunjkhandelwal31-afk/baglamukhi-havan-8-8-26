import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

const anushthanList = [
  {
    icon: "🔱",
    title: "बगलामुखी शत्रु नाश अनुष्ठान",
    description: "शत्रुओं के विनाश और मुकदमों में विजय के लिए 11,000 मंत्र जाप सहित पूर्ण अनुष्ठान।",
    benefits: ["शत्रु नाश", "कोर्ट-कचहरी में विजय", "सभी बाधाओं का निवारण"],
    duration: "3-7 दिन",
    price: "₹21,000 से",
  },
  {
    icon: "📿",
    title: "सवा लाख मंत्र जाप अनुष्ठान",
    description: "1,25,000 मंत्र जाप के साथ हवन और तर्पण — अत्यंत शक्तिशाली अनुष्ठान।",
    benefits: ["गहन साधना", "मनोकामना पूर्ति", "आध्यात्मिक उन्नति"],
    duration: "11 दिन",
    price: "₹51,000 से",
  },
  {
    icon: "🪔",
    title: "नवरात्रि विशेष अनुष्ठान",
    description: "नवरात्रि के 9 दिनों में विशेष विधि-विधान से माँ बगलामुखी का पूर्ण अनुष्ठान।",
    benefits: ["नवरात्रि का पूर्ण फल", "माँ की विशेष कृपा", "सर्व कार्य सिद्धि"],
    duration: "9 दिन",
    price: "₹31,000 से",
  },
  {
    icon: "🔥",
    title: "विजय प्राप्ति अनुष्ठान",
    description: "चुनाव, प्रतियोगिता, व्यापार और जीवन के हर क्षेत्र में विजय प्राप्ति के लिए विशेष अनुष्ठान।",
    benefits: ["हर क्षेत्र में विजय", "प्रतियोगिता में सफलता", "व्यापारिक उन्नति"],
    duration: "5-7 दिन",
    price: "₹25,000 से",
  },
  {
    icon: "💰",
    title: "धन-लक्ष्मी प्राप्ति अनुष्ठान",
    description: "आर्थिक समस्याओं से मुक्ति और धन-संपत्ति की प्राप्ति के लिए विशेष साधना।",
    benefits: ["धन लाभ", "ऋण मुक्ति", "आर्थिक स्थिरता"],
    duration: "7 दिन",
    price: "₹31,000 से",
  },
  {
    icon: "🛡️",
    title: "सुरक्षा कवच अनुष्ठान",
    description: "बुरी नज़र, नकारात्मक ऊर्जा और तांत्रिक प्रयोगों से रक्षा के लिए विशेष अनुष्ठान।",
    benefits: ["बुरी नज़र से सुरक्षा", "तांत्रिक प्रयोगों से मुक्ति", "घर-परिवार की रक्षा"],
    duration: "5 दिन",
    price: "₹21,000 से",
  },
];

const AnushthanPage = () => {
  return (
    <main className="py-16 pb-24 yantra-bg" style={{ background: '#8B0000' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#FFD700' }}>
            📿 अनुष्ठान के प्रकार
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            माँ बगलामुखी की विभिन्न अनुष्ठान सेवाएं — गहन साधना, मंत्र जाप, हवन और तर्पण सहित।
            अनुभवी पंडित जी द्वारा पूर्ण विधि-विधान से संपन्न।
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {anushthanList.map((a) => (
            <div
              key={a.title}
              className="rounded-xl p-6 hover:shadow-golden transition-all group"
              style={{ background: '#F57C00', border: '1px solid rgba(255,215,0,0.4)', boxShadow: '0 4px 20px rgba(0,0,0,0.25)' }}
            >
              <div className="text-4xl mb-4">{a.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-golden-outline" style={{ color: '#FFD700' }}>{a.title}</h3>
              <p className="text-white text-sm mb-4 leading-relaxed">{a.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {a.benefits.map((b) => (
                  <span
                    key={b}
                    className="text-xs px-2.5 py-1 rounded-full font-medium"
                    style={{ background: 'rgba(139,0,0,0.5)', color: '#FFD700' }}
                  >
                    {b}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-sm mb-4">
                <span className="text-white/90">⏱️ {a.duration}</span>
                <span className="font-bold text-golden-outline" style={{ color: '#FFD700' }}>{a.price}</span>
              </div>
              <Link
                to="/booking"
                className="btn-shimmer w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all hover:scale-105"
              >
                <BookOpen className="h-4 w-4" /> अनुष्ठान बुक करें
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default AnushthanPage;
