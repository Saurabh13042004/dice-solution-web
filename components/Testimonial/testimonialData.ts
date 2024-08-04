import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Harry kane",
    designation: "Founder @TechInnovate",
    image: image1,
    content:
      "DICE Solutions transformed our website with a sleek design and seamless user experience. Their attention to detail and innovative approach have significantly boosted our online presence.",
  },
  {
    id: 2,
    name: "Shradha Sharma",
    designation: "CEO @MarketMingle",
    image: image2,
    content:
      "The team at DICE Solutions is exceptional! They delivered a robust CMS that perfectly suits our needs. Their support and expertise are unmatched.",
  },
  {
    id: 3,
    name: "Priya khanna",
    designation: "CTO @TechInnovate",
    image: image1,
    content:
      "Our e-commerce platform saw a remarkable improvement in performance and user engagement after collaborating with DICE Solutions. Highly recommend their services.",
  },
  {
    id: 4,
    name: "Jaskirat Singh",
    designation: "Co-founder @MarketMingle",
    image: image2,
    content:
      "DICE Solutions provided us with top-notch cloud solutions, ensuring our data is secure and operations are efficient. Their expertise in IT infrastructure is commendable.",
  },
];
