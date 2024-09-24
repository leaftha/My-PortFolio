import style from "../style/header.module.css";
import { motion } from "framer-motion";
import ScrollBtn from "./ScrollBtn";
import { IsClickContext } from "./isClickedContext";
import { useContext, useEffect, useState } from "react";
import { UpRolling, slideUp } from "../util/ani";

// interface dimensions {
//   width: number;
//   height: number;
// }

function Header() {
  // const [dimension, setDimension] = useState<dimensions>({
  //   width: 0,
  //   height: 0,
  // });
  const clicked = useContext(IsClickContext);

  useEffect(() => {
    // setDimension({ width: window.innerWidth, height: window.innerHeight });

    const lockScroll = () => {
      document.body.style.overflow = "hidden";
    };

    const unlockScroll = () => {
      document.body.style.overflow = "auto";
      document.body.style.overflowX = "hidden";
    };

    if (clicked?.isClick) {
      unlockScroll();
    } else {
      lockScroll();
    }

    return () => {
      unlockScroll();
    };
  }, [clicked?.isClick]);

  // const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
  //   dimension.height
  // } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
  //   dimension.height
  // }  L0 0`;

  // const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
  //   dimension.height
  // } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const str: string[] = [
    "M",
    "Y",
    ".",
    "P",
    "O",
    "R",
    "T",
    "F",
    "O",
    "L",
    "I",
    "O",
  ];
  // const curve = {
  //   initial: {
  //     d: initialPath,
  //     transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
  //   },
  //   animate: {
  //     d: targetPath,
  //     transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
  //   },
  // };
  return (
    <motion.div
      className={style.headerDiv}
      variants={slideUp}
      initial="initial"
      animate={clicked?.isClick && "animate"}
    >
      <div className={style.words}>
        {str.map((word, idx) => (
          <div>
            <motion.p
              variants={UpRolling}
              custom={idx}
              initial="first"
              animate="animation"
              transition={{ type: "spring" }}
            >
              {word}
            </motion.p>
            {/* <motion.p
              variants={UpRolling2}
              initial="first"
              custom={idx}
              animate="animation"
            >
              {word}
            </motion.p> */}
          </div>
        ))}
      </div>
      <ScrollBtn isClick={clicked?.setIsClick} />
      {/* {dimension.width > 0 && (
        <>
          <svg className={style.curve}>
            <motion.path
              className={style.curvePath}
              variants={curve}
              initial="initial"
              animate={clicked?.isClick && "animate"}
            ></motion.path>
          </svg>
        </>
      )} */}
    </motion.div>
  );
}

export default Header;
