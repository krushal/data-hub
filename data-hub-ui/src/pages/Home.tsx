import { categories } from "../data/mockData";
import CategoryCard from "../components/cards/CategoryCard";

const Home = () => (
  <div>
    <h1>Data Hub</h1>
    <p>Discover analytics and internal datasets</p>

    {categories.map((cat) => (
      <CategoryCard key={cat.id} category={cat} />
    ))}
  </div>
);

export default Home;
