import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, TrendingUp, Layers, Zap } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import { CASE_STUDIES } from "@/lib/constants";

const CATEGORIES = [
  "All",
  ...Array.from(new Set(CASE_STUDIES.map((c) => c.category))),
];

const Works = () => {
  const [filter, setFilter] = useState("All");
  const [selectedStudy, setSelectedStudy] = useState<any>(null);

  const filtered =
    filter === "All"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((c) => c.category === filter);

  return (
    <div className="overflow-hidden bg-background">
      {/* Hero */}
      <section className="section-padding pt-32 md:pt-48 relative overflow-hidden h-[60vh] flex items-center justify-center">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://cdn.nbyula.com/public/community/6274d05454121f0014506c51/bannerImage/1651822819784-6274d05454121f0014506c51.jpeg"
            alt="Professional Office"
            loading="lazy"
            decoding="async"
            draggable={false}
            fetchPriority="low"
            className="w-full h-full object-cover opacity-20 transition-opacity duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto text-center relative z-10">
          <motion.span
            className="inline-block text-sm text-primary font-bold uppercase tracking-[0.4em] mb-6 bg-primary/10 backdrop-blur-md px-6 py-2 rounded-full border border-primary/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our Portfolio
          </motion.span>
          <motion.h1
            className="font-display text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Digital <span className="gradient-text">Excellence</span> <br />
            in Action
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            A curated selection of enterprise-grade projects that redefine
            industry standards and drive measurable business growth.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="container mx-auto px-4 mb-20">
        <div className="flex flex-wrap justify-center gap-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 ${
                filter === cat
                  ? "bg-primary text-black shadow-[0_0_20px_rgba(249,115,22,0.4)]"
                  : "bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="container mx-auto px-4 pb-40">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((cs: any) => (
              <motion.div
                key={cs.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group cursor-pointer"
                onClick={() => setSelectedStudy(cs)}
              >
                <div className="relative overflow-hidden rounded-[2.5rem] bg-card border border-white/5 hover:border-primary/40 transition-all duration-500 shadow-2xl h-full flex flex-col">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={cs.image}
                      alt={cs.title}
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                      fetchPriority="low"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                    <div className="absolute top-6 right-6">
                      <span className="px-4 py-2 rounded-full bg-black/50 backdrop-blur-md text-xs font-bold text-white border border-white/10 uppercase tracking-widest leading-none flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        {cs.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-10 flex-grow flex flex-col">
                    <h3 className="font-display text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors leading-tight">
                      {cs.title}
                    </h3>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {cs.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="text-[10px] px-3 py-1 rounded-full bg-white/5 text-white/40 uppercase font-bold tracking-widest border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-8 mt-auto">
                      <div>
                        <p className="text-xl font-black text-primary leading-none mb-2">
                          {cs.metrics.efficiency}
                        </p>
                        <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">
                          Efficiency
                        </p>
                      </div>
                      <div>
                        <p className="text-xl font-black text-primary leading-none mb-2">
                          {cs.metrics.cost}
                        </p>
                        <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">
                          Savings
                        </p>
                      </div>
                      <div>
                        <p className="text-xl font-black text-primary leading-none mb-2">
                          {cs.metrics.users}
                        </p>
                        <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">
                          Scale
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Modern Modal */}
      <AnimatePresence>
        {selectedStudy && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/95 backdrop-blur-2xl"
              onClick={() => setSelectedStudy(null)}
            />
            <motion.div
              className="relative bg-[#0A0A0A] border border-white/10 rounded-[3rem] max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row shadow-[0_0_100px_rgba(249,115,22,0.1)]"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedStudy(null)}
                className="absolute top-8 right-8 z-[110] w-12 h-12 rounded-full bg-white/5 hover:bg-primary hover:text-black transition-all flex items-center justify-center text-white border border-white/10"
              >
                <X size={24} />
              </button>

              {/* Modal Sidebar (Image) */}
              <div className="w-full md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                <img
                  src={selectedStudy.image}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                  fetchPriority="low"
                  alt={selectedStudy.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent md:hidden" />
              </div>

              {/* Modal Content */}
              <div className="w-full md:w-3/5 p-10 md:p-16 overflow-y-auto custom-scrollbar">
                <span className="text-sm text-primary font-bold uppercase tracking-[0.4em] mb-4 inline-block">
                  {selectedStudy.category}
                </span>
                <h2 className="font-display text-4xl md:text-5xl font-black text-white mb-10 tracking-tight leading-none">
                  {selectedStudy.title}
                </h2>

                <div className="space-y-12 mb-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                      <div className="flex items-center gap-3 mb-5">
                        <Layers size={20} className="text-primary" />
                        <h3 className="font-bold text-white uppercase tracking-widest text-xs">
                          The Challenge
                        </h3>
                      </div>
                      <p className="text-white/60 leading-relaxed font-light">
                        {selectedStudy.problem}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-3 mb-5">
                        <Zap size={20} className="text-primary" />
                        <h3 className="font-bold text-white uppercase tracking-widest text-xs">
                          The Solution
                        </h3>
                      </div>
                      <p className="text-white/60 leading-relaxed font-light">
                        {selectedStudy.solution}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-white uppercase tracking-widest text-xs mb-6">
                      Core Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedStudy.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="px-5 py-2 rounded-full bg-white/5 border border-white/5 text-sm font-medium text-white/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-primary/5 border border-primary/10 rounded-[2rem] p-10">
                    <div className="flex items-center gap-3 mb-8">
                      <TrendingUp size={24} className="text-primary" />
                      <h3 className="font-bold text-white uppercase tracking-widest text-sm">
                        Business Outcomes
                      </h3>
                    </div>
                    <div className="grid grid-cols-3 gap-6">
                      <div className="text-center">
                        <p className="font-display text-3xl font-black text-primary mb-1">
                          {selectedStudy.metrics.efficiency}
                        </p>
                        <p className="text-[10px] text-white/40 uppercase font-bold tracking-[0.2em]">
                          Efficiency
                        </p>
                      </div>
                      <div className="text-center border-x border-white/5">
                        <p className="font-display text-3xl font-black text-primary mb-1">
                          {selectedStudy.metrics.cost}
                        </p>
                        <p className="text-[10px] text-white/40 uppercase font-bold tracking-[0.2em]">
                          ROI
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="font-display text-3xl font-black text-primary mb-1">
                          {selectedStudy.metrics.users}
                        </p>
                        <p className="text-[10px] text-white/40 uppercase font-bold tracking-[0.2em]">
                          Scale
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-6">
                  <a
                    href={selectedStudy.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-4 px-10 py-6 rounded-2xl bg-primary text-black font-black text-lg hover:scale-[1.02] transition-all shadow-[0_20px_40px_rgba(249,115,22,0.25)] group"
                  >
                    Visit Live Project{" "}
                    <ArrowRight
                      size={22}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                  <button
                    onClick={() => setSelectedStudy(null)}
                    className="px-10 py-6 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all"
                  >
                    Go Back
                  </button>
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
