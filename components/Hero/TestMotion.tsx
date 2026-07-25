"use client";

import { motion } from "framer-motion";

export default function TestMotion() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-red-500 p-10 text-white"
    >
      TEST MOTION
    </motion.div>
  );
}