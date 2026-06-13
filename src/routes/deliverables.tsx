import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Github, ExternalLink, Code2 } from "lucide-react";

export const Route = createFileRoute("/deliverables")({
  head: () => ({
    meta: [
      { title: "Deliverables — Royal Family Restaurant Project" },
      { name: "description", content: "Live demo link, GitHub repository, implemented features, and technologies used." },
      { property: "og:title", content: "Deliverables — Royal Family Restaurant" },
      { property: "og:url", content: "/deliverables" },
    ],
    links: [{ rel: "canonical", href: "/deliverables" }],
  }),
  component: DeliverablesPage,
});

const features = [
  "Fully responsive (mobile / tablet / desktop)",
  "Sticky navigation bar with mobile hamburger menu",
  "Hero with stats, rating, and dual CTA",
  "About section with credentials",
  "Featured menu cards with hover effects",
  "Why-Choose-Us infographic cards",
  "Masonry gallery with lightbox",
  "Customer reviews carousel",
  "Reservation form with validation & success state",
  "Contact section with embedded map",
  "WhatsApp floating button + Call Now CTA",
  "Back-to-top button",
  "Newsletter subscription",
  "Loading animation",
  "SEO meta + Open Graph tags",
  "Structured Restaurant schema (JSON-LD)",
  "Favicon & theme color",
  "Smooth scrolling & scroll animations",
  "Business Proposal page",
  "Deliverables page",
];

const tech = ["React 19", "TanStack Start v1", "TypeScript", "Tailwind CSS v4", "Lucide Icons", "Responsive Design", "SEO Optimization", "WCAG-aware A11y"];

function DeliverablesPage() {
  return (
    <div className="pt-28 pb-24 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-14">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Project Deliverables</div>
          <h1 className="font-display text-5xl md:text-6xl font-bold">Everything Shipped</h1>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground">A snapshot of what's included in this build — ready for client handover or portfolio review.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-10">
          <a href="https://spice-garden.nehamadupalli.workers.dev" className="group p-7 rounded-3xl bg-card border hover:border-primary hover:-translate-y-1 transition-all flex items-center gap-4">
            <div className="h-14 w-14 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center"><ExternalLink className="h-6 w-6" /></div>
            <div>
              <div className="font-display text-xl font-bold">Live Website Demo</div>
              <div className="text-sm text-muted-foreground">Click to view live preview (placeholder)</div>
            </div>
          </a>
          <a href="https://github.com/nehamadupalli4-prog/FUTURE_FS_03.git" className="group p-7 rounded-3xl bg-card border hover:border-primary hover:-translate-y-1 transition-all flex items-center gap-4">
            <div className="h-14 w-14 rounded-2xl bg-charcoal text-cream flex items-center justify-center"><Github className="h-6 w-6" /></div>
            <div>
              <div className="font-display text-xl font-bold">GitHub Repository</div>
              <div className="text-sm text-muted-foreground">Source code (placeholder link)</div>
            </div>
          </a>
        </div>

        <section className="p-8 md:p-10 rounded-3xl bg-card border mb-8">
          <h2 className="font-display text-3xl font-bold mb-6">Website Features</h2>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
            {features.map(f => (
              <li key={f} className="flex gap-2 text-sm"><Check className="h-5 w-5 text-primary shrink-0" />{f}</li>
            ))}
          </ul>
        </section>

        <section className="p-8 md:p-10 rounded-3xl text-cream" style={{ background: "var(--gradient-primary)" }}>
          <div className="flex items-center gap-3 mb-5">
            <Code2 className="h-7 w-7 text-secondary" />
            <h2 className="font-display text-3xl font-bold">Technologies Used</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {tech.map(t => (
              <span key={t} className="px-4 py-2 rounded-full bg-white/15 border border-white/20 text-sm backdrop-blur-md">{t}</span>
            ))}
          </div>
        </section>

        <div className="mt-12 text-center">
          <Link to="/" className="inline-flex rounded-full bg-primary text-primary-foreground px-7 py-3.5 font-semibold">← Back to Live Demo</Link>
        </div>
      </div>
    </div>
  );
}
