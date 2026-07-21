import type { Profile } from './types';

const profileEn: Profile = {
  name: 'Haosheng Wu',
  title: 'Backend Engineer',
  about: [
    "I'm currently a backend engineer on an online entertainment platform team; before that, I also worked on RAG (retrieval-augmented generation) applications on GCP.",
    "Outside of work, you can usually find me out for a run, in the pool, or on the slopes during ski season.",
  ],

  skills: [
    { group: 'Backend', items: ['Ruby on Rails', 'Node.js', 'Python', 'PostgreSQL', 'MySQL', 'MongoDB'] },
    { group: 'Frontend', items: ['Vue 3', 'React', 'Next.js', 'React Native', 'TypeScript', 'Tailwind CSS'] },
    { group: 'Cloud / DevOps', items: ['GCP', 'OCI', 'Vertex AI Search', 'Cloud Run', 'Docker', 'Kubernetes', 'GitHub Actions'] },
  ],
  services: [
    { title: 'Backend Development', description: 'APIs, reporting, payments, and third-party platform integrations.' },
    { title: 'Full-Stack Web / SPA', description: 'Interactive sites and frontend apps built with Vue or React.' },
    { title: 'Cloud Deployment & Ops', description: 'Deployment, CI/CD, and operations on GCP, Docker, and Kubernetes.' },
    { title: 'AI / RAG Integration', description: 'Retrieval-augmented generation apps powered by Vertex AI Search and more.' },
  ],
  experience: [
    {
      period: '2025/3 — Present',
      role: 'Backend Engineer',
      org: 'Atombytes Sdn Bhd (Malaysia · Remote)',
      summary: "Full-stack delivery for an online entertainment platform: a Vue 3 player SPA, a Rails backend (reporting, payments, game-platform integrations), a React Native app, and a Discourse community; supported releases and deployment verification on the team's Kubernetes (OKE) environment.",
      tags: ['Vue 3', 'Rails', 'React Native', 'Discourse', 'Kubernetes'],
    },
    {
      period: '2024/9 — 2025/3',
      role: 'Cloud Developer',
      org: 'ThinkPower (Taiwan Branch)',
      summary: 'Delivered GCP proof-of-concepts and production systems: shipped an e-commerce RAG copywriting PoC, and co-built a Hyundai repair knowledge-base adopted for internal client use.',
      tags: ['GCP', 'Vertex AI Search', 'Cloud Run', 'RAG'],
    },
  ],
  certifications: [
    'Google Cloud Certified – Professional Cloud Developer',
    'Google Cloud Partner L400',
  ],
  socials: [
    { label: 'Email', href: 'mailto:wu19930628@gmail.com', icon: 'email' },
    { label: 'GitHub', href: 'https://github.com/b89k57w62', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/haosheng-wu/', icon: 'linkedin' },
    { label: 'LINE', href: 'https://line.me/ti/p/~jacket', icon: 'line' },
  ],
};

export default profileEn;
