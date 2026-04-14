import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Award, CheckCircle, Shield, Star, ArrowRight } from "lucide-react";
import panditImg from "@/assets/pandit-ji.jpg";
import ContactStrip from "@/components/ContactStrip";

const features = [
  "10+ वर्षों का अनुभव",
  "शुद्ध वैदिक विधि",
  "घर पर एवं मंदिर में सेवा",
  "सम्पूर्ण सामग्री उपलब्ध",
  "विशेष आशीर्वाद",
];

const trustBadges = [
  { icon: Award, label: "10+ वर्ष अनुभव" },
  { icon: Shield, label: "प्रमाणित पंडित" },
  { icon: Star, label: "100% संतुष्टि" },
];

const PanditSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 yantra-bg" style={{ background: '#7A0000' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#FFD700' }}>
            पंडित जी के बारे में जानें
          </h2>
        </div>

        <div
          className={`max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Text */}
          <div className="order-2 md:order-1">
            <p className="text-white/85 leading-relaxed mb-6">
              हमारे पंडित जी वैदिक अनुष्ठानों और विशेष रूप से माँ बगलामुखी साधना में 10+ वर्षों का गहरा अनुभव रखते हैं। उन्होंने अनेक सफल हवन और अनुष्ठान सम्पन्न कराए हैं, जिससे हजारों भक्तों को शांति, सुरक्षा और सफलता प्राप्त हुई है।
            </p>
            <p className="text-white/85 leading-relaxed mb-6">
              पंडित जी शास्त्रों के अनुसार पूरी विधि-विधान से हवन सम्पन्न कराते हैं, जिससे हर अनुष्ठान का पूर्ण फल प्राप्त होता है। उनकी साधना, मंत्र शक्ति और अनुभव उन्हें विशेष बनाते हैं।
            </p>

            <h3 className="text-lg font-bold mb-3" style={{ color: '#FFD700' }}>विशेषताएं</h3>
            <ul className="space-y-2 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-white">
                  <CheckCircle className="h-5 w-5 flex-shrink-0" style={{ color: '#FFD700' }} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              {trustBadges.map((b) => (
                <div
                  key={b.label}
                  className="flex items-center gap-2 rounded-full px-4 py-2 shadow-sm"
                  style={{ background: '#FF8C00', border: '1px solid rgba(255,215,0,0.3)' }}
                >
                  <b.icon className="h-5 w-5" style={{ color: '#FFD700' }} />
                  <span className="text-sm font-medium text-white">{b.label}</span>
                </div>
              ))}
            </div>

            <Link
              to="/booking"
              className="btn-shimmer px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-all text-base hover:scale-105"
            >
              👉 अभी हवन बुक करें
              <ArrowRight className="h-4 w-4" />
            </Link>

            <ContactStrip compact className="mt-4 justify-start" />
          </div>

          {/* Image */}
          <div className="order-1 md:order-2">
            <div className="rounded-2xl overflow-hidden shadow-golden" style={{ border: '2px solid rgba(255,215,0,0.3)' }}>
              <img
                src={panditImg}
                alt="पंडित जी हवन करते हुए"
                loading="lazy"
                width={768}
                height={768}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PanditSection;
