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
  role: "Business Intelligence & Pricing Analyst",
  tagline:
    "Turning large industrial datasets into business intelligence within the construction equipment after-sales supply chain.",
  email: "mimis.sotos@gmail.com",
  location: "Athens, Greece",
  about: [
    "Analyst with an applied mathematics background and hands-on experience turning large industrial datasets into business intelligence within the construction equipment after-sales supply chain.",
    "At Saracakis Group I manage pricing, sales administration and ERP data (Microsoft Dynamics 365) across a 240,000+ SKU catalogue, deliver VP-level management reporting for Volvo CE and Komatsu, and translate commercial requirements into forecasting, inventory and customer segmentation models.",
    "I act as the bridge between business stakeholders and technical teams, with a focus on data-driven decision-making in supply chain and logistics operations. I'm completing a B.Sc. in Applied Mathematics & Physical Sciences at NTUA part-time alongside full-time employment.",
  ],
  nav: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Courses", href: "#courses" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavItem[],
  socials: [
    { label: "GitHub", href: "https://github.com/Murph-bot" },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/sotirios-goulas-06639a314",
    },
  ] satisfies SocialLink[],
  resumePath: "/resume.pdf",
  seo: {
    title: "Sotirios Goulas — Business Intelligence & Pricing Analyst",
    description:
      "Business Intelligence & Pricing Analyst specialising in supply chain analytics, Dynamics 365, Python automation, VP-level reporting, forecasting and customer segmentation.",
    url: "https://sotirios-goulas.netlify.app",
  },
};
