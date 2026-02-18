import OtsukiImage from "@/assets/images/projects/otsuki.webp";
import InsomniaMachineImage from "@/assets/images/projects/insomnia-machine.webp"

export interface ProjectData {
  name: string;
  image: string;
  imageAlt?: string;
  description: string;
  link: string;
  slug: string;
}

export const projects: ProjectData[] = [
  {
    name: "Insomnia Machine",
    image: InsomniaMachineImage,
    imageAlt: "a automatic coffee machine",
    description:
      "a automatic coffee machine made with C++ and a ESP32. in this project, we explored the IoT area making a very smart and independent coffee machine.",
    link: "https://www.github.com/felipe-sbm/insomnia-machine",
    slug: "insomnia-machine",
  },
    {
    name: "PIAF - UFRN",
    image: "https://images.pexels.com/photos/3763870/pexels-photo-3763870.jpeg?auto=compress&cs=tinysrgb&w=240&h=240&dpr=1",
    imageAlt: "a automatic coffee machine",
    description:
      "A system made for the Fedral University of Rio Grande do Norte. This website is responsible for registering users who wish to carry out physical activities on campus.",
    link: "https://www.github.com/otsuki-dev/piaf-ufrn",
    slug: "piaf-ufrn",
  },
  {
    name: "E-mail Spam Detector | Machine Learning",
    image: "https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg",
    imageAlt: "E-mail bocks",
    description: "A spam detector system that uses machine learning algorithms to identify and filter out spam messages. Made with C# .NET",
    link: "https://www.github.com/felipe-sbm/spam-detector",
    slug: "spam-detector",
  },
  {
    name: "Code Review | AI Agent",
    image: "https://images.pexels.com/photos/614117/pexels-photo-614117.jpeg",
    imageAlt: "A code review process",
    description: "A AI agent made with Python, that automates the code review process by analyzing code for potential issues, suggesting improvements, and ensuring adherence to coding standards, thereby enhancing code quality and developer productivity.",
    link: "https://www.github.com/felipe-sbm/ai-agent-code-review",
    slug: "ai-agent-code-review",
  },
  {
    name: "LASA's official website",
    image: "https://images.pexels.com/photos/1459495/pexels-photo-1459495.jpeg",
    imageAlt: "a modern website design",
    description: "LASA's official website is a modern and user-friendly platform that showcases the latest news, projects, and events related to lasa, providing visitors with an engaging and informative experience.",
    link: "https://www.github.com/felipe-sbm/lasa-official-website",
    slug: "lasa-official-website",
  },
  {
    name: "Otsuki Development",
    image: OtsukiImage,
    imageAlt: "A Open-Source Company",
    description: "otsuki website is the official online presence of otsuki, featuring information about their services, portfolio, and contact details, designed to attract and engage potential clients.",
    link: "https://otsuki.dev",
    slug: "otsuki",
  }
];
