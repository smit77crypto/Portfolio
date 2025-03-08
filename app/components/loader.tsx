"use client"

import { motion } from "framer-motion"

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center bg-background z-50"
    >
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500"
        >
          Smit Barot
        </motion.div>

        <div className="relative w-64 h-1 bg-muted rounded-full overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 1.5,
              ease: "linear",
            }}
            className="absolute inset-0 bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500"
          />
        </div>
      </div>
    </motion.div>
  )
}

