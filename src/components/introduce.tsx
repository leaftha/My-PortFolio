import style from "../style/introduce.module.css";
import IntroduceTitle from "./introduceTitle";
import { motion, useInView } from "framer-motion";
import { IsClickContext } from "./isClickedContext";
import { useContext, useRef, useEffect, useState } from "react";
import MySkils from "./mySkils";

function Introduce() {
  const clicked = useContext(IsClickContext);
  const introduce = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);

  const isView = useInView(introduce);

  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;
      setWidth(width);
    };
    update();
    window.addEventListener("resize", update);

    return () => window.addEventListener("resize", update);
  }, []);

  const description: string[] = [
    "안녕하세요.",
    "만드는 것을 좋아하는 개발자 피세찬입니다.",
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
      transition: { duration: 0.2, delay: 0.2 + 0.1 * i },
    }),
    closed: {
      y: "100%",
      transition: { duration: 0.2 },
    },
  };

  return (
    <>
      <div ref={introduce} className={style.body}>
        <div className={style.introduce}>
          <img
            className={style.profileImg}
            src={`${process.env.PUBLIC_URL}/image/profile.jpg`}
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
                        animate={clicked?.isClick && isView ? "open" : "closed"}
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
          <div></div>
          <MySkils />
        </div>
        {width >= 758 && <IntroduceTitle />}
      </div>
    </>
  );
}

export default Introduce;
