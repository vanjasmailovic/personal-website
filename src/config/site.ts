export const siteConfig = {
  origin: 'https://vanjasmailovic.com',
  name: 'Vanja Smailovic',
  title: 'Vanja Smailovic — Lead AI Engineer & Applied AI Consultant',
  description:
    'Lead AI Engineer and Applied AI Consultant helping product and engineering teams ship AI assistants, document automation, analytics agents and machine-learning products.',
  email: 'vanja.smailovic@gmail.com',
  location: 'Stockholm, Sweden',
  linkedIn: 'https://www.linkedin.com/in/vanjasmailovic',
  image: '/images/vanja-smailovic.jpg?v=20260718',
} as const;

export const absoluteUrl = (path: string): string => new URL(path, siteConfig.origin).toString();
