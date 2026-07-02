export type Education = {
  degree: string;
  institution: string;
  status: string;
  note?: string;
};

export type Certification = {
  title: string;
  issuer: string;
  date?: string;
};

export const education: Education[] = [
  {
    degree: "B.Sc. Applied Mathematics & Physical Sciences",
    institution: "National Technical University of Athens (NTUA)",
    status: "In progress",
    note: "Completed part-time alongside full-time employment.",
  },
];

export const certifications: Certification[] = [
  {
    title: "Generative AI Data Analyst",
    issuer: "Vanderbilt University (Coursera)",
    date: "September 2025",
  },
  {
    title: "Google AI Essentials (Prompting)",
    issuer: "Google",
  },
  {
    title: "English Language Proficiency — ECPE (C2 level)",
    issuer: "University of Michigan",
  },
  {
    title: "Certified Bridge Tournament Director",
    issuer: "Greek Bridge Federation",
  },
];
