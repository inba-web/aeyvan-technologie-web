import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe,
  Palette,
  Smartphone,
  Shield,
  Cloud,
  CheckCircle,
} from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import { SERVICES } from "@/lib/constants";

const iconComponents: Record<string, any> = {
  Globe,
  Palette,
  Smartphone,
  Shield,
  Cloud,
};

const Services = () => {
  return (
    <div className="overflow-hidden bg-background">
      {/* Video Hero Section */}
      <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105"
          >
            <source
              src="/mixkit-computer-hacker-logging-a-website-with-code-47321-hd-ready.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-background z-10" />
        </div>

        <div className="container mx-auto px-4 relative z-20 text-center">
          <motion.span
            className="inline-block text-sm text-primary font-bold uppercase tracking-[0.4em] mb-6 bg-primary/10 backdrop-blur-md px-6 py-2 rounded-full border border-primary/20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.span>
          <motion.h1
            className="font-display text-5xl md:text-8xl font-black mb-8 tracking-tighter text-white leading-none"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Precision <span className="gradient-text">Engineered</span> <br />
            Digital Solutions
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We don't just build software; we architect the technological
            backbone of tomorrow's industry leaders.
          </motion.p>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-2">
            <motion.div
              className="w-1 h-2 bg-primary rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </section>

      {/* Services Grid Section */}
      <section className="section-padding py-32">
        <div className="container mx-auto space-y-40 px-4">
          {SERVICES.map((service, i) => {
            const Icon = iconComponents[service.icon];
            const isEven = i % 2 === 0;

            return (
              <SectionReveal key={service.id}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center ${!isEven ? "lg:direction-rtl" : ""}`}
                >
                  <div className={`${!isEven ? "lg:order-2" : ""} relative`}>
                    <div className="absolute -top-12 -left-12 w-24 h-24 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-10 border border-primary/20 shadow-inner">
                      {Icon && <Icon size={40} />}
                    </div>
                    <h2 className="font-display text-4xl md:text-6xl font-black mb-8 tracking-tight">
                      {service.title}
                    </h2>
                    <p className="text-xl text-white/60 leading-relaxed mb-10 font-light">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                      {service.features.map((f) => (
                        <div key={f} className="flex items-center gap-4 group">
                          <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                          <span className="text-white/80 font-medium tracking-wide">
                            {f}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="inline-flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm mb-12">
                      <span className="text-3xl">🚀</span>
                      <div>
                        <p className="text-xs text-primary font-bold uppercase tracking-widest mb-1">
                          Business Impact
                        </p>
                        <p className="text-lg text-white font-medium">
                          {service.impact}
                        </p>
                      </div>
                    </div>

                    <div>
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-4 px-10 py-5 rounded-full bg-white text-black font-black text-lg hover:bg-primary hover:text-white transition-all duration-500 group"
                      >
                        Initiate Project{" "}
                        <ArrowRight
                          size={20}
                          className="group-hover:translate-x-2 transition-transform"
                        />
                      </Link>
                    </div>
                  </div>

                  <div className={!isEven ? "lg:order-1" : ""}>
                    <motion.div
                      className="relative rounded-[3rem] overflow-hidden group shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
                      whileHover={{ y: -10 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="aspect-[4/5] md:aspect-square relative overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          loading="lazy"
                          decoding="async"
                          draggable={false}
                          fetchPriority="low"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />

                        {/* Interactive Overlay */}
                        <div className="absolute inset-0 border-[20px] border-white/5 m-4 rounded-[2.5rem] pointer-events-none transition-all duration-500 group-hover:border-primary/20" />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </section>

      {/* Extreme CTA */}
      <section className="section-padding py-40 relative overflow-hidden bg-card/10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="container mx-auto text-center relative z-10 px-4">
          <SectionReveal>
            <h2 className="font-display text-5xl md:text-8xl font-black mb-10 tracking-tighter">
              The Future is <span className="gradient-text">Optional.</span>{" "}
              <br />
              <span className="text-white">Growth is Irresistible.</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto mb-16 text-xl md:text-2xl font-light">
              Don't just adapt to the digital age. Define it with us.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-6 px-16 py-8 rounded-full bg-primary text-black font-black text-2xl hover:scale-105 transition-all glow-lg group shadow-2xl"
            >
              Consult an Expert{" "}
              <ArrowRight
                size={32}
                className="group-hover:translate-x-2 transition-transform"
              />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
};

export default Services;
