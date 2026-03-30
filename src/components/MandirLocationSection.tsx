import { MapPin, Navigation } from "lucide-react";

const MandirLocationSection = () => {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            मंदिर का <span className="text-gradient-golden">स्थान</span>
          </h2>
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            <MapPin className="h-5 w-5 text-accent" />
            माँ बगलामुखी मंदिर, नलखेड़ा, जिला आगर मालवा, मध्य प्रदेश, भारत
          </p>
          <a href="tel:+918103960297" className="inline-block mt-3 text-accent font-semibold hover:underline">
            📞 +91 81039 60297
          </a>
        </div>

        <div className="max-w-4xl mx-auto rounded-xl overflow-hidden border border-border shadow-golden">
          <iframe
            src="https://www.google.com/maps?q=Maa+Baglamukhi+Temple+Nalkheda+Agar+Malwa+Madhya+Pradesh&output=embed"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="माँ बगलामुखी मंदिर स्थान"
          />
        </div>

        <div className="text-center mt-6">
          <a
            href="https://www.google.com/maps/search/Maa+Baglamukhi+Temple+Nalkheda+Agar+Malwa+Madhya+Pradesh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 gradient-golden text-primary-foreground px-6 py-3 rounded-lg font-bold shadow-golden hover:shadow-lg transition-all"
          >
            <Navigation className="h-5 w-5" />
            👉 दिशा देखें
          </a>
        </div>
      </div>
    </section>
  );
};

export default MandirLocationSection;
