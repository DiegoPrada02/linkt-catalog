import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import CatalogCategories from "./pages/CatalogCategories";
import CatalogSubcategories from "./pages/CatalogSubcategories";
import Contact from "./pages/Contact";
import SubcategoryDetail from "./pages/SubcategoryDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<CatalogCategories />} />
        <Route path="/catalog/:categoryId" element={<CatalogSubcategories />} />
        <Route path="/catalog/:categoryId/:subcategoryId" element={<SubcategoryDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
