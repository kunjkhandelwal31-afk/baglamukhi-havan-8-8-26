import HavanCard from "@/components/HavanCard";
import { havans } from "@/data/havans";

const HavanTypes = () => {
  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            🔥 हवन के <span className="text-gradient-golden">प्रकार</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
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
