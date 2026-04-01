import { useState } from "react";
import { havans } from "@/data/havans";
import { toast } from "@/hooks/use-toast";
import { Send, Shield, Star, Users } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const BookingForm = ({ preselectedHavan }: { preselectedHavan?: string }) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
    havanType: preselectedHavan || "",
    date: "",
    gotra: "",
    nakshatra: "",
  });
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.havanType || !form.date) {
      toast({ title: "कृपया सभी आवश्यक फ़ील्ड भरें", variant: "destructive" });
      return;
    }

    const selectedHavan = havans.find((h) => h.id === form.havanType);
    const havanName = selectedHavan?.name || form.havanType;
    const price = selectedHavan?.price || "N/A";

    const message = `🙏 *नई हवन बुकिंग*\n\n👤 नाम: ${form.name}\n📞 मोबाइल: ${form.phone}\n📍 स्थान: ${form.location || "N/A"}\n🔥 हवन: ${havanName}\n💰 शुल्क: ${price}\n📅 तिथि: ${form.date}\n🪷 गोत्र: ${form.gotra || "N/A"}\n⭐ नक्षत्र: ${form.nakshatra || "N/A"}`;

    const waURL = `https://wa.me/918103960297?text=${encodeURIComponent(message)}`;
    window.open(waURL, "_blank");

    toast({
      title: "WhatsApp पर बुकिंग भेजी जा रही है! 🙏",
      description: "कृपया WhatsApp पर मैसेज भेजें।",
    });
    setForm({ name: "", phone: "", location: "", havanType: "", date: "", gotra: "", nakshatra: "" });
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="आपका नाम *"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className={inputClass}
        maxLength={100}
      />
      <input
        type="tel"
        placeholder="मोबाइल नंबर *"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        className={inputClass}
        maxLength={15}
      />
      <input
        type="text"
        placeholder="स्थान / शहर"
        value={form.location}
        onChange={(e) => setForm({ ...form, location: e.target.value })}
        className={inputClass}
        maxLength={100}
      />
      <select
        value={form.havanType}
        onChange={(e) => setForm({ ...form, havanType: e.target.value })}
        className={inputClass}
      >
        <option value="">हवन / सेवा का प्रकार चुनें *</option>
        {havans.map((h) => (
          <option key={h.id} value={h.id}>
            {h.name} — {h.price}
          </option>
        ))}
        <option value="vip-darshan">VIP गर्भ गृह दर्शन — ₹2,100 – ₹5,100</option>
        <option value="vip-combo">VIP + हवन कॉम्बो — ₹7,100 – ₹21,000</option>
      </select>
      <div>
        <label className="block text-sm font-medium text-foreground mb-1">हवन की तिथि *</label>
        <input
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          className={inputClass}
        />
      </div>
      <input
        type="text"
        placeholder="गोत्र (वैकल्पिक)"
        value={form.gotra}
        onChange={(e) => setForm({ ...form, gotra: e.target.value })}
        className={inputClass}
        maxLength={50}
      />
      <input
        type="text"
        placeholder="नक्षत्र (वैकल्पिक)"
        value={form.nakshatra}
        onChange={(e) => setForm({ ...form, nakshatra: e.target.value })}
        className={inputClass}
        maxLength={50}
      />
      <button
        type="submit"
        className="w-full gradient-golden text-primary-foreground py-3.5 rounded-lg font-bold text-lg shadow-golden hover:shadow-lg transition-all flex items-center justify-center gap-2"
      >
        <WhatsAppIcon className="h-6 w-6" />
        बुकिंग कन्फर्म करें
      </button>

      {/* Trust Badges */}
      <div className="flex items-center justify-center gap-4 pt-2 text-xs text-muted-foreground">
        <span className="flex items-center gap-1"><Shield className="h-3.5 w-3.5 text-accent" /> सुरक्षित भुगतान</span>
        <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 text-accent" /> 1000+ सफल हवन</span>
        <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5 text-accent" /> संतुष्ट ग्राहक</span>
      </div>
    </form>
  );
};

export default BookingForm;
