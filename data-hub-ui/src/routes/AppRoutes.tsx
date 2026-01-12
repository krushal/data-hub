import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Category from "../pages/Category";
import Dataset from "../pages/Dataset";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/category/:id" element={<Category />} />
    <Route path="/dataset/:datasetId" element={<Dataset />} />
  </Routes>
);

export default AppRoutes;
