import { useState, type ChangeEvent, type FormEvent } from "react";
import { motion } from "motion/react";
import { ArrowRight, Database, Download, ExternalLink, Mail, MapPin, Phone, ShieldCheck, Sparkles } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PROFILE, EXPERIENCE, EDUCATION, SKILLS, PROJECTS } from "@/src/constants";
import { cn } from "@/lib/utils";

export function Hero() {
  const [activeFocus, setActiveFocus] = useState(PROFILE.focusAreas[0]);
  const focusDetails: Record<string, string> = {
    "System analysis": "Turning complex requirements into clear, dependable technical solutions.",
    "Data engineering": "Building clean, structured, and useful data flows for better decision-making.",
    "Cybersecurity": "Strengthening systems with secure thinking and disciplined implementation.",
    "Automation": "Removing repetitive work through practical digital tools and process improvements.",
    "Research operations": "Supporting high-quality research through reliable systems and data practices."
  };

  return (
    <section id="about" className="section-padding min-h-screen flex flex-col justify-center relative overflow-hidden bg-mesh">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

      <div className="max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Badge variant="outline" className="mb-8 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] border-white/20 text-white/60">
            {PROFILE.availability}
          </Badge>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-8 leading-[0.9] text-gradient">
            Building <span className="italic font-normal text-accent">practical</span> software <br />
            and <span className="text-white">data platforms</span> that scale.
          </h1>

          <p className="text-lg md:text-2xl text-white/70 max-w-3xl mb-8 leading-relaxed font-light text-balance">
            I’m <span className="text-white font-medium">{PROFILE.name}</span>, a {PROFILE.title}. I combine software engineering discipline, data-focused thinking, and systems analysis to deliver reliable solutions for modern teams.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#projects"
              className={cn(
                buttonVariants({ size: "lg" }),
                "rounded-full px-8 py-6 text-base font-medium bg-white text-black hover:scale-105 transition-transform duration-300"
              )}
            >
              View selected work
            </a>
            <a
              href="#contact"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "rounded-full px-8 py-6 text-base font-medium border-white/20 text-white hover:bg-white/10 transition-all duration-300"
              )}
            >
              Let’s connect
            </a>
            <a
              href="/resume.pdf"
              download="John-Mark-Tolentino-Resume.pdf"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "rounded-full px-8 py-6 text-base font-medium border-accent/40 text-accent hover:bg-accent hover:text-white transition-all duration-300"
              )}
            >
              <Download size={18} className="mr-2" />
              Download resume
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mb-8">
            {PROFILE.stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <p className="text-2xl font-semibold text-white">{stat.value}</p>
                <p className="text-sm text-white/60 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm max-w-3xl mb-6">
            <div className="flex flex-wrap gap-3 mb-4">
              {PROFILE.focusAreas.map((focus) => (
                <button
                  key={focus}
                  type="button"
                  onClick={() => setActiveFocus(focus)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm transition-all",
                    activeFocus === focus
                      ? "border-accent bg-accent text-white"
                      : "border-white/10 bg-background/40 text-white/70 hover:border-accent/40 hover:text-white"
                  )}
                >
                  {focus}
                </button>
              ))}
            </div>
            <p className="text-white/80 text-lg leading-relaxed">
              {focusDetails[activeFocus]}
            </p>
          </div>

          <div className="rounded-3xl border border-accent/20 bg-accent/10 p-6 backdrop-blur-sm max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent mb-2">About me</p>
            <p className="text-white/80 leading-relaxed">
              {PROFILE.intro} I’m motivated by building practical solutions that support people, teams, and long-term growth.
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent rounded-full blur-[120px] pointer-events-none"
      />
    </section>
  );
}

