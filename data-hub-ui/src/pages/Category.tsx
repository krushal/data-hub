import { useParams } from "react-router-dom";
import { useState } from "react";
import { datasets } from "../data/mockData";
import DatasetCard from "../components/cards/DatasetCard";
import SearchBox from "../components/common/SearchBox";
import Breadcrumbs from "../components/layout/Breadcrumbs";

const Category = () => {
  const { id } = useParams();
  const [query, setQuery] = useState("");

  const filtered = datasets.filter(
    (d) =>
      d.categoryId === id &&
      (d.name.toLowerCase().includes(query.toLowerCase()) ||
        d.description.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div>
      <Breadcrumbs />
      <h2>Category</h2>
      <SearchBox value={query} onChange={setQuery} />

      {filtered.map((ds) => (
        <DatasetCard key={ds.id} dataset={ds} />
      ))}
    </div>
  );
};

export default Category;
