export const fadeUpAnimation = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: 'easeInOut' },
};
export const listContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Adjust the stagger duration
    },
  },
};

export const listItemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: index => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: index * 0.05, ease: 'easeInOut' },
  }),
};
