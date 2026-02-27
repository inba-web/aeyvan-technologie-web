import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Target, Eye, Rocket, ChevronLeft, ChevronRight, Zap, Layers, Bot, Globe } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import TiltedCard from "@/components/TiltedCard";
import CardSwap, { Card } from "@/components/CardSwap";

const ABOUT_IMAGES = [
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
    <div className="overflow-hidden bg-background">
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
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-background" />
          </motion.div>
        </AnimatePresence>

        {/* Hero Content */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            className="font-display text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Global <span className="gradient-text">Expertise</span>, <br />
            Business <span className="text-white">Empowerment</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            From international freelancing to enterprise-grade solutions. We craft digital products that redefine industry standards.
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
                      To be the most trusted enterprise technology partner for businesses worldwide, driving digital transformation through innovative and scalable solutions.
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
                      To engineer high-quality, production-ready digital products that solve real business challenges, enabling our clients to scale globally.
                    </p>
                  </div>
                }
              />
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* VERTICAL ROADMAP SECTION */}
      <section className="section-padding bg-card/10 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4">
          <SectionReveal>
            <div className="text-center mb-24">
              <span className="text-sm text-primary font-bold uppercase tracking-[0.4em] bg-primary/10 px-4 py-2 rounded-full">Our Journey</span>
              <h2 className="font-display text-5xl md:text-7xl font-black mt-8 tracking-tight">The <span className="gradient-text">Evolution</span></h2>
              <p className="text-white/50 mt-6 max-w-2xl mx-auto text-lg">From a small freelance collective to a global enterprise technology partner.</p>
            </div>
          </SectionReveal>

          <div className="relative max-w-5xl mx-auto">
            {/* Center Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent -translate-x-1/2 hidden md:block" />

            <div className="space-y-24 relative z-10">
              {/* Step 1: Freelancing - Left */}
              <div className="flex flex-col md:flex-row items-center justify-between">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="w-full md:w-[45%] order-2 md:order-1"
                >
                  <div className="glass-strong p-8 md:p-10 rounded-[2.5rem] border border-white/5 hover:border-primary/40 transition-all duration-500 group">
                    <div className="text-primary font-bold text-sm mb-4 tracking-widest uppercase">2021 - 2023</div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors">Global Freelancing Era</h3>
                    <p className="text-white/60 text-lg leading-relaxed">
                      We operated as an elite circle of international freelancers, delivering high-performance solutions for top-tier startups and business owners across the globe. Our foundation was built on diverse projects and consistent excellence.
                    </p>
                  </div>
                </motion.div>

                <div className="w-12 h-12 rounded-full bg-background border-4 border-primary/50 flex items-center justify-center z-20 shadow-[0_0_20px_rgba(249,115,22,0.4)] order-1 md:order-2 mb-8 md:mb-0">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                </div>

                <div className="hidden md:block w-[45%] order-3" />
              </div>

              {/* Step 2: Formation - Right */}
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="hidden md:block w-[45%]" />

                <div className="w-12 h-12 rounded-full bg-background border-4 border-primary/50 flex items-center justify-center z-20 shadow-[0_0_20px_rgba(249,115,22,0.4)] mb-8 md:mb-0">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                </div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="w-full md:w-[45%]"
                >
                  <div className="glass-strong p-8 md:p-10 rounded-[2.5rem] border border-white/5 hover:border-primary/40 transition-all duration-500 group">
                    <div className="text-primary font-bold text-sm mb-4 tracking-widest uppercase">Early 2024</div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors">Zently IT Solutions Born</h3>
                    <p className="text-white/60 text-lg leading-relaxed">
                      Recognizing the power of our combined talent, we formalized our collective into a registered IT company. This marked our shift from individual contributors to a unified force of technology experts.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Step 3: Expansion - Left */}
              <div className="flex flex-col md:flex-row items-center justify-between">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="w-full md:w-[45%] order-2 md:order-1"
                >
                  <div className="glass-strong p-8 md:p-10 rounded-[2.5rem] border border-white/5 hover:border-primary/40 transition-all duration-500 group">
                    <div className="text-primary font-bold text-sm mb-4 tracking-widest uppercase">Present & Future</div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors">Scaling Enterprise</h3>
                    <p className="text-white/60 text-lg leading-relaxed">
                      Today, we specialize in high-impact digital products, enterprise applications, and cutting-edge web platforms. We don't just build software; we architect the growth of modern businesses.
                    </p>
                  </div>
                </motion.div>

                <div className="w-12 h-12 rounded-full bg-background border-4 border-primary/50 flex items-center justify-center z-20 shadow-[0_0_20px_rgba(249,115,22,0.4)] order-1 md:order-2 mb-8 md:mb-0">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                </div>

                <div className="hidden md:block w-[45%] order-3" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Superiority Section */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <div className="text-center mb-24">
              <span className="text-sm text-primary font-bold uppercase tracking-[0.4em] bg-primary/10 px-4 py-2 rounded-full">Our Edge</span>
              <h2 className="font-display text-5xl md:text-7xl font-black mt-8 tracking-tight">
                Enterprise <span className="gradient-text">Superiority</span>
              </h2>
              <p className="text-white/50 mt-6 max-w-2xl mx-auto text-lg italic font-light">
                Setting the benchmark for quality, speed, and innovation in the digital landscape.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Velocity",
                icon: <Zap size={32} />,
                desc: "Rapid delivery of complex digital products with zero compromise on quality. We ship faster than the competition.",
                img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
                color: "from-orange-500/20"
              },
              {
                title: "Scalability",
                icon: <Layers size={32} />,
                desc: "Architectures designed to handle enterprise-level loads and global user bases without breaking a sweat.",
                img: "https://stepwise.pl/wp-content/uploads/2021/06/Oprogramowanie-cloud-native-w-modelu-SaaS-www-2-980x588.jpg",
                color: "from-blue-500/20"
              },
              {
                title: "Intelligence",
                icon: <Bot size={32} />,
                desc: "AI-driven solutions that automate and enhance business operations, providing a competitive technological edge.",
                img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
                color: "from-purple-500/20"
              },
              {
                title: "Resilience",
                icon: <Globe size={32} />,
                desc: "Robust, secure, and always-on infrastructures for critical systems, ensuring business continuity 24/7.",
                img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
                color: "from-green-500/20"
              }
            ].map((feature, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="group relative h-[500px] rounded-[2rem] overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-700 bg-card/20 backdrop-blur-sm">
                  {/* Background Image with Hover Effect */}
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src={feature.img}
                      alt={feature.title}
                      className="w-full h-full object-cover opacity-20 grayscale group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent`} />
                  </div>

                  {/* Content Container */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="mb-6 transform group-hover:-translate-y-2 transition-transform duration-500">
                      <div className="w-16 h-16 rounded-2xl bg-primary/20 backdrop-blur-md flex items-center justify-center text-primary mb-6 border border-primary/30 shadow-xl group-hover:bg-primary group-hover:text-black transition-all duration-500">
                        {feature.icon}
                      </div>
                      <h3 className="font-display text-3xl font-bold text-white mb-4 tracking-tight uppercase leading-none">{feature.title}</h3>
                      <p className="text-white/60 text-base leading-relaxed font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {feature.desc}
                      </p>
                    </div>

                    {/* Decorative Line */}
                    <div className="w-12 h-1 bg-primary transform origin-left group-hover:w-full transition-all duration-700 rounded-full" />
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 pointer-events-none" />
        <div className="container mx-auto text-center relative z-10">
          <SectionReveal>
            <h2 className="font-display text-5xl md:text-8xl font-black mb-12 tracking-tighter leading-none">
              Ready to <span className="gradient-text">Dominate</span> the Digital Space?
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-4 px-12 py-6 rounded-full bg-primary text-primary-foreground font-black text-xl md:text-2xl hover:scale-105 transition-all glow-lg group shadow-[0_0_50px_rgba(249,115,22,0.3)] hover:shadow-[0_0_80px_rgba(249,115,22,0.5)]"
            >
              Start Your Project
              <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
};

export default About;
