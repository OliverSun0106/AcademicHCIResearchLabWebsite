import { Link } from "react-router";
import { researchAreas, projects, people } from "../data/content";

const IMG = (id: string, w: number, h: number) =>
  id.startsWith("http")
    ? id
    : id.startsWith("local:")
      ? `${import.meta.env.BASE_URL}${id.slice(6)}`
      : `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format`;

export default function Overview() {
  const featuredThemes = [
    {
      title: "Human-Centered Technologies for Healthcare",
      description:
        "We design and study human-centered technologies, including extended reality (XR) and artificial intelligence (AI), to support medical training, clinical communication, collaboration, and healthcare education.",
      projectIds: ["placeholder-1"],
    },
    {
      title: "Human-Centered AI",
      description:
        "We design AI systems that augment instruction, support adaptation, and keep humans in the loop as active learners and decision-makers.",
      projectIds: ["placeholder-2"],
    },
    {
      title: "Design for Inclusion",
      description:
        "We create equitable, accessible, and supportive learning experiences that work across diverse contexts, learners, and needs.",
      projectIds: ["placeholder-3"],
    },
  ];

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
              <span style={{ color: "#012169" }}>ImmersED</span><br />
              <span style={{ color: "#0d0d0d" }}>HCI Group</span>
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
              Designing human-centered technologies for learning physical and hands-on skills.
            </p>
            <p
              className="text-base md:text-lg leading-relaxed mb-12 max-w-2xl"
              style={{ color: "#5a5a5a", fontFamily: "var(--font-sans)", fontWeight: 300 }}
            >
              The ImmersED HCI Group at Emory University conducts research at the
              intersection of Human-Computer Interaction and Learning Sciences. We
              design, build, and study interactive systems that support how people
              learn complex physical and hands-on skills.
              <br />
              <br />
              Our research explores immersive technologies, physiological and
              behavioral sensing, tangible interfaces, and generative AI to create
              learner-centered experiences that can adapt to learners, support
              reflection, and enable more effective and engaging skill learning.
              <br />
              <br />
              Our work spans domains including motor skills, maker and fabrication
              skills, manufacturing, and medical training.
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
                  className="text-lg mb-4"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 400,
                    color: "#0d0d0d",
                  }}
                >
                  {area.title}
                </h3>

                {/* Keywords */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {area.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="text-xs px-2.5 py-1 rounded-full"
                      style={{
                        color: "#012169",
                        background: "#eef2f8",
                        border: "1px solid #d8e0ec",
                        fontWeight: 500,
                      }}
                    >
                      {keyword}
                    </span>
                  ))}
                </div>

                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#5a5a5a" }}
                >
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 md:py-28" style={{ background: "#ffffff" }}>
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

          <div className="space-y-20">
            {featuredThemes.map((theme) => {
              const themeProjects = projects.filter(
                (project) => project.featured && theme.projectIds.includes(project.id),
              );

              return (
                <div key={theme.title}>
                  <div className="max-w-4xl mb-8">
                    <h3
                      className="text-2xl md:text-3xl mb-3"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 400,
                        color: "#0d0d0d",
                        letterSpacing: "-0.015em",
                      }}
                    >
                      {theme.title}
                    </h3>
                    <p className="text-base leading-relaxed" style={{ color: "#5a5a5a" }}>
                      {theme.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {themeProjects.map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                  </div>
                </div>
              );
            })}
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
