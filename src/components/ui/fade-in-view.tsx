"use client";

import { type ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface FadeInViewProps {
  children: ReactNode;
  /** Additional classes forwarded to the motion element */
  className?: string;
  /** Delay before the animation starts (seconds) */
  delay?: number;
  /**
   * Direction the element comes from.
   * - `"up"`: translates up (+24px) while fading in
   * - `"down"`: translates down (-24px)
   * - `"left"`: translates left (+24px)
   * - `"right"`: translates right (-24px)
   * - `"none"`: fades in place
   * @default "up"
   */
  direction?: "up" | "down" | "left" | "right" | "none";
  /** Duration of the animation (seconds) */
  duration?: number;
  /** Only animate once when first scrolled into view */
  once?: boolean;
}

export function FadeInView({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.6,
  once = true,
}: FadeInViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-50px" });

  const getInitial = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: 24 };
      case "down":
        return { opacity: 0, y: -24 };
      case "left":
        return { opacity: 0, x: 24 };
      case "right":
        return { opacity: 0, x: -24 };
      case "none":
        return { opacity: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitial()}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : getInitial()}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
