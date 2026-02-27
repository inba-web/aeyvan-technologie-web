import React, { useState, useEffect, Children } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CardSwapProps {
  children: React.ReactNode;
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  pauseOnHover?: boolean;
}

export const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={`w-full h-full ${className}`}>{children}</div>;
};

const CardSwap = ({
  children,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false
}: CardSwapProps) => {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const cards = Children.toArray(children);

  useEffect(() => {
    if (pauseOnHover && isHovered) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % cards.length);
    }, delay);

    return () => clearInterval(timer);
  }, [cards.length, delay, pauseOnHover, isHovered]);

  return (
    <div
      className="relative w-full h-full flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full max-w-2xl aspect-[4/3] flex items-center justify-center">
        <AnimatePresence mode="popLayout">
          {cards.map((_, i) => {
            const pos = (i - index + cards.length) % cards.length;
            if (pos > 2) return null;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8, y: pos * verticalDistance, x: pos * cardDistance }}
                animate={{
                  opacity: 1 - pos * 0.3,
                  scale: 1 - pos * 0.1,
                  y: pos * verticalDistance,
                  x: pos * cardDistance,
                  zIndex: cards.length - pos
                }}
                exit={{ opacity: 0, scale: 1.1, y: -100, x: -50 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="absolute w-full h-full"
              >
                {cards[i]}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CardSwap;
