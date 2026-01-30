import { useState } from "react";
import { openWebinarJam } from "../hooks/openWebinar";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="lg:fixed   lg:top-0 lg:left-0 w-full z-50 backdrop-blur bg-linear-to-r from-purple-900 via-purple-800 to-indigo-900">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-white font-bold text-xl tracking-tight">
          GHENGHEN<span className="text-purple-400"> Academy</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-purple-100">
          <a href="#learn" className="hover:text-white transition">
            What You’ll Learn
          </a>
          <a href="#benefits" className="hover:text-white transition">
            Benefits
          </a>
          <a href="#proof" className="hover:text-white transition">
            Proof
          </a>

          <a
            href="https://ghenghenacademy.selar.com/430z1k"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-linear-to-r from-purple-600 to-indigo-600 text-white font-semibold hover:opacity-90 transition"
          >
            Click Here To Register
          </a>
        </div>

        {/* Mobile Button */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/40 px-6 pt-6 pb-6 text-purple-100">
          <div className="flex flex-col gap-4">
            <a href="#learn" onClick={() => setOpen(false)}>
              What You’ll Learn
            </a>
            <a href="#benefits" onClick={() => setOpen(false)}>
              Benefits
            </a>
            <a href="#proof" onClick={() => setOpen(false)}>
              Proof
            </a>

            <a
              href="#register"
              className="mt-4 text-center px-5 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold"
              onClick={() => {
                setOpen(false);
                openWebinarJam();
              }}
            >
              Enroll Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
