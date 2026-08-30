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
            <div className="space-y-2 mb-6">
              {people.pi.awards.map((award) => (
                <div key={award} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 flex-shrink-0" style={{ background: "#F2A900", borderRadius: "50%" }} />
                  <span className="text-sm" style={{ color: "#5a5a5a" }}>{award}</span>
                </div>
              ))}
            </div>
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
        <StudentProfileCard person={people.phd[0]} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {people.phd.slice(1).map((person) => (
            <MemberCard key={person.name} person={person} showYear />
          ))}
        </div>
      </section>

      {/* Master's Students */}
      <section className="mb-20">
        <SectionLabel>Master's Students</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {people.masters.map((person) => (
            <MemberCard key={person.name} person={person} showYear />
          ))}
        </div>
      </section>

      {/* Undergraduate Researchers */}
      <section className="mb-20">
        <SectionLabel>Undergraduate Researchers</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {people.undergrad.map((person) => (
            <MemberCard key={person.name} person={person} />
          ))}
        </div>
      </section>

      {/* Alumni */}
      <section>
        <SectionLabel>Alumni</SectionLabel>
        <div className="border-t" style={{ borderColor: "#e2e2de" }}>
          {people.alumni.map((person, i) => (
            <div
              key={person.name}
              className="flex items-center gap-6 py-5 border-b"
              style={{ borderColor: "#e2e2de" }}
            >
              <img
                src={IMG(person.photo, 80, 80)}
                alt={person.name}
                className="w-12 h-12 object-cover flex-shrink-0"
                style={{ borderRadius: "2px", background: "#e8edf5" }}
              />
              <div className="flex-1 min-w-0">
                <div
                  className="text-base font-medium"
                  style={{ fontFamily: "var(--font-display)", color: "#0d0d0d" }}
                >
                  {person.name}
                </div>
                <div className="text-sm" style={{ color: "#8f8f8f" }}>
                  {person.position}
                </div>
              </div>
              <div
                className="text-sm text-right"
                style={{ color: "#5a5a5a" }}
              >
                {person.now}
              </div>
            </div>
          ))}
        </div>
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

function MemberCard({
  person,
  showYear,
}: {
  person: { name: string; position: string; interests: string; photo: string; year?: string };
  showYear?: boolean;
}) {
  return (
    <div
      className="group border overflow-hidden transition-all duration-200"
      style={{ borderColor: "#e2e2de" }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "#012169";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "#e2e2de";
      }}
    >
      <div className="aspect-square overflow-hidden" style={{ background: "#e8edf5" }}>
        <img
          src={IMG(person.photo, 400, 400)}
          alt={person.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <div
          className="text-base font-medium mb-0.5"
          style={{ fontFamily: "var(--font-display)", color: "#0d0d0d" }}
        >
          {person.name}
        </div>
        {showYear && (person as any).year && (
          <div className="text-xs mb-2" style={{ color: "#012169" }}>
            {(person as any).year}
          </div>
        )}
        <div className="text-xs leading-relaxed" style={{ color: "#8f8f8f" }}>
          {person.interests}
        </div>
      </div>
    </div>
  );
}

function StudentProfileCard({ person }: { person: typeof people.phd[0] }) {
  const links = [
    { label: "Email ↗", href: person.email ? `mailto:${person.email}` : "" },
    { label: "Personal Website ↗", href: person.website },
    { label: "CV ↗", href: person.cv },
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
        <div className="space-y-2 mb-7">
          {person.focusAreas.map((area) => (
            <div key={area} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 flex-shrink-0 rounded-full" style={{ background: "#F2A900" }} />
              <span className="text-sm" style={{ color: "#5a5a5a" }}>{area}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {links.map((link) =>
            link.href ? (
              <a
                key={link.label}
                href={link.href}
                target={link.label === "Email ↗" ? undefined : "_blank"}
                rel={link.label === "Email ↗" ? undefined : "noreferrer"}
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
