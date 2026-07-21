import type { Profile } from './types';

const profileZh: Profile = {
  name: '吳昊聲',
  title: '後端工程師',
  about: [
    '目前在線上娛樂城團隊擔任後端工程師；在這之前，也參與 GCP 上的 RAG（檢索增強生成）應用。'
  ],
  skills: [
    { group: '後端', items: ['Ruby on Rails', 'Node.js', 'Python', 'PostgreSQL', 'MySQL', 'MongoDB'] },
    { group: '前端', items: ['Vue 3', 'React', 'Next.js', 'React Native', 'TypeScript', 'Tailwind CSS'] },
    { group: '雲端 / DevOps', items: ['GCP', 'OCI', 'Vertex AI Search', 'Cloud Run', 'Docker', 'Kubernetes', 'GitHub Actions'] },
  ],
  services: [
    { title: '後端系統開發', description: 'API、報表、金流與第三方平台串接。' },
    { title: '全端網站 / SPA', description: '以 Vue 或 React 打造互動式網站與前端應用。' },
    { title: '雲端部署與維運', description: 'GCP、Docker、Kubernetes 的部署、CI/CD 與維運。' },
    { title: 'AI / RAG 應用整合', description: '以 Vertex AI Search 等打造檢索增強生成應用。' },
  ],
  experience: [
    {
      period: '2025/3 — 現在',
      role: '後端工程師',
      org: 'Atombytes Sdn Bhd（馬來西亞・遠端）',
      summary: '線上娛樂城：Vue 3 玩家端 SPA、Rails 後端（報表、金流與遊戲平台串接）、React Native App，以及基於 Discourse 的社群論壇。',
      tags: ['Vue 3', 'Rails', 'React Native', 'Discourse', 'Kubernetes'],
    },
    {
      period: '2024/9 — 2025/3',
      role: 'Cloud Developer',
      org: '思想科技（台灣分公司）',
      summary: '負責 GCP 雲端概念驗證與正式專案：電商文案生成 RAG PoC，協作開發 Hyundai 維修知識庫系統並導入客戶內部使用。',
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

export default profileZh;
