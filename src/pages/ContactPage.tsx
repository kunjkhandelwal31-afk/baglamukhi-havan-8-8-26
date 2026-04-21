import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import Seo from "@/components/Seo";
import SeoCta from "@/components/SeoCta";
import { Link } from "react-router-dom";
import { PHONE_TEL_HREF, PHONE_NUMBER_DISPLAY, WHATSAPP_URL } from "@/lib/contact";

const ContactPage = () => {
  return (
    <main className="pb-16">
      <Seo
        title="संपर्क करें | Baglamukhi Havan Booking Contact"
        description="Book Baglamukhi Havan & Anushthan — call, WhatsApp or visit. Nalkheda, Agar Malwa, Madhya Pradesh. 24/7 booking available across India & worldwide."
        path="/contact"
        keywords="baglamukhi havan booking, contact pandit, havan booking, baglamukhi puja contact"
      />

      {/* Hero */}
      <section className="py-14" style={{ background: '#5A0000' }}>
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#FFD700' }}>
            संपर्क करें — Contact for Baglamukhi Havan Booking
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            माँ बगलामुखी हवन, अनुष्ठान एवं पूजा बुकिंग के लिए अभी संपर्क करें। हम India एवं worldwide सेवा प्रदान करते हैं।
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-4xl py-12">
        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <a href={PHONE_TEL_HREF} className="rounded-xl p-8 text-center hover:scale-[1.02] transition-all group"
             style={{ background: 'rgba(255,140,0,0.15)', border: '1px solid rgba(255,215,0,0.3)' }}>
            <Phone className="h-10 w-10 mx-auto mb-3 group-hover:scale-110 transition-transform" style={{ color: '#FFD700' }} />
            <h3 className="font-bold mb-1" style={{ color: '#FFD700' }}>कॉल करें</h3>
            <p className="text-white/80">{PHONE_NUMBER_DISPLAY}</p>
            <p className="text-white/60 text-sm mt-1">24/7 उपलब्ध</p>
          </a>

          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
             className="rounded-xl p-8 text-center hover:scale-[1.02] transition-all group"
             style={{ background: 'rgba(37,211,102,0.15)', border: '1px solid rgba(37,211,102,0.4)' }}>
            <WhatsAppIcon className="h-10 w-10 mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold mb-1" style={{ color: '#25D366' }}>WhatsApp</h3>
            <p className="text-white/80">अभी चैट करें</p>
            <p className="text-white/60 text-sm mt-1">तुरंत उत्तर</p>
          </a>

          <a href="mailto:info@baglamukhihavan.com"
             className="rounded-xl p-8 text-center hover:scale-[1.02] transition-all group"
             style={{ background: 'rgba(255,140,0,0.15)', border: '1px solid rgba(255,215,0,0.3)' }}>
            <Mail className="h-10 w-10 mx-auto mb-3 group-hover:scale-110 transition-transform" style={{ color: '#FFD700' }} />
            <h3 className="font-bold mb-1" style={{ color: '#FFD700' }}>ईमेल</h3>
            <p className="text-white/80">info@baglamukhihavan.com</p>
          </a>

          <div className="rounded-xl p-8 text-center"
               style={{ background: 'rgba(255,140,0,0.15)', border: '1px solid rgba(255,215,0,0.3)' }}>
            <MapPin className="h-10 w-10 mx-auto mb-3" style={{ color: '#FFD700' }} />
            <h3 className="font-bold mb-1" style={{ color: '#FFD700' }}>स्थान</h3>
            <p className="text-white/80">मां बगलामुखी मंदिर, नलखेड़ा<br/>जिला आगर मालवा, मध्यप्रदेश</p>
          </div>
        </div>

        {/* Booking Instructions */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#FFD700' }}>
            हवन बुकिंग कैसे करें — How to Book Baglamukhi Havan
          </h2>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {[
              { step: "1", title: "संपर्क करें", desc: "कॉल, WhatsApp या ऑनलाइन फ़ॉर्म से हमें अपनी समस्या बताएं।" },
              { step: "2", title: "परामर्श", desc: "अनुभवी पंडित जी आपकी समस्या के अनुसार उचित हवन/अनुष्ठान बताएंगे।" },
              { step: "3", title: "बुकिंग पक्की", desc: "तिथि, सामग्री एवं विधि निश्चित कर हवन सम्पन्न किया जाता है।" },
            ].map((s) => (
              <div key={s.step} className="rounded-lg p-5 text-center"
                   style={{ background: 'rgba(255,140,0,0.12)', border: '1px solid rgba(255,215,0,0.25)' }}>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full font-bold text-lg mb-3"
                      style={{ background: '#FFD700', color: '#5A0000' }}>{s.step}</span>
                <h3 className="font-bold mb-1" style={{ color: '#FFD700' }}>{s.title}</h3>
                <p className="text-white/80 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {["24 घंटे में संपर्क", "India & Worldwide Service", "अनुभवी पंडित", "पूर्ण विधि-विधान"].map((t) => (
              <span key={t} className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium"
                    style={{ background: 'rgba(255,215,0,0.15)', color: '#FFD700', border: '1px solid rgba(255,215,0,0.3)' }}>
                <CheckCircle className="h-3 w-3" /> {t}
              </span>
            ))}
          </div>
        </section>

        {/* SEO Content */}
        <section className="text-white/85 leading-relaxed text-sm md:text-base mb-12 space-y-4">
          <h2 className="text-2xl font-bold" style={{ color: '#FFD700' }}>
            Baglamukhi Havan Booking — बगलामुखी हवन बुकिंग सेवा
          </h2>
          <p>
            माँ बगलामुखी मंदिर, <strong>नलखेड़ा (Nalkheda), आगर मालवा (Agar Malwa), मध्यप्रदेश</strong> में स्थित
            हमारी संस्था अनुभवी एवं सिद्ध पंडितों द्वारा <strong>baglamukhi havan</strong>, <strong>lal mirch havan</strong>,
            <strong> baglamukhi anushthan</strong> एवं tantra nivaran havan की सेवा प्रदान करती है।
          </p>
          <p>
            हम <strong>India एवं worldwide</strong> सेवा देते हैं। चाहे आप दिल्ली, मुंबई, बैंगलोर, हैदराबाद में हों
            या USA, UK, Canada, Australia में — आप हमसे ऑनलाइन <strong>havan booking</strong> कर सकते हैं।
            हवन की सम्पूर्ण प्रक्रिया का वीडियो एवं फ़ोटो आपको भेजा जाता है।
          </p>
          <p>
            <strong>Pandit for havan</strong> — हमारे पंडित जी 15+ वर्षों के अनुभवी हैं और माँ बगलामुखी की विशेष
            कृपापात्र हैं। शत्रु नाश, court case victory, nazar dosh nivaran एवं vijay prapti के लिए
            हज़ारों श्रद्धालुओं ने हमारी सेवा का लाभ उठाया है।
          </p>

          <h2 className="text-xl font-bold pt-4" style={{ color: '#FFD700' }}>
            हमारी सेवाएं — Our Havan & Anushthan Services
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><Link to="/baglamukhi-havan" className="underline" style={{ color: '#FFD700' }}>बगलामुखी हवन</Link> — शत्रु स्तंभन एवं सुरक्षा</li>
            <li><Link to="/lal-mirch-havan" className="underline" style={{ color: '#FFD700' }}>लाल मिर्च हवन (Lal Mirch Havan)</Link> — tantra-badha nivaran</li>
            <li><Link to="/baglamukhi-anushthan" className="underline" style={{ color: '#FFD700' }}>बगलामुखी अनुष्ठान</Link> — 36000, सवा लाख, पंचलक्षी मंत्र जाप</li>
            <li><Link to="/havan-booking" className="underline" style={{ color: '#FFD700' }}>Online Havan Booking</Link> — विश्वभर से बुकिंग</li>
          </ul>

          <h2 className="text-xl font-bold pt-4" style={{ color: '#FFD700' }}>
            सेवा समय — Service Availability
          </h2>
          <div className="flex items-start gap-2">
            <Clock className="h-5 w-5 mt-0.5 shrink-0" style={{ color: '#FFD700' }} />
            <p>
              हमारी सेवा <strong>प्रातः 6:00 बजे से रात्रि 10:00 बजे तक</strong> उपलब्ध है।
              आपातकालीन स्थिति में 24/7 WhatsApp पर संपर्क किया जा सकता है।
              हवन की तिथि पंचांग एवं मुहूर्त के अनुसार निश्चित की जाती है।
            </p>
          </div>
        </section>

        <SeoCta headline="अभी हवन बुक करें — Book Baglamukhi Havan Now" />

        {/* Map */}
        <div className="rounded-xl overflow-hidden mt-8" style={{ border: '1px solid rgba(255,215,0,0.3)' }}>
          <iframe
            title="माँ बगलामुखी मंदिर, नलखेड़ा — Baglamukhi Temple Location"
            src="https://www.google.com/maps?q=Maa+Baglamukhi+Temple+Nalkheda+Agar+Malwa+Madhya+Pradesh&output=embed"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
