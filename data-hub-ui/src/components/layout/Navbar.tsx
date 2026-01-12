import { Link } from "react-router-dom";

const Navbar = () => (
  <nav style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>
    <Link to="/" style={{ fontWeight: "bold", fontSize: 18 }}>
      Data Hub
    </Link>
  </nav>
);

export default Navbar;
