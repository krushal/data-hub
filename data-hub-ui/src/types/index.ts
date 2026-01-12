export interface Category {
  id: string;
  name: string;
}

export interface Dataset {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  owner: string;
  contact: string;
  lastUpdated: string;
  tags: string[];
  preview: Record<string, string | number>;
  freshness: "Fresh" | "Stale" | "Unknown";
}
