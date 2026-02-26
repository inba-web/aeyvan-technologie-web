import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, TrendingUp, Layers, Zap } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import { CASE_STUDIES } from "@/lib/constants";

const CATEGORIES = ["All", ...Array.from(new Set(CASE_STUDIES.map((c) => c.category)))];

const Works = () => {
  const [filter, setFilter] = useState("All");
  const [selectedStudy, setSelectedStudy] = useState<typeof CASE_STUDIES[0] | null>(null);

  const filtered = filter === "All" ? CASE_STUDIES : CASE_STUDIES.filter((c) => c.category === filter);

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
            Portfolio
          </motion.span>
          <motion.h1
            className="font-display text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Our <span className="gradient-text">Case Studies</span>
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            12 enterprise-grade projects delivered with measurable business impact.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="container mx-auto px-4 mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? "bg-primary text-primary-foreground"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="container mx-auto px-4 pb-20">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((cs) => (
              <motion.div
                key={cs.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="glass rounded-xl p-6 hover-lift cursor-pointer group"
                  onClick={() => setSelectedStudy(cs)}
                >
                  <div className="h-44 rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 mb-5 flex items-center justify-center">
                    <span className="font-display text-3xl font-bold text-primary/30">
                      {String(cs.id).padStart(2, "0")}
                    </span>
                  </div>
                  <span className="text-xs text-primary font-medium uppercase tracking-wider">{cs.category}</span>
                  <h3 className="font-display text-lg font-semibold mt-1 mb-3 group-hover:text-primary transition-colors">
                    {cs.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cs.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground">{tag}</span>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div>
                      <p className="text-sm font-bold text-primary">{cs.metrics.efficiency}</p>
                      <p className="text-xs text-muted-foreground">Efficiency</p>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-primary">{cs.metrics.cost}</p>
                      <p className="text-xs text-muted-foreground">Cost</p>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-primary">{cs.metrics.users}</p>
                      <p className="text-xs text-muted-foreground">Users</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedStudy && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setSelectedStudy(null)} />
            <motion.div
              className="relative glass-strong rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto p-8 md:p-12"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <button
                onClick={() => setSelectedStudy(null)}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground"
              >
                <X size={20} />
              </button>

              <span className="text-xs text-primary font-medium uppercase tracking-wider">{selectedStudy.category}</span>
              <h2 className="font-display text-3xl font-bold mt-2 mb-6">{selectedStudy.title}</h2>

              <div className="h-56 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 mb-8 flex items-center justify-center">
                <span className="font-display text-5xl font-bold text-primary/20">
                  {String(selectedStudy.id).padStart(2, "0")}
                </span>
              </div>

              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Layers size={18} className="text-primary" />
                    <h3 className="font-display font-semibold text-lg">Problem Statement</h3>
                  </div>
                  <p className="text-muted-foreground">{selectedStudy.problem}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Zap size={18} className="text-primary" />
                    <h3 className="font-display font-semibold text-lg">Solution Architecture</h3>
                  </div>
                  <p className="text-muted-foreground">{selectedStudy.solution}</p>
                </div>

                <div>
                  <h3 className="font-display font-semibold text-lg mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedStudy.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1.5 rounded-full glass text-sm font-medium">{tag}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp size={18} className="text-primary" />
                    <h3 className="font-display font-semibold text-lg">Impact Metrics</h3>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="glass rounded-xl p-5 text-center">
                      <p className="font-display text-2xl font-bold gradient-text">{selectedStudy.metrics.efficiency}</p>
                      <p className="text-xs text-muted-foreground mt-1">Efficiency Gain</p>
                    </div>
                    <div className="glass rounded-xl p-5 text-center">
                      <p className="font-display text-2xl font-bold gradient-text">{selectedStudy.metrics.cost}</p>
                      <p className="text-xs text-muted-foreground mt-1">Cost Reduction</p>
                    </div>
                    <div className="glass rounded-xl p-5 text-center">
                      <p className="font-display text-2xl font-bold gradient-text">{selectedStudy.metrics.users}</p>
                      <p className="text-xs text-muted-foreground mt-1">Active Users</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Works;
