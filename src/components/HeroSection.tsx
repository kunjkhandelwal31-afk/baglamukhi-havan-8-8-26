import { Link } from "react-router-dom";
import { Flame, ArrowRight, Phone } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import heroImg from "@/assets/havan-hero.jpg";

const HeroSection = () => {
  return (
    <section id="hero-section" className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="माँ बगलामुखी हवन"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl space-y-6 animate-float-up">
          <div className="flex items-center gap-2" style={{ color: '#FFD700' }}>
            <Flame className="h-6 w-6 animate-flame" />
            <span className="text-sm font-semibold tracking-wider uppercase">
              ॐ ह्लीं बगलामुखी सर्वदुष्टानां वाचं मुखं पदं स्तम्भय
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg" style={{ color: '#FFD700' }}>
            माँ बगलामुखी मंदिर{" "}
            <span className="text-white">पंडित बुकिंग सेवा</span>
          </h1>

          <p className="text-lg md:text-xl leading-relaxed text-white/85">
            अनुभवी पंडित जी द्वारा बगलामुखी पूजा, हवन एवं अनुष्ठान बुक करें।
            माँ बगलामुखी की कृपा से शत्रुओं का नाश, कोर्ट-कचहरी में विजय और जीवन में सफलता प्राप्त करें।
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Link
              to="/booking"
              className="px-8 py-4 rounded-lg text-lg font-bold shadow-golden hover:shadow-lg transition-all inline-flex items-center justify-center gap-2 hover:scale-105"
              style={{ background: '#FFD700', color: '#1a1a1a' }}
            >
              अभी पंडित बुक करें
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/havan-types"
              className="border-2 px-8 py-4 rounded-lg text-lg font-bold hover:bg-white/10 transition-all inline-flex items-center justify-center"
              style={{ borderColor: '#FFD700', color: '#FFD700' }}
            >
              हवन देखें
            </Link>
          </div>

          <div className="flex items-center gap-6 pt-4 text-white/80">
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

          {/* Contact in hero */}
          <div className="flex flex-col sm:flex-row items-start gap-3 pt-2">
            <a
              href="tel:+918103960297"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-white/20 transition-colors text-white"
            >
              <Phone className="h-4 w-4" />
              📞 +91 81039 60297
            </a>
            <a
              href="https://wa.me/918103960297?text=मुझे हवन बुक करना है"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-white/20 transition-colors text-white"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp करें
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
