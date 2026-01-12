export const categories = [
  { id: "product", name: "Product Analytics" },
  { id: "content", name: "Content Performance" },
  { id: "ops", name: "Operational Metrics" },
];

export const datasets = [
  {
    id: "pa1",
    categoryId: "product",
    name: "Daily Active Users",
    description: "Tracks daily active users",
    owner: "Analytics Team",
    contact: "analytics@company.com",
    lastUpdated: "2026-01-10",
    tags: ["users"],
    preview: { value: "1.2M" },
    freshness: "Fresh",
  },
  // (add remaining datasets later)
];
