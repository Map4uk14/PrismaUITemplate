import { motion } from "motion/react";

interface FallingPlantProps {
  id: number;
  imgUrl: string;
  onComplete: (id: number) => void;
}

export default function FallingPlant({ id, imgUrl, onComplete }: FallingPlantProps) {
  const randomRotation = Math.random() > 0.5 ? 360 : -360; // Random clockwise or counterclockwise

  return (
    <motion.div
      initial={{ y: -600, x: Math.random() * 100 + 100, rotate: 0 }} // Shifted 50px left
      animate={{ y: -200, rotate: randomRotation }} // Fall closer to bottom and spin randomly
      transition={{
        duration: 0.8,
        ease: "easeIn",
      }}
      onAnimationComplete={() => onComplete(id)}
      style={{
        position: "absolute",
        width: 100,
        height: 100,
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        pointerEvents: 'none', // Non-interactive
        zIndex: 10,
      }}
    />
  );
}
