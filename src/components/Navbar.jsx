import { NavLink, Link } from "react-router-dom";
import logo from "../../src/assets/logo.gif";
const navLink =
  "px-3 py-2 rounded-lg hover:bg-[#262520] hover:shadow-glow transition inline-flex items-center gap-2";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-[#0D0C0A]/70 border-b border-[#262520]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="w-10 rounded-md  group-hover:shadow-glow grid place-items-center text-[#0D0C0A] font-black">
            <img
              src={logo}
              alt="Fallen World logo"
              loading="lazy"
              className="shrink-0  object-contain"
            />
          </span>
          <span className="font-semibold tracking-widest text-[#D9CAB8]">
            FALLEN WORLD
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-2 text-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${navLink} ${isActive ? "bg-[#262520]" : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/regolamento"
            className={({ isActive }) =>
              `${navLink} ${isActive ? "bg-[#262520]" : ""}`
            }
          >
            Regolamento
          </NavLink>
          <NavLink
            to="/lore"
            className={({ isActive }) =>
              `${navLink} ${isActive ? "bg-[#262520]" : ""}`
            }
          >
            Lore
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `${navLink} ${isActive ? "bg-[#262520]" : ""}`
            }
          >
            Gallery
          </NavLink>
          <NavLink
            to="/staff"
            className={({ isActive }) =>
              `${navLink} ${isActive ? "bg-[#262520]" : ""}`
            }
          >
            Staff
          </NavLink>
        </nav>
        {/* Mobile */}
        <details className="md:hidden">
          <summary
            className="list-none cursor-pointer p-2 rounded-lg hover:bg-[#262520]"
            aria-label="Apri menu"
          >
            ☰
          </summary>
          <div className="absolute right-4 mt-2 w-48 bg-[#0D0C0A] border border-[#262520] rounded-xl p-2 shadow-glow">
            <div className="flex flex-col">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${navLink} ${isActive ? "bg-[#262520]" : ""}`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/regolamento"
                className={({ isActive }) =>
                  `${navLink} ${isActive ? "bg-[#262520]" : ""}`
                }
              >
                Regolamento
              </NavLink>
              <NavLink
                to="/lore"
                className={({ isActive }) =>
                  `${navLink} ${isActive ? "bg-[#262520]" : ""}`
                }
              >
                Lore
              </NavLink>
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  `${navLink} ${isActive ? "bg-[#262520]" : ""}`
                }
              >
                Gallery
              </NavLink>
              <NavLink
                to="/staff"
                className={({ isActive }) =>
                  `${navLink} ${isActive ? "bg-[#262520]" : ""}`
                }
              >
                Staff
              </NavLink>
            </div>
          </div>
        </details>
      </div>

    </header>
  );
}
