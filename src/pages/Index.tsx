import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Palette, Smartphone, Shield, Cloud, ChevronDown } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import { SERVICES, STATS, TECH_STACK, CASE_STUDIES } from "@/lib/constants";
import SplitText from "@/components/SplitText";
import Squares from "@/components/Squares";
import LogoTicker from "@/components/LogoTicker";
import TiltedCard from "@/components/TiltedCard";

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
  const serviceImages = [
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600",
  ];

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 -z-10">
          <Squares
            speed={0.5}
            squareSize={40}
            direction='diagonal'
            borderColor='#271E37'
            hoverFillColor='#222222'
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 flex items-center justify-center gap-3"
          >
            <span className="font-display text-xl md:text-2xl lg:text-3xl font-bold tracking-[0.2em] uppercase gradient-text">
              Zently IT Solution
            </span>
          </motion.div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.15] mb-8 max-w-[90vw] mx-auto flex flex-col items-center justify-center gap-4">
            <SplitText
              text="Architecting the Future of"
              className="text-white"
              delay={40}
              duration={1.2}
              ease="power3.out"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />
            <SplitText
              text="High-Impact Digital Experiences"
              className="gradient-text"
              delay={40}
              duration={1.2}
              ease="power3.out"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
          </h1>

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

      {/* Professional Transition Area */}
      <div className="relative z-20 -mt-24 mb-12">
        <div className="container mx-auto px-4">
        </div>

        <LogoTicker />

        <div className="absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>

      {/* Services Preview */}
      <section className="section-padding bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm text-primary font-medium uppercase tracking-wider">What We Do</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-3">
              End-to-End <span className="gradient-text">Digital Services</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {SERVICES.map((service, i) => (
              <div key={service.id} className="flex justify-center">
                <Link to="/services" className="block w-full max-w-[340px]">
                  <TiltedCard
                    imageSrc={serviceImages[i]}
                    altText={service.title}
                    captionText={service.title}
                    containerHeight="400px"
                    containerWidth="100%"
                    imageHeight="400px"
                    imageWidth="100%"
                    rotateAmplitude={10}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                      <div className="p-6 h-full flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-[15px]">
                        <div className="w-10 h-10 rounded-lg bg-primary/20 backdrop-blur-md flex items-center justify-center text-primary mb-3 border border-primary/20">
                          {iconMap[service.icon]}
                        </div>
                        <h3 className="font-display text-xl font-bold text-white mb-2">{service.title}</h3>
                        <p className="text-xs text-white/70 leading-relaxed font-medium line-clamp-2">
                          {service.description}
                        </p>
                      </div>
                    }
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm text-primary font-medium uppercase tracking-wider">Testimonials</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">
              Trusted by <span className="gradient-text">Industry Leaders</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={t.name} className="glass rounded-xl p-8 h-full">
                <p className="text-muted-foreground leading-relaxed mb-6 italic">"{t.text}"</p>
                <div>
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-primary">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10" />
        <div className="container mx-auto text-center relative z-10">
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
        </div>
      </section>

      {/* Recent Works Preview */}
      <section className="section-padding bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm text-primary font-medium uppercase tracking-wider">Portfolio</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">
              Recent <span className="gradient-text">Case Studies</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CASE_STUDIES.slice(0, 6).map((cs, i) => (
              <Link key={cs.id} to="/works" className="block glass rounded-xl p-6 hover-lift group">
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
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/works"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              View All Case Studies <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
