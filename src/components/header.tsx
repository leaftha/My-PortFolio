import style from "../style/header.module.css";
import { motion } from "framer-motion";
import ScrollBtn from "./ScrollBtn";
import { IsClickContext } from "./isClickedContext";
import { useContext, useEffect } from "react";
import { UpRolling, slideUp } from "../util/ani";

function Header() {
  const clicked = useContext(IsClickContext);

  useEffect(() => {
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
          </div>
        ))}
      </div>
      <ScrollBtn isClick={clicked?.setIsClick} />
    </motion.div>
  );
}

export default Header;
