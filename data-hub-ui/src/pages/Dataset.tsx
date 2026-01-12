import { useParams } from "react-router-dom";
import { datasets } from "../data/mockData";
import Breadcrumbs from "../components/layout/Breadcrumbs";
import Badge from "../components/common/Badge";

const Dataset = () => {
  const { datasetId } = useParams();
  const dataset = datasets.find((d) => d.id === datasetId);

  if (!dataset) return <p>Dataset not found</p>;

  return (
    <div>
      <Breadcrumbs />
      <h2>{dataset.name}</h2>
      <Badge status={dataset.freshness} />
      <p>{dataset.description}</p>
      <p>Owner: {dataset.owner}</p>
      <p>Contact: {dataset.contact}</p>
    </div>
  );
};

export default Dataset;
