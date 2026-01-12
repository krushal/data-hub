import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchDataset } from "../api/client";
import type { Dataset } from "../types";

const DatasetPage = () => {
  const { datasetId } = useParams();
  const [dataset, setDataset] = useState<Dataset | null>(null);

  useEffect(() => {
    if (datasetId) fetchDataset(datasetId).then(setDataset);
  }, [datasetId]);

  if (!dataset) return <p>Loading...</p>;

  return (
    <div>
      <h2>{dataset.name}</h2>
      <p>{dataset.description}</p>
    </div>
  );
};

export default DatasetPage;
