import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Regolamento from "./pages/Regolamento";
import Lore from "./pages/Lore";
import Gallery from "./pages/Gallery";
import Staff from "./pages/Staff";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/regolamento" element={<Regolamento />} />
      <Route path="/lore" element={<Lore />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/staff" element={<Staff />} />
    </Routes>
  );
}
