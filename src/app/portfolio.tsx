const experience = [
  {
    role: "Tech Lead",
    note: "prev. Full-Stack Engineer",
    company: "easycancha",
    href: "https://easycancha.com",
    period: "2021 — Present",
  },
  {
    role: "Software Engineer",
    company: "Tecnigen",
    period: "2017 — 2021",
  },
  {
    role: "Full-Stack Developer",
    company: "International Quality Systems",
    period: "2016 — 2017",
  },
  {
    role: "Web Developer & IT Lead",
    note: "various roles",
    company: "Earlier",
    period: "2005 — 2016",
  },
];

const stack = [
  "TypeScript",
  "Node.js",
  "React",
  "React Native",
  "Expo",
  "Express",
  "Next.js",
  "SQL",
];

const links = [
  { label: "Email", href: "mailto:pcorderoe@gmail.com" },
  { label: "GitHub", href: "https://github.com/pcorderoe" },
  { label: "LinkedIn", href: "https://linkedin.com/in/patriciocorderoespejo" },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-6 font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-widest text-foreground/40">
      {children}
    </h2>
  );
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Patricio Cordero",
  alternateName: "Patricio Cordero Espejo",
  jobTitle: "Tech Lead & Full-Stack Engineer",
  url: "https://pcorderoe.github.io",
  worksFor: {
    "@type": "Organization",
    name: "easycancha",
    url: "https://easycancha.com",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Concepción",
    addressCountry: "CL",
  },
  email: "mailto:pcorderoe@gmail.com",
  sameAs: [
    "https://github.com/pcorderoe",
    "https://linkedin.com/in/patriciocorderoespejo",
  ],
  knowsAbout: [
    "TypeScript",
    "Node.js",
    "React",
    "React Native",
    "Expo",
    "Express",
    "Next.js",
  ],
};

export default function Portfolio() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20 font-[family-name:var(--font-geist-sans)] sm:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      {/* Hero */}
      <header>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Patricio Cordero
        </h1>
        <p className="mt-3 font-[family-name:var(--font-geist-mono)] text-sm text-foreground/60">
          Tech Lead · Full-Stack Engineer
        </p>
        <p className="mt-8 max-w-xl text-balance text-lg leading-relaxed text-foreground/80">
          I build products end to end and lead engineering teams. Based in
          Concepción, Chile — currently Tech Lead at easycancha, with 14+ years
          shipping software for startups and enterprises.
        </p>
      </header>

      {/* Experience */}
      <section className="mt-20">
        <SectionTitle>Experience</SectionTitle>
        <ul className="flex flex-col gap-5">
          {experience.map((job) => (
            <li
              key={job.company}
              className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <div className="min-w-0">
                <span className="font-medium">{job.role}</span>{" "}
                {job.href ? (
                  <a
                    href={job.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/50 underline-offset-4 hover:text-foreground hover:underline"
                  >
                    · {job.company} ↗
                  </a>
                ) : (
                  <span className="text-foreground/50">· {job.company}</span>
                )}
                {job.note && (
                  <span className="text-foreground/40"> ({job.note})</span>
                )}
              </div>
              <span className="shrink-0 font-[family-name:var(--font-geist-mono)] text-sm text-foreground/40">
                {job.period}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Stack */}
      <section className="mt-20">
        <SectionTitle>Stack</SectionTitle>
        <ul className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-foreground/15 px-3 py-1 font-[family-name:var(--font-geist-mono)] text-sm text-foreground/70"
            >
              {tech}
            </li>
          ))}
        </ul>
      </section>

      {/* Contact */}
      <footer className="mt-20 border-t border-foreground/10 pt-8">
        <SectionTitle>Contact</SectionTitle>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="text-foreground/70 underline-offset-4 hover:text-foreground hover:underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-10 font-[family-name:var(--font-geist-mono)] text-xs text-foreground/30">
          © {new Date().getFullYear()} Patricio Cordero
        </p>
      </footer>
    </main>
  );
}
