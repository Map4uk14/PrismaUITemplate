import { motion } from "motion/react"
import { useState } from "react";
import imgUrl from '../assets/Garden Plants - Foggy Parasol.png';

export default function Drag() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleDrag = (e: React.MouseEvent) => {
        setPosition({
            x: e.clientX - 50,
            y: e.clientY - 50
        });
    };

    return (
        <motion.div
            style={{
                backgroundSize: 'cover',
                ...box,
                position: "fixed",
                left: position.x,
                top: position.y
            }}

            drag dragMomentum={false}

            whileDrag={{
                scale: 1.1,
            }}

            dragTransition={{
            bounceStiffness: 10000,
            bounceDamping: 500
            }}

            dragConstraints={{
            top: 20,
            left: -450,
            right: 1250,
            bottom: 700,
            }}
        />
    );
}

const box = {
    width: 100,
    height: 100,
    backgroundImage: `url(${imgUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: 5,
    
}

