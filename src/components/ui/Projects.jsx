import { useMemo, useState } from "react";

const ITEMS = [
  {
    id: 1,
    title: "Maplewood Apartments",
    tag: "Residential Architecture",
    cats: ["Residential", "Corporate"],
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1600&q=70",
  },
  {
    id: 2,
    title: "Metro Industrial Hub",
    tag: "Industrial Facility",
    cats: ["Industrial"],
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=70",
  },
  {
    id: 3,
    title: "Horizon Office Park",
    tag: "Corporate Build",
    cats: ["Corporate", "Commercial"],
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=70",
  },
  {
    id: 4,
    title: "Retail Renovation",
    tag: "Commercial Renovation",
    cats: ["Commercial"],
    img: "https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=1600&q=70",
  },
  {
    id: 5,
    title: "Logistics Hub",
    tag: "Commercial Infrastructure",
    cats: ["Commercial", "Industrial"],
    img: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1600&q=70",
  },
  {
    id: 6,
    title: "Public Sector Upgrade",
    tag: "Municipal Project",
    cats: ["Corporate", "Commercial"],
    img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1600&q=70",
  },
];

export default function Projects() {
  const [active, setActive] = useState("Residential");
  const cats = ["All", "Residential", "Commercial", "Corporate", "Industrial"];

  const filtered = useMemo(() => {
    if (active === "All") return ITEMS;
    return ITEMS.filter((x) => x.cats.includes(active));
  }, [active]);

  return (
    <section className="our-projects" id="projects" style={{ paddingTop: 90, paddingBottom: 90 }}>
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-xl-6">
            <div className="section-title">
              <h3 className="wow fadeInUp">Our Projects</h3>
              <h2 className="text-anime-style-3" data-cursor="-opaque">
                A showcase of work that inspires and endures
              </h2>
            </div>
          </div>

          <div className="col-xl-6">
            <div className="section-content-btn">
              <div className="section-title-content wow fadeInUp" data-wow-delay="0.2s">
                <p>
                  Take a closer look at our work — modern aesthetics, safe installs, and high-quality execution.
                </p>
              </div>
              <div className="section-btn wow fadeInUp" data-wow-delay="0.4s">
                <a href="#contact" className="btn-default">
                  View All Projects
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Filter */}
        <div className="row">
          <div className="col-lg-12">
            <div className="project-nav wow fadeInUp" data-wow-delay="0.2s">
              <ul>
                {cats.map((c) => (
                  <li key={c}>
                    <button
                      type="button"
                      onClick={() => setActive(c)}
                      className={active === c ? "active-btn" : ""}
                      style={{ background: "transparent", border: 0 }}
                    >
                      {c.toLowerCase()}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Grid */}
          <div className="col-lg-12">
            <div className="row project-item-list wow fadeInUp" data-wow-delay="0.4s">
              {filtered.map((p) => (
                <div className="col-xl-4 col-md-6 project-item-box" key={p.id}>
                  <div className="project-item">
                    <div className="project-item-image">
                      <a href="#contact" data-cursor-text="View">
                        <figure className="image-anime">
                          <img src={p.img} alt={p.title} />
                        </figure>
                      </a>
                    </div>

                    <div className="project-item-content">
                      <h2>
                        <a href="#contact">{p.title}</a>
                      </h2>
                      <p>{p.tag}</p>
                    </div>

                    <div className="project-item-btn">
                      <a href="#contact" aria-label="Open project">
                        <span style={{ fontSize: 22, color: "#fff" }}>↗</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
