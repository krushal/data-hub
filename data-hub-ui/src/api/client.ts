const BASE_URL = "http://localhost:4000/api";

export const fetchCategories = async () => {
  const res = await fetch(`${BASE_URL}/categories`);
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
};

export const fetchDatasetsByCategory = async (id: string) => {
  const res = await fetch(`${BASE_URL}/categories/${id}/datasets`);
  if (!res.ok) throw new Error("Failed to fetch datasets");
  return res.json();
};

export const fetchDataset = async (datasetId: string) => {
  const res = await fetch(`${BASE_URL}/datasets/${datasetId}`);
  if (!res.ok) throw new Error("Failed to fetch dataset");
  return res.json();
};
