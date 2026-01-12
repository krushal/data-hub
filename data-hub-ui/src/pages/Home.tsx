import { useEffect, useState } from "react";
import { fetchCategories } from "../api/client";
import CategoryCard from "../components/cards/CategoryCard";
import type { Category } from "../types";

const Home = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetchCategories().then(setCategories);
  }, []);

  return (
    <div>
      <h1>Data Hub</h1>
      {categories.map(cat => (
        <CategoryCard key={cat.id} category={cat} />
      ))}
    </div>
  );
};

export default Home;
