import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";

interface Testimonial {
    name: string;
    role: string;
    text: string;
    image: string;
}

const TESTIMONIALS: Testimonial[] = [
    {
        name: "Rajesh Kumar",
        role: "CTO, TechVenture Inc",
        text: "Zently transformed our legacy systems into a modern cloud platform. Their engineering quality is world-class.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop"
    },
    {
        name: "Priya Sharma",
        role: "CEO, HealthFirst",
        text: "The hospital management system they built handles 8,000+ users flawlessly. Truly enterprise-grade work.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop"
    },
    {
        name: "Michael Chen",
        role: "VP Engineering, GlobalRetail",
        text: "Our e-commerce platform scaled from 100 to 25,000 users seamlessly. Zently's architecture is bulletproof.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&auto=format&fit=crop"
    },
    {
        name: "Sarah Jenkins",
        role: "Founder, BloomEd",
        text: "Working with Zently was a game-changer for our EdTech startup. They understood our vision perfectly.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop"
    },
    {
        name: "Arjun Reddy",
        role: "COO, LogisticsPro",
        text: "Their AI-driven inventory system reduced our overheads by 40%. The ROI was immediate and substantial.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&auto=format&fit=crop"
    },
    {
        name: "Emily Watson",
        role: "Product Lead, InnovateHQ",
        text: "Seamless integration and beautiful UI. Their team delivered exactly what we needed ahead of schedule.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&h=150&auto=format&fit=crop"
    },
    {
        name: "David Miller",
        role: "Founder, Streamline.io",
        text: "The best tech partner we've had. Scalable code and proactive problem-solving at every step of development.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&h=150&auto=format&fit=crop"
    }
];

const TestimonialsCarousel = () => {
    // Use a triple-list to ensure zero gaps during wrap-around
    const repeatedTestimonials = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="relative w-full overflow-hidden py-10 select-none">
            {/* Edge Fades */}
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-60 bg-gradient-to-r from-background via-background/60 to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-60 bg-gradient-to-l from-background via-background/60 to-transparent z-20 pointer-events-none" />

            <motion.div
                className="flex gap-6 w-max"
                initial={{ x: 0 }}
                animate={{
                    x: "-33.3333%" // Move exactly one set of testimonials to reset seamlessly
                }}
                transition={{
                    duration: 30, // Adjust speed: lower is faster
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop"
                }}
                // Stop animation on hover
                style={{
                    animationPlayState: isHovered ? 'paused' : 'running'
                }}
                // Handled via CSS class for reliability
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className={`flex gap-6 animate-marquee ${isHovered ? 'pause' : ''}`}>
                    {repeatedTestimonials.map((t, i) => (
                        <div
                            key={i}
                            className="w-[300px] md:w-[380px] flex-shrink-0"
                        >
                            <div className="glass-strong p-6 md:p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 h-full flex flex-col justify-between shadow-xl group">
                                <div>
                                    <div className="flex gap-1 mb-4 text-primary text-[10px] md:text-sm">
                                        {[...Array(5)].map((_, star) => <span key={star}>★</span>)}
                                    </div>
                                    <p className="text-xs md:text-sm text-foreground/80 leading-relaxed italic mb-6 group-hover:text-foreground transition-colors">"{t.text}"</p>
                                </div>

                                <div className="flex items-center gap-4 pt-4 border-t border-white/5 group-hover:border-primary/20 transition-colors">
                                    <div className="relative">
                                        <img src={t.image} alt={t.name} className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border border-primary/20 group-hover:border-primary/50 transition-all" />
                                        <div className="absolute inset-0 rounded-full bg-primary/5 group-hover:bg-transparent" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm md:text-base font-bold text-white group-hover:text-primary transition-colors">{t.name}</h4>
                                        <p className="text-[10px] md:text-xs text-primary/70 font-semibold uppercase tracking-wider">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.3333%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
          display: flex;
          width: max-content;
        }
        .pause {
          animation-play-state: paused !important;
        }
      `}</style>
        </div>
    );
};

export default TestimonialsCarousel;
