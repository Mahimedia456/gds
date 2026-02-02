import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Reveal({
  children,
  y = 24,
  delay = 0,
  duration = 0.6,
  once = true,
  className = "",
}) {
  const { ref, inView } = useInView({ triggerOnce: once, threshold: 0.15 });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
