export type Experience = {
  title: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
};

export const experience: Experience[] = [
  {
    title: "Spare Parts & Pricing Analyst",
    company: "Saracakis Group of Companies",
    location: "Athens",
    period: "Nov 2025 – Present",
    highlights: [
      "Own pricing data management across a 240,000+ SKU catalogue — validation, transformation and integrity checks prior to ERP upload across domestic and export flows.",
      "Manage and troubleshoot ERP operations in Microsoft Dynamics 365 across the after-sales parts business.",
      "Deliver VP-level management reports for Volvo CE and Komatsu, translating OLAP cube sales data into dashboards covering YTD turnover, gross profit and GPM% versus budget and prior year.",
      "Automate catalogue processing and XML data generation; build customer segmentation models (KEY / CORE / LONG-TAIL / SPORADIC / INACTIVE) and rolling forecasts (F3+9) used in commercial planning.",
    ],
  },
  {
    title: "Client Experience Associate",
    company: "InTouchCX",
    location: "Athens",
    period: "Jul 2025 – Nov 2025",
    highlights: [
      "Supported a leading FinTech client in the Canadian market; documented interactions in CRM systems and analysed customer insight data to drive process improvements.",
    ],
  },
  {
    title: "Customer Service Representative",
    company: "TP Greece",
    location: "Athens",
    period: "Sep 2023 – May 2025",
    highlights: [
      "Managed high-volume customer interactions for the UK and Greek markets, consistently exceeding KPIs for resolution and satisfaction.",
      "Recorded structured case data in Salesforce and Zendesk; collaborated on cross-functional process improvement initiatives.",
    ],
  },
  {
    title: "Administrative Secretary",
    company: "Athens Army Material Control Unit",
    location: "Athens",
    period: "Oct 2022 – May 2023",
    highlights: [
      "Maintained inventory and asset records for a large Army division; coordinated inspections and supplier deliveries supporting materials control and logistics operations.",
    ],
  },
  {
    title: "Bridge Tournament Director & Club Manager",
    company: "Greek Bridge Union",
    location: "Greece",
    period: "Jun 2019 – Present",
    highlights: [
      "Organise national and regional tournaments; manage club budget and membership. Silver Medal — Europe U25 Bridge Tournament.",
    ],
  },
];
