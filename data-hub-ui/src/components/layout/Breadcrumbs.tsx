import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const parts = location.pathname.split("/").filter(Boolean);

  return (
    <div style={{ marginBottom: 16 }}>
      <Link to="/">Home</Link>
      {parts.map((part, index) => {
        const path = "/" + parts.slice(0, index + 1).join("/");
        return (
          <span key={path}>
            {" > "}
            <Link to={path}>{part}</Link>
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
