import { motion } from "framer-motion";

const SECTORS = [
    { name: "Enterprise", color: "from-blue-400 to-indigo-600" },
    { name: "SaaS", color: "from-primary to-orange-400" },
    { name: "FinTech", color: "from-emerald-400 to-teal-600" },
    { name: "HealthTech", color: "from-rose-400 to-pink-600" },
    { name: "E-commerce", color: "from-amber-400 to-orange-500" },
    { name: "GovTech", color: "from-slate-300 to-slate-500" },
    { name: "Logistics", color: "from-cyan-400 to-blue-500" },
    { name: "EdTech", color: "from-violet-400 to-purple-600" },
    { name: "PropTech", color: "from-lime-400 to-green-600" },
    { name: "AgriTech", color: "from-green-500 to-emerald-700" },
    { name: "CleanTech", color: "from-sky-400 to-blue-600" },
    { name: "BioTech", color: "from-fuchsia-400 to-purple-700" }
];

const LogoTicker = () => {
    return (
        <div className="py-16 bg-black/40 backdrop-blur-md border-y border-white/5 relative overflow-hidden group">
            {/* Premium background effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-20 pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

            <div className="container mx-auto px-4 mb-8 text-center relative z-30">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20"
                >
                    Specialized Across Industries
                </motion.span>
            </div>

            <div className="flex overflow-hidden relative z-10">
                <motion.div
                    animate={{ x: [0, -2800] }}
                    transition={{
                        duration: 50,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex flex-none gap-20 pr-20 items-center py-4"
                >
                    {[...SECTORS, ...SECTORS, ...SECTORS].map((sector, i) => (
                        <div
                            key={i}
                            className="relative group/item cursor-default"
                        >
                            <span
                                className={`text-3xl md:text-5xl font-display font-extrabold transition-all duration-500 bg-clip-text text-transparent bg-gradient-to-r ${sector.color} opacity-40 group-hover/item:opacity-100 group-hover/item:scale-110 inline-block filter grayscale group-hover/item:grayscale-0`}
                            >
                                {sector.name}
                            </span>
                            {/* Subtle glow effect on hover */}
                            <div className={`absolute -inset-x-6 -inset-y-2 bg-gradient-to-r ${sector.color} opacity-0 group-hover/item:opacity-10 blur-2xl transition-opacity duration-500 rounded-full`} />
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Dynamic light streak animation */}
            <motion.div
                animate={{ x: [-1000, 2000] }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
                className="absolute top-0 w-96 h-full bg-gradient-to-r from-transparent via-primary/5 to-transparent skew-x-12 pointer-events-none"
            />
        </div>
    );
};

export default LogoTicker;
