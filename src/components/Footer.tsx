import { Link } from "react-router-dom";
import { Flame, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Flame className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold text-background">माँ बगलामुखी हवन सेवा</span>
            </div>
            <p className="text-sm leading-relaxed">
              अनुभवी पंडित जी द्वारा विधिवत माँ बगलामुखी हवन सेवा। शत्रु नाश, विजय प्राप्ति और जीवन में सफलता के लिए संपर्क करें।
            </p>
          </div>
          <div>
            <h4 className="font-bold text-background mb-4">त्वरित लिंक</h4>
            <div className="space-y-2 text-sm">
              <Link to="/havan-types" className="block hover:text-primary transition-colors">हवन के प्रकार</Link>
              <Link to="/about" className="block hover:text-primary transition-colors">माँ बगलामुखी का महत्व</Link>
              <Link to="/pricing" className="block hover:text-primary transition-colors">मूल्य सूची</Link>
              <Link to="/booking" className="block hover:text-primary transition-colors">बुकिंग</Link>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-background mb-4">संपर्क</h4>
            <div className="space-y-3 text-sm">
              <a href="tel:+918103960297" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="h-4 w-4" /> +91 81039 60297
              </a>
              <a href="mailto:info@baglamukhihavan.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="h-4 w-4" /> info@baglamukhihavan.com
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> उज्जैन, मध्य प्रदेश
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-background/20 pt-6 text-center text-xs space-y-2">
          <p>© 2026 माँ बगलामुखी हवन सेवा। सर्वाधिकार सुरक्षित। 🙏</p>
          <p className="text-background/50">
            वेबसाइट निर्माता: <span className="text-background/70 font-semibold">Kunj Khandelwal</span> •{" "}
            <a href="tel:+918103960297" className="hover:text-primary transition-colors">📞 8103960297</a>
            {" "}• वेबसाइट बनवाने के लिए संपर्क करें
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
