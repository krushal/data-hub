import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchDatasetsByCategory } from "../api/client";
import DatasetCard from "../components/cards/DatasetCard";
import type { Dataset } from "../types";

const Category = () => {
  const { id } = useParams();
  const [datasets, setDatasets] = useState<Dataset[]>([]);

  useEffect(() => {
    if (id) {
      fetchDatasetsByCategory(id).then(data =>
        setDatasets(
          data.sort(
            (a: Dataset, b: Dataset) =>
              new Date(b.lastUpdated).getTime() -
              new Date(a.lastUpdated).getTime()
          )
        )
      );
    }
  }, [id]);

  return (
    <div>
      {datasets.map(ds => (
        <DatasetCard key={ds.id} dataset={ds} />
      ))}
    </div>
  );
};

export default Category;
