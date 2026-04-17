import { Link } from "react-router-dom";
import { Flame, ArrowRight, Phone } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import heroVideo from "@/assets/hero-video.mp4";

const HeroSection = () => {
  return (
    <section id="hero-section">
      {/* Video Banner */}
      <div className="w-full" style={{ background: '#4A0000' }}>
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto block mx-auto"
        />
      </div>

      {/* Content Below Video */}
      <div className="py-10 md:py-14" style={{ background: '#6B0000' }}>
        <div className="container mx-auto px-4 max-w-2xl text-center space-y-5">
          <div className="flex items-center justify-center gap-2" style={{ color: '#FFD700' }}>
            <Flame className="h-6 w-6 animate-flame" />
            <span className="text-sm font-semibold tracking-wider uppercase">
              ॐ ह्लीं बगलामुखी सर्वदुष्टानां वाचं मुखं पदं स्तम्भय
            </span>
          </div>

          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-golden-shadow"
            style={{ color: '#FFD700' }}
          >
            मां बगलामुखी हवन सेवा{" "}
            <span className="text-white block text-xl md:text-2xl lg:text-3xl mt-2 font-bold">(Maa Baglamukhi Hawan Service)</span>
          </h1>
          <p className="text-sm text-white/70">हवन पंडित बुकिंग • मध्य प्रदेश, भारत</p>

          <p className="text-base md:text-lg leading-relaxed text-white/85">
            अनुभवी पंडित जी द्वारा बगलामुखी पूजा, हवन एवं अनुष्ठान बुक करें।
            माँ बगलामुखी की कृपा से शत्रुओं का नाश, कोर्ट-कचहरी में विजय और जीवन में सफलता प्राप्त करें।
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link
              to="/booking"
              className="btn-shine-visible px-8 py-4 rounded-lg text-lg font-bold shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center gap-2 hover:scale-105"
            >
              अभी हवन बुक करें
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/havan-types"
              className="border-2 px-8 py-4 rounded-lg text-lg font-bold hover:bg-white/10 transition-all inline-flex items-center justify-center"
              style={{ borderColor: '#FFD700', color: '#FFD700' }}
            >
              हवन के प्रकार
            </Link>
          </div>

          <div className="flex items-center justify-center gap-6 pt-4 text-white/80">
            <div className="text-center">
              <div className="text-2xl font-bold" style={{ color: '#FFD700' }}>5000+</div>
              <div className="text-xs">सफल हवन</div>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div className="text-center">
              <div className="text-2xl font-bold" style={{ color: '#FFD700' }}>10+</div>
              <div className="text-xs">वर्षों का अनुभव</div>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div className="text-center">
              <div className="text-2xl font-bold" style={{ color: '#FFD700' }}>100%</div>
              <div className="text-xs">संतुष्टि गारंटी</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href="tel:+918103960297"
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-white/20 transition-colors text-white"
            >
              <Phone className="h-4 w-4" />
              +91 81039 60297
            </a>
            <a
              href="https://wa.me/918103960297?text=मुझे हवन बुक करना है"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-white/20 transition-colors text-white"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
