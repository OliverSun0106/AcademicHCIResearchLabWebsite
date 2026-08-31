import { people } from "../data/content";

const IMG = (id: string, w: number, h: number) =>
  id.startsWith("http")
    ? id
    : id.startsWith("local:")
      ? `${import.meta.env.BASE_URL}${id.slice(6)}`
      : `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format`;

export default function People() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      {/* Header */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-5">
          <div className="h-px w-8" style={{ background: "#F2A900" }} />
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#8f8f8f" }}>
            Lab Members
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
          People
        </h1>
        <p className="text-lg max-w-2xl" style={{ color: "#5a5a5a", lineHeight: 1.7 }}>
          A collaborative group of researchers united by a commitment to
          human-centered computing and rigorous empirical scholarship.
        </p>
      </div>

      {/* Principal Investigator */}
      <section className="mb-20">
        <SectionLabel>Principal Investigator</SectionLabel>
        <div
          className="grid grid-cols-1 md:grid-cols-[minmax(280px,0.9fr)_minmax(0,1.3fr)] gap-0 border overflow-hidden"
          style={{ borderColor: "#e2e2de" }}
        >
          <div className="h-[360px] md:h-auto md:min-h-[460px] overflow-hidden" style={{ background: "#e8edf5" }}>
            <img
              src={IMG(people.pi.photo, 700, 500)}
              alt={people.pi.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-10 flex flex-col justify-center">
            <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#012169" }}>
              {people.pi.title}
            </div>
            <h2
              className="text-3xl mb-1"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                color: "#0d0d0d",
              }}
            >
              {people.pi.name}
            </h2>
            <p className="text-sm mb-6" style={{ color: "#8f8f8f" }}>
              {people.pi.interests}
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#5a5a5a" }}>
              {people.pi.bio}
            </p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <a
                href={`mailto:${people.pi.email}`}
                className="text-sm font-medium transition-opacity hover:opacity-60"
                style={{ color: "#012169", textDecoration: "none" }}
              >
                {people.pi.email}
              </a>
              <a
                href={people.pi.website}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium transition-opacity hover:opacity-60"
                style={{ color: "#012169", textDecoration: "none" }}
              >
                Personal Website ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PhD Students */}
      <section className="mb-20">
        <SectionLabel>PhD Students</SectionLabel>
        {[...people.phd]
          .reverse()
          .filter((person) => "bio" in person)
          .map((person) => (
            <StudentProfileCard key={person.name} person={person as typeof people.phd[0]} />
          ))}
      </section>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <h2
        className="text-xs font-semibold uppercase tracking-widest"
        style={{ color: "#8f8f8f", fontFamily: "var(--font-sans)" }}
      >
        {children}
      </h2>
      <div className="flex-1 h-px" style={{ background: "#e2e2de" }} />
    </div>
  );
}

function StudentProfileCard({ person }: { person: typeof people.phd[0] }) {
  const links = [
    {
      label: person.email,
      href: person.email ? `mailto:${person.email}` : "",
      isEmail: true,
    },
    {
      label: "Personal Website ↗",
      href: person.website,
      isEmail: false,
    },
  ];

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-[minmax(280px,0.9fr)_minmax(0,1.3fr)] border mb-8 overflow-hidden"
      style={{ borderColor: "#e2e2de", background: "#ffffff" }}
    >
      <div className="h-[360px] md:h-auto md:min-h-[460px] overflow-hidden" style={{ background: "#e8edf5" }}>
        <img
          src={IMG(person.photo, 900, 600)}
          alt={person.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-8 md:p-10 flex flex-col justify-center">
        <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#012169" }}>
          {person.position}
        </div>
        <h3
          className="text-3xl mb-2"
          style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#0d0d0d" }}
        >
          {person.name}
        </h3>
        <p className="text-sm mb-6" style={{ color: "#8f8f8f" }}>
          {person.interests}
        </p>
        <p className="text-base leading-relaxed mb-7" style={{ color: "#5a5a5a" }}>
          {person.bio}
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {links.map((link) =>
            link.href ? (
              <a
                key={link.label}
                href={link.href}
                target={link.isEmail ? undefined : "_blank"}
                rel={link.isEmail ? undefined : "noreferrer"}
                className="text-sm font-medium transition-opacity hover:opacity-60"
                style={{ color: "#012169", textDecoration: "none" }}
              >
                {link.label}
              </a>
            ) : (
              <span key={link.label} className="text-sm font-medium" style={{ color: "#8f8f8f" }}>
                {link.label}
              </span>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
