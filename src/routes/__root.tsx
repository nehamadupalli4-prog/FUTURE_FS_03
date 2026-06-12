import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Menu, X, Phone, MessageCircle, ArrowUp, Utensils, MapPin, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong. Try refreshing or head home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">Try again</button>
          <a href="/" className="rounded-md border px-4 py-2 text-sm font-medium">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Royal Family Restaurant — Authentic Indian, Chinese & Continental" },
      { name: "description", content: "Royal Family Restaurant in Bommuluru — freshly prepared Indian, Chinese and Continental cuisine. Book a table, browse our menu, or contact us via WhatsApp." },
      { name: "author", content: "Royal Family Restaurant" },
      { name: "theme-color", content: "#C62828" },
      { property: "og:title", content: "Royal Family Restaurant" },
      { property: "og:description", content: "Authentic flavors, memorable experiences. Reserve your table today." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Royal Family Restaurant" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap" },
      { rel: "icon", href: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='20' fill='%23C62828'/%3E%3Ctext x='50' y='68' font-size='60' text-anchor='middle' fill='%23FFB300' font-family='Georgia'%3ES%3C/text%3E%3C/svg%3E" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Restaurant",
        name: "Royal Family Restaurant",
        image: "",
        address: { "@type": "PostalAddress", streetAddress: "Chennai - Kolkata Hwy, Hanuman Junction", addressLocality: "Bommuluru", addressRegion: "Andhra Pradesh", addressCountry: "IN" },
        telephone: "+91 9505607779",
        servesCuisine: ["Indian", "Chinese", "Continental"],
        priceRange: "$$",
        openingHours: "Mo-Su 11:00-23:00",
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "5000" },
      }),
    }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

const NAV = [
  { to: "/", label: "Home" },
  { to: "/#menu", label: "Menu", hash: true },
  { to: "/#gallery", label: "Gallery", hash: true },
  { to: "/#reserve", label: "Reserve", hash: true },
  { to: "/proposal", label: "Proposal" },
  { to: "/deliverables", label: "Deliverables" },
];

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <Utensils className="h-5 w-5 text-secondary" />
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-lg text-primary">Royal Family Restaurant</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Family Restaurant</div>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map(n => (
            <a key={n.label} href={n.to} className="text-sm font-medium hover:text-primary transition-colors relative after:absolute after:left-0 after:bottom-[-4px] after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full">
              {n.label}
            </a>
          ))}
          <a href="#reserve" className="rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold hover:shadow-[var(--shadow-glow)] transition-all hover:-translate-y-0.5">Book Table</a>
        </nav>
        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 rounded-md bg-card shadow-sm" aria-label="Toggle menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-background border-t animate-fade-up">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-1">
            {NAV.map(n => (
              <a key={n.label} href={n.to} onClick={() => setOpen(false)} className="py-3 border-b border-border/50 text-sm font-medium">{n.label}</a>
            ))}
            <a href="#reserve" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-semibold text-center">Book a Table</a>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-charcoal text-cream pt-16 pb-8">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center"><Utensils className="h-5 w-5 text-secondary" /></div>
            <div className="font-display font-bold text-lg">Royal Family Restaurant</div>
          </div>
          <p className="text-sm text-cream/70 leading-relaxed">Authentic flavors and memorable experiences for over 10 years in the heart of Bommuluru.</p>
          <div className="flex gap-3 mt-5">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="h-9 w-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors" aria-label="Social"><Icon className="h-4 w-4" /></a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display text-secondary mb-4 text-lg">Quick Links</h4>
          <ul className="space-y-2 text-sm text-cream/70">
            <li><a href="/" className="hover:text-secondary">Home</a></li>
            <li><a href="/#menu" className="hover:text-secondary">Menu</a></li>
            <li><a href="/#gallery" className="hover:text-secondary">Gallery</a></li>
            <li><a href="/#reserve" className="hover:text-secondary">Reservations</a></li>
            <li><a href="/proposal" className="hover:text-secondary">Business Proposal</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-secondary mb-4 text-lg">Contact</h4>
          <ul className="space-y-3 text-sm text-cream/70">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-secondary" />Chennai - Kolkata Hwy, Hanuman Junction, Bommuluru, AP</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-secondary" />+91 98765 43210</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0 text-secondary" />info@spicegarden.com</li>
            <li className="flex gap-2"><Clock className="h-4 w-4 mt-0.5 shrink-0 text-secondary" />Mon–Sun · 11AM – 11PM</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-secondary mb-4 text-lg">Newsletter</h4>
          <p className="text-sm text-cream/70 mb-3">Get offers & seasonal menu updates.</p>
          <form onSubmit={(e) => { e.preventDefault(); alert("Subscribed! 🎉"); }} className="flex gap-2">
            <input type="email" required placeholder="Your email" className="flex-1 px-3 py-2 rounded-md bg-white/10 text-cream placeholder:text-cream/40 border border-white/10 focus:outline-none focus:border-secondary text-sm" />
            <button className="px-4 rounded-md bg-secondary text-charcoal font-semibold text-sm hover:opacity-90">Join</button>
          </form>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-12 pt-6 border-t border-white/10 text-center text-sm text-cream/50">
        © 2025 Royal Family Restaurant. All Rights Reserved.
      </div>
    </footer>
  );
}

function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col gap-3">
      {show && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="h-12 w-12 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:scale-110 transition-transform animate-fade-up" aria-label="Back to top">
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
      <a href="https://wa.me/919505607779" target="_blank" rel="noreferrer" className="h-14 w-14 rounded-full bg-whatsapp text-white shadow-xl flex items-center justify-center hover:scale-110 transition-transform animate-float" aria-label="WhatsApp">
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}

function Loader() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);
  if (!loading) return null;
  return (
    <div className="fixed inset-0 z-[100] bg-background flex items-center justify-center">
      <div className="text-center">
        <div className="h-14 w-14 mx-auto rounded-2xl bg-primary flex items-center justify-center animate-float">
          <Utensils className="h-7 w-7 text-secondary" />
        </div>
        <div className="mt-4 font-display text-primary text-lg">Royal Family Restaurant</div>
      </div>
    </div>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Loader />
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <FloatingActions />
      <Footer />
    </QueryClientProvider>
  );
}
