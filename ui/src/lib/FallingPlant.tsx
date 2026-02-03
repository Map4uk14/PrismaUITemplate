import { memo, useMemo } from "react";
import { motion } from "motion/react";

interface FallingPlantProps {
  id: number;
  imgUrl: string;
  onComplete: (id: number) => void;
}

const PLANT_SIZE = 100;
const DROP_HEIGHT = -300;
const FALL_DISTANCE = 200;
const FALL_DURATION = 0.8;

// Simple deterministic pseudo-random function for performance
function pseudoRandom(seed: number) {
  return ((Math.sin(seed) + 1) / 2); // 0..1
}

const FallingPlant = memo(({ id, imgUrl, onComplete }: FallingPlantProps) => {
  const horizontalOffset = useMemo(() => pseudoRandom(id) * 100 + 100, [id]);
  const rotation = useMemo(() => (pseudoRandom(id + 42) > 0.5 ? 360 : -360), [id]);

  return (
    <motion.div
      initial={{ y: DROP_HEIGHT, x: horizontalOffset, rotate: 0 }}
      animate={{ y: FALL_DISTANCE, rotate: rotation }}
      transition={{ duration: FALL_DURATION, ease: "easeIn" }}
      onAnimationComplete={() => onComplete(id)}
      style={{
        position: "absolute",
        width: PLANT_SIZE,
        height: PLANT_SIZE,
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        pointerEvents: "none",
        zIndex: 10,
      }}
    />
  );
});

FallingPlant.displayName = "FallingPlant";
export default FallingPlant;
