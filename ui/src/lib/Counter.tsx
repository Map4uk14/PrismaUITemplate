import { useState } from 'react'
import { motion } from "motion/react"

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <motion.button
      
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setCount(count + 1)}
    >
      count is {count}
    </motion.button>
  )
}
