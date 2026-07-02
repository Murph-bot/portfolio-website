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
    title: "GPM & Sales Performance Tracker",
    description:
      "Internal tool built in Power Query / Excel for tracking gross profit margin and sales performance against budget across brands.",
    tags: ["Power Query", "Excel", "KPI Reporting"],
    featured: true,
  },
  {
    title: "Apple TV+ Data Exploration",
    description:
      "Python and generative AI analysis of viewership data, with insights presented in an interactive dashboard. GitHub repository in progress.",
    tags: ["Python", "Generative AI", "Dashboard"],
    github: "https://github.com/Murph-bot",
    featured: true,
  },
];
