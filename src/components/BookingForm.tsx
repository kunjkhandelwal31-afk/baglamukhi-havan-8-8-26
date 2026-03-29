import { useState } from "react";
import { havans } from "@/data/havans";
import { toast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const BookingForm = ({ preselectedHavan }: { preselectedHavan?: string }) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
    havanType: preselectedHavan || "",
    date: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.havanType || !form.date) {
      toast({ title: "कृपया सभी आवश्यक फ़ील्ड भरें", variant: "destructive" });
      return;
    }
    const bookingId = "BGL" + Date.now().toString(36).toUpperCase();
    toast({
      title: "बुकिंग सफल! 🙏",
      description: `बुकिंग ID: ${bookingId} — हम जल्द ही आपसे संपर्क करेंगे।`,
    });
    setForm({ name: "", phone: "", location: "", havanType: "", date: "" });
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
        <option value="">हवन का प्रकार चुनें *</option>
        {havans.map((h) => (
          <option key={h.id} value={h.id}>
            {h.name} — {h.price}
          </option>
        ))}
      </select>
      <input
        type="date"
        value={form.date}
        onChange={(e) => setForm({ ...form, date: e.target.value })}
        className={inputClass}
      />
      <button
        type="submit"
        className="w-full gradient-golden text-primary-foreground py-3.5 rounded-lg font-bold text-lg shadow-golden hover:shadow-lg transition-all flex items-center justify-center gap-2"
      >
        <Send className="h-5 w-5" />
        बुकिंग करें
      </button>
    </form>
  );
};

export default BookingForm;
