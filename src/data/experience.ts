export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  highlights: string[];
  tags?: string[];
};

export const experience: Experience[] = [
  {
    role: "Spare Parts Analyst",
    company: "Saracakis Group of Companies",
    location: "Athens, Greece",
    period: "November 2025 – Present",
    current: true,
    highlights: [
      "Automate catalogue processing, XML data generation and Excel reporting with Python (pandas, openpyxl), replacing manual workflows with scalable, repeatable data pipelines across a 240,000+ SKU dataset.",
      "Deliver VP-level management reports for the Volvo CE and Komatsu brands, translating OLAP cube sales data into structured dashboards covering YTD turnover, gross profit and GPM% versus budget and prior year.",
      "Perform data validation and transformation on large pricing files prior to ERP upload (Microsoft Dynamics 365), ensuring data integrity and consistency across domestic and export flows.",
      "Build and maintain customer segmentation models from 12-month sales baselines (KEY / CORE / LONG-TAIL / SPORADIC / INACTIVE tiers), supporting data-driven commercial and inventory decisions.",
      "Gather business requirements from senior management and translate them into analytical models, rolling forecasts (F3+9 logic) and reporting tools used directly in commercial planning.",
    ],
    tags: ["Python", "pandas", "openpyxl", "OLAP", "Dynamics 365", "Forecasting"],
  },
  {
    role: "Client Experience Associate",
    company: "InTouchCX",
    location: "Athens, Greece",
    period: "July 2025 – November 2025",
    highlights: [
      "Supported a leading FinTech client in the Canadian market; documented interactions in CRM systems and analysed customer insight data to drive process improvements.",
    ],
    tags: ["FinTech", "CRM", "Customer Insights"],
  },
  {
    role: "Customer Service Representative",
    company: "TP Greece",
    location: "Athens, Greece",
    period: "September 2023 – May 2025",
    highlights: [
      "Managed high-volume customer interactions for the UK and Greek markets, consistently exceeding KPIs for resolution and satisfaction.",
      "Recorded structured case data in Salesforce and Zendesk; collaborated on cross-functional process improvement initiatives.",
    ],
    tags: ["Salesforce", "Zendesk", "KPI Reporting"],
  },
  {
    role: "Administrative Secretary",
    company: "Athens Army Material Control Unit",
    location: "Greece",
    period: "October 2022 – May 2023",
    highlights: [
      "Maintained inventory and asset records for a large Army division; coordinated inspections and supplier deliveries, supporting materials control and logistics operations.",
    ],
    tags: ["Inventory", "Logistics"],
  },
  {
    role: "Bridge Tournament Director & Club Manager",
    company: "Greek Bridge Union",
    location: "Greece",
    period: "June 2019 – Present",
    current: true,
    highlights: [
      "Organise national and regional tournaments; manage club budget and membership.",
      "Silver Medal — Europe U25 Bridge Tournament.",
    ],
    tags: ["Leadership", "Budgeting", "Event Management"],
  },
];
