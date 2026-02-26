import { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Palette, Smartphone, Shield, Cloud, ChevronDown } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import { SERVICES, STATS, TECH_STACK, CASE_STUDIES } from "@/lib/constants";

const HeroScene = lazy(() => import("@/components/HeroScene"));

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe size={28} />,
  Palette: <Palette size={28} />,
  Smartphone: <Smartphone size={28} />,
  Shield: <Shield size={28} />,
  Cloud: <Cloud size={28} />,
};

const TESTIMONIALS = [
  { name: "Rajesh Kumar", role: "CTO, TechVenture Inc", text: "Zently transformed our legacy systems into a modern cloud platform. Their engineering quality is world-class." },
  { name: "Priya Sharma", role: "CEO, HealthFirst", text: "The hospital management system they built handles 8,000+ users flawlessly. Truly enterprise-grade work." },
  { name: "Michael Chen", role: "VP Engineering, GlobalRetail", text: "Our e-commerce platform scaled from 100 to 25,000 users seamlessly. Zently's architecture is bulletproof." },
];

const Index = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center">
        <Suspense fallback={<div className="absolute inset-0 bg-background" />}>
          <HeroScene />
        </Suspense>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-6">
              Enterprise Digital Transformation
            </span>
          </motion.div>

          <motion.h1
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Engineering Scalable Digital Solutions for{" "}
            <span className="gradient-text">Modern Businesses</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            We architect, build, and scale enterprise-grade software products that drive digital transformation across industries.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all glow-sm"
            >
              Start Your Project <ArrowRight size={18} />
            </Link>
            <Link
              to="/works"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg glass text-foreground font-semibold hover:bg-card/80 transition-all"
            >
              View Our Work
            </Link>
          </motion.div>

          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <ChevronDown size={24} className="mx-auto text-muted-foreground animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-card/30">
        <div className="container mx-auto">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">What We Do</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold mt-3">
                End-to-End <span className="gradient-text">Digital Services</span>
              </h2>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => (
              <SectionReveal key={service.id} delay={i * 0.1}>
                <Link
                  to="/services"
                  className="block glass rounded-xl p-8 hover-lift group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary/20 transition-colors">
                    {iconMap[service.icon]}
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <SectionReveal key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="font-display text-4xl md:text-5xl font-bold gradient-text mb-2">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-padding bg-card/30">
        <div className="container mx-auto">
          <SectionReveal>
            <div className="text-center mb-12">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">Technology</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">Our Tech Stack</h2>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="flex flex-wrap justify-center gap-3">
              {TECH_STACK.map((tech) => (
                <motion.span
                  key={tech}
                  className="px-5 py-2.5 rounded-full glass text-sm font-medium text-foreground"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">Testimonials</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">
                Trusted by <span className="gradient-text">Industry Leaders</span>
              </h2>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <SectionReveal key={t.name} delay={i * 0.1}>
                <div className="glass rounded-xl p-8 h-full">
                  <p className="text-muted-foreground leading-relaxed mb-6 italic">"{t.text}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{t.name}</p>
                    <p className="text-sm text-primary">{t.role}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10" />
        <div className="container mx-auto text-center relative z-10">
          <SectionReveal>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              Ready to Build Something <span className="gradient-text">Extraordinary?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Partner with us to transform your vision into a scalable, enterprise-grade digital product.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition-all glow"
            >
              Let's Talk <ArrowRight size={20} />
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* Recent Works Preview */}
      <section className="section-padding bg-card/30">
        <div className="container mx-auto">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">Portfolio</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">
                Recent <span className="gradient-text">Case Studies</span>
              </h2>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CASE_STUDIES.slice(0, 6).map((cs, i) => (
              <SectionReveal key={cs.id} delay={i * 0.08}>
                <Link to="/works" className="block glass rounded-xl p-6 hover-lift group">
                  <div className="h-40 rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 mb-5 flex items-center justify-center">
                    <span className="font-display text-2xl font-bold text-primary/40">0{cs.id}</span>
                  </div>
                  <span className="text-xs text-primary font-medium uppercase tracking-wider">{cs.category}</span>
                  <h3 className="font-display text-lg font-semibold mt-1 mb-2 group-hover:text-primary transition-colors">{cs.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {cs.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground">{tag}</span>
                    ))}
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal delay={0.5}>
            <div className="text-center mt-12">
              <Link
                to="/works"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                View All Case Studies <ArrowRight size={18} />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
};

export default Index;
