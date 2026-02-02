// src/components/Projects.jsx
import { useMemo, useState } from "react";

const ITEMS = [
  { id: 1, title: "Maplewood Apartments", tag: "Residential", cats: ["Residential","Corporate"], img: "/images/project-image-1.jpg" },
  { id: 2, title: "Metro Industrial Hub", tag: "Industrial", cats: ["Residential","Industrial"], img: "/images/project-image-2.jpg" },
];

export default function Projects() {
  const [active, setActive] = useState("Residential");
  const cats = ["All", "Residential", "Commercial", "Corporate", "Industrial"];

  const filtered = useMemo(() => {
    if (active === "All") return ITEMS;
    return ITEMS.filter((x) => x.cats.includes(active));
  }, [active]);

  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold text-neutral-500">Our Projects</p>
            <h2 className="mt-3 text-3xl font-extrabold">
              A showcase of architecture that inspires and endures
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  active === c
                    ? "bg-[var(--brand)] text-white"
                    : "bg-neutral-100 hover:bg-neutral-200"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((p) => (
            <a
              key={p.id}
              href="#"
              className="group relative overflow-hidden rounded-3xl bg-black"
            >
              <img
                src={p.img}
                alt=""
                className="h-72 w-full object-cover opacity-85 transition duration-700 group-hover:scale-110 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <h3 className="text-lg font-bold text-white">{p.title}</h3>
                <p className="text-sm text-white/75">{p.tag}</p>
              </div>
              <div className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition group-hover:bg-white/20">
                ↗
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
