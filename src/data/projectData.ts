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
    name: "insomnia machine",
    image: "https://images.pexels.com/photos/1233529/pexels-photo-1233529.jpeg?auto=compress&cs=tinysrgb&w=240&h=240&dpr=1",
    imageAlt: "a automatic coffee machine",
    description:
      "a automatic coffee machine made with C++ and a ESP32. in this project, we explored the IoT area making a very smart and independent coffee machine.",
    link: "https://www.github.com/felipe-sbm/insomnia-machine",
    slug: "insomnia-machine",
  },
    {
    name: "p.a. registration portal",
    image: "https://images.pexels.com/photos/3763870/pexels-photo-3763870.jpeg?auto=compress&cs=tinysrgb&w=240&h=240&dpr=1",
    imageAlt: "a automatic coffee machine",
    description:
      "a system made for the Fedral University of Rio Grande do Norte. This website is responsible for registering users who wish to carry out physical activities on campus.",
    link: "https://www.github.com/otsuki-dev/piaf-ufrn",
    slug: "piaf-ufrn",
  },
  {
    name: "linux distro: yesu os",
    image: "https://images.pexels.com/photos/11034131/pexels-photo-11034131.jpeg?auto=compress&cs=tinysrgb&w=240&h=240&dpr=1",
    imageAlt: "a pokedex",
    description:
      "a linux distributio, made with the goal of rescueing old computers. it is a new distribution, and has a very light desktop environment.",
    link: "https://www.github.com/felipe-sbm/yesu-os",
    slug: "yesu-os",
  }
];
