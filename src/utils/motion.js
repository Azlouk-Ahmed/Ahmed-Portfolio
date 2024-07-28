// utils/motion.js
export const fadeIn = (direction = "up", type = "spring", delay = 0, duration = 0.5) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: type,
      delay: delay,
      duration: duration,
      ease: "easeOut",
    },
  },
});


export const zoomIn = (delay, duration) => ({
  hidden: {
    scale: 0,
    opacity: 0,
    transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] }
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const boxVariants = (delay, duration) =>({
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: delay,
      duration: duration,
    },
  }),
});