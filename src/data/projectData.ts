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
    name: "Mel APP",
    image: "https://images.pexels.com/photos/2496606/pexels-photo-2496606.jpeg?_gl=1*10nuijr*_ga*MTk5ODIyMDM5Ny4xNzY0NjM2NjE0*_ga_8JE65Q40S6*czE3NjQ5ODgxOTIkbzMkZzEkdDE3NjQ5ODg3MTEkajM0JGwwJGgw",
    imageAlt: "a bus in a city",
    description: "Mel is an application that can provide more security and efficiency for buses and passagers.",
    link: "https://github.com/otsuki-dev/mel",
    slug: "mel"
  },
  {
    name: "legacy",
    image: "https://images.pexels.com/photos/25626435/pexels-photo-25626435.jpeg?_gl=1*c0z7rm*_ga*MTk5ODIyMDM5Ny4xNzY0NjM2NjE0*_ga_8JE65Q40S6*czE3NjQ5ODgxOTIkbzMkZzEkdDE3NjQ5ODgyMjUkajI3JGwwJGgw",
    imageAlt: "logic, math problems",
    description: "legacy is an open-source learning platform designed to teach logical reasoning and problem solving through procedurally generated exercises.",
    link: "https://github.com/YZhLu/legacy",
    slug: "legacy"
  },
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
      "a system made for the Fedral University of Rio Grande do Norte. This website is responsible for registering users who wish to carry out physical activities on campus.",
    link: "https://www.github.com/otsuki-dev/piaf-ufrn",
    slug: "piaf-ufrn",
  },
  {
    name: "nihon today",
    image: "https://images.pexels.com/photos/35062185/pexels-photo-35062185.jpeg",
    imageAlt: "a news website",
    description: "nihon today is a news website that provides the latest news and updates about japan, covering various topics such as culture, technology, travel, and current events.",
    link: "https://www.github.com/felipe-sbm/nihon-today",
    slug: "nihon-today",
  },
  {
    name: "spam detector",
    image: "https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg",
    imageAlt: "a spam detector system",
    description: "a spam detector system that uses machine learning algorithms to identify and filter out spam messages from emails and online communications, improving user experience and security.",
    link: "https://www.github.com/felipe-sbm/spam-detector",
    slug: "spam-detector",
  },
  {
    name: "ai agent code review",
    image: "https://images.pexels.com/photos/614117/pexels-photo-614117.jpeg",
    imageAlt: "a code review process",
    description: "an AI agent that automates the code review process by analyzing code for potential issues, suggesting improvements, and ensuring adherence to coding standards, thereby enhancing code quality and developer productivity.",
    link: "https://www.github.com/felipe-sbm/ai-agent-code-review",
    slug: "ai-agent-code-review",
  },
  {
    name: "duck chess",
    image: "https://images.pexels.com/photos/277092/pexels-photo-277092.jpeg?_gl=1*kyl6yd*_ga*MTk5ODIyMDM5Ny4xNzY0NjM2NjE0*_ga_8JE65Q40S6*czE3NjQ5ODgxOTIkbzMkZzEkdDE3NjQ5ODg4NDkkajQyJGwwJGgw",
    imageAlt: "a linux distributio, made with the goal of rescueing old computers. it is a new distribution, and has a very light desktop environment.",
    description: "duck chess (Eendenschaak) is a chess game created for learning purposes, featuring an AI opponent and a unique duck piece that adds an extra layer of strategy to the game.",  
    link: "https://www.github.com/felipe-sbm/yesu-os",
    slug: "yesu-os",
  },
  {
    name: "lasa's official website",
    image: "https://images.pexels.com/photos/1459495/pexels-photo-1459495.jpeg",
    imageAlt: "a modern website design",
    description: "lasa's official website is a modern and user-friendly platform that showcases the latest news, projects, and events related to lasa, providing visitors with an engaging and informative experience.",
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
