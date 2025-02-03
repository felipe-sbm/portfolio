export interface Project {
  title: string;
  description: string;
  link: string;
  date: string;
  image: string;
  alt: string;
  tags: string[];
  className: string;
}

export const Projects = {
  otsuki: {
    title: "Otsuki: A New Way to build your dreams",
    description:
      "The Otsuki is a startup that fucus in creating smart programs for small business.",
    link: "https://otsuki.vercel.app/",
    date: "2024-14-02",
    image: "https://i.imgur.com/mbpze3b.png",
    alt: "The Otsuki logo",
    tags: ["Typescript", "Ruby", "Next.js", "TailwindCSS"],
    className: "bg-gradient-to-r from-blue-500 via-purple-500 to-fuchsia-800",
  },
  calculus: {
    title: "Calculus: A new way to see math",
    description:
      "Calculus are an Windows application that you can calculate with a simple and dynamic way. Futurely, I will add graphical mode, with 3D",
    link: "https://github.com/felipe-sbm/calculus",
    date: "2024-19-04",
    image: "https://i.imgur.com/MrGY5EL_d.webp?maxwidth=760&fidelity=grand",
    alt: "A calculator with calculus logo in frutiger aero style.",
    tags: ["C#", ".NET", "Windows forms"],
    className: "bg-gradient-to-r from-amber-400 via-orange-400 to-orange-600",
  },
  wetasks: {
    title: "weTasks: open-source task manager",
    description: "An API to organize tasks from you and your employees",
    link: "https://github.com/felipe-sbm/weTasks",
    date: "2024-16-08",
    image: "https://i.imgur.com/BaQmHLl.jpeg",
    alt: "The weTasks logo with a stock paper and a pencil, marking that task was finished.",
    tags: ["C#", ".NET 8.0"],
    className: "bg-gradient-to-r from-green-400 via-green-500 to-green-800",
  },
  piaf: {
    title: "PIAF: Portal de Integração de Atividades Físicas da UFRN",
    description:
      "An local application to organize the physical activities of the UFRN students and teachers",
    link: "https://github.com/felipe-sbm/piaf-ufrn",
    date: "2024-09-08",
    image:
      "https://github.com/felipe-sbm/piaf-ufrn/assets/129466661/5aa37c27-d409-44d7-90fe-b22306d950bb",
    alt: "The PIAF logo",
    tags: ["Python 3", "Node.js", "Electron", "Flask", "Boostrap"],
    className: "bg-gradient-to-r from-red-400 via-red-600 to-red-900",
  },
  shalom: {
    title: "Orchestra Shalom: Spreading the gospel through music.",
    description:
      "An website made for my orchestra's group, here you can see the news, the events, the members, the history and more",
    link: "https://github.com/felipe-sbm/shalom",
    date: "2024-18-07",
    image:
      "https://raw.githubusercontent.com/felipe-sbm/shalom/main/public/album.png",
    alt: "Orchestra Shalom's album of photos at anivessary.",
    tags: ["Typescript", "Next.js", "TailwindCSS"],
    className: "bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-800",
  },
  insomnia: {
    title: "Insomnia Machine: Turn off your drowsiness",
    description:
      "A coffee machine that you can drink with a cheap price. Just existing in the UFRN's campus",
    link: "https://github.com/felipe-sbm/insomnia-machine",
    date: "2024-14-02",
    image: "https://i.imgur.com/aDiAaYV_d.webp?maxwidth=760&fidelity=grand",
    alt: "The Insomnia Machine itself.",
    tags: [""],
    className: "bg-gradient-to-r from-pink-400 via-fuchsia-500 to-purple-800",
  },
  voragio: {
    title: "Voragio: An e-commerce platform",
    description:
      "Voragio's are an e-commerce that you can buy with cheap price",
    link: "https://github.com/felipe-sbm/e-commerce",
    date: "2024-18-07",
    image: "https://i.imgur.com/aagwOQk_d.webp?maxwidth=760&fidelity=grand",
    alt: "Fedex truck",
    tags: ["Vue.js", "Node.js", "Boostrap"],
    className: "bg-gradient-to-r from-zinc-400 via-gray-500 to-slate-800",
  },
  token: {
    title: "Token: Roll the dice",
    description: "You can generate tokens just rolling the dice!",
    link: "https://github.com/felipe-sbm/token-generator",
    date: "2024-08-01",
    image: "https://i.imgur.com/lk8XBog.png",
    alt: "Token logo with rainbow background",
    tags: ["Vue.js", "TailwindCSS", "Julia"],
    className: "bg-gradient-to-r from-rose-500 via-sky-500 to-green-500",
  },
  cuscuz: {
    title: "Matemática com Cuscuz",
    description: "An website that you can learn math with Igor Bruno's videos",
    link: "https://github.com/felipe-sbm/cuscuz",
    date: "2024-14-02",
    image:
      "https://raw.githubusercontent.com/felipe-sbm/math/4313ade86c7a9199c4b8c3a852439dd609385536/public/static/images/twitter-card.png",
    alt: "The cuscuz logo",
    tags: [""],
    className: "bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-800",
  },
};
