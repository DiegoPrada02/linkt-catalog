import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import CatalogCategories from "./pages/CatalogCategories";
import CatalogSubcategories from "./pages/CatalogSubcategories";
import Contact from "./pages/Contact";
import SubcategoryDetail from "./pages/SubcategoryDetail";
import Distribution from "./pages/Distribution";
import Gallery from "./pages/Gallery";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<CatalogCategories />} />
        <Route path="/distribution" element={<Distribution />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/catalog/:categoryId" element={<CatalogSubcategories />} />
        <Route path="/catalog/:categoryId/:subcategoryId" element={<SubcategoryDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
