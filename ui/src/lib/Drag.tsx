import { motion } from "motion/react"
import { useState, useEffect } from "react";
import imgUrl from '../assets/Garden Plants - Foggy Parasol.png';

export default function Drag() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [constraints, setConstraints] = useState({ top: 0, left: 0, right: 0, bottom: 0 });

    useEffect(() => {
        const updateConstraints = () => {
            setConstraints({
                top: 0,
                left: 0,
                right: window.innerWidth - 100,
                bottom: window.innerHeight - 100,
            });
        };
        updateConstraints();
        window.addEventListener('resize', updateConstraints);
        return () => window.removeEventListener('resize', updateConstraints);
    }, []);

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

            dragConstraints={constraints}
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

