import OtsukiImage from '@/assets/images/projects/otsuki.webp';
import InsomniaMachineImage from '@/assets/images/projects/insomnia-machine.webp';

export type ProjectId = 'insomnia' | 'piaf' | 'spam' | 'codeReview' | 'lasa' | 'otsuki';

export interface ProjectData {
  id: ProjectId;
  image: string;
  link: string;
  slug: string;
}

export const projects: ProjectData[] = [
  {
    id: 'insomnia',
    image: InsomniaMachineImage,
    link: 'https://www.github.com/felipe-sbm/insomnia-machine',
    slug: 'insomnia-machine',
  },
  {
    id: 'piaf',
    image: 'https://images.pexels.com/photos/3763870/pexels-photo-3763870.jpeg?auto=compress&cs=tinysrgb&w=240&h=240&dpr=1',
    link: 'https://www.github.com/otsuki-dev/piaf-ufrn',
    slug: 'piaf-ufrn',
  },
  {
    id: 'spam',
    image: 'https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg',
    link: 'https://www.github.com/felipe-sbm/spam-detector',
    slug: 'spam-detector',
  },
  {
    id: 'codeReview',
    image: 'https://images.pexels.com/photos/614117/pexels-photo-614117.jpeg',
    link: 'https://www.github.com/felipe-sbm/ai-agent-code-review',
    slug: 'ai-agent-code-review',
  },
  {
    id: 'lasa',
    image: 'https://images.pexels.com/photos/1459495/pexels-photo-1459495.jpeg',
    link: 'https://www.github.com/felipe-sbm/lasa-official-website',
    slug: 'lasa-official-website',
  },
  {
    id: 'otsuki',
    image: OtsukiImage,
    link: 'https://otsuki.dev',
    slug: 'otsuki',
  },
];
