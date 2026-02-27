import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Target, Eye, Rocket, Users, ChevronLeft, ChevronRight } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import TiltedCard from "@/components/TiltedCard";

const ABOUT_IMAGES = [
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600880212340-023440ea911a?q=80&w=2000&auto=format&fit=crop"
];

const About = () => {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % ABOUT_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Fullscreen Hero Carousel */}
      <section className="relative h-screen w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImg}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img
              src={ABOUT_IMAGES[currentImg]}
              alt="Professional Meeting"
              className="w-full h-full object-cover"
            />
            {/* Dark Overlay for content readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-background" />
          </motion.div>
        </AnimatePresence>

        {/* Hero Content */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <motion.span
            className="inline-block text-sm text-primary font-bold uppercase tracking-[0.4em] mb-6 bg-primary/10 backdrop-blur-md px-6 py-2 rounded-full border border-primary/20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Identity
          </motion.span>
          <motion.h1
            className="font-display text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Pioneering <span className="gradient-text">Digital Mastery</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We are a collective of visionaries and architects dedicated to redefining the enterprise landscape through technical precision and boundary-pushing innovation.
          </motion.p>
        </div>

        {/* Carousel Controls */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex items-center gap-6">
          <button
            onClick={() => setCurrentImg((prev) => (prev - 1 + ABOUT_IMAGES.length) % ABOUT_IMAGES.length)}
            className="p-3 rounded-full glass hover:bg-primary/20 transition-all text-white border border-white/10"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="flex gap-3">
            {ABOUT_IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentImg(i)}
                className={`h-1.5 transition-all duration-500 rounded-full ${i === currentImg ? "w-12 bg-primary shadow-[0_0_15px_rgba(249,115,22,0.5)]" : "w-3 bg-white/20 hover:bg-white/40"
                  }`}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrentImg((prev) => (prev + 1) % ABOUT_IMAGES.length)}
            className="p-3 rounded-full glass hover:bg-primary/20 transition-all text-white border border-white/10"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            <SectionReveal>
              <TiltedCard
                imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800"
                altText="Our Vision"
                captionText="Our Vision"
                containerHeight="500px"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                rotateAmplitude={6}
                displayOverlayContent={true}
                overlayContent={
                  <div className="p-8 md:p-12 h-full flex flex-col justify-end bg-gradient-to-t from-black via-black/30 to-transparent rounded-[15px]">
                    <div className="w-14 h-14 rounded-2xl bg-primary/20 backdrop-blur-md flex items-center justify-center text-primary mb-6 border border-primary/30 shadow-xl">
                      <Eye size={32} />
                    </div>
                    <h3 className="font-display text-4xl font-bold text-white mb-4">Our Vision</h3>
                    <p className="text-white/80 text-lg leading-relaxed font-medium">
                      To be the most trusted enterprise technology partner for businesses worldwide, driving digital transformation through innovative and scalable solutions that bridge the gap between imagination and reality.
                    </p>
                  </div>
                }
              />
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <TiltedCard
                imageSrc="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800"
                altText="Our Mission"
                captionText="Our Mission"
                containerHeight="500px"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                rotateAmplitude={6}
                displayOverlayContent={true}
                overlayContent={
                  <div className="p-8 md:p-12 h-full flex flex-col justify-end bg-gradient-to-t from-accent/60 via-black/30 to-transparent rounded-[15px]">
                    <div className="w-14 h-14 rounded-2xl bg-accent/20 backdrop-blur-md flex items-center justify-center text-accent mb-6 border border-accent/30 shadow-xl">
                      <Target size={32} />
                    </div>
                    <h3 className="font-display text-4xl font-bold text-white mb-4">Our Mission</h3>
                    <p className="text-white/80 text-lg leading-relaxed font-medium">
                      To engineer high-quality, production-ready digital products that solve real business challenges, enabling our clients to scale and compete in the global market through technical excellence and strategic partnership.
                    </p>
                  </div>
                }
              />
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Timeline Story */}
      <section className="section-padding bg-card/20 border-y border-white/5">
        <div className="container mx-auto">
          <SectionReveal>
            <div className="text-center mb-20">
              <span className="text-sm text-primary font-bold uppercase tracking-[0.4em]">Historical Trajectory</span>
              <h2 className="font-display text-5xl md:text-6xl font-black mt-6 tracking-tight">Our <span className="gradient-text">DNA</span></h2>
              <div className="w-32 h-1 bg-primary/40 mx-auto mt-8 rounded-full" />
            </div>
          </SectionReveal>

          <div className="max-w-5xl mx-auto glass-strong rounded-[3rem] p-10 md:p-20 border border-white/10 relative shadow-2xl">
            <div className="flex items-start gap-12 flex-col md:flex-row">
              <div className="w-24 h-24 rounded-[2rem] bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 border border-primary/20 shadow-xl glow-sm">
                <Rocket size={48} />
              </div>
              <div className="space-y-8">
                <h3 className="font-display text-4xl font-extrabold leading-tight text-white">Transitioning from <span className="text-primary italic">Global Freelancing</span> to Corporate Leadership</h3>
                <div className="space-y-6 text-xl text-white/70 leading-relaxed font-light">
                  <p>
                    We have been operating successfully as elite international freelancers for over <span className="text-white font-bold px-2 py-0.5 bg-primary/20 rounded">two years</span>, collaborating with industry leaders across borders.
                  </p>
                  <p>
                    This deep global exposure inspired us to formalize our expertise into <span className="text-primary font-bold">Zently IT Solution</span>. Backed by a high-caliber team of engineers and designers, we are now focused on building the future of enterprise technology.
                  </p>
                  <p>
                    Our mission is to empower business architects and startup founders by delivering <span className="text-white font-medium border-b-2 border-primary/30">world-class landing pages</span>, high-performance websites, and massive <span className="text-white font-medium border-b-2 border-primary/30">enterprise-grade ecosystems</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Message Section */}
      <section className="section-padding overflow-hidden">
        <div className="container mx-auto max-w-5xl">
          <SectionReveal>
            <div className="glass-strong rounded-[3rem] p-12 md:p-24 text-center relative border border-white/10 shadow-2xl">
              {/* Artistic Glows */}
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-accent/20 blur-[120px] rounded-full pointer-events-none" />

              <p className="text-white leading-snug text-3xl md:text-5xl font-display font-bold italic mb-12 tracking-tighter">
                "At Zently, we don't just write code — we engineer solutions that transform businesses. Every product is a masterpiece of precision and performance."
              </p>

              <div className="flex flex-col items-center">
                <div className="w-1.5 h-16 bg-gradient-to-b from-primary to-transparent mb-8 rounded-full" />
                <h4 className="text-white font-black text-2xl tracking-widest uppercase">Founder & CEO</h4>
                <p className="text-primary text-sm font-black uppercase tracking-[0.4em] mt-2 opacity-80">Zently IT Solution</p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Enterprise Capabilities */}
      <section className="section-padding bg-background relative">
        <div className="container mx-auto">
          <SectionReveal>
            <div className="text-center mb-24">
              <h2 className="font-display text-4xl md:text-6xl font-black mb-8 tracking-tight">
                Enterprise <span className="gradient-text">Superiority</span>
              </h2>
              <div className="w-24 h-1.5 bg-primary/20 mx-auto rounded-full" />
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { icon: <Rocket size={32} />, title: "Agile Dominance", desc: "Our 2-week sprint architecture ensures your product evolves at the speed of thought, not just business.", color: "primary" },
              { icon: <Target size={32} />, title: "Infrastructural Scale", desc: "We deploy future-proof microservices and cloud-native stacks built to handle millions of requests.", color: "accent" },
              { icon: <Users size={32} />, title: "Elite Engineering", desc: "Full-stack specialists integrated directly into your long-term roadmap and product vision.", color: "primary" },
              { icon: <Eye size={32} />, title: "Perpetual Support", desc: "24/7 proactive monitoring and incident management to ensure zero-downtime operations.", color: "accent" },
            ].map((cap, i) => (
              <SectionReveal key={cap.title} delay={i * 0.1}>
                <div className="glass-strong rounded-[2.5rem] p-10 h-full hover-lift group border border-white/5 relative shadow-xl overflow-hidden">
                  <div className={`w-20 h-20 rounded-3xl ${cap.color === 'primary' ? 'bg-primary/20 text-primary border-primary/30' : 'bg-accent/20 text-accent border-accent/30'} border flex items-center justify-center mb-10 group-hover:scale-110 transition-all duration-700 shadow-[0_0_20px_rgba(249,115,22,0.15)]`}>
                    {cap.icon}
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-5 text-white">{cap.title}</h3>
                  <p className="text-base text-white/50 leading-relaxed font-light">{cap.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding">
        <div className="container mx-auto text-center relative">
          <SectionReveal>
            <h2 className="font-display text-5xl md:text-7xl font-black mb-12 tracking-tighter">
              Let's Build the <span className="gradient-text">Extraordinary.</span>
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-4 px-14 py-6 rounded-[2rem] bg-primary text-primary-foreground font-black text-2xl hover:scale-105 transition-all glow-lg group shadow-2xl"
            >
              Collaborate Now
              <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
};

export default About;
