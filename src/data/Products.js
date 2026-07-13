import Gasstov from "../assets/images/Gasstov.jpg";
import cooker from "../assets/images/cooker.webp";
import mixie from "../assets/images/mixie.jpg";
import Brands from "../components/Brands";
console.log("Gas:", Gasstov);

console.log("Mixie:", mixie);

const products = [
  {
    id: 1,
    name: "Prestige 3 Burner Gas Stove",
    category: "Gas Stove",
    price: "₹2,999",
    image:Gasstov,
    description: "High-quality stainless steel gas stove.",
    warranty: " Warranty : 2 Years",
    brand:"prestige",
    material:"stainless steel",
    ignition:"Manual",
    inStock:true
  },
  {
    id: 2,
    name: "Pressure Cooker",
    category: "Cooker",
    price: "₹1,799",
    image:cooker ,
    description: "Strong aluminium pressure cooker.",
    warranty : "1 year",
     brand:"Buttefly",
    inStock:false
  },
  {
    id: 3,
    name: "Mixer Grinder",
    category: "Mixer",
    price: "₹3,499",
    image:mixie,
    description: "750W powerful mixer grinder.",
    warranty : "1 year",
    brand:"Preethi",
    inStock:true
  },
  {
    id: 4,
    name: "Kitchen Chimney",
    category: "Chimney",
    price: "₹8,999",
    image:Gasstov,
    description: "Auto-clean kitchen chimney.",
    warranty : "1 year",
     brand:"prestige",
    inStock:false
  },
  {
  id: 5,
    name: "Prestige 3 Burner Gas Stove",
    category: "Gas Stove",
    price: "₹2,999",
    image:Gasstov,
    description: "High-quality stainless steel gas stove.",
    warranty: "2 Years",
    brand:"prestige",
    material:"stainless steel",
    ignition:"Manual",
   inStock: true
  },
  {
    id: 6,
    name: "Pressure Cooker",
    category: "Cooker",
    price: "₹1,799",
    image:cooker ,
    description: "Strong aluminium pressure cooker.",
    warranty : "1 year",
    brand:"prestige",
  
    inStock:false
  },
  {
    id: 7,
    name: "Mixer Grinder",
    category: "Mixer",
    price: "₹3,499",
    image:mixie,
    description: "750W powerful mixer grinder.",
    warranty : "1 year",
    brand:"prestige",
    inStock:true
  },
  {
    id: 8,
    name: "Kitchen Chimney",
    category: "Chimney",
    price: "₹8,999",
    image:Gasstov,
    description: "Auto-clean kitchen chimney.",
    warranty : "1 year",
    brand:"prestige",
    inStock:false
  }
];

export default products;