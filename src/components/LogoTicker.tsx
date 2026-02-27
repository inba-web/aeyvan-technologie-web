import { motion } from "framer-motion";

const LOGOS = [
    "Enterprise", "SaaS", "FinTech", "HealthTech", "E-commerce", "GovTech",
    "Logistics", "EdTech", "PropTech", "AgriTech", "CleanTech", "BioTech"
];

const LogoTicker = () => {
    return (
        <div className="py-12 bg-black/50 backdrop-blur-sm border-y border-white/5 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none" />

            <div className="container mx-auto px-4 mb-4 text-center">
                <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-semibold">
                    Trusted across diverse sectors
                </span>
            </div>

            <div className="flex overflow-hidden">
                <motion.div
                    animate={{ x: [0, -1920] }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex flex-none gap-16 pr-16 items-center"
                >
                    {[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map((logo, i) => (
                        <span
                            key={i}
                            className="text-2xl md:text-3xl font-display font-bold text-white/20 hover:text-primary/40 transition-colors whitespace-nowrap"
                        >
                            {logo}
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default LogoTicker;
