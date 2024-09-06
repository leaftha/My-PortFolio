import style from "../style/header.module.css";
import { motion } from "framer-motion";
import ScrollBtn from "./ScrollBtn";

function Header() {
  const UpRolling = {
    first: {
      opacity: 0,
    },
    animation: {
      opacity: 1,
      y: 55,
    },
    transition: {
      type: "spring ",
    },
  };
  const UpRolling2 = {
    first: {
      opacity: 1,
    },
    animation: {
      opacity: 0,
      y: 55,
    },
  };
  const DpwnRolling = {
    first: {
      opacity: 1,
    },
    animation: {
      opacity: 0,
      y: -45,
    },
  };
  const DpwnRolling2 = {
    first: {
      opacity: 0,
    },
    animation: {
      opacity: 1,
      y: -45,
    },
  };
  return (
    <div className={style.headerDiv}>
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
          <motion.p variants={DpwnRolling} initial="first" animate="animation">
            Y
          </motion.p>
          <motion.p
            variants={DpwnRolling2}
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
          <motion.p variants={DpwnRolling} initial="first" animate="animation">
            P
          </motion.p>
          <motion.p
            variants={DpwnRolling2}
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
          <motion.p variants={DpwnRolling} initial="first" animate="animation">
            R
          </motion.p>
          <motion.p
            variants={DpwnRolling2}
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
          <motion.p variants={DpwnRolling} initial="first" animate="animation">
            F
          </motion.p>
          <motion.p
            variants={DpwnRolling2}
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
          <motion.p variants={DpwnRolling} initial="first" animate="animation">
            L
          </motion.p>
          <motion.p
            variants={DpwnRolling2}
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
          <motion.p variants={DpwnRolling} initial="first" animate="animation">
            O
          </motion.p>
          <motion.p
            variants={DpwnRolling2}
            initial="first"
            animate="animation"
            transition={{ type: "spring" }}
          >
            O
          </motion.p>
        </div>
      </div>
      <ScrollBtn />
    </div>
  );
}

export default Header;
