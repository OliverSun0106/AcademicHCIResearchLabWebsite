import { publications } from "../data/content";

const LAB_MEMBER_NAMES = ["Dishita Turakhia", "Zezheng (Oliver) Sun", "Zezheng Sun", "Xichen He"];

export default function Publications() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      {/* Header */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-5">
          <div className="h-px w-8" style={{ background: "#F2A900" }} />
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#8f8f8f" }}>
            Scholarly Output
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
          Publications
        </h1>
        <p className="text-lg max-w-2xl" style={{ color: "#5a5a5a", lineHeight: 1.7 }}>
          Selected publications from the ImmersED HCI Group at Emory University.
          For a complete list, see our{" "}
          <a
            href=""
            target="_blank"
            rel="noreferrer"
            style={{ color: "#012169" }}
          >
            Publication
          </a>.
        </p>
      </div>

      {/* Stats row */}
      <div
        className="grid grid-cols-3 gap-px mb-20"
        style={{ background: "#e2e2de" }}
      >
        {[
          { value: "5+", label: "Publications" },
          { value: "—", label: "Best Paper Awards" },
          { value: "CHI · IEEE VR · ISMAR", label: "Top Venues" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="px-8 py-8 text-center"
            style={{ background: "#f7f7f5" }}
          >
            <div
              className="text-2xl md:text-3xl mb-1"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 300,
                color: "#012169",
              }}
            >
              {stat.value}
            </div>
            <div className="text-xs uppercase tracking-widest" style={{ color: "#8f8f8f" }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Publications by year */}
      <div className="space-y-16">
        {publications.map((yearGroup) => (
          <YearSection key={yearGroup.year} yearGroup={yearGroup} />
        ))}
      </div>
    </div>
  );
}

function YearSection({
  yearGroup,
}: {
  yearGroup: (typeof publications)[0];
}) {
  return (
    <section>
      <div className="flex items-center gap-6 mb-8">
        <h2
          className="text-3xl flex-shrink-0"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 300,
            color: "#0d0d0d",
          }}
        >
          {yearGroup.year}
        </h2>
        <div className="flex-1 h-px" style={{ background: "#e2e2de" }} />
      </div>

      <div className="space-y-0">
        {yearGroup.papers.map((paper, i) => (
          <PaperRow
            key={paper.title}
            paper={paper}
            last={i === yearGroup.papers.length - 1}
          />
        ))}
      </div>
    </section>
  );
}

function PaperRow({
  paper,
  last,
}: {
  paper: (typeof publications)[0]["papers"][0];
  last: boolean;
}) {
  const linkLabels: Record<string, string> = {
    paper: "PDF",
    project: "Project",
    video: "Video",
    code: "Code",
  };

  return (
    <div
      className="py-7 group transition-colors duration-150"
      style={{
        borderBottom: last ? "none" : "1px solid #e2e2de",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.background = "#f7f7f5";
        (e.currentTarget as HTMLDivElement).style.marginLeft = "-24px";
        (e.currentTarget as HTMLDivElement).style.paddingLeft = "24px";
        (e.currentTarget as HTMLDivElement).style.marginRight = "-24px";
        (e.currentTarget as HTMLDivElement).style.paddingRight = "24px";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.background = "transparent";
        (e.currentTarget as HTMLDivElement).style.marginLeft = "0";
        (e.currentTarget as HTMLDivElement).style.paddingLeft = "0";
        (e.currentTarget as HTMLDivElement).style.marginRight = "0";
        (e.currentTarget as HTMLDivElement).style.paddingRight = "0";
      }}
    >
      <div className="flex items-start justify-between gap-8">
        <div className="flex-1 min-w-0">
          {/* Award badge */}
          {(paper as any).award && (
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1.5 h-1.5" style={{ background: "#F2A900", borderRadius: "50%" }} />
              <span
                className="text-xs font-medium"
                style={{ color: "#F2A900", fontFamily: "var(--font-sans)" }}
              >
                {(paper as any).award}
              </span>
            </div>
          )}

          {/* Title */}
          <h3
            className="text-lg md:text-xl mb-2"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              color: "#0d0d0d",
              lineHeight: 1.35,
            }}
          >
            {paper.title}
          </h3>

          {/* Authors */}
          <p className="text-sm mb-2" style={{ color: "#5a5a5a" }}>
            {paper.authors.map((author, i) => (
              <span key={author}>
                <AuthorName
                  name={author}
                  isPI={LAB_MEMBER_NAMES.some((member) => author.includes(member))}
                />
                {i < paper.authors.length - 1 && (
                  <span style={{ color: "#c0c0c0" }}>, </span>
                )}
              </span>
            ))}
          </p>

          {/* Venue */}
          <div className="flex items-center gap-3">
            <span
              className="text-xs font-semibold px-2 py-0.5"
              style={{
                background: "#e8edf5",
                color: "#012169",
                borderRadius: "2px",
              }}
            >
              {paper.venue}
            </span>
            <span className="text-xs" style={{ color: "#8f8f8f" }}>
              {paper.venueFull}
            </span>
          </div>
        </div>

        {/* Links */}
        <div className="flex-shrink-0 flex flex-col gap-1.5 items-end">
          {Object.entries(paper.links).map(([type, href]) => (
            <a
              key={type}
              href={href as string}
              className="text-xs font-medium transition-all duration-150 px-3 py-1.5"
              style={{
                color: "#012169",
                border: "1px solid #e2e2de",
                borderRadius: "2px",
                textDecoration: "none",
                fontFamily: "var(--font-sans)",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "#012169";
                (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#012169";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                (e.currentTarget as HTMLAnchorElement).style.color = "#012169";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#e2e2de";
              }}
            >
              {linkLabels[type] ?? type}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function AuthorName({ name, isPI }: { name: string; isPI: boolean }) {
  return (
    <span
      style={{
        color: isPI ? "#012169" : "#5a5a5a",
        fontWeight: isPI ? 500 : 400,
      }}
    >
      {name}
    </span>
  );
}
