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
    scale: 10,
    // opacity: 0,
  },
  animation: (i: number) => ({
    // opacity: 1,
    // y: 55,
    scale: 1,
    transition: { duration: 0.2, delay: 0.2 + 0.1 * i },
  }),
};

// export const UpRolling2 = {
//   first: {
//     opacity: 1,
//   },
//   animation: (i: number) => ({
//     opacity: 0,
//     y: 55,
//     transition: { duration: 0.2, delay: 0.2 + 0.1 * i },
//   }),
// };

// export const DownRolling: HeaderAni = {
//   first: {
//     opacity: 1,
//   },
//   animation: {
//     opacity: 0,
//     y: -45,
//   },
// };

// export const DownRolling2: HeaderAni = {
//   first: {
//     opacity: 0,
//   },
//   animation: {
//     opacity: 1,
//     y: -45,
//   },
// };

export const slideUp: HeaderSlideAni = {
  initial: {
    top: 0,
  },

  animate: {
    top: "-100vh",

    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};
