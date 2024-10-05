import style from "../style/header.module.css";
import { motion } from "framer-motion";
import { IsClickContext } from "./isClickedContext";
import { useContext, useRef } from "react";
import { UpRolling, slideUp } from "../util/ani";

function Header() {
  const intro = useRef(null);
  const clicked = useContext(IsClickContext);

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
      ref={intro}
      className={style.headerDiv}
      variants={slideUp}
      initial="initial"
      animate={clicked?.isClick && "animate"}
    >
      <div className={style.words}>
        {str.map((word, idx) => (
          <div key={idx}>
            <motion.p
              variants={UpRolling}
              custom={idx}
              initial="first"
              animate="animation"
              transition={{ type: "spring" }}
              onAnimationComplete={() => {
                if (idx === str.length - 1 && !clicked?.isClick) {
                  clicked?.setIsClick(true);
                }
              }}
            >
              {word}
            </motion.p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Header;
