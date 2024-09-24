interface HeaderSlideAni {
  [key: string]: {
    top?: number | string;
    transition?: {
      duration: number;
      ease: [number, number, number, number];
      delay: number;
    };
  };
}

export const UpRolling = {
  first: {
    opacity: "0",
  },
  animation: (i: number) => ({
    opacity: "1",
    transition: { type: "spring", duration: 0.2, delay: 0.2 + 0.1 * i },
  }),
};

export const slideUp: HeaderSlideAni = {
  initial: {
    top: 0,
  },

  animate: {
    top: "-100vh",

    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};
