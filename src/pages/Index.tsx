import HeroSection from "@/components/HeroSection";
import HavanCard from "@/components/HavanCard";
import PanditSection from "@/components/PanditSection";
import CallSection from "@/components/CallSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BookingForm from "@/components/BookingForm";
import { havans } from "@/data/havans";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <main>
      <HeroSection />

      {/* Top Havans - right after hero */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              लोकप्रिय <span className="text-gradient-golden">हवन सेवाएं</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              माँ बगलामुखी की कृपा से जीवन की हर समस्या का समाधान
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {havans.slice(0, 4).map((h) => (
              <HavanCard key={h.id} havan={h} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/havan-types"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
            >
              सभी हवन देखें <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>


      {/* Pandit Section */}
      <PanditSection />

      {/* Call Section */}
      <CallSection />

      <TestimonialsSection />

      {/* Booking CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                अभी <span className="text-gradient-golden">बुकिंग करें</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                माँ बगलामुखी की कृपा से अपने जीवन की हर समस्या का समाधान पाएं।
                फ़ॉर्म भरें, हम 24 घंटे में आपसे संपर्क करेंगे।
              </p>
              <div className="gradient-red text-secondary-foreground p-4 rounded-lg text-sm font-medium">
                ⏰ सीमित स्लॉट उपलब्ध — जल्दी बुक करें!
              </div>
            </div>
            <BookingForm />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
