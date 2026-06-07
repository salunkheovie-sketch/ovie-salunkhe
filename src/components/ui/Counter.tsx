"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

export function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [inView, setInView] = useState(false);
  const spring = useSpring(0, { stiffness: 50, damping: 20 });
  const display = useTransform(spring, (current) => Math.floor(current) + suffix);

  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, spring, value]);

  return (
    <motion.span
      onViewportEnter={() => setInView(true)}
      viewport={{ once: true }}
    >
      {display}
    </motion.span>
  );
}
