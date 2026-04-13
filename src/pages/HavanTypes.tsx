import HavanCard from "@/components/HavanCard";
import { havans } from "@/data/havans";

const HavanTypes = () => {
  return (
    <main className="py-16 pb-24 yantra-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#FFD700' }}>
            हवन के प्रकार
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            माँ बगलामुखी की विभिन्न हवन सेवाओं में से अपनी आवश्यकता के अनुसार चयन करें।
            सभी हवन अनुभवी पंडित जी द्वारा पूर्ण सामग्री सहित कराए जाते हैं।
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {havans.map((h) => (
            <HavanCard key={h.id} havan={h} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default HavanTypes;
