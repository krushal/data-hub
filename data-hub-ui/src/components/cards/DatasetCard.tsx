import { Link } from "react-router-dom";
import type { Dataset } from "../../types";

const DatasetCard = ({ dataset }: { dataset: Dataset }) => (
  <Link to={`/dataset/${dataset.id}`}>
    <div style={{ border: "1px solid #ddd", padding: 12, marginBottom: 10 }}>
      <h4>{dataset.name}</h4>
      <p>{dataset.description}</p>
    </div>
  </Link>
);

export default DatasetCard;
