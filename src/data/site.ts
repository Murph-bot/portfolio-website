export type SocialLink = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export const siteConfig = {
  name: "Your Name",
  role: "Full-Stack Developer",
  tagline: "Building thoughtful digital experiences with clean code and refined design.",
  email: "hello@yourname.com",
  location: "Athens, Greece",
  about: [
    "I'm a developer focused on crafting modern web applications with attention to detail, performance, and user experience.",
    "I enjoy turning ideas into polished products — from concept and design to deployment and iteration.",
    "When I'm not coding, you'll find me exploring new tools, refining side projects, or expanding my skills through courses and hands-on builds.",
  ],
  nav: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Websites", href: "#websites" },
    { label: "Courses", href: "#courses" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavItem[],
  socials: [
    { label: "GitHub", href: "https://github.com/yourusername" },
    { label: "LinkedIn", href: "https://linkedin.com/in/yourusername" },
    { label: "Twitter", href: "https://twitter.com/yourusername" },
  ] satisfies SocialLink[],
  resumePath: "/resume.pdf",
  seo: {
    title: "Your Name — Portfolio",
    description:
      "Personal portfolio showcasing projects, websites, courses, and professional work.",
    url: "https://yourname.netlify.app",
  },
};
