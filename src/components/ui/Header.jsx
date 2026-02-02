import { useEffect, useState } from "react";
import { Button } from "./Button";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full transition-all ${scrolled ? "bg-white/90 backdrop-blur shadow" : "bg-transparent"}`}>
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <img src="/images/logo.svg" alt="Logo" className="h-8 w-auto" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <a href="#home" className="hover:text-[var(--brand)]">Home</a>
            <a href="#about" className="hover:text-[var(--brand)]">About</a>
            <a href="#services" className="hover:text-[var(--brand)]">Services</a>
            <a href="#projects" className="hover:text-[var(--brand)]">Projects</a>
            <a href="#contact" className="hover:text-[var(--brand)]">Contact</a>
          </nav>

          <div className="hidden lg:block">
            <Button onClick={() => (window.location.href = "#contact")}>
              Contact Us
            </Button>
          </div>

          {/* Mobile */}
          <button
            className="lg:hidden rounded-xl border px-3 py-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            ☰
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-4">
            <div className="grid gap-3 text-sm font-medium">
              {["home","about","services","projects","contact"].map((id) => (
                <a key={id} href={`#${id}`} className="py-2" onClick={() => setOpen(false)}>
                  {id.toUpperCase()}
                </a>
              ))}
              <Button className="w-fit" onClick={() => setOpen(false)}>Contact Us</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
