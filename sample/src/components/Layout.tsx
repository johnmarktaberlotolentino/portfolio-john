import * as React from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Menu, X, Github, Linkedin, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { PROFILE } from "@/src/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "py-4" : "py-8"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className={cn(
          "flex items-center gap-8 px-8 py-3 rounded-full transition-all duration-500",
          isScrolled ? "bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl" : "bg-transparent"
        )}>
          <a href="#" className="font-serif text-2xl font-bold tracking-tighter text-white">
            JT<span className="text-accent">.</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <button
          className="md:hidden p-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute top-full left-6 right-6 mt-4 glass-card p-8 flex flex-col gap-6 md:hidden rounded-3xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-2xl font-serif font-bold text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-4">
          <h3 className="font-serif text-2xl font-bold">JT.</h3>
          <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
            Portfolio of John Mark Tolentino — focused on reliable systems, thoughtful data solutions, and practical technical delivery for modern teams.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-widest">Contact</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail size={14} />
              <span>{PROFILE.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} />
              <span>{PROFILE.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={14} />
              <span>{PROFILE.location}</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-widest">Connect</h4>
          <div className="flex gap-4">
            <a href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer" className="p-2 bg-background rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-all">
              <Linkedin size={18} />
            </a>
            <a href={PROFILE.socials.github} target="_blank" rel="noreferrer" className="p-2 bg-background rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-all">
              <Github size={18} />
            </a>
            <a href={PROFILE.socials.facebook} target="_blank" rel="noreferrer" className="p-2 bg-background rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-all">
              <Facebook size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-border/50 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} John Mark Tolentino. All rights reserved.
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen flex flex-col">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
