import { Outlet } from "react-router-dom";

import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#0D0C0A] text-[#D9CAB8] selection:bg-[#736751] selection:text-[#0D0C0A] relative">
      {/* background image overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.50] mix-blend-soft-light"
        style={{
          backgroundImage: "url('https://i.imgur.com/3RNqjEK.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <Navbar />
      <main className="relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
