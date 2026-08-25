import { Link, NavLink, Outlet, useLocation } from "react-router";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function Root() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#ffffff", color: "#0d0d0d" }}>
      <ScrollToTop />
      <Nav />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function Nav() {
  const navItems = [
    { to: "/", label: "Overview", end: true },
    { to: "/projects", label: "Projects" },
    { to: "/people", label: "People" },
    { to: "/publications", label: "Publications" },
  ];

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{ background: "rgba(255,255,255,0.96)", borderColor: "#e2e2de", backdropFilter: "blur(8px)" }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3 group"
          style={{ textDecoration: "none" }}
        >
          <div
            className="w-8 h-8 flex items-center justify-center text-white text-xs font-semibold flex-shrink-0"
            style={{ background: "#012169", borderRadius: "2px", fontFamily: "var(--font-display)" }}
          >
            HCI
          </div>
          <div>
            <div
              className="text-sm font-medium leading-none"
              style={{ color: "#012169", fontFamily: "var(--font-display)", fontWeight: 500 }}
            >
              HCIL @ Emory
            </div>
            <div className="text-xs mt-0.5" style={{ color: "#8f8f8f", fontFamily: "var(--font-sans)", fontWeight: 400 }}>
              Human-Computer Interaction Lab
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                [
                  "px-4 py-2 text-sm rounded transition-colors duration-150",
                  isActive
                    ? "font-medium"
                    : "font-normal",
                ].join(" ")
              }
              style={({ isActive }) => ({
                fontFamily: "var(--font-sans)",
                color: isActive ? "#012169" : "#5a5a5a",
                background: isActive ? "#e8edf5" : "transparent",
                textDecoration: "none",
              })}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile nav */}
        <nav className="flex md:hidden items-center gap-0">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className="px-2 py-1 text-xs"
              style={({ isActive }) => ({
                fontFamily: "var(--font-sans)",
                color: isActive ? "#012169" : "#5a5a5a",
                fontWeight: isActive ? 600 : 400,
                textDecoration: "none",
              })}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t mt-24" style={{ borderColor: "#e2e2de" }}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div
              className="text-base font-medium mb-2"
              style={{ fontFamily: "var(--font-display)", color: "#012169" }}
            >
              HCIL @ Emory
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "#5a5a5a" }}>
              Department of Computer Science<br />
              Emory University<br />
              Atlanta, Georgia
            </p>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#8f8f8f" }}>
              Contact
            </div>
            <p className="text-sm" style={{ color: "#5a5a5a" }}>
              s.chen@emory.edu<br />
              Mathematics and Science Center<br />
              Room W430
            </p>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#8f8f8f" }}>
              Links
            </div>
            <div className="flex flex-col gap-1.5">
              {["Emory University", "Department of CS", "ACM DL Profile", "Google Scholar"].map((l) => (
                <a
                  key={l}
                  href="#"
                  className="text-sm transition-colors duration-150 hover:opacity-70"
                  style={{ color: "#012169", textDecoration: "none" }}
                >
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t flex items-center justify-between" style={{ borderColor: "#e2e2de" }}>
          <p className="text-xs" style={{ color: "#8f8f8f" }}>
            © 2024 Human-Computer Interaction Lab, Emory University
          </p>
          <div className="w-4 h-4" style={{ background: "#F2A900", borderRadius: "50%" }} />
        </div>
      </div>
    </footer>
  );
}
