import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Palette, Smartphone, Shield, Cloud, CheckCircle } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import { SERVICES } from "@/lib/constants";

const iconComponents: Record<string, any> = {
  Globe, Palette, Smartphone, Shield, Cloud,
};

const Services = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="section-padding pt-32 md:pt-40 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto text-center relative z-10">
          <motion.span
            className="inline-block text-sm text-primary font-medium uppercase tracking-wider mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our Services
          </motion.span>
          <motion.h1
            className="font-display text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Comprehensive <span className="gradient-text">Digital Solutions</span>
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            From concept to deployment, we deliver end-to-end technology services that drive measurable business impact.
          </motion.p>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container mx-auto space-y-24">
          {SERVICES.map((service, i) => {
            const Icon = iconComponents[service.icon];
            const isEven = i % 2 === 0;

            return (
              <SectionReveal key={service.id}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? "lg:direction-rtl" : ""}`}>
                  <div className={!isEven ? "lg:order-2" : ""}>
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                      {Icon && <Icon size={28} />}
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">{service.title}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-8">{service.description}</p>

                    <ul className="space-y-3 mb-8">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-3 text-sm">
                          <CheckCircle size={16} className="text-primary flex-shrink-0" />
                          <span className="text-foreground">{f}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="glass rounded-lg p-4 mb-8 inline-block">
                      <p className="text-sm text-primary font-medium">📈 {service.impact}</p>
                    </div>

                    <div>
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all"
                      >
                        Get Started <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>

                  <div className={!isEven ? "lg:order-1" : ""}>
                    <div className="glass rounded-2xl p-8 aspect-square flex items-center justify-center">
                      <div className="w-full h-full rounded-xl bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 flex items-center justify-center">
                        {Icon && <Icon size={80} />}
                      </div>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-card/30">
        <div className="container mx-auto text-center">
          <SectionReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Every business is unique. Let's discuss your specific requirements and build a tailored solution.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition-all glow"
            >
              Contact Us <ArrowRight size={20} />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
};

export default Services;
