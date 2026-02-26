import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Target, Eye, Rocket, Users } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";

const TIMELINE = [
  { year: "2019", title: "Founded", desc: "Zently IT Solution started with a vision to deliver enterprise-grade digital products from Coimbatore." },
  { year: "2020", title: "First Enterprise Client", desc: "Delivered our first large-scale ERP system, establishing credibility in enterprise software." },
  { year: "2021", title: "Team Expansion", desc: "Grew to 30+ engineers, designers, and strategists. Expanded into mobile and cloud services." },
  { year: "2022", title: "50+ Projects", desc: "Crossed the milestone of 50 successful project deliveries across healthcare, fintech, and e-commerce." },
  { year: "2023", title: "Global Reach", desc: "Started serving international clients across Asia, Middle East, and North America." },
  { year: "2024", title: "Innovation Lab", desc: "Launched our R&D lab focused on AI/ML, blockchain, and emerging technology solutions." },
];

const About = () => {
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
            transition={{ duration: 0.6 }}
          >
            About Us
          </motion.span>
          <motion.h1
            className="font-display text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Building the Future of{" "}
            <span className="gradient-text">Digital Innovation</span>
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We are a team of passionate engineers, designers, and strategists dedicated to transforming ideas into scalable digital products.
          </motion.p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SectionReveal>
              <div className="glass rounded-xl p-10 h-full hover-lift">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <Eye size={24} />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted enterprise technology partner for businesses worldwide, driving digital transformation through innovative and scalable solutions.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <div className="glass rounded-xl p-10 h-full hover-lift">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-6">
                  <Target size={24} />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To engineer high-quality, production-ready digital products that solve real business challenges, enabling our clients to scale and compete in the global market.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-card/30">
        <div className="container mx-auto">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">Our Journey</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">Company Timeline</h2>
            </div>
          </SectionReveal>

          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
            {TIMELINE.map((item, i) => (
              <SectionReveal key={item.year} delay={i * 0.1}>
                <div className={`relative flex items-start gap-8 mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="hidden md:block md:w-1/2" />
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 mt-2 glow-sm" />
                  <div className="ml-12 md:ml-0 md:w-1/2 glass rounded-xl p-6">
                    <span className="text-sm text-primary font-semibold">{item.year}</span>
                    <h3 className="font-display text-lg font-bold mt-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <SectionReveal>
            <div className="glass rounded-xl p-10 md:p-16 text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
                <Users size={32} />
              </div>
              <h3 className="font-display text-2xl font-bold mb-2">From the Founder</h3>
              <p className="text-muted-foreground leading-relaxed text-lg italic mb-6">
                "At Zently, we don't just write code — we engineer solutions that transform businesses. Every product we build is crafted with the precision and scalability that enterprise clients demand. Our commitment to quality and innovation drives everything we do."
              </p>
              <p className="text-primary font-semibold">Founder & CEO, Zently IT Solution</p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding bg-card/30">
        <div className="container mx-auto text-center">
          <SectionReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Enterprise <span className="gradient-text">Capabilities</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
              We bring the technical depth and strategic thinking needed to deliver complex enterprise solutions.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Rocket size={24} />, title: "Rapid Delivery", desc: "Agile methodology with 2-week sprint cycles." },
              { icon: <Target size={24} />, title: "Scalable Architecture", desc: "Microservices, cloud-native, and containerized." },
              { icon: <Users size={24} />, title: "Dedicated Teams", desc: "Full-stack engineers assigned to your project." },
              { icon: <Eye size={24} />, title: "24/7 Support", desc: "Round-the-clock monitoring and support." },
            ].map((cap, i) => (
              <SectionReveal key={cap.title} delay={i * 0.1}>
                <div className="glass rounded-xl p-8 hover-lift">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 mx-auto">
                    {cap.icon}
                  </div>
                  <h3 className="font-display font-semibold mb-2">{cap.title}</h3>
                  <p className="text-sm text-muted-foreground">{cap.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto text-center">
          <SectionReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Want to Work With Us?
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition-all glow"
            >
              Get in Touch <ArrowRight size={20} />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
};

export default About;
