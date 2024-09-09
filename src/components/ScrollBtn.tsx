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
    <motion.img
      src={`${process.env.PUBLIC_URL}/image/scroll-down.png`}
      onClick={handlerClick}
      className={style.btn}
      initial={{ y: 0 }}
      animate={{ y: [10, 0, 10] }}
      transition={{ repeat: Infinity, repeatType: "loop", duration: 1 }}
    ></motion.img>
  );
}

export default ScrollBtn;
