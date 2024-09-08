import style from "../style/header.module.css";
import { motion } from "framer-motion";
import ScrollBtn from "./ScrollBtn";
import { IsClickContext } from "./isClickedContext";
import { useContext, useEffect, useState } from "react";
import {
  UpRolling,
  UpRolling2,
  DownRolling,
  DownRolling2,
  slideUp,
} from "../util/ani";

interface dimensions {
  width: number;
  height: number;
}

function Header() {
  const [dimension, setDimension] = useState<dimensions>({
    width: 0,
    height: 0,
  });
  const clicked = useContext(IsClickContext);

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;

  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    animate: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };
  return (
    <motion.div
      className={style.headerDiv}
      variants={slideUp}
      initial="initial"
      animate={clicked?.isClick && "animate"}
    >
      <div className={style.words}>
        <div>
          <motion.p
            variants={UpRolling}
            initial="first"
            animate="animation"
            transition={{ type: "spring" }}
          >
            M
          </motion.p>
          <motion.p variants={UpRolling2} initial="first" animate="animation">
            M
          </motion.p>
        </div>
        <div>
          <motion.p variants={DownRolling} initial="first" animate="animation">
            Y
          </motion.p>
          <motion.p
            variants={DownRolling2}
            initial="first"
            animate="animation"
            transition={{ type: "spring" }}
          >
            Y
          </motion.p>
        </div>
        <div>
          <motion.p
            variants={UpRolling}
            initial="first"
            animate="animation"
            transition={{ type: "spring" }}
          >
            .
          </motion.p>
          <motion.p variants={UpRolling2} initial="first" animate="animation">
            .
          </motion.p>
        </div>
        <div>
          <motion.p variants={DownRolling} initial="first" animate="animation">
            P
          </motion.p>
          <motion.p
            variants={DownRolling2}
            initial="first"
            animate="animation"
            transition={{ type: "spring" }}
          >
            P
          </motion.p>
        </div>
        <div>
          <motion.p
            variants={UpRolling}
            initial="first"
            animate="animation"
            transition={{ type: "spring" }}
          >
            O
          </motion.p>
          <motion.p variants={UpRolling2} initial="first" animate="animation">
            O
          </motion.p>
        </div>
        <div>
          <motion.p variants={DownRolling} initial="first" animate="animation">
            R
          </motion.p>
          <motion.p
            variants={DownRolling2}
            initial="first"
            animate="animation"
            transition={{ type: "spring" }}
          >
            R
          </motion.p>
        </div>
        <div>
          <motion.p
            variants={UpRolling}
            initial="first"
            animate="animation"
            transition={{ type: "spring" }}
          >
            T
          </motion.p>
          <motion.p variants={UpRolling2} initial="first" animate="animation">
            T
          </motion.p>
        </div>
        <div>
          <motion.p variants={DownRolling} initial="first" animate="animation">
            F
          </motion.p>
          <motion.p
            variants={DownRolling2}
            initial="first"
            animate="animation"
            transition={{ type: "spring" }}
          >
            F
          </motion.p>
        </div>
        <div>
          <motion.p
            variants={UpRolling}
            initial="first"
            animate="animation"
            transition={{ type: "spring" }}
          >
            O
          </motion.p>
          <motion.p variants={UpRolling2} initial="first" animate="animation">
            O
          </motion.p>
        </div>
        <div>
          <motion.p variants={DownRolling} initial="first" animate="animation">
            L
          </motion.p>
          <motion.p
            variants={DownRolling2}
            initial="first"
            animate="animation"
            transition={{ type: "spring" }}
          >
            L
          </motion.p>
        </div>
        <div>
          <motion.p
            variants={UpRolling}
            initial="first"
            animate="animation"
            transition={{ type: "spring" }}
          >
            I
          </motion.p>
          <motion.p variants={UpRolling2} initial="first" animate="animation">
            I
          </motion.p>
        </div>
        <div>
          <motion.p variants={DownRolling} initial="first" animate="animation">
            O
          </motion.p>
          <motion.p
            variants={DownRolling2}
            initial="first"
            animate="animation"
            transition={{ type: "spring" }}
          >
            O
          </motion.p>
        </div>
      </div>
      <ScrollBtn isClick={clicked?.setIsClick} />
      {dimension.width > 0 && (
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
      )}
    </motion.div>
  );
}

export default Header;
