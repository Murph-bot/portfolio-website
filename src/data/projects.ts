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
    title: "TaskFlow",
    description:
      "A productivity app for managing tasks with drag-and-drop boards, smart filters, and offline support.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    github: "https://github.com/yourusername/taskflow",
    demo: "https://taskflow-demo.netlify.app",
    featured: true,
  },
  {
    title: "DevMetrics",
    description:
      "Analytics dashboard that tracks coding activity, pull requests, and project velocity across repositories.",
    tags: ["React", "Node.js", "Chart.js"],
    github: "https://github.com/yourusername/devmetrics",
    featured: true,
  },
  {
    title: "CLI Toolkit",
    description:
      "A collection of command-line utilities for automating repetitive development workflows.",
    tags: ["Node.js", "CLI", "Shell"],
    github: "https://github.com/yourusername/cli-toolkit",
  },
  {
    title: "Weather Pulse",
    description:
      "Minimal weather app with location-based forecasts, animated backgrounds, and saved favorites.",
    tags: ["React", "OpenWeather API", "Tailwind"],
    demo: "https://weather-pulse.netlify.app",
  },
];
