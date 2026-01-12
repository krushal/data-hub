import { Link } from "react-router-dom";
import type { Category } from "../../types";

const CategoryCard = ({ category }: { category: Category }) => {
  return (
    <Link to={`/category/${category.id}`}>
      <div style={{ border: "1px solid #ddd", padding: 16, marginBottom: 12 }}>
        <h3>{category.name}</h3>
      </div>
    </Link>
  );
};

export default CategoryCard;
