export type SkillGroup = {
  category: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming & Query Languages",
    skills: ["Python (pandas, openpyxl)", "SQL", "Java (basic)"],
  },
  {
    category: "Data & Analytics",
    skills: [
      "Excel 365 (advanced)",
      "Power Query",
      "IBM Cognos Analytics",
      "Google Looker Studio",
      "OLAP cube data",
      "Power BI (developing)",
      "Tableau (developing)",
    ],
  },
  {
    category: "Supply Chain & Business Analysis",
    skills: [
      "Demand forecasting (F3+9 rolling logic)",
      "Inventory analysis",
      "Customer segmentation",
      "Pricing data management",
      "KPI reporting",
      "S&OP support",
      "Requirements gathering",
      "Stakeholder communication",
    ],
  },
  {
    category: "ERP & CRM Systems",
    skills: ["Microsoft Dynamics 365", "Salesforce", "Zendesk"],
  },
  {
    category: "Languages",
    skills: ["Greek (native)", "English (full professional proficiency — ECPE)"],
  },
];
