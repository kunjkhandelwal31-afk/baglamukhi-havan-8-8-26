import { Link } from "react-router-dom";
import { Flame, ArrowRight } from "lucide-react";
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
          <p className="text-sm text-white/70">हवन पंडित बुकिंग • विश्वभर में ऑनलाइन सेवा उपलब्ध</p>

          <p className="text-base md:text-lg leading-relaxed text-white/85">
            अनुभवी पंडित जी द्वारा बगलामुखी पूजा, हवन एवं अनुष्ठान बुक करें।
            माँ बगलामुखी की कृपा से शत्रुओं का नाश, कोर्ट-कचहरी में विजय और जीवन में सफलता प्राप्त करें।
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link
              to="/booking"
              aria-label="अभी हवन बुक करें - Book Maa Baglamukhi Hawan"
              className="btn-shine-visible px-8 py-4 rounded-lg text-lg font-bold shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center gap-2 hover:scale-105"
            >
              अभी हवन बुक करें
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/havan-types"
              aria-label="हवन के प्रकार - baglamukhi puja service types"
              className="border-2 px-8 py-4 rounded-lg text-lg font-bold hover:bg-white/10 transition-all inline-flex items-center justify-center"
              style={{ borderColor: '#FFD700', color: '#FFD700' }}
            >
              हवन के प्रकार
            </Link>
          </div>
          <p className="text-xs text-white/70 -mt-1">
            तुरंत हवन बुक करें | Instant online hawan booking available
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
