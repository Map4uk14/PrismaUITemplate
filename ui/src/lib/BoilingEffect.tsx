import { motion } from "framer-motion";

const BoilingEffect = () => {
  // Bubbles: small circles rising, more and randomized with even scatter
  const bubbles = Array.from({ length: 12 }, (_, i) => {
    const baseLeft = (i * (80 / 12)) + 10; // Even spacing
    const randomOffset = (Math.random() - 0.5) * 10; // Small random variation
    return (
      <motion.div
        key={i}
        className="bubble"
        style={{
          left: `${Math.max(10, Math.min(90, baseLeft + randomOffset))}%`,
        }}
        initial={{ y: -300, opacity: 0 }}
        animate={{
          y: -500,
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 1 + Math.random() * 1,
          repeat: Infinity,
          delay: Math.random() * 2,
          ease: "easeOut",
        }}
      />
    );
  });

  // Steam: fading lines, more and randomized with even scatter
  const steam = Array.from({ length: 6 }, (_, i) => {
    const baseLeft = (i * (80 / 6)) + 10; // Even spacing
    const randomOffset = (Math.random() - 0.5) * 15; // Small random variation
    return (
      <motion.div
        key={i}
        className="steam"
        style={{
          left: `${Math.max(10, Math.min(90, baseLeft + randomOffset))}%`,
        }}
        initial={{ y: -300, opacity: 0 }}
        animate={{
          y: -500,
          opacity: [0, 0.8, 0],
        }}
        transition={{
          duration: 3 + Math.random() * 1,
          repeat: Infinity,
          delay: Math.random() * 3,
          ease: "easeOut",
        }}
      />
    );
  });

  return (
    <div className="boiling-effect">
      {bubbles}
      {steam}
    </div>
  );
};

export default BoilingEffect;
