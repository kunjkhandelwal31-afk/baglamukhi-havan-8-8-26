import Seo from "@/components/Seo";
import SeoCta from "@/components/SeoCta";
import BookingForm from "@/components/BookingForm";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

const HavanBookingPage = () => (
  <>
    <Seo
      title="Havan Booking | Online Baglamukhi Havan Booking — India & Worldwide"
      description="Online Havan Booking — Baglamukhi Havan, Lal Mirch Havan, Anushthan के लिए instant booking। 24-घंटे संपर्क की गारंटी। India + worldwide service."
      path="/havan-booking"
      keywords="havan booking, baglamukhi havan booking, online havan booking, baglamukhi pandit, book havan online"
    />
    <main className="py-14" style={{ background: '#6B0000', color: 'white' }}>
      <article className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-golden-shadow" style={{ color: '#FFD700' }}>
          Havan Booking — ऑनलाइन हवन बुकिंग
        </h1>
        <p className="text-white/85 text-lg leading-relaxed mb-6">
          <strong style={{ color: '#FFD700' }}>Havan booking</strong> अब केवल एक क्लिक दूर है। आप विश्व
          के किसी भी स्थान से <Link to="/baglamukhi-havan" className="underline" style={{ color: '#FFD700' }}>Baglamukhi Havan</Link>,{" "}
          <Link to="/lal-mirch-havan" className="underline" style={{ color: '#FFD700' }}>Lal Mirch Havan</Link> एवं{" "}
          <Link to="/baglamukhi-anushthan" className="underline" style={{ color: '#FFD700' }}>Baglamukhi Anushthan</Link> book कर सकते हैं।
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-3" style={{ color: '#FFD700' }}>
          हमारी सेवाएं
        </h2>
        <ul className="space-y-2 mb-4">
          {[
            "बगलामुखी हवन — शत्रु नाश, vijay prapti",
            "लाल मिर्च हवन — tantra nivaran, नज़र दोष",
            "Court Case Havan — कानूनी मामलों में विजय",
            "बगलामुखी अनुष्ठान — 36000 / सवा लाख / पंचलक्षी",
            "ग्रह शांति, नवग्रह हवन",
            "गृह प्रवेश, वास्तु शांति हवन",
          ].map((b) => (
            <li key={b} className="flex items-start gap-2 text-white/90">
              <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" style={{ color: '#FFD700' }} /> {b}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-3" style={{ color: '#FFD700' }}>
          Booking कैसे करें — Process
        </h2>
        <ol className="list-decimal pl-6 space-y-2 text-white/85 mb-4">
          <li>नीचे form भरें या +91 70000 54787 पर कॉल/WhatsApp करें</li>
          <li>हमारी टीम 24 घंटे में आपसे संपर्क करेगी</li>
          <li>अनुष्ठान की तिथि, सामग्री एवं विधि finalise करें</li>
          <li>50% advance payment से booking confirm</li>
          <li>निर्धारित दिन पर हवन सम्पन्न + video/photo proof</li>
          <li>प्रसाद / यंत्र साधक को भेजा जाता है</li>
        </ol>

        <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-3" style={{ color: '#FFD700' }}>
          Pricing — पारदर्शी मूल्य
        </h2>
        <ul className="space-y-2 mb-4 text-white/90">
          <li>सामान्य बगलामुखी हवन — ₹5,100 से प्रारंभ</li>
          <li>लाल मिर्च हवन — ₹11,000 से</li>
          <li>36,000 मंत्र अनुष्ठान — ₹31,000</li>
          <li>सवा लाख मंत्र अनुष्ठान — ₹61,000</li>
          <li>पंचलक्षी महा-अनुष्ठान — ₹1,51,000</li>
        </ul>

        <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-3" style={{ color: '#FFD700' }}>
          Why Choose Our Booking Service
        </h2>
        <ul className="space-y-2 mb-6">
          {[
            "नलखेड़ा (Agar Malwa, MP) के सिद्ध मंदिर के अनुभवी पंडित",
            "India + worldwide service — कहीं से भी book करें",
            "पारदर्शी pricing, कोई छुपा शुल्क नहीं",
            "हवन का video/photo proof",
            "247+ संतुष्ट साधक — 4.9/5 rating",
          ].map((b) => (
            <li key={b} className="flex items-start gap-2 text-white/90">
              <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" style={{ color: '#FFD700' }} /> {b}
            </li>
          ))}
        </ul>

        <div className="bg-card rounded-xl border border-border p-6 my-6">
          <BookingForm />
        </div>

        <SeoCta headline="अभी कॉल करें या WhatsApp पर संपर्क करें" />
      </article>
    </main>
  </>
);

export default HavanBookingPage;
