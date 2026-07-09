export type Course = {
  title: string;
  provider: string;
  completedAt: string;
  credentialUrl?: string;
  category: string;
};

export const courses: Course[] = [
  {
    title: "Generative AI Data Analyst",
    provider: "Vanderbilt University (Coursera)",
    completedAt: "2025",
    category: "Data & AI",
  },
  {
    title: "Google AI Essentials (Prompting)",
    provider: "Google",
    completedAt: "2025",
    category: "Data & AI",
  },
  {
    title: "B.Sc. Applied Mathematics & Physical Sciences",
    provider: "National Technical University of Athens (NTUA)",
    completedAt: "In progress",
    category: "Education",
  },
  {
    title: "English Language Proficiency — ECPE (C2)",
    provider: "University of Michigan",
    completedAt: "Certified",
    category: "Language",
  },
  {
    title: "Certified Bridge Tournament Director",
    provider: "Greek Bridge Federation",
    completedAt: "Certified",
    category: "Other",
  },
];
