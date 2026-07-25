import { Globe, Smartphone, Bot, Palette } from "lucide-react";

export const services = {
  featured: {
    title: "Web Development",
    description:
      "Modern, scalable websites built for performance, SEO and long-term growth.",
    icon: Globe,
    tech: ["Next.js", "React", "Node.js", "Tailwind CSS"],
  },

  mobile: {
    title: "Mobile Apps",
    description:
      "Cross-platform Android & iOS apps with native-like performance.",
    icon: Smartphone,
  },

  ai: {
    title: "AI Solutions",
    description:
      "Automate workflows and build AI-powered experiences.",
    icon: Bot,
  },

  design: {
    title: "UI / UX Design",
    description:
      "Beautiful interfaces designed to improve user engagement.",
    icon: Palette,
  },
};