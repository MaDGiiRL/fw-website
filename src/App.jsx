import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Regolamento from "./pages/Regolamento.jsx";
import Lore from "./pages/Lore.jsx";
import Gallery from "./pages/Gallery.jsx";
import Staff from "./pages/Staff.jsx";
import BestiaryTimeline from "./pages/BestiaryTimeline.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/regolamento" element={<Regolamento />} />
        <Route path="/lore" element={<Lore />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/creature" element={<BestiaryTimeline />} />
      </Route>
    </Routes>
  );
}
