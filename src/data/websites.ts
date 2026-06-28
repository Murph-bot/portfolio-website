export type Website = {
  title: string;
  description: string;
  url: string;
  image: string;
  tags: string[];
};

export const websites: Website[] = [
  {
    title: "Studio Nova",
    description: "A sleek landing page for a creative agency with smooth scroll animations.",
    url: "https://example.com",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    tags: ["Landing Page", "Animation"],
  },
  {
    title: "Artisan Coffee",
    description: "E-commerce storefront for a specialty coffee brand with product filtering.",
    url: "https://example.com",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
    tags: ["E-commerce", "Shopify"],
  },
  {
    title: "Mindful Journal",
    description: "Personal blog with MDX support, dark mode, and reading-time estimates.",
    url: "https://example.com",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80",
    tags: ["Blog", "MDX"],
  },
];
