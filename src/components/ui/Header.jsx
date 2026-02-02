// src/components/ui/Header.jsx
import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";

const NAV = [
  { label: "Home", href: "#top" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Blog", href: "#blog" },
];

const PAGES = [
  { label: "Projects", href: "#projects" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQs", href: "#faqs" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onDoc = (e) => {
      const el = e.target;
      if (!el.closest?.("[data-pages]")) setPagesOpen(false);
    };
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  return (
    <header
      id="top"
      className={[
        "fixed top-0 left-0 right-0 z-50",
        "transition-all duration-300",
        scrolled
          ? "bg-[#0b1f2e]/85 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,.25)]"
          : "bg-[#0b1f2e]/45 backdrop-blur-sm",
      ].join(" ")}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-[84px] items-center justify-between gap-4">
          {/* Logo (ONLY ONE) */}
          <a href="#top" className="flex items-center">
            <img src={logo} alt="GDS Mechanical" className="h-10 w-auto" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-9">
            {NAV.map((x) => (
              <a
                key={x.label}
                href={x.href}
                className="text-sm font-semibold text-white/90 hover:text-white transition"
              >
                {x.label}
              </a>
            ))}

            <div className="relative" data-pages>
              <button
                type="button"
                onClick={() => setPagesOpen((v) => !v)}
                className="inline-flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white transition"
              >
                Pages <span className={`transition ${pagesOpen ? "rotate-180" : ""}`}>▾</span>
              </button>

              {pagesOpen && (
                <div className="absolute left-0 mt-3 w-56 overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-black/10">
                  {PAGES.map((p) => (
                    <a
                      key={p.label}
                      href={p.href}
                      className="block px-4 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-100"
                      onClick={() => setPagesOpen(false)}
                    >
                      {p.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#contact"
              className="text-sm font-semibold text-white/90 hover:text-white transition"
            >
              Contact Us
            </a>
          </nav>

          {/* CTA (forced visible even if custom.css overrides) */}
          <a
            href="#contact"
            className={[
              "hidden lg:inline-flex items-center gap-3 rounded-xl",
              "!bg-[var(--brand)] !text-black",
              "px-5 py-3 text-sm font-extrabold",
              "shadow-[0_10px_25px_rgba(0,0,0,.25)]",
              "hover:brightness-95 transition",
            ].join(" ")}
          >
            <span className="!text-black">Contact Us</span>
            <span className="grid h-9 w-9 place-items-center rounded-lg !bg-black !text-white">
              →
            </span>
          </a>

          {/* Mobile */}
          <button
            type="button"
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Open menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden pb-4">
            <div className="rounded-2xl bg-[#0b1f2e]/95 ring-1 ring-white/10 overflow-hidden">
              {[...NAV, { label: "Projects", href: "#projects" }, { label: "Contact Us", href: "#contact" }].map(
                (x) => (
                  <a
                    key={x.label}
                    href={x.href}
                    className="block px-4 py-4 text-sm font-semibold text-white/90 hover:bg-white/10"
                    onClick={() => setOpen(false)}
                  >
                    {x.label}
                  </a>
                )
              )}

              <div className="px-4 pb-4">
                <a
                  href="#contact"
                  className="mt-2 inline-flex w-full items-center justify-between rounded-xl !bg-[var(--brand)] px-5 py-3 text-sm font-extrabold !text-black"
                  onClick={() => setOpen(false)}
                >
                  Contact Us
                  <span className="grid h-9 w-9 place-items-center rounded-lg !bg-black !text-white">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
