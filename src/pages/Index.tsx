import HeroSection from "@/components/HeroSection";
import HavanCard from "@/components/HavanCard";
import PanditSection from "@/components/PanditSection";
import CallSection from "@/components/CallSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import MandirLocationSection from "@/components/MandirLocationSection";
import BookingForm from "@/components/BookingForm";
import { havans } from "@/data/havans";
import { products } from "@/data/products";
import { Link } from "react-router-dom";
import { ArrowRight, Star, ShoppingCart } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const Index = () => {
  return (
    <main>
      <HeroSection />

      {/* Top Havans */}
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

      {/* Featured Products from Shop */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              दिव्य <span className="text-gradient-golden">आध्यात्मिक उत्पाद</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              पंडित जी द्वारा अभिमंत्रित सिद्ध सामग्री — सीधे घर पर मंगवाएं
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {products
              .filter((p) => ["tabiz", "kavach"].includes(p.id))
              .map((product) => (
                <div
                  key={product.id}
                  className="bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-golden transition-all group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      width={512}
                      height={512}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {product.tag && (
                      <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold ${
                        product.tag === "Best Seller"
                          ? "bg-accent text-accent-foreground"
                          : product.tag === "Most Powerful"
                          ? "bg-secondary text-secondary-foreground"
                          : "bg-destructive text-destructive-foreground"
                      }`}>
                        {product.tag === "Best Seller" ? "⭐ बेस्ट सेलर" : product.tag === "Most Powerful" ? "🔥 सबसे शक्तिशाली" : "⏰ सीमित स्टॉक"}
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-foreground text-lg mb-1">{product.name}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{product.description}</p>
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-accent font-bold text-xl mb-4">{product.priceRange}</p>
                    <Link
                      to="/shop"
                      className="inline-flex items-center gap-2 w-full justify-center gradient-golden text-primary-foreground px-4 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
                    >
                      <ShoppingCart className="h-4 w-4" /> अभी खरीदें
                    </Link>
                  </div>
                </div>
              ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
            >
              सभी उत्पाद देखें <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <PanditSection />
      <CallSection />
      <MandirLocationSection />

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

      <TestimonialsSection />
    </main>
  );
};

export default Index;
