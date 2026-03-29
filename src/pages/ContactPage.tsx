import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const ContactPage = () => {
  return (
    <main className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            📞 <span className="text-gradient-golden">संपर्क करें</span>
          </h1>
          <p className="text-muted-foreground">
            हवन बुकिंग या किसी भी जानकारी के लिए संपर्क करें
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <a href="tel:+919876543210" className="bg-card rounded-xl border border-border p-8 text-center hover:shadow-golden transition-all group">
            <Phone className="h-10 w-10 mx-auto mb-3 text-accent group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-foreground mb-1">फ़ोन</h3>
            <p className="text-muted-foreground">+91 98765 43210</p>
          </a>

          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="bg-card rounded-xl border border-border p-8 text-center hover:shadow-golden transition-all group">
            <MessageCircle className="h-10 w-10 mx-auto mb-3 text-accent group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-foreground mb-1">WhatsApp</h3>
            <p className="text-muted-foreground">अभी चैट करें</p>
          </a>

          <a href="mailto:info@baglamukhihavan.com" className="bg-card rounded-xl border border-border p-8 text-center hover:shadow-golden transition-all group">
            <Mail className="h-10 w-10 mx-auto mb-3 text-accent group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-foreground mb-1">ईमेल</h3>
            <p className="text-muted-foreground">info@baglamukhihavan.com</p>
          </a>

          <div className="bg-card rounded-xl border border-border p-8 text-center">
            <MapPin className="h-10 w-10 mx-auto mb-3 text-accent" />
            <h3 className="font-bold text-foreground mb-1">स्थान</h3>
            <p className="text-muted-foreground">उज्जैन, मध्य प्रदेश, भारत</p>
          </div>
        </div>

        <div className="mt-10 rounded-xl overflow-hidden border border-border">
          <iframe
            title="स्थान"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117500.2!2d75.7!3d23.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963710000000001%3A0x1!2sUjjain!5e0!3m2!1sen!2sin!4v1"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
