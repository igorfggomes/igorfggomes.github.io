// ========================
// TRANSLATIONS
// ========================
const translations = {
  pt: {
    'nav-about': 'Sobre',
    'nav-stack': 'Stack',
    'nav-experience': 'Experiência',
    'nav-contact': 'Contato',

    'hero-title': 'Desenvolvedor <span class="gradient-text">Full Stack Pleno</span>',
    'hero-desc': 'Especializado em ERPs, APIs de alta performance e automação de processos.<br>React · Node.js · TypeScript · React Native',
    'btn-linkedin': 'Ver LinkedIn',
    'btn-contact': 'Falar comigo',

    'about-title': 'Sobre <span class="gradient-text">mim</span>',
    'about-p1': 'Olá! Sou desenvolvedor Full Stack com foco em construir sistemas que resolvem problemas reais. Ao longo da minha carreira trabalhei com ERPs de alta complexidade, integrações fiscais (NF-e, NFC-e, SAT) e APIs utilizadas em produção por grandes equipes.',
    'about-p2': 'Hoje atuo como referência técnica na Work Inovação, onde lidero code reviews, estruturo design systems e entrego melhorias com impacto mensurável: <strong>60% de redução no tempo de resposta de APIs</strong>, <strong>80% de eliminação de trabalho manual</strong> com Python e <strong>40% de aumento na estabilidade</strong> do sistema.',
    'about-p3': 'Sou movido por código limpo, arquitetura bem pensada e colaboração. Sempre aberto a novos desafios. 🚀',
    'info-location-label': 'Localização',
    'info-education-label': 'Formação',
    'info-education-value': 'Eng. de Software — UniFACEF',
    'info-english-label': 'Inglês',
    'info-english-value': 'Intermediário (B1)',

    'stack-title': 'Stack <span class="gradient-text">técnica</span>',
    'stack-cat-1': 'Front-end',
    'stack-cat-2': 'Back-end',
    'stack-cat-3': 'DevOps & Cloud',
    'stack-cat-4': 'Metodologias',

    'exp-title': 'Experiência <span class="gradient-text">profissional</span>',
    'exp1-role': 'Desenvolvedor Full Stack Pleno',
    'exp1-period': 'Mai/2025 – Presente',
    'exp1-bullets': `
      <li>Atuei como referência técnica em ERP de alta complexidade com módulos fiscais (NF-e, NFC-e, SAT), financeiro e vendas, utilizando React, TypeScript e Node.js</li>
      <li>Reduzi o tempo de resposta de APIs REST e GraphQL em <strong class="metric">60%</strong> via refatoração de endpoints e otimização de queries</li>
      <li>Implementei biblioteca de componentes com Design System, eliminando retrabalho entre squads e reduzindo bugs em produção</li>
      <li>Refatorei código legado e queries SQL, aumentando a estabilidade do sistema em <strong class="metric">40%</strong></li>
      <li>Implementei e mantive pipelines CI/CD com Docker, GitHub Actions e Azure DevOps</li>`,
    'exp2-role': 'Desenvolvedor Full Stack Júnior',
    'exp2-period': 'Out/2022 – Mai/2025',
    'exp2-bullets': `
      <li>Desenvolvi módulos estratégicos do ERP (Fiscal, Vendas, Financeiro e Produtos) com React, TypeScript e Node.js</li>
      <li>Automatizei processos financeiros com Python, eliminando <strong class="metric">80%</strong> do tempo operacional manual da equipe</li>
      <li>Otimizei APIs REST e a integração front-end/back-end, reduzindo tempo de resposta em <strong class="metric">60%</strong></li>
      <li>Desenvolvi dashboards no Power BI integrados ao MySQL para análise de indicadores estratégicos</li>`,
    'exp3-role': 'Desenvolvedor Full Stack Júnior',
    'exp3-period': 'Set/2021 – Set/2022',
    'exp3-bullets': `
      <li>Desenvolvi sistemas ERP para clínicas, prefeituras e academias com React, TypeScript e React Native</li>
      <li>Construí APIs REST com Node.js, Express e Sequelize integradas ao MySQL</li>
      <li>Otimizei módulos críticos com ganho de <strong class="metric">15%</strong> em performance de processamento</li>`,

    'contact-title': 'Vamos <span class="gradient-text">conversar?</span>',
    'contact-desc': 'Aberto a novas oportunidades, projetos e networking.',
    'footer-text': 'Desenvolvido por <span class="gradient-text">Igor Franklin</span> · São Paulo, SP',
  },

  en: {
    'nav-about': 'About',
    'nav-stack': 'Stack',
    'nav-experience': 'Experience',
    'nav-contact': 'Contact',

    'hero-title': 'Full Stack <span class="gradient-text">Developer</span>',
    'hero-desc': 'Specialized in ERPs, high-performance APIs and process automation.<br>React · Node.js · TypeScript · React Native',
    'btn-linkedin': 'View LinkedIn',
    'btn-contact': 'Get in touch',

    'about-title': 'About <span class="gradient-text">me</span>',
    'about-p1': "Hi! I'm a Full Stack Developer focused on building systems that solve real problems. Throughout my career I've worked with high-complexity ERPs, fiscal integrations (NF-e, NFC-e, SAT) and APIs used in production by large teams.",
    'about-p2': 'Today I work as a technical reference at Work Inovação, where I lead code reviews, structure design systems and deliver improvements with measurable impact: <strong>60% reduction in API response time</strong>, <strong>80% elimination of manual work</strong> with Python and <strong>40% increase in system stability</strong>.',
    'about-p3': "I'm driven by clean code, well-thought-out architecture and collaboration. Always open to new challenges. 🚀",
    'info-location-label': 'Location',
    'info-education-label': 'Education',
    'info-education-value': 'Software Eng. — UniFACEF',
    'info-english-label': 'English',
    'info-english-value': 'Intermediate (B1)',

    'stack-title': '<span class="gradient-text">Tech</span> Stack',
    'stack-cat-1': 'Front-end',
    'stack-cat-2': 'Back-end',
    'stack-cat-3': 'DevOps & Cloud',
    'stack-cat-4': 'Methodologies',

    'exp-title': 'Professional <span class="gradient-text">Experience</span>',
    'exp1-role': 'Full Stack Developer — Mid-level',
    'exp1-period': 'May/2025 – Present',
    'exp1-bullets': `
      <li>Acted as technical reference in a high-complexity ERP with fiscal modules (NF-e, NFC-e, SAT), using React, TypeScript and Node.js</li>
      <li>Reduced REST and GraphQL API response time by <strong class="metric">60%</strong> through endpoint refactoring and query optimization</li>
      <li>Built a component library with Design System, eliminating rework between squads and reducing production bugs</li>
      <li>Refactored legacy code and SQL queries, increasing system stability by <strong class="metric">40%</strong></li>
      <li>Maintained CI/CD pipelines with Docker, GitHub Actions and Azure DevOps</li>`,
    'exp2-role': 'Full Stack Developer — Junior',
    'exp2-period': 'Oct/2022 – May/2025',
    'exp2-bullets': `
      <li>Developed strategic ERP modules (Fiscal, Sales, Finance and Products) with React, TypeScript and Node.js</li>
      <li>Automated financial processes with Python, eliminating <strong class="metric">80%</strong> of the team's manual operational time</li>
      <li>Optimized REST APIs and front-end/back-end integration, reducing response time by <strong class="metric">60%</strong></li>
      <li>Developed Power BI dashboards integrated with MySQL for strategic decision-making</li>`,
    'exp3-role': 'Full Stack Developer — Junior',
    'exp3-period': 'Sep/2021 – Sep/2022',
    'exp3-bullets': `
      <li>Developed ERP systems for clinics, city halls and gyms with React, TypeScript and React Native</li>
      <li>Built REST APIs with Node.js, Express and Sequelize integrated with MySQL</li>
      <li>Optimized critical modules with a <strong class="metric">15%</strong> performance gain</li>`,

    'contact-title': "Let's <span class=\"gradient-text\">talk?</span>",
    'contact-desc': 'Open to new opportunities, projects and networking.',
    'footer-text': 'Developed by <span class="gradient-text">Igor Franklin</span> · São Paulo, SP',
  }
};

// ========================
// LANGUAGE TOGGLE
// ========================
let currentLang = localStorage.getItem('portfolio-lang') || 'pt';

function applyLang(lang) {
  currentLang = lang;
  document.getElementById('lang-pt').classList.toggle('active', lang === 'pt');
  document.getElementById('lang-en').classList.toggle('active', lang === 'en');
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });

  localStorage.setItem('portfolio-lang', lang);
}

function toggleLang() {
  applyLang(currentLang === 'pt' ? 'en' : 'pt');
}

// ========================
// NAVBAR SCROLL
// ========================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ========================
// FADE IN ON SCROLL
// ========================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ========================
// INIT — default PT
// ========================
applyLang(currentLang);
