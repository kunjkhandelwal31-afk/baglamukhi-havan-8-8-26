import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Flame } from "lucide-react";

const navItems = [
  { path: "/", label: "होम" },
  { path: "/havan-types", label: "हवन के प्रकार" },
  { path: "/live-darshan", label: "🔴 लाइव दर्शन" },
  { path: "/vip-darshan", label: "👑 VIP प्रवेश" },
  { path: "/booking", label: "बुकिंग" },
  { path: "/contact", label: "संपर्क" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Flame className="h-7 w-7 text-accent animate-flame" />
            <span className="text-lg font-bold text-foreground">
              माँ बगलामुखी हवन सेवा
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "gradient-golden text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+918103960297"
              className="ml-3 flex items-center gap-1.5 gradient-red text-secondary-foreground px-4 py-2 rounded-lg text-sm font-semibold"
            >
              <Phone className="h-4 w-4" />
              +91 81039 60297
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="lg:hidden pb-4 border-t border-border pt-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium ${
                  location.pathname === item.path
                    ? "gradient-golden text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+918103960297"
              className="flex items-center gap-2 mx-4 mt-2 gradient-red text-secondary-foreground px-4 py-2.5 rounded-lg text-sm font-semibold justify-center"
            >
              <Phone className="h-4 w-4" />
              +91 81039 60297
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
