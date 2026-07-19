export interface SocialLink {
  label: string;
  href: string;
  icon: 'email' | 'github' | 'linkedin' | 'line';
}

export interface ExperienceItem {
  period: string;
  role: string;
  org: string;
  summary: string;
  tags: string[];
}

export interface Profile {
  name: string;
  title: string;
  about: string[];
  skills: { group: string; items: string[] }[];
  services: { title: string; description: string }[];
  experience: ExperienceItem[];
  certifications: string[];
  socials: SocialLink[];
}
