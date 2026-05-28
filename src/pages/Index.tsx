import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Globe, Palette, Smartphone, Shield, Cloud, ChevronDown, X, Maximize2 } from "lucide-react";
import { SERVICES, STATS, TECH_STACK, CASE_STUDIES } from "@/lib/constants";
import SplitText from "@/components/SplitText";
import Squares from "@/components/Squares";
import LogoTicker from "@/components/LogoTicker";
import TiltedCard from "@/components/TiltedCard";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe size={28} />,
  Palette: <Palette size={28} />,
  Smartphone: <Smartphone size={28} />,
  Shield: <Shield size={28} />,
  Cloud: <Cloud size={28} />,
};


const Index = () => {
  const [selectedPoster, setSelectedPoster] = useState<string | null>(null);

  const serviceImages = [
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600",
  ];

  const posterImages = [
    { src: "/zently posters/starter.jpeg", title: "Starter Kit" },
    { src: "/zently posters/bronze package.jpeg", title: "Bronze Package" },
    { src: "/zently posters/poster.jpeg", title: "Event Poster" },
    { src: "/zently posters/silver package.jpeg", title: "Silver Package" },
    { src: "/zently posters/all packages.jpeg", title: "Comprehensive Solutions" },
  ];

  const caseStudyImages = [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800", // ERP
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800", // CRM
    "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800", // Hostel
    "https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&q=80&w=800", // Hospital
    "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=800", // E-commerce
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800", // Finance
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
              Aeyvan Technologies
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
      <section className="section-padding bg-card/30 pt-12 md:pt-16">
        <div className="container mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <span className="text-sm text-primary font-bold uppercase tracking-[0.3em] bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">What We Do</span>
            <h2 className="font-display text-4xl md:text-6xl font-extrabold mt-8 mb-4">
              End-to-End <span className="gradient-text">Digital Services</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full mt-2" />
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

      {/* Posters Section */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm text-primary font-bold uppercase tracking-[0.3em]">Visual Showcase</span>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold mt-4">
              Our <span className="gradient-text">Packages & Promos</span>
            </h2>
            <div className="w-20 h-1 bg-primary/30 mx-auto rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {posterImages.map((poster, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative cursor-pointer group rounded-2xl overflow-hidden border border-white/5 shadow-2xl"
                onClick={() => setSelectedPoster(poster.src)}
              >
                <img src={poster.src} alt={poster.title} className="w-full h-full object-cover aspect-[3/4] transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center">
                  <div className="p-3 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-primary mb-3">
                    <Maximize2 size={24} />
                  </div>
                  <span className="text-xs font-bold uppercase text-white tracking-widest">{poster.title}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence mode="wait">
        {selectedPoster && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 backdrop-blur-3xl bg-black/95"
            onClick={() => setSelectedPoster(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-5xl h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-12 right-0 md:-right-12 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all transform hover:rotate-90"
                onClick={() => setSelectedPoster(null)}
              >
                <X size={28} />
              </button>
              <img
                src={selectedPoster}
                alt="Detailed View"
                className="max-w-full max-h-full object-contain rounded-xl shadow-[0_0_50px_rgba(249,115,22,0.3)] border border-white/10"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Testimonials */}
      <section className="section-padding bg-background/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <span className="text-sm text-primary font-bold uppercase tracking-[0.3em] bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">Success Stories</span>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold mt-8">
              Trusted by <span className="gradient-text">Industry Leaders</span>
            </h2>
          </div>

          <TestimonialsCarousel />
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CASE_STUDIES.slice(0, 6).map((cs, i) => (
              <Link key={cs.id} to="/works" className="block glass-strong rounded-2xl overflow-hidden hover-lift group border border-white/10">
                <div className="h-48 relative overflow-hidden">
                  <img src={caseStudyImages[i]} alt={cs.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-primary/20 backdrop-blur-md text-primary border border-primary/20">
                      {cs.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors">{cs.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {cs.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 text-white/60 font-medium">#{tag}</span>
                    ))}
                  </div>
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
