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
        </div>

        <div className="max-w-4xl mx-auto rounded-xl overflow-hidden border border-border shadow-golden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.0!2d76.4!3d23.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963b5e5a5a5a5a5%3A0x0!2sMaa%20Baglamukhi%20Temple%2C%20Nalkheda!5e0!3m2!1sen!2sin!4v1700000000000"
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
