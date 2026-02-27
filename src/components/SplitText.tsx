import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface SplitTextProps {
    text?: string;
    className?: string;
    delay?: number;
    duration?: number;
    ease?: any;
    splitType?: 'chars' | 'words';
    from?: any;
    to?: any;
    threshold?: number;
    rootMargin?: string;
    textAlign?: 'left' | 'center' | 'right' | 'justify' | 'initial' | 'inherit';
    onLetterAnimationComplete?: () => void;
    showCallback?: boolean;
}

const SplitText: React.FC<SplitTextProps> = ({
    text = '',
    className = '',
    delay = 50, // ms
    duration = 0.05,
    ease = 'power3.out',
    splitType = 'chars',
    from = { opacity: 0, y: 40 },
    to = { opacity: 1, y: 0 },
    threshold = 0.1,
    rootMargin = '-100px',
    textAlign = 'center',
    onLetterAnimationComplete,
    showCallback = false,
}) => {
    const letters = splitType === 'chars' ? text.split('') : text.split(' ');
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: threshold, margin: rootMargin as any });
    const [animatedCount, setAnimatedCount] = useState(0);

    const handleAnimationComplete = () => {
        setAnimatedCount((prev) => prev + 1);
    };

    useEffect(() => {
        if (animatedCount === letters.length && onLetterAnimationComplete) {
            onLetterAnimationComplete();
            if (showCallback) {
                console.log('All letters have animated!');
            }
        }
    }, [animatedCount, letters.length, onLetterAnimationComplete, showCallback]);

    return (
        <p
            ref={containerRef}
            className={`split-text ${className}`}
            style={{
                textAlign,
                overflow: 'visible',
                display: 'block',
                whiteSpace: 'pre-wrap',
                paddingBottom: '0.1em'
            }}
        >
            {letters.map((letter, i) => (
                <motion.span
                    key={i}
                    initial={from}
                    animate={isInView ? to : from}
                    transition={{
                        duration: duration,
                        delay: i * (delay / 1000),
                        ease: ease === 'power3.out' ? [0.33, 1, 0.68, 1] : ease,
                    }}
                    onAnimationComplete={handleAnimationComplete}
                    className="inline-block"
                >
                    {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
            ))}
        </p>
    );
};

export default SplitText;
