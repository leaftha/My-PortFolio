import style from "../style/header.module.css";
import { motion } from "framer-motion";

function Header() {
  return (
    <div className={style.headerDiv}>
      <div className={style.words}>
        <div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, y: 55 }}>
            M
          </motion.p>
          <motion.p initial={{ opacity: 1 }} animate={{ opacity: 0, y: 55 }}>
            M
          </motion.p>
        </div>
        <div>
          <motion.p initial={{ opacity: 1 }} animate={{ opacity: 0, y: -45 }}>
            Y
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, y: -45 }}>
            Y
          </motion.p>
        </div>
        <div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, y: 55 }}>
            .
          </motion.p>
          <motion.p initial={{ opacity: 1 }} animate={{ opacity: 0, y: 55 }}>
            .
          </motion.p>
        </div>
        <div>
          <motion.p initial={{ opacity: 1 }} animate={{ opacity: 0, y: -45 }}>
            P
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, y: -45 }}>
            P
          </motion.p>
        </div>
        <div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, y: 55 }}>
            O
          </motion.p>
          <motion.p initial={{ opacity: 1 }} animate={{ opacity: 0, y: 55 }}>
            O
          </motion.p>
        </div>
        <div>
          <motion.p initial={{ opacity: 1 }} animate={{ opacity: 0, y: -45 }}>
            R
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, y: -45 }}>
            R
          </motion.p>
        </div>
        <div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, y: 55 }}>
            T
          </motion.p>
          <motion.p initial={{ opacity: 1 }} animate={{ opacity: 0, y: 55 }}>
            T
          </motion.p>
        </div>
        <div>
          <motion.p initial={{ opacity: 1 }} animate={{ opacity: 0, y: -45 }}>
            F
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, y: -45 }}>
            F
          </motion.p>
        </div>
        <div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, y: 55 }}>
            O
          </motion.p>
          <motion.p initial={{ opacity: 1 }} animate={{ opacity: 0, y: 55 }}>
            O
          </motion.p>
        </div>
        <div>
          <motion.p initial={{ opacity: 1 }} animate={{ opacity: 0, y: -45 }}>
            L
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, y: -45 }}>
            L
          </motion.p>
        </div>
        <div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, y: 55 }}>
            I
          </motion.p>
          <motion.p initial={{ opacity: 1 }} animate={{ opacity: 0, y: 55 }}>
            I
          </motion.p>
        </div>
        <div>
          <motion.p initial={{ opacity: 1 }} animate={{ opacity: 0, y: -45 }}>
            O
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, y: -45 }}>
            O
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default Header;
