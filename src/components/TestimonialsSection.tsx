import { Star } from "lucide-react";
import ContactStrip from "@/components/ContactStrip";

const testimonials = [
  {
    name: "Rahul S.",
    location: "इंदौर, मध्य प्रदेश",
    text: "कोर्ट केस में लंबे समय से परेशान था। पंडित जी ने शत्रु नाश हवन कराया और कुछ ही महीनों में फैसला हमारे पक्ष में आया। पूरी प्रक्रिया बहुत शांत और विधिवत थी।",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    location: "जयपुर",
    text: "घर में लगातार झगड़े और अशांति थी। माँ बगलामुखी सामान्य हवन के बाद माहौल काफ़ी बदल गया। पंडित जी ने फ़ोन पर भी अच्छे से समझाया, कोई जल्दबाज़ी नहीं की।",
    rating: 5,
  },
  {
    name: "Amit V.",
    location: "लखनऊ",
    text: "बिज़नेस में बार-बार रुकावट आ रही थी। महाविशेष हवन करवाया — एक नए कॉन्ट्रैक्ट के साथ चीज़ें पटरी पर लौटीं। बुकिंग से लेकर पूजा तक सब आसान रहा।",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 yantra-bg" style={{ background: '#7A0000' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#FFD700' }}>
            भक्तों के अनुभव
          </h2>
          <p className="text-white/70 max-w-xl mx-auto">
            हमारे भक्तों ने माँ बगलामुखी की कृपा से अपने जीवन में सकारात्मक बदलाव अनुभव किए हैं
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-xl p-6 hover:shadow-golden transition-all"
              style={{ background: '#FF8C00', border: '1px solid rgba(255,215,0,0.3)' }}
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-sm text-white mb-4 leading-relaxed italic">
                "{t.text}"
              </p>
              <div>
                <div className="font-semibold" style={{ color: '#FFD700' }}>{t.name}</div>
                <div className="text-xs text-white/80">{t.location}</div>
              </div>
            </div>
          ))}
        </div>

        <ContactStrip className="mt-10" />
      </div>
    </section>
  );
};

export default TestimonialsSection;
