import { createFileRoute, Link } from "@tanstack/react-router";
import { AlertTriangle, Lightbulb, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/proposal")({
  head: () => ({
    meta: [
      { title: "Business Proposal — Royal Family Restaurant" },
      { name: "description", content: "How a professional website grows local restaurant revenue: problem, solution, and expected benefits." },
      { property: "og:title", content: "Business Proposal — Royal Family Restaurant" },
      { property: "og:description", content: "Problem, solution, and expected business impact." },
      { property: "og:url", content: "/proposal" },
    ],
    links: [{ rel: "canonical", href: "/proposal" }],
  }),
  component: ProposalPage,
});

function ProposalPage() {
  return (
    <div className="pt-28 pb-24 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Business Proposal</div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-balance">A Digital Front Door for Royal Family Restaurant</h1>
          <p className="mt-5 max-w-2xl mx-auto text-muted-foreground">A professional online presence built to attract diners, simplify reservations, and turn local searches into seated tables.</p>
        </div>

        <Section Icon={AlertTriangle} title="The Problem" tone="destructive">
          <p>Many local restaurants in Bommuluru — including those with great food and loyal regulars — lose new customers because they lack a professional online presence. Diners searching on Google, Instagram, or Maps simply can't find them, can't browse a menu, and can't book a table without making a phone call.</p>
          <ul className="mt-4 space-y-2">
            {["No discoverable menu online", "Phone-only reservations create friction", "No trust signals (reviews, photos, ratings)", "Lost evening footfall to competitors with stronger online presence"].map(t => (
              <li key={t} className="flex gap-2"><span className="text-destructive">•</span>{t}</li>
            ))}
          </ul>
        </Section>

        <Section Icon={Lightbulb} title="The Solution" tone="primary">
          <p>A fast, mobile-first website that mirrors the warmth of the restaurant — and removes every friction between a hungry guest and a confirmed booking.</p>
          <div className="mt-5 grid sm:grid-cols-2 gap-3">
            {[
              "Discover the restaurant online via SEO + Maps",
              "Browse a beautiful, always-up-to-date menu",
              "Reserve a table instantly — no phone call needed",
              "One-tap WhatsApp & call buttons on every page",
              "Build trust through reviews, ratings, and photo gallery",
              "Newsletter capture turns one-time diners into regulars",
            ].map(t => (
              <div key={t} className="flex gap-2 p-3 rounded-xl bg-primary/5 border border-primary/10"><CheckCircle2 className="h-5 w-5 text-primary shrink-0" /><span className="text-sm">{t}</span></div>
            ))}
          </div>
        </Section>

        <Section Icon={TrendingUp} title="Expected Benefits" tone="secondary">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
            {[
              { k: "+45%", v: "More customer inquiries" },
              { k: "+30%", v: "Increased reservations" },
              { k: "★ 4.8", v: "Stronger brand image" },
              { k: "1st page", v: "Better local visibility" },
              { k: "+25%", v: "Higher customer retention" },
              { k: "24/7", v: "Always-on digital storefront" },
            ].map(b => (
              <div key={b.v} className="p-6 rounded-2xl bg-card border text-center">
                <div className="font-display text-3xl font-bold text-primary">{b.k}</div>
                <div className="text-sm text-muted-foreground mt-1">{b.v}</div>
              </div>
            ))}
          </div>
        </Section>

        <div className="mt-16 rounded-3xl p-10 md:p-14 text-cream text-center" style={{ background: "var(--gradient-primary)" }}>
          <h2 className="font-display text-3xl md:text-4xl font-bold">Ready to grow Royal Family Restaurant online?</h2>
          <p className="mt-3 text-cream/80 max-w-xl mx-auto">Explore the deliverables list or head back to the live demo.</p>
          <div className="mt-7 flex flex-wrap gap-4 justify-center">
            <Link to="/deliverables" className="rounded-full bg-secondary text-secondary-foreground px-7 py-3.5 font-semibold inline-flex items-center gap-2">View Deliverables <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/" className="rounded-full bg-white/10 border border-white/30 px-7 py-3.5 font-semibold">Live Demo</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ Icon, title, tone, children }: { Icon: any; title: string; tone: "primary" | "secondary" | "destructive"; children: React.ReactNode }) {
  const toneCls = tone === "destructive" ? "bg-destructive/10 text-destructive" : tone === "secondary" ? "bg-secondary/20 text-secondary-foreground" : "bg-primary/10 text-primary";
  return (
    <section className="mb-10 p-8 md:p-10 rounded-3xl bg-card border">
      <div className="flex items-center gap-3 mb-5">
        <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${toneCls}`}><Icon className="h-6 w-6" /></div>
        <h2 className="font-display text-3xl font-bold">{title}</h2>
      </div>
      <div className="text-muted-foreground leading-relaxed">{children}</div>
    </section>
  );
}
