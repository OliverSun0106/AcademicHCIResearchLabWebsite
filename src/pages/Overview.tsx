import { Link } from "react-router";
import { researchAreas, projects, people } from "../data/content";

const IMG = (id: string, w: number, h: number) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format`;

export default function Overview() {
  const featured = projects.filter((p) => p.featured);

  return (
    <div>
      {/* Hero */}
      <section
        className="border-b"
        style={{ borderColor: "#e2e2de", background: "#ffffff" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-36">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8" style={{ background: "#F2A900" }} />
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "#5a5a5a", fontFamily: "var(--font-sans)" }}
              >
                Emory University · Computer Science
              </span>
            </div>
            <h1
              className="text-5xl md:text-7xl leading-none mb-8"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 300,
                color: "#0d0d0d",
                letterSpacing: "-0.02em",
              }}
            >
              
              IMMERSEd<br />
              <span style={{ color: "#012169" }}>HCI Lab</span>
            </h1>
            <p
              className="text-xl md:text-2xl mb-6 leading-relaxed"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 300,
                color: "#5a5a5a",
                fontStyle: "italic",
              }}
            >
              Designing Technology for Human Flourishing
            </p>
            <p
              className="text-base md:text-lg leading-relaxed mb-12 max-w-2xl"
              style={{ color: "#5a5a5a", fontFamily: "var(--font-sans)", fontWeight: 300 }}
            >
              We study how people interact with computing systems and design new
              technologies that improve human capabilities, wellbeing, and social
              connection. Our work spans accessibility, health informatics, AI
              interfaces, and social computing—always grounded in rigorous
              empirical methods and human-centered values.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all duration-200"
                style={{
                  background: "#012169",
                  color: "#ffffff",
                  textDecoration: "none",
                  borderRadius: "2px",
                  fontFamily: "var(--font-sans)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#001340";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#012169";
                }}
              >
                Explore Our Research
                <span>→</span>
              </Link>
              <Link
                to="/publications"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all duration-200"
                style={{
                  color: "#012169",
                  textDecoration: "none",
                  borderRadius: "2px",
                  border: "1px solid #012169",
                  fontFamily: "var(--font-sans)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#e8edf5";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                }}
              >
                Publications
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 md:py-28" style={{ background: "#f7f7f5" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ background: "#F2A900" }} />
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "#8f8f8f" }}
              >
                Research Focus
              </span>
            </div>
            <h2
              className="text-3xl md:text-4xl"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 300,
                color: "#0d0d0d",
                letterSpacing: "-0.01em",
              }}
            >
              What We Study
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "#e2e2de" }}>
            {researchAreas.map((area) => (
              <div
                key={area.id}
                className="p-8 transition-colors duration-200"
                style={{ background: "#f7f7f5" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "#f7f7f5";
                }}
              >
                <div
                  className="text-2xl mb-6"
                  style={{ color: "#012169" }}
                >
                  {area.icon}
                </div>
                <h3
                  className="text-lg mb-3"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 400,
                    color: "#0d0d0d",
                  }}
                >
                  {area.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#5a5a5a" }}>
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-14">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8" style={{ background: "#F2A900" }} />
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#8f8f8f" }}>
                  Selected Work
                </span>
              </div>
              <h2
                className="text-3xl md:text-4xl"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 300,
                  color: "#0d0d0d",
                  letterSpacing: "-0.01em",
                }}
              >
                Featured Projects
              </h2>
            </div>
            <Link
              to="/projects"
              className="hidden md:inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-60"
              style={{ color: "#012169", textDecoration: "none", fontFamily: "var(--font-sans)" }}
            >
              All projects →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((project, i) => (
              <ProjectCard key={project.id} project={project} large={i === 0} />
            ))}
          </div>

          <div className="mt-8 md:hidden">
            <Link
              to="/projects"
              className="text-sm"
              style={{ color: "#012169", textDecoration: "none" }}
            >
              View all projects →
            </Link>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 md:py-28 border-t" style={{ borderColor: "#e2e2de", background: "#f7f7f5" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-14">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8" style={{ background: "#F2A900" }} />
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#8f8f8f" }}>
                  The Lab
                </span>
              </div>
              <h2
                className="text-3xl md:text-4xl"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 300,
                  color: "#0d0d0d",
                  letterSpacing: "-0.01em",
                }}
              >
                Meet the Team
              </h2>
            </div>
            <Link
              to="/people"
              className="hidden md:inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-60"
              style={{ color: "#012169", textDecoration: "none", fontFamily: "var(--font-sans)" }}
            >
              View all people →
            </Link>
          </div>

          <div className="flex flex-wrap gap-6">
            {/* PI */}
            <div className="flex items-center gap-4 p-5 border" style={{ borderColor: "#e2e2de", background: "#ffffff", minWidth: "280px" }}>
              <img
                src={IMG(people.pi.photo, 80, 80)}
                alt={people.pi.name}
                className="w-14 h-14 object-cover flex-shrink-0"
                style={{ borderRadius: "2px" }}
              />
              <div>
                <div className="text-sm font-medium" style={{ color: "#0d0d0d", fontFamily: "var(--font-display)" }}>
                  {people.pi.name}
                </div>
                <div className="text-xs mt-0.5" style={{ color: "#012169" }}>
                  Principal Investigator
                </div>
              </div>
            </div>

            {/* PhD students */}
            {people.phd.map((person) => (
              <div
                key={person.name}
                className="flex items-center gap-4 p-5 border transition-colors duration-150"
                style={{ borderColor: "#e2e2de", background: "#ffffff", minWidth: "220px" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "#012169";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "#e2e2de";
                }}
              >
                <img
                  src={IMG(person.photo, 80, 80)}
                  alt={person.name}
                  className="w-12 h-12 object-cover flex-shrink-0"
                  style={{ borderRadius: "2px" }}
                />
                <div>
                  <div className="text-sm font-medium" style={{ color: "#0d0d0d", fontFamily: "var(--font-display)" }}>
                    {person.name}
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: "#8f8f8f" }}>
                    PhD Student
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 md:hidden">
            <Link
              to="/people"
              className="text-sm"
              style={{ color: "#012169", textDecoration: "none" }}
            >
              View all people →
            </Link>
          </div>
        </div>
      </section>

      {/* News / recent highlight */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8" style={{ background: "#F2A900" }} />
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#8f8f8f" }}>
                  Recent Recognition
                </span>
              </div>
              <h2
                className="text-3xl md:text-4xl mb-6"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 300,
                  color: "#0d0d0d",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.2,
                }}
              >
                AccessKey receives Best Paper Award at ASSETS 2023
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#5a5a5a" }}>
                Our adaptive keyboard research, led by PhD student Marcus Williams, received the Best Paper Award at the ACM ASSETS 2023 conference. The system reduces input error rates by 41% for users with motor impairments.
              </p>
              <Link
                to="/projects"
                className="text-sm font-medium"
                style={{ color: "#012169", textDecoration: "none" }}
              >
                Read about the project →
              </Link>
            </div>
            <div>
              <img
                src={IMG("1587614382346-4ec70e388b28", 600, 420)}
                alt="Researcher working with adaptive keyboard interface"
                className="w-full object-cover"
                style={{ background: "#e8edf5" }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProjectCard({ project, large }: { project: typeof projects[0]; large?: boolean }) {
  const IMG = (id: string, w: number, h: number) =>
    `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format`;

  return (
    <div
      className="group border flex flex-col overflow-hidden transition-all duration-200 cursor-pointer"
      style={{ borderColor: "#e2e2de", background: "#ffffff" }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "#012169";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "#e2e2de";
      }}
    >
      <div className="overflow-hidden" style={{ background: "#e8edf5" }}>
        <img
          src={IMG(project.image, 600, large ? 360 : 280)}
          alt={project.imageAlt}
          className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ height: large ? "220px" : "180px" }}
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          <span
            className="text-xs font-medium px-2 py-0.5"
            style={{
              background: "#e8edf5",
              color: "#012169",
              borderRadius: "2px",
              fontFamily: "var(--font-sans)",
            }}
          >
            {project.areaLabel}
          </span>
          {project.venue && (
            <span className="text-xs" style={{ color: "#8f8f8f" }}>
              {project.venue}
            </span>
          )}
        </div>
        <h3
          className="text-lg mb-2"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            color: "#0d0d0d",
            lineHeight: 1.3,
          }}
        >
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed flex-1" style={{ color: "#5a5a5a" }}>
          {project.description}
        </p>
        <div className="mt-4 pt-4 border-t text-xs" style={{ borderColor: "#e2e2de", color: "#8f8f8f" }}>
          {project.researchers.join(", ")}
        </div>
      </div>
    </div>
  );
}
