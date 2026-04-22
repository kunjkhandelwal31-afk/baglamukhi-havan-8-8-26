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
        title="Contact for Baglamukhi Havan Booking"
        description="Call or WhatsApp for Baglamukhi Havan, Puja and Anushthan booking in Nalkheda, Madhya Pradesh, India with clear guidance."
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
            माँ बगलामुखी हवन, अनुष्ठान एवं पूजा बुकिंग के लिए अभी संपर्क करें।
          </p>
          <p className="text-white/70 max-w-2xl mx-auto mt-3">
            Contact us for Baglamukhi Havan, Puja and Anushthan guidance from Nalkheda, Madhya Pradesh.
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
            बगलामुखी हवन बुकिंग सेवा
          </h2>
          <p>
            माँ बगलामुखी हवन, बगलामुखी पूजा और बगलामुखी अनुष्ठान की बुकिंग के लिए आप सीधे कॉल या WhatsApp द्वारा संपर्क कर सकते हैं। हमारी सेवा नलखेड़ा, मध्य प्रदेश, भारत से जुड़ी हुई है, जहाँ माँ बगलामुखी की उपासना को विशेष महत्व दिया जाता है। यदि आप शत्रु बाधा, कोर्ट केस, व्यापार में रुकावट, नज़र दोष, तंत्र बाधा, मानसिक भय या जीवन में लगातार आ रही असफलताओं से परेशान हैं, तो पंडित जी आपकी स्थिति समझकर उचित पूजा या हवन का मार्गदर्शन देते हैं।
          </p>
          <p>
            बुकिंग प्रक्रिया सरल और स्पष्ट है। सबसे पहले आप अपनी समस्या, नाम, गोत्र और स्थान की जानकारी साझा करते हैं। इसके बाद उपलब्ध तिथि, मुहूर्त, पूजा सामग्री, मंत्र संख्या और सेवा का प्रकार बताया जाता है। श्रद्धालु अपनी आवश्यकता के अनुसार लाल मिर्च हवन, शत्रु नाश हवन, कोर्ट केस हवन, विजय प्राप्ति हवन या विस्तृत बगलामुखी अनुष्ठान चुन सकते हैं। हवन booking के बाद पूजा विधि पूर्ण श्रद्धा और शास्त्रसम्मत नियमों के अनुसार संपन्न की जाती है।
          </p>
          <p>
            जो भक्त नलखेड़ा नहीं आ सकते, वे भी फोन या WhatsApp के माध्यम से baglamukhi puja booking online कर सकते हैं। पूजा सम्पन्न होने के बाद आवश्यक जानकारी, फोटो या वीडियो अपडेट उपलब्ध कराए जा सकते हैं। हमारा उद्देश्य भक्त को भरोसेमंद मार्गदर्शन देना, अनावश्यक भ्रम से बचाना और सही पूजा चयन में मदद करना है।
          </p>

          <h2 className="text-xl font-bold pt-4" style={{ color: '#FFD700' }}>
            बुकिंग के लिए क्या जानकारी दें?
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>अपना नाम, गोत्र और शहर बताएं।</li>
            <li>समस्या या उद्देश्य स्पष्ट रूप से बताएं, जैसे court case havan, shatru nash havan या success havan।</li>
            <li>यदि कोई विशेष तिथि, जन्म विवरण या मुहूर्त की इच्छा हो तो साझा करें।</li>
            <li>फोन नंबर और WhatsApp उपलब्ध रखें ताकि पंडित जी सही मार्गदर्शन दे सकें।</li>
            <li>पूजा सेवा, सामग्री और प्रक्रिया की पुष्टि के बाद बुकिंग पूरी करें।</li>
          </ul>

          <h2 className="text-xl font-bold pt-4" style={{ color: '#FFD700' }}>
            हमारी सेवाएं
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><Link to="/baglamukhi-havan" className="underline" style={{ color: '#FFD700' }}>बगलामुखी हवन</Link> — शत्रु स्तंभन एवं सुरक्षा</li>
            <li><Link to="/lal-mirch-havan" className="underline" style={{ color: '#FFD700' }}>लाल मिर्च हवन (Lal Mirch Havan)</Link> — tantra-badha nivaran</li>
            <li><Link to="/baglamukhi-anushthan" className="underline" style={{ color: '#FFD700' }}>बगलामुखी अनुष्ठान</Link> — 36000, सवा लाख, पंचलक्षी मंत्र जाप</li>
            <li><Link to="/havan-booking" className="underline" style={{ color: '#FFD700' }}>Online Havan Booking</Link> — विश्वभर से बुकिंग</li>
          </ul>

          <h2 className="text-2xl font-bold pt-8" style={{ color: '#FFD700' }}>
            Baglamukhi Havan Booking Contact
          </h2>
          <p>
            For Baglamukhi Havan booking, you can call or send a WhatsApp message with your purpose, name, gotra and location. The service is guided from Nalkheda, Madhya Pradesh, India, and is suitable for devotees who want clear spiritual guidance for protection, success, court case stress, enemies, business obstacles or negative energy. The pandit for havan will suggest the right puja only after understanding your situation respectfully.
          </p>
          <p>
            Devotees can choose baglamukhi havan, baglamukhi anushthan, lal mirch havan, court case havan or a general baglamukhi puja based on their needs. Online guidance is available for people living in other cities or outside India. If you are searching for baglamukhi havan near me or baglamukhi havan in nalkheda, this contact page helps you reach the right booking channel quickly without confusion.
          </p>

          <h2 className="text-xl font-bold pt-4" style={{ color: '#FFD700' }}>
            WhatsApp and Call CTA
          </h2>
          <p>
            Call {PHONE_NUMBER_DISPLAY} for direct consultation or use WhatsApp to share your details. For faster response, mention whether you need havan booking, baglamukhi puja booking online, anushthan guidance, lal mirch havan benefits, or a ritual for enemies, court case, nazar dosh or business growth. Clear information helps the pandit recommend the most suitable puja and duration.
          </p>

          <h2 className="text-xl font-bold pt-4" style={{ color: '#FFD700' }}>
            FAQs
          </h2>
          <div className="space-y-3">
            {[
              { q: "फोन नंबर क्या है?", a: `आप सीधे ${PHONE_NUMBER_DISPLAY} पर कॉल कर सकते हैं या WhatsApp द्वारा संपर्क कर सकते हैं।` },
              { q: "Where is the service location?", a: "The service is connected with Maa Baglamukhi worship in Nalkheda, Madhya Pradesh, India." },
              { q: "Can I book from outside India?", a: "Yes, devotees can contact through WhatsApp for online booking guidance and ritual updates." },
            ].map((f) => (
              <div key={f.q} className="rounded-lg p-4" style={{ background: 'rgba(255,140,0,0.12)', border: '1px solid rgba(255,215,0,0.25)' }}>
                <h3 className="font-bold mb-1 text-sm" style={{ color: '#FFD700' }}>{f.q}</h3>
                <p className="text-white/80 text-sm">{f.a}</p>
              </div>
            ))}
          </div>

          <p className="pt-3">
            पहले <Link to="/havan" className="underline" style={{ color: '#FFD700' }}>हवन के प्रकार</Link> देखें, फिर <Link to="/anushthan" className="underline" style={{ color: '#FFD700' }}>अनुष्ठान सेवा</Link> पढ़ें और अंत में इस पेज से बुकिंग पूरी करें।
          </p>

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
