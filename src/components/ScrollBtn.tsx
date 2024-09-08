import style from "../style/ScrollBtn.module.css";
import { motion } from "framer-motion";

function ScrollBtn(props: {
  isClick?: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const handlerClick = () => {
    if (props.isClick) {
      props.isClick(true);
    }
  };

  return (
    <motion.div
      onClick={handlerClick}
      className={style.btn}
      initial={{ y: 0 }}
      animate={{ y: [10, 0, 10] }}
      transition={{ repeat: Infinity, repeatType: "loop", duration: 1 }}
    >
      {/* <p className={style.text}>{"⇩"}</p> */}
    </motion.div>
  );
}

export default ScrollBtn;
