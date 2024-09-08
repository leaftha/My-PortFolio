import style from "../style/introduce.module.css";
import IntroduceTitle from "./introduceTitle";
import { motion, useInView } from "framer-motion";
import { IsClickContext } from "./isClickedContext";
import { useContext } from "react";

function Introduce() {
  const clicked = useContext(IsClickContext);

  const description: string[] = [
    "안녕하세요",
    "만드는 것을  좋아하는 개발자 피세찬입니다.",
    "2020년에 동서대학교에 입학하여 현재 재학 중입니다.",
    "프론트엔드 개발에 관심이 많으며, 인터랙티브한 웹을 배우는 것을 좋아합니다.",
    "대부분의 웹 개발을 혼자 독학으로 공부하고 있지만, 열심히 노력하고 있습니다.",
    "저의 첫 포트폴리오에 방문해 주셔서 감사합니다.",
  ];
  const slideUp = {
    initial: {
      y: "100%",
    },
    open: (i: number) => ({
      y: "0%",
      transition: { duration: 0.5, delay: 0.5 + 0.1 * i },
    }),
    closed: {
      y: "100%",
      transition: { duration: 0.5 },
    },
  };
  return (
    <div className={style.body}>
      <motion.img
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
        className={style.profileImg}
        src="image/profile.jpg"
      />
      <div className={style.text}>
        {description.map((line, idx) => (
          <p key={idx}>
            {line.split("").map((word, idx) => {
              return (
                <span key={idx} className={style.mask}>
                  <motion.span
                    variants={slideUp}
                    custom={idx}
                    animate={clicked?.isClick ? "open" : "closed"}
                    key={idx}
                  >
                    {word}
                  </motion.span>
                </span>
              );
            })}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Introduce;
