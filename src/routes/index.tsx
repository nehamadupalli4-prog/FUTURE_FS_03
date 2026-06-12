import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  Star, Users, Leaf, Heart, Sparkles, ChefHat, Clock, Wallet,
  Phone, MapPin, MessageCircle, CheckCircle2, X, ArrowRight,
  CalendarCheck, Menu as MenuIcon, BarChart3, Smartphone, Globe2,
} from "lucide-react";

import hero from "@/assets/hero.jpg";
import butter from "@/assets/butter-chicken.jpg";
import biryani from "@/assets/biryani.jpg";
import paneer from "@/assets/paneer.jpg";
import noodles from "@/assets/noodles.jpg";
import brownie from "@/assets/brownie.jpg";
import interior from "@/assets/interior.jpg";
import chef from "@/assets/chef.jpg";
import family from "@/assets/family.jpg";
import thali from "@/assets/thali.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Royal Family Restaurant — Authentic Indian, Chinese & Continental in Bommuluru" },
      { name: "description", content: "Reserve a table at Royal Family Restaurant — 10+ years of authentic Indian, Chinese & Continental cuisine. Family-friendly dining in Bommuluru." },
      { property: "og:title", content: "Royal Family Restaurant" },
      { property: "og:description", content: "Authentic Flavors, Memorable Experiences." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const menu = [
  { name: "Butter Chicken", desc: "Creamy and rich North Indian favourite, slow-simmered in tomato-cashew gravy.", price: "₹320", img: butter, tag: "Bestseller" },
  { name: "Hyderabadi Biryani", desc: "Traditional dum-cooked aromatic basmati with hand-picked spices.", price: "₹280", img: biryani, tag: "Signature" },
  { name: "Paneer Tikka", desc: "Charcoal-grilled cottage cheese marinated in yogurt and tandoori spices.", price: "₹240", img: paneer, tag: "Veg" },
  { name: "Hakka Noodles", desc: "Wok-tossed Indo-Chinese specialty with crisp vegetables.", price: "₹180", img: noodles, tag: "Spicy" },
  { name: "Chocolate Brownie", desc: "Warm, fudgy brownie served with vanilla ice cream & chocolate sauce.", price: "₹160", img: brownie, tag: "Dessert" },
];

const why = [
  { Icon: Leaf, title: "Fresh Ingredients", text: "Farm-fresh produce sourced daily from local growers." },
  { Icon: ChefHat, title: "Expert Chefs", text: "20+ years of combined culinary expertise on every plate." },
  { Icon: Clock, title: "Fast Service", text: "Average serving time under 15 minutes without compromise." },
  { Icon: Wallet, title: "Affordable Prices", text: "Premium taste at genuinely reasonable family-friendly rates." },
];

const about = [
  { Icon: Sparkles, label: "10+ Years Experience" },
  { Icon: Leaf, label: "Fresh Ingredients" },
  { Icon: Heart, label: "Family Friendly" },
  { Icon: ChefHat, label: "Hygienic Kitchen" },
];

const reviews = [
  { name: "Rahul Sharma", text: "The food quality is amazing and service is excellent. The butter chicken is the best I've had in Bommuluru.", rating: 5 },
  { name: "Priya Reddy", text: "Best family restaurant in town. Highly recommended for dinners with kids — staff is so warm.", rating: 5 },
  { name: "Arjun Kumar", text: "Authentic flavors and beautiful ambience. The biryani transports you straight to old Hyderabad.", rating: 5 },
];

const growth = [
  { Icon: CalendarCheck, title: "Easy Online Reservations", text: "Guests book in seconds — zero phone wait time." },
  { Icon: MessageCircle, title: "Instant WhatsApp Contact", text: "Real-time queries answered in under a minute." },
  { Icon: MenuIcon, title: "Digital Menu Access", text: "Always-up-to-date menu, beautifully photographed." },
  { Icon: BarChart3, title: "Customer Engagement", text: "Newsletter, reviews & repeat-visit nudges built in." },
  { Icon: Globe2, title: "Online Presence", text: "Local SEO + Google Maps visibility drives discovery." },
  { Icon: Smartphone, title: "Mobile-First Design", text: "Most diners decide on mobile — we win that moment." },
];

const gallery = [
  { src: interior, alt: "Restaurant interior with brick walls", cls: "row-span-2" },
  { src: family, alt: "Family dining together" },
  { src: chef, alt: "Chef cooking with flame", cls: "row-span-2" },
  { src: thali, alt: "Indian thali platter" },
  { src: biryani, alt: "Hyderabadi biryani" },
];

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedMenu />
      <WhyChooseUs />
      <Gallery />
      <Reviews />
      <Reserve />
      <Growth />
      <Contact />
    </>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img src={hero} alt="Authentic Indian cuisine spread" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1280} />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="relative z-10 container mx-auto px-6 text-center text-cream pt-24 pb-16">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 text-xs uppercase tracking-widest mb-6 animate-fade-up">
          <Sparkles className="h-3.5 w-3.5 text-secondary" /> Welcome to Royal Family Restaurant
        </div>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] text-balance animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Authentic Flavors,<br/>
          <span className="italic" style={{ color: "var(--secondary)" }}>Memorable</span> Experiences
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-cream/85 text-balance animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Enjoy freshly prepared Indian, Chinese, and Continental dishes in a warm, family-friendly atmosphere.
        </p>
        <div className="mt-9 flex flex-wrap gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <a href="#reserve" className="rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm font-semibold hover:shadow-[var(--shadow-glow)] hover:-translate-y-0.5 transition-all">Reserve a Table</a>
          <a href="#menu" className="rounded-full bg-white/10 border border-white/30 backdrop-blur-md text-cream px-7 py-3.5 text-sm font-semibold hover:bg-white/20 transition-all">View Menu →</a>
        </div>
        <div className="mt-14 flex flex-wrap items-center justify-center gap-8 md:gap-14 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <Stat icon={<Star className="h-5 w-5 fill-secondary text-secondary" />} value="4.8★" label="Customer Rating" />
          <div className="h-10 w-px bg-white/20" />
          <Stat icon={<Users className="h-5 w-5 text-secondary" />} value="5,000+" label="Happy Customers" />
          <div className="h-10 w-px bg-white/20 hidden md:block" />
          <Stat icon={<Sparkles className="h-5 w-5 text-secondary" />} value="10+" label="Years Serving" />
        </div>
      </div>
    </section>
  );
}

