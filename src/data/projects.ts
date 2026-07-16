export type Project = {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Fair Share",
    description:
      "A Python CLI for splitting shared group expenses. Uses integer-cent arithmetic to avoid floating-point errors, supports equal and weighted splits, and computes settlement transfers so everyone squares up cleanly.",
    tags: ["Python", "CLI", "pytest", "Algorithms"],
    github: "https://github.com/Murph-bot/fair-share",
    featured: true,
  },
  {
    title: "GPM & Sales Performance Tracker",
    description:
      "Internal tool for tracking gross profit margin and sales performance against budget across brands, feeding VP-level reporting for Volvo CE and Komatsu.",
    tags: ["Power Query", "Excel 365", "OLAP", "KPI Reporting"],
    featured: true,
  },
  {
    title: "Catalogue Automation Pipeline",
    description:
      "Automated catalogue processing, XML data generation and Excel reporting with Python, replacing manual workflows with scalable data pipelines across a 240,000+ SKU dataset.",
    tags: ["Python", "pandas", "openpyxl", "XML"],
    featured: true,
  },
  {
    title: "Customer Segmentation Model",
    description:
      "Segmentation models built from 12-month sales baselines (KEY / CORE / LONG-TAIL / SPORADIC / INACTIVE tiers), supporting data-driven commercial and inventory decisions.",
    tags: ["Python", "Segmentation", "Inventory Analysis"],
  },
  {
    title: "Portfolio Website",
    description:
      "This site — a personal portfolio built with Next.js, Tailwind CSS and Framer Motion, deployed on Netlify.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Netlify"],
    github: "https://github.com/Murph-bot/portfolio-website",
    demo: "https://sotirios-goulas.netlify.app",
  },
  {
    title: "Apple TV+ Data Exploration",
    description:
      "Python and generative AI analysis of viewership data, with insights presented in an interactive dashboard. GitHub repository in progress.",
    tags: ["Python", "Generative AI", "Dashboards"],
    github: "https://github.com/Murph-bot",
  },
];
