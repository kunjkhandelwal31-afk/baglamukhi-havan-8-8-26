import { Star } from "lucide-react";
import ContactStrip from "@/components/ContactStrip";

const testimonials = [
  {
    name: "राजेश शर्मा",
    location: "दिल्ली",
    text: "माँ बगलामुखी हवन के बाद कोर्ट केस में विजय मिली। पंडित जी ने बहुत विधिवत हवन कराया। अत्यंत प्रभावशाली!",
    rating: 5,
  },
  {
    name: "प्रिया गुप्ता",
    location: "जयपुर",
    text: "शत्रु नाश हवन से जीवन में बहुत बदलाव आया। सभी बाधाएं दूर हुईं और व्यापार में सफलता मिली।",
    rating: 5,
  },
  {
    name: "अमित वर्मा",
    location: "लखनऊ",
    text: "काला जादू निवारण हवन के बाद घर में शांति लौटी। पंडित जी का अनुभव और ज्ञान अद्भुत है।",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            भक्तों के <span className="text-gradient-golden">अनुभव</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            हमारे भक्तों ने माँ बगलामुखी की कृपा से अपने जीवन में चमत्कारी बदलाव अनुभव किया है
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-background rounded-xl p-6 border border-border hover:shadow-golden transition-all"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-foreground mb-4 leading-relaxed italic">
                "{t.text}"
              </p>
              <div>
                <div className="font-semibold text-foreground">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.location}</div>
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
