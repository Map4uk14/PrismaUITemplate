import { motion } from "motion/react"
import { useState } from "react"

export default function Rotate() {
    const [rotation, setRotation] = useState(0)

    return (
        <motion.div
            style={{ ...box, marginTop: '20px' }}
            animate={{ rotate: rotation }}
            transition={{ duration: 0.5 }}
            onClick={() => setRotation(rotation + 90)}
        />
    )
}


const box = {
    width: 150,
    height: 150,
    backgroundColor: "#0400ff",
    borderRadius: 5,
}
