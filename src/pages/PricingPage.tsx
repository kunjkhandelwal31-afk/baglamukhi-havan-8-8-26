import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const packages = [
  {
    name: "बेसिक",
    price: "₹5,100",
    features: ["शांति हवन", "1-2 घंटे", "आवश्यक सामग्री", "1 पंडित जी", "फ़ोन पर मंत्रणा"],
    popular: false,
  },
  {
    name: "स्टैंडर्ड",
    price: "₹11,000",
    features: ["शत्रु नाश / विजय / सर्व कार्य सिद्धि", "2-3 घंटे", "पूर्ण सामग्री", "2 पंडित जी", "विशेष मंत्र जाप", "लाइव वीडियो"],
    popular: true,
  },
  {
    name: "प्रीमियम",
    price: "₹21,000",
    features: ["काला जादू निवारण / विशेष अनुष्ठान", "3+ घंटे", "विशिष्ट सामग्री", "3 पंडित जी", "नवग्रह शांति सहित", "लाइव वीडियो", "21 दिन अनुवर्ती"],
    popular: false,
  },
];

const PricingPage = () => {
  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            💰 मूल्य <span className="text-gradient-golden">सूची</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            अपनी आवश्यकता और बजट के अनुसार पैकेज चुनें। सभी पैकेज में पूर्ण सामग्री शामिल है।
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-xl border p-8 flex flex-col ${
                pkg.popular
                  ? "border-accent shadow-golden bg-card relative"
                  : "border-border bg-card"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-golden text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                  सबसे लोकप्रिय
                </div>
              )}
              <h3 className="text-xl font-bold text-foreground mb-1">{pkg.name}</h3>
              <div className="text-3xl font-extrabold text-gradient-golden mb-6">{pkg.price}</div>
              <ul className="space-y-3 flex-1 mb-6">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/booking"
                className={`text-center py-3 rounded-lg font-bold transition-all ${
                  pkg.popular
                    ? "gradient-golden text-primary-foreground shadow-golden"
                    : "border border-accent text-accent hover:bg-accent/10"
                }`}
              >
                अभी बुक करें
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default PricingPage;
