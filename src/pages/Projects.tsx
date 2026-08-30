import { useState } from "react";
import { projects, researchAreas } from "../data/content";

const IMG = (id: string, w: number, h: number) =>
  id.startsWith("http")
    ? id
    : id.startsWith("local:")
      ? `${import.meta.env.BASE_URL}${id.slice(6)}`
      : `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format`;

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filtered = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.area === activeFilter);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      {/* Header */}
      <div className="mb-14">
        <div className="flex items-center gap-3 mb-5">
          <div className="h-px w-8" style={{ background: "#F2A900" }} />
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#8f8f8f" }}>
            Research Projects
          </span>
        </div>
        <h1
          className="text-4xl md:text-5xl mb-6"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 300,
            color: "#0d0d0d",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}
        >
          Projects
        </h1>
        <p className="text-lg max-w-2xl" style={{ color: "#5a5a5a", lineHeight: 1.7 }}>
          Our research projects span multiple areas of human-computer interaction,
          combining empirical methods with design and system building.
        </p>
      </div>

      {/* Filter bar */}
      <div className="flex flex-wrap gap-2 mb-12 pb-8 border-b" style={{ borderColor: "#e2e2de" }}>
        <FilterButton
          label="All Projects"
          active={activeFilter === "all"}
          onClick={() => setActiveFilter("all")}
        />
        {researchAreas.map((area) => (
          <FilterButton
            key={area.id}
            label={
              area.title.includes("&")
                ? area.title.split(" & ")[0].split(" ")[0] + " & " + area.title.split(" & ")[1].split(" ")[0]
                : area.title.split(" ").slice(0, 2).join(" ")
            }
            active={activeFilter === area.id}
            onClick={() => setActiveFilter(area.id)}
          />
        ))}
      </div>

      {/* Project grid */}
      <div
        className="grid gap-6"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
        }}
      >
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="py-20 text-center" style={{ color: "#8f8f8f" }}>
          No projects in this area yet.
        </div>
      )}
    </div>
  );
}

function FilterButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 text-sm transition-all duration-150"
      style={{
        fontFamily: "var(--font-sans)",
        background: active ? "#012169" : "transparent",
        color: active ? "#ffffff" : "#5a5a5a",
        border: `1px solid ${active ? "#012169" : "#e2e2de"}`,
        borderRadius: "2px",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        if (!active) {
          (e.currentTarget as HTMLButtonElement).style.borderColor = "#012169";
          (e.currentTarget as HTMLButtonElement).style.color = "#012169";
        }
      }}
      onMouseLeave={(e) => {
        if (!active) {
          (e.currentTarget as HTMLButtonElement).style.borderColor = "#e2e2de";
          (e.currentTarget as HTMLButtonElement).style.color = "#5a5a5a";
        }
      }}
    >
      {label}
    </button>
  );
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <div
      className="group border flex flex-col overflow-hidden transition-all duration-200 cursor-pointer"
      style={{ borderColor: "#e2e2de", background: "#ffffff" }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "#012169";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 24px rgba(1,33,105,0.08)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "#e2e2de";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
      }}
    >
      {/* Image */}
      <div className="overflow-hidden" style={{ background: "#e8edf5" }}>
        <img
          src={IMG(project.image, 640, 380)}
          alt={project.imageAlt}
          className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ height: "220px" }}
        />
      </div>

      {/* Content */}
      <div className="p-7 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-4">
          <span
            className="text-xs font-medium px-2 py-0.5"
            style={{
              background: "#e8edf5",
              color: "#012169",
              borderRadius: "2px",
            }}
          >
            {project.areaLabel}
          </span>
          {project.venue && (
            <span
              className="text-xs"
              style={{ color: "#8f8f8f" }}
            >
              {project.venue}
            </span>
          )}
        </div>

        <h3
          className="text-xl mb-3"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            color: "#0d0d0d",
            lineHeight: 1.25,
          }}
        >
          {project.title}
        </h3>

        <p className="text-sm leading-relaxed flex-1" style={{ color: "#5a5a5a" }}>
          {project.description}
        </p>

        <div className="mt-5 pt-5 border-t" style={{ borderColor: "#e2e2de" }}>
          <div className="text-xs mb-2" style={{ color: "#8f8f8f" }}>
            {project.researchers.join(" · ")}
          </div>
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-medium transition-opacity hover:opacity-60"
              style={{ color: "#012169", textDecoration: "none" }}
            >
              View paper →
            </a>
          ) : (
            <button
              className="text-xs font-medium transition-opacity hover:opacity-60"
              style={{ color: "#012169", background: "none", border: "none", cursor: "pointer", padding: 0 }}
            >
              View project →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
