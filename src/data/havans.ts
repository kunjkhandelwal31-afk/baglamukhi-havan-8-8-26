import havanShatruNash from "@/assets/havan-shatru-nash.jpg";
import havanLalMirch from "@/assets/havan-lal-mirch.jpg";
import havanVijay from "@/assets/havan-vijay.jpg";
import havanDhan from "@/assets/havan-dhan.jpg";
import havanKalaJadu from "@/assets/havan-kala-jadu.jpg";
import havanShanti from "@/assets/havan-shanti.jpg";
import havanSarvKarya from "@/assets/havan-sarv-karya.jpg";
import havanVashikaran from "@/assets/havan-vashikaran.jpg";

export interface Havan {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  benefits: string[];
  extraBenefits?: string[];
  vidhi?: string[];
  duration: string;
  price: string;
  priceNum: number;
  icon: string;
  image: string;
}

export const havans: Havan[] = [
  {
    id: "shatru-nash",
    name: "माँ बगलामुखी शत्रु नाश हवन",
    description: "शत्रुओं का नाश करने और उनके बुरे प्रभावों से मुक्ति पाने के लिए यह अत्यंत शक्तिशाली हवन है।",
    benefits: ["शत्रुओं का विनाश", "कोर्ट-कचहरी में विजय", "दुश्मनों से सुरक्षा"],
    duration: "1+ घंटे",
    price: "₹11,000",
    priceNum: 11000,
    icon: "⚔️",
    image: havanShatruNash,
  },
  {
    id: "lal-mirch",
    name: "माँ बगलामुखी लाल मिर्च हवन",
    description: "लाल मिर्चों से किया जाने वाला यह विशेष हवन शत्रु की वाणी और कार्यों को स्तंभित करता है।",
    benefits: ["शत्रु की वाणी बंद", "तांत्रिक प्रयोगों से रक्षा", "नकारात्मक ऊर्जा का नाश"],
    duration: "1+ घंटे",
    price: "₹15,000",
    priceNum: 15000,
    icon: "🌶️",
    image: havanLalMirch,
  },
  {
    id: "vijay-prapti",
    name: "माँ बगलामुखी विजय प्राप्ति हवन",
    description: "हर क्षेत्र में विजय प्राप्ति के लिए यह हवन अत्यंत फलदायी है। चुनाव, प्रतियोगिता में सफलता।",
    benefits: ["हर प्रतियोगिता में विजय", "चुनाव में सफलता", "व्यापार में बढ़त"],
    duration: "1+ घंटे",
    price: "₹11,000",
    priceNum: 11000,
    icon: "🏆",
    image: havanVijay,
  },
  {
    id: "dhan-prapti",
    name: "माँ बगलामुखी धन प्राप्ति हवन",
    description: "आर्थिक समस्याओं से मुक्ति और धन-संपत्ति की प्राप्ति के लिए यह विशेष हवन किया जाता है।",
    benefits: ["धन लाभ", "ऋण मुक्ति", "व्यापार में वृद्धि"],
    duration: "1+ घंटे",
    price: "₹9,000",
    priceNum: 9000,
    icon: "💰",
    image: havanDhan,
  },
  {
    id: "kala-jadu",
    name: "माँ बगलामुखी काला जादू निवारण हवन",
    description: "काले जादू, टोने-टोटके और बुरी नज़र से मुक्ति के लिए यह हवन अत्यंत प्रभावशाली है।",
    benefits: ["काले जादू से मुक्ति", "बुरी नज़र से सुरक्षा", "घर में शांति"],
    duration: "1+ घंटे",
    price: "₹21,000",
    priceNum: 21000,
    icon: "🛡️",
    image: havanKalaJadu,
  },
  {
    id: "shanti",
    name: "माँ बगलामुखी शांति हवन",
    description: "मानसिक शांति, पारिवारिक सुख और जीवन में स्थिरता प्राप्ति के लिए यह हवन किया जाता है।",
    benefits: ["मानसिक शांति", "पारिवारिक सुख", "तनाव मुक्ति"],
    duration: "1+ घंटे",
    price: "₹5,100",
    priceNum: 5100,
    icon: "🕊️",
    image: havanShanti,
  },
  {
    id: "sarv-karya-siddhi",
    name: "माँ बगलामुखी सर्व कार्य सिद्धि हवन",
    description: "हर अटके हुए कार्य को सिद्ध करने और जीवन में सफलता पाने के लिए यह हवन अचूक है।",
    benefits: ["रुके कार्य पूर्ण", "हर क्षेत्र में सफलता", "बाधाओं का अंत"],
    duration: "1+ घंटे",
    price: "₹11,000",
    priceNum: 11000,
    icon: "✨",
    image: havanSarvKarya,
  },
  {
    id: "vashikaran",
    name: "माँ बगलामुखी वशीकरण हवन",
    description: "प्रियजनों का मन मोहने और संबंधों में मधुरता लाने के लिए यह हवन किया जाता है।",
    benefits: ["प्रेम संबंधों में सुधार", "वैवाहिक सुख", "मनचाहा जीवनसाथी"],
    duration: "1+ घंटे",
    price: "₹15,000",
    priceNum: 15000,
    icon: "💝",
    image: havanVashikaran,
  },
];
