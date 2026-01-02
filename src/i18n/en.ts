const en = {
  hello: {
    welcome: 'Welcome to my',
    portfolioTitle: 'Portfolio',
    heroBottom: `I like see how things work,\nthat’s why i’m here for AI and\nwebsite development. That’s\nf a n t a s t i c ! =)` ,
    instaHandle: '> @felipe_sbm <'
  },
  about: {
    title: 'Hello,\n I\'m Felipe',
    placeholder: 'Insert your text here. This area is prepared to hold paragraphs, lists or any content you want to add.',
    paragraph1: 'I am an AI Engineer and Software Developer. Actually I’m studying Chinese culture to create a social bridge from Brazil to China.',
    paragraph2: 'You can find me on GitHub. I\'m creating a Julia Web Framework called Nova.jl.',
    aboutMeTitle: 'About me',
    badges: [
      'Brazilian 🇧🇷',
      'Chinese Speaker 🗣️',
      'Designer 🎨',
      'Musician 🎵',
      'Blogger ✍️'
    ]
  }
  ,
  header: {
    brand: {
      first: 'Felipe',
      last: 'SBM',
      logoAlt: 'My official logo',
      selectAlt: 'Nintendo 3DS select icon'
    },
    nav: {
      welcome: 'welcome',
      about: 'about me',
      projects: 'projects',
      guestbook: 'guestbook'
    },
    langToggle: {
      title: 'Change language'
    }
  },
  resume: {
    educationTitle: 'Education',
    experienceTitle: 'Experience',
    programmingLanguagesTitle: 'Programming Languages',
    experiences: [
      {
        role: 'Graphic Designer',
        company: 'FreeLancer',
        period: '2018 to 2022',
        description: 'Created visual concepts to communicate ideas that inspire and captivate consumers.'
      },
      {
        role: 'AI Expertise Intern',
        company: 'Outlier AI',
        period: '2024 to 2025',
        description: 'Assisted in testing AI models for various applications with C++.'
      },
      {
        role: 'Software Engineering Intern',
        company: 'Arkanus',
        period: '2024-Present',
        description: 'Leading the development of web applications using TypeScript frameworks and modern technologies.'
      },
      {
        role: 'AI Expertise Technician',
        company: 'Federal University of RN',
        period: '2025',
        description: 'Specializing in machine learning models and data analysis.'
      }
    ]
  }
} as const

export default en
