import OtsukiImage from '@/assets/images/projects/otsuki.webp';
import InsomniaMachineImage from '@/assets/images/projects/insomnia-machine.webp';

export type ProjectId = 'insomnia' | 'piaf' | 'spam' | 'codeReview' | 'lasa' | 'otsuki';

export interface ProjectData {
  id: ProjectId;
  image: string;
  link: string;
  slug: string;
  contentLoader: () => Promise<string>;
  languages: string[];
  frameworks: string[];
}

export const projects: ProjectData[] = [
  {
    id: 'insomnia',
    image: InsomniaMachineImage,
    link: 'https://www.github.com/felipe-sbm/insomnia-machine',
    slug: 'insomnia-machine',
    contentLoader: () => import('@/projects/insomnia-machine.mdx?raw').then((module) => module.default),
    languages: ['C++'],
    frameworks: ['ESP-IDF', 'FreeRTOS'],
  },
  {
    id: 'piaf',
    image: 'https://images.pexels.com/photos/3763870/pexels-photo-3763870.jpeg?auto=compress&cs=tinysrgb&w=240&h=240&dpr=1',
    link: 'https://www.github.com/otsuki-dev/piaf-ufrn',
    slug: 'piaf-ufrn',
    contentLoader: () => import('@/projects/piaf-ufrn.mdx?raw').then((module) => module.default),
    languages: ['Ruby', 'HTML', 'CSS'],
    frameworks: ['Rails', 'Bootstrap'],
  },
  {
    id: 'spam',
    image: 'https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg',
    link: 'https://www.github.com/felipe-sbm/spam-detector',
    slug: 'spam-detector',
    contentLoader: () => import('@/projects/spam-detector.mdx?raw').then((module) => module.default),
    languages: ['C#', 'Python'],
    frameworks: ['Flask', 'Scikit Learn', 'Blazor', 'Bootstrap'],
  },
  {
    id: 'codeReview',
    image: 'https://images.pexels.com/photos/614117/pexels-photo-614117.jpeg',
    link: 'https://www.github.com/felipe-sbm/ai-agent-code-review',
    slug: 'ai-agent-code-review',
    contentLoader: () => import('@/projects/ai-agent-code-review.mdx?raw').then((module) => module.default),
    languages: ['Python', 'C#'],
    frameworks: ['FastAPI', 'Blazor', 'Bootstrap'],
  },
  {
    id: 'lasa',
    image: 'https://images.pexels.com/photos/1459495/pexels-photo-1459495.jpeg',
    link: 'https://www.github.com/felipe-sbm/lasa-official-website',
    slug: 'lasa-official-website',
    contentLoader: () => import('@/projects/lasa-official-website.mdx?raw').then((module) => module.default),
    languages: ['TypeScript', 'CSS'],
    frameworks: ['Next.jl', 'Tailwind'],
  },
  {
    id: 'otsuki',
    image: OtsukiImage,
    link: 'https://otsuki.dev',
    slug: 'otsuki',
    contentLoader: () => import('@/projects/otsuki.mdx?raw').then((module) => module.default),
    languages: ['TypeScript', 'Scss'],
    frameworks: ['Next.js', 'Tailwind'],
  },
];

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projects.find((project) => project.slug === slug);
}
