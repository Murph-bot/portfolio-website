export type Course = {
  title: string;
  provider: string;
  completedAt: string;
  credentialUrl?: string;
  category: string;
};

export const courses: Course[] = [
  {
    title: "Full-Stack Web Development",
    provider: "freeCodeCamp",
    completedAt: "2024",
    credentialUrl: "https://example.com/credential",
    category: "Web Development",
  },
  {
    title: "Advanced React Patterns",
    provider: "Frontend Masters",
    completedAt: "2024",
    category: "Frontend",
  },
  {
    title: "Node.js Microservices",
    provider: "Udemy",
    completedAt: "2023",
    credentialUrl: "https://example.com/credential",
    category: "Backend",
  },
  {
    title: "UI/UX Design Fundamentals",
    provider: "Coursera",
    completedAt: "2023",
    category: "Design",
  },
  {
    title: "AWS Cloud Practitioner",
    provider: "Amazon Web Services",
    completedAt: "2023",
    credentialUrl: "https://example.com/credential",
    category: "Cloud",
  },
];