function Stat({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">{icon}</div>
      <div className="text-left">
        <div className="font-display text-2xl font-bold">{value}</div>
        <div className="text-xs uppercase tracking-wider text-cream/70">{label}</div>
      </div>
    </div>
  );
}

function SectionTitle({ eyebrow, title, subtitle, light }: { eyebrow: string; title: string; subtitle?: string; light?: boolean }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-14">
      <div className={`inline-block text-xs uppercase tracking-[0.3em] mb-3 ${light ? "text-secondary" : "text-primary"}`}>{eyebrow}</div>
      <h2 className={`font-display text-4xl md:text-5xl font-bold text-balance ${light ? "text-cream" : ""}`}>{title}</h2>
      {subtitle && <p className={`mt-4 text-balance ${light ? "text-cream/70" : "text-muted-foreground"}`}>{subtitle}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative">
          <img src={thali} alt="Thali platter" className="rounded-3xl shadow-2xl w-full" loading="lazy" width={1000} height={1200} />
          <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl hidden md:block">
            <div className="font-display text-4xl font-bold">10+</div>
            <div className="text-xs uppercase tracking-widest text-secondary">Years of Flavor</div>
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">About us</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">About <em className="text-primary not-italic">Royal Family Restaurant</em></h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Royal Family Restaurant has been serving delicious food and unforgettable dining experiences for over 10 years. We focus on fresh ingredients, authentic recipes, and exceptional customer service — making every meal feel like a celebration.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {about.map(({ Icon, label }) => (
              <div key={label} className="flex items-center gap-3 p-4 rounded-xl bg-card border hover:border-primary/40 hover:-translate-y-0.5 transition-all">
                <div className="h-11 w-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center"><Icon className="h-5 w-5" /></div>
                <span className="font-medium text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedMenu() {
  return (
    <section id="menu" className="py-24 bg-muted/40">
      <div className="container mx-auto px-6">
        <SectionTitle eyebrow="Our Menu" title="Featured Dishes" subtitle="Hand-picked favourites from our kitchen — crafted with love, served with care." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {menu.map((m) => (
            <article key={m.name} className="group bg-card rounded-3xl overflow-hidden border hover:shadow-[var(--shadow-glow)] hover:-translate-y-2 transition-all duration-500">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img src={m.img} alt={m.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" width={800} height={600} />
                <span className="absolute top-4 left-4 bg-secondary text-secondary-foreground text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">{m.tag}</span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-2xl font-bold">{m.name}</h3>
                  <span className="font-display text-2xl text-primary font-bold whitespace-nowrap">{m.price}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                <button className="mt-5 w-full rounded-full bg-primary/5 text-primary border border-primary/20 py-2.5 text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-colors inline-flex items-center justify-center gap-2 group/btn">
                  Order Now <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
          <a href="#reserve" className="hidden lg:flex items-center justify-center rounded-3xl border-2 border-dashed border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-colors min-h-[400px] group">
            <div className="text-center">
              <div className="h-14 w-14 mx-auto rounded-full bg-primary/10 group-hover:bg-white/20 flex items-center justify-center mb-3">
                <ArrowRight className="h-6 w-6" />
              </div>
              <div className="font-display text-xl">Explore Full Menu</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <SectionTitle eyebrow="Why us" title="Why Choose Royal Family Restaurant" subtitle="Four reasons families across Bommuluru choose us again and again." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {why.map(({ Icon, title, text }, i) => (
            <div key={title} className="group p-7 rounded-3xl bg-card border hover:border-primary hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
              <div className="absolute -right-4 -top-4 font-display font-bold text-7xl text-primary/5 group-hover:text-primary/10 transition-colors">{i + 1}</div>
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-primary/70 text-primary-foreground flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <section id="gallery" className="py-24 bg-muted/40">
      <div className="container mx-auto px-6">
        <SectionTitle eyebrow="Gallery" title="A Glimpse Inside" subtitle="Step into our world — warm interiors, joyful diners, and dishes worth photographing." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px] md:auto-rows-[220px]">
          {gallery.map((g, i) => (
            <button key={i} onClick={() => setOpen(g.src)} className={`relative rounded-2xl overflow-hidden group ${g.cls || ""}`}>
              <img src={g.src} alt={g.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-cream text-sm font-medium">{g.alt}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
      {open && (
        <div onClick={() => setOpen(null)} className="fixed inset-0 z-[80] bg-charcoal/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-up">
          <button onClick={() => setOpen(null)} className="absolute top-6 right-6 h-11 w-11 rounded-full bg-white/10 text-cream flex items-center justify-center hover:bg-white/20" aria-label="Close"><X /></button>
          <img src={open} alt="Gallery" className="max-w-5xl max-h-[85vh] rounded-2xl shadow-2xl" />
        </div>
      )}
    </section>
  );
}

function Reviews() {
  const [i, setI] = useState(0);
  const r = reviews[i];
  return (
    <section className="py-24 bg-charcoal text-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ background: "radial-gradient(circle at 30% 50%, var(--primary), transparent 50%)" }} />
      <div className="container mx-auto px-6 relative">
        <SectionTitle eyebrow="Testimonials" title="Loved by Our Guests" light />
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: r.rating }).map((_, k) => <Star key={k} className="h-6 w-6 fill-secondary text-secondary" />)}
          </div>
          <blockquote className="font-display text-2xl md:text-3xl leading-relaxed text-balance italic">
            “{r.text}”
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center font-display font-bold text-cream text-lg">{r.name[0]}</div>
            <div className="text-left">
              <div className="font-semibold">{r.name}</div>
              <div className="text-xs text-cream/60">Verified Diner</div>
            </div>
          </div>
          <div className="mt-10 flex justify-center gap-2">
            {reviews.map((_, k) => (
              <button key={k} onClick={() => setI(k)} className={`h-2 rounded-full transition-all ${k === i ? "w-10 bg-secondary" : "w-2 bg-white/30"}`} aria-label={`Review ${k + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Reserve() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const errs: Record<string, string> = {};
    if (!(fd.get("name") as string)?.trim()) errs.name = "Name required";
    const phone = (fd.get("phone") as string) || "";
    if (!/^[0-9+\-\s]{7,15}$/.test(phone)) errs.phone = "Valid phone required";
    const email = (fd.get("email") as string) || "";
    if (email && !/^\S+@\S+\.\S+$/.test(email)) errs.email = "Invalid email";
    if (!fd.get("date")) errs.date = "Date required";
    if (!fd.get("time")) errs.time = "Time required";
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSent(true);
      e.currentTarget.reset();
      setTimeout(() => setSent(false), 5000);
    }
  };
  const input = "w-full px-4 py-3 rounded-xl bg-background border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm transition-all";
  return (
    <section id="reserve" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid lg:grid-cols-5 rounded-3xl overflow-hidden shadow-2xl bg-card border">
          <div className="lg:col-span-2 relative p-10 text-cream" style={{ background: "var(--gradient-primary)" }}>
            <div className="text-xs uppercase tracking-[0.3em] text-secondary mb-3">Reservations</div>
            <h2 className="font-display text-4xl font-bold leading-tight">Book Your Table</h2>
            <p className="mt-4 text-cream/80 text-sm leading-relaxed">Reserve your spot in seconds. We'll confirm via WhatsApp or phone within 15 minutes.</p>
            <ul className="mt-8 space-y-3 text-sm">
              {["Instant confirmation", "Free cancellation", "Special requests welcome"].map(t => (
                <li key={t} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-secondary" />{t}</li>
              ))}
            </ul>
            <div className="mt-10 pt-6 border-t border-white/15">
              <a href="tel:+919505607779" className="flex items-center gap-2 text-sm hover:text-secondary"><Phone className="h-4 w-4" /> +91 98765 43210</a>
            </div>
          </div>
          <form onSubmit={onSubmit} className="lg:col-span-3 p-8 md:p-10 grid sm:grid-cols-2 gap-4">
            <Field label="Full Name" name="name" error={errors.name}><input name="name" maxLength={80} className={input} placeholder="Your name" /></Field>
            <Field label="Phone Number" name="phone" error={errors.phone}><input name="phone" maxLength={15} className={input} placeholder="+91…" /></Field>
            <Field label="Email" name="email" error={errors.email} className="sm:col-span-2"><input name="email" type="email" maxLength={120} className={input} placeholder="you@example.com" /></Field>
            <Field label="Guests" name="guests"><select name="guests" defaultValue="2" className={input}>{[1,2,3,4,5,6,7,8,"9+"].map(n=><option key={n}>{n}</option>)}</select></Field>
            <Field label="Date" name="date" error={errors.date}><input name="date" type="date" className={input} /></Field>
            <Field label="Time" name="time" error={errors.time} className="sm:col-span-2"><input name="time" type="time" className={input} /></Field>
            <Field label="Special Request" name="note" className="sm:col-span-2"><textarea name="note" rows={3} maxLength={300} className={input} placeholder="Birthday cake, window seat, allergies…" /></Field>
            <div className="sm:col-span-2">
              <button className="w-full rounded-full bg-primary text-primary-foreground py-3.5 font-semibold hover:shadow-[var(--shadow-glow)] hover:-translate-y-0.5 transition-all">Book My Table</button>
              {sent && (
                <div className="mt-4 p-4 rounded-xl bg-green-50 border border-green-200 text-green-800 text-sm flex items-center gap-2 animate-fade-up">
                  <CheckCircle2 className="h-5 w-5" /> Reservation received! We'll confirm shortly.
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, error, className, children }: { label: string; name: string; error?: string; className?: string; children: React.ReactNode }) {
  return (
    <label className={`block ${className || ""}`}>
      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</span>
      <div className="mt-1.5">{children}</div>
      {error && <span className="text-xs text-destructive mt-1 block">{error}</span>}
    </label>
  );
}

function Growth() {
  return (
    <section className="py-24 bg-muted/40">
      <div className="container mx-auto px-6">
        <SectionTitle eyebrow="Customer Experience" title="How We Serve Our Customers Better" subtitle="Modern tools that turn first-time visitors into regulars." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {growth.map(({ Icon, title, text }) => (
            <div key={title} className="p-7 rounded-3xl bg-card border hover:border-primary/40 hover:shadow-lg transition-all">
              <div className="h-12 w-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "var(--gradient-gold)" }}>
                <Icon className="h-6 w-6 text-charcoal" />
              </div>
              <h3 className="font-display text-xl font-bold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <SectionTitle eyebrow="Visit us" title="Come Say Hello" subtitle="Find us in the heart of Bommuluru — open every day." />
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          <div className="rounded-3xl overflow-hidden border bg-muted/40 min-h-[400px]">
            <iframe
              title="Royal Family Restaurant location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=80.6%2C16.5%2C80.7%2C16.6&amp;layer=mapnik"
              className="w-full h-full min-h-[400px]"
              loading="lazy"
            />
          </div>
          <div className="space-y-5">
            <ContactCard Icon={MapPin} title="Address" lines={["Chennai - Kolkata Hwy, Hanuman Junction,", "Bommuluru, Andhra Pradesh"]} />
            <ContactCard Icon={Phone} title="Phone" lines={["+91 98765 43210"]} />
            <ContactCard Icon={Clock} title="Opening Hours" lines={["Monday – Sunday", "11:00 AM – 11:00 PM"]} />
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a href="tel:+919505607779" className="rounded-full bg-primary text-primary-foreground py-3.5 font-semibold text-center hover:shadow-[var(--shadow-glow)] transition-all inline-flex items-center justify-center gap-2"><Phone className="h-4 w-4" /> Call Now</a>
              <a href="https://wa.me/919505607779" target="_blank" rel="noreferrer" className="rounded-full bg-[color:var(--color-whatsapp)] text-white py-3.5 font-semibold text-center hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ Icon, title, lines }: { Icon: any; title: string; lines: string[] }) {
  return (
    <div className="flex gap-4 p-5 rounded-2xl bg-card border hover:border-primary/40 transition-colors">
      <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0"><Icon className="h-5 w-5" /></div>
      <div>
        <div className="font-display text-lg font-bold">{title}</div>
        {lines.map(l => <div key={l} className="text-sm text-muted-foreground">{l}</div>)}
      </div>
    </div>
  );
}
