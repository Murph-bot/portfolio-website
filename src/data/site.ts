export type SocialLink = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export const siteConfig = {
  name: "Sotirios Goulas",
  role: "Business Analyst",
  tagline:
    "Supply chain & logistics analytics — turning large industrial datasets into business intelligence.",
  email: "mimis.sotos@gmail.com",
  phone: "+30 694 5011 125",
  location: "Athens, Greece",
  about: [
    "I'm an analyst with an applied mathematics background and hands-on experience turning large industrial datasets into business intelligence within the construction equipment after-sales supply chain.",
    "I build automated data pipelines in Python, deliver management reporting across a 240,000+ SKU catalogue, and translate commercial requirements into forecasting, inventory and customer segmentation models.",
    "I act as the bridge between business stakeholders and technical teams, with a focus on data-driven decision-making in supply chain and logistics operations.",
  ],
  interests: [
    "Data engineering",
    "Construction equipment supply chain",
    "Artificial intelligence",
    "Bridge",
    "Continuous learning",
  ],
  nav: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavItem[],
  socials: [
    { label: "GitHub", href: "https://github.com/Murph-bot" },
    { label: "LinkedIn", href: "https://linkedin.com/in/sotirios-goulas-06639a314" },
  ] satisfies SocialLink[],
  resumePath: "/resume.pdf",
  seo: {
    title: "Sotirios Goulas — Business Analyst",
    description:
      "Business Analyst specialising in supply chain & logistics analytics. Python data pipelines, management reporting, forecasting and customer segmentation.",
    url: "https://sotirios-goulas.netlify.app",
  },
};
