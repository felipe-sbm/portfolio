export type Locale = 'en' | 'pt' | 'jp' | 'ch'

export type I18nHello = {
  welcome: string
  portfolioTitle: string
  heroBottom: string
  instaHandle: string
}

export type I18nAbout = {
  title: string
  placeholder: string
  paragraph1: string
  paragraph2: string
  aboutMeTitle: string
  badges: string[]
}

export type I18nHeader = {
  brand: {
    first: string
    last: string
    logoAlt: string
    selectAlt: string
  }
  nav: {
    welcome: string
    about: string
    projects: string
    guestbook: string
  }
  langToggle: {
    title: string
  }
}

export type I18nExperience = {
  role: string
  company: string
  period: string
  description: string
}

export type I18nResume = {
  educationTitle: string
  experienceTitle: string
  programmingLanguagesTitle: string
  experiences: I18nExperience[]
}

export type I18nData = {
  hello: I18nHello
  about: I18nAbout
  header: I18nHeader
  resume: I18nResume
}