export function Highlights() {
  const highlights = [
    {
      title: "Systems-minded delivery",
      description: "I combine technical depth with clear thinking to build dependable solutions that work in real environments."
    },
    {
      title: "Data and automation focus",
      description: "I enjoy improving workflows through structured data, practical automation, and thoughtful tool design."
    },
    {
      title: "Secure and reliable execution",
      description: "My work is grounded in discipline, quality, and a strong sense of responsibility for long-term reliability."
    }
  ];

  return (
    <section className="section-padding pt-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {highlights.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="rounded-3xl border border-border/70 bg-secondary/20 p-6"
          >
            <h4 className="text-lg font-semibold text-white">{item.title}</h4>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function HiringFit() {
  const fitPoints = [
    {
      title: "Reliable execution",
      description: "I bring calm, structured delivery to technical work that must be dependable and maintainable.",
      icon: ShieldCheck
    },
    {
      title: "Data-minded problem solving",
      description: "I enjoy turning messy information into clearer workflows, stronger insights, and smarter decisions.",
      icon: Database
    },
    {
      title: "Modern, practical thinking",
      description: "I combine foundational IT experience with current tools and a strong desire to keep learning.",
      icon: Sparkles
    }
  ];

  return (
    <section className="section-padding pt-0">
      <div className="max-w-7xl mx-auto rounded-[2rem] border border-border/70 bg-gradient-to-br from-secondary/30 to-background p-8 md:p-10">
        <div className="max-w-3xl mb-8">
          <p className="section-kicker mb-3">Why I’m a strong hire</p>
          <h3 className="font-serif text-3xl md:text-4xl font-bold">Built for roles that value steady execution, thoughtful systems, and continuous improvement.</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {fitPoints.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="inline-flex rounded-full bg-accent/10 p-3 text-accent mb-4">
                  <Icon size={20} />
                </div>
                <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="section-padding bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <h2 className="section-kicker mb-4">Career journey</h2>
            <h3 className="font-serif text-4xl font-bold mb-6">Professional experience</h3>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              My experience spans support, development, and systems strategy, helping me connect technical execution with business and research needs.
            </p>
          </div>

          <div className="lg:col-span-2 space-y-6">
            {EXPERIENCE.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-3xl border border-border/70 bg-background/70 p-7 shadow-sm"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <p className="text-xs font-mono text-muted-foreground mb-2 uppercase tracking-[0.3em]">{exp.period}</p>
                    <h4 className="text-xl font-bold">{exp.role}</h4>
                    <p className="text-sm font-medium text-accent/80 mt-1">{exp.company}</p>
                  </div>
                  <Badge variant="secondary" className="rounded-full">Impact-driven</Badge>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
                  {exp.description}
                </p>

                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {exp.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-6">
                  {exp.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="rounded-full text-[10px] font-normal">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <h2 className="section-kicker mb-4">Foundation</h2>
            <h3 className="font-serif text-4xl font-bold mb-6">Academic background</h3>
            <p className="text-muted-foreground leading-relaxed">
              I continue to strengthen my skills through advanced study while grounding my work in practical system and data experience.
            </p>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {EDUCATION.map((edu, index) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-border/50 shadow-none bg-secondary/10">
                  <CardHeader>
                    <p className="text-xs font-mono text-muted-foreground mb-2">{edu.period}</p>
                    <CardTitle className="text-lg leading-tight">{edu.degree}</CardTitle>
                    <CardDescription className="font-medium text-accent/80">{edu.school}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge className="rounded-full bg-primary/10 text-primary border-none">
                      {edu.status}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-3xl">
          <h2 className="section-kicker mb-4">Core strengths</h2>
          <h3 className="font-serif text-4xl md:text-5xl font-bold">A practical toolkit for modern technical roles</h3>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            I bring a mix of implementation, analysis, and problem-solving skills that fit well in software, data, systems, and research-driven teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-3xl border border-border/70 bg-secondary/20 p-6">
            <h4 className="text-xl font-bold border-b border-border pb-4">Programming</h4>
            <div className="flex flex-wrap gap-3 mt-6">
              {SKILLS.programming.map((skill) => (
                <Badge key={skill} className="px-4 py-2 rounded-lg text-sm bg-background text-foreground hover:bg-accent hover:text-white transition-all cursor-default">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-border/70 bg-secondary/20 p-6">
            <h4 className="text-xl font-bold border-b border-border pb-4">Specialized</h4>
            <div className="flex flex-wrap gap-3 mt-6">
              {SKILLS.specialized.map((skill) => (
                <Badge key={skill} className="px-4 py-2 rounded-lg text-sm bg-background text-foreground hover:bg-accent hover:text-white transition-all cursor-default">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-border/70 bg-secondary/20 p-6">
            <h4 className="text-xl font-bold border-b border-border pb-4">Tools & methods</h4>
            <div className="flex flex-wrap gap-3 mt-6">
              {SKILLS.tools.map((skill) => (
                <Badge key={skill} className="px-4 py-2 rounded-lg text-sm bg-background text-foreground hover:bg-accent hover:text-white transition-all cursor-default">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", ...Array.from(new Set(PROJECTS.map((project) => project.category)))];
  const visibleProjects = activeCategory === "All"
    ? PROJECTS
    : PROJECTS.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="section-kicker mb-4">Selected works</h2>
            <h3 className="font-serif text-5xl md:text-7xl font-bold text-white leading-none">Projects that reflect <br /> <span className="italic font-normal text-white/40">real-world value.</span></h3>
          </div>
          <p className="text-white/50 max-w-xs text-sm leading-relaxed">
            My work has centered on dependable systems, efficient automation, and useful data solutions across institutional environments.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm transition-all",
                activeCategory === category
                  ? "border-accent bg-accent text-white"
                  : "border-white/10 bg-white/5 text-white/70 hover:border-accent/40 hover:text-white"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Card className="glass-card h-full flex flex-col overflow-hidden transition-all duration-500 hover:border-accent/50 group-hover:shadow-[0_0_50px_-12px_rgba(59,130,246,0.3)]">
                <div className="p-8 md:p-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-10">
                    <span className="text-[10px] font-mono text-accent uppercase tracking-[0.2em] px-3 py-1 border border-accent/30 rounded-full">
                      {project.category}
                    </span>
                    <ExternalLink size={18} className="text-white/20 group-hover:text-accent transition-colors" />
                  </div>

                  <h4 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-accent transition-colors">
                    {project.title}
                  </h4>

                  <p className="text-white/60 text-base leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 mb-6">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-accent">Impact</p>
                    <p className="text-sm text-white/70 mt-2 leading-relaxed">{project.impact}</p>
                  </div>

                  <div className="flex flex-wrap gap-3 mt-auto">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-mono py-1.5 px-3 bg-white/5 text-white/50 rounded-md border border-white/5 group-hover:border-white/10 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [statusMessage, setStatusMessage] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (isSubmitted) setIsSubmitted(false);
    if (statusMessage) setStatusMessage("");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatusMessage("Sending your message...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Unable to send your message right now.");
      }

      setIsSubmitted(true);
      setStatusMessage("Thanks! Your message has been received and I’ll follow up soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatusMessage(error instanceof Error ? error.message : "Unable to send your message right now.");
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="section-kicker mb-4">Get in touch</h2>
            <h3 className="font-serif text-5xl md:text-6xl font-bold mb-8">Let’s build something useful together.</h3>
            <p className="text-lg text-muted-foreground mb-10 max-w-md leading-relaxed">
              I’m interested in roles where I can contribute to thoughtful systems, smarter data workflows, and dependable technical execution.
            </p>

            <div className="space-y-6">
              <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-4 rounded-2xl border border-border/60 bg-secondary/20 p-4 transition hover:border-accent/40">
                <div className="p-3 bg-background rounded-full">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email</p>
                  <p className="font-medium">{PROFILE.email}</p>
                </div>
              </a>

              <a href={`tel:${PROFILE.phone}`} className="flex items-center gap-4 rounded-2xl border border-border/60 bg-secondary/20 p-4 transition hover:border-accent/40">
                <div className="p-3 bg-background rounded-full">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Phone</p>
                  <p className="font-medium">{PROFILE.phone}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-border/60 bg-secondary/20 p-4">
                <div className="p-3 bg-background rounded-full">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Location</p>
                  <p className="font-medium">{PROFILE.location}</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="p-8 border-border shadow-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest">Name</label>
                  <Input name="name" value={formData.name} onChange={handleChange} placeholder="Your name" className="rounded-none border-0 border-b border-border focus-visible:ring-0 focus-visible:border-primary px-0" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest">Email</label>
                  <Input name="email" value={formData.email} onChange={handleChange} placeholder="Your email" type="email" className="rounded-none border-0 border-b border-border focus-visible:ring-0 focus-visible:border-primary px-0" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest">Subject</label>
                <Input name="subject" value={formData.subject} onChange={handleChange} placeholder="What would you like to discuss?" className="rounded-none border-0 border-b border-border focus-visible:ring-0 focus-visible:border-primary px-0" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest">Message</label>
                <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell me more about your idea or opportunity..." className="min-h-[150px] rounded-none border-0 border-b border-border focus-visible:ring-0 focus-visible:border-primary px-0 resize-none" />
              </div>
              <Button className="w-full rounded-full py-6 text-lg font-serif italic">
                Send message
              </Button>
              {(isSubmitted || statusMessage) && (
                <p className={`text-sm ${isSubmitted ? "text-accent" : "text-muted-foreground"}`}>
                  {statusMessage || "Thanks! Your message is ready to send — I’ll get back to you soon."}
                </p>
              )}
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
