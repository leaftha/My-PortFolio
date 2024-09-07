interface HeaderAni {
  [key: string]:
    | {
        opacity: number;
        y?: number;
        top?: string;
      }
    | {
        type: string;
      };
}

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

export const UpRolling: HeaderAni = {
  first: {
    opacity: 0,
  },
  animation: {
    opacity: 1,
    y: 55,
  },
  transition: {
    type: "spring",
  },
};

export const UpRolling2: HeaderAni = {
  first: {
    opacity: 1,
  },
  animation: {
    opacity: 0,
    y: 55,
  },
  transition: {
    type: "spring", // transition 속성 추가
  },
};

export const DownRolling: HeaderAni = {
  first: {
    opacity: 1,
  },
  animation: {
    opacity: 0,
    y: -45,
  },
  transition: {
    type: "spring", // transition 속성 추가
  },
};

export const DownRolling2: HeaderAni = {
  first: {
    opacity: 0,
  },
  animation: {
    opacity: 1,
    y: -45,
  },
  transition: {
    type: "spring", // transition 속성 추가
  },
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
