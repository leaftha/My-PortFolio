import { useRef } from "react";
import style from "../style/mySkils.module.css";
import { motion, spring, useInView } from "framer-motion";

type gridSkil = {
  skil: string;
  src: string;
};

function MySkils() {
  const skilRef = useRef(null);
  const inView = useInView(skilRef);
  let skils: gridSkil[] = [
    {
      skil: "html",
      src: `${process.env.PUBLIC_URL}/image/logo/html5-plain.svg`,
    },
    {
      skil: "css",
      src: `${process.env.PUBLIC_URL}/image/logo/css3-plain.svg`,
    },
    {
      skil: "javascript",
      src: `${process.env.PUBLIC_URL}/image/logo/javascript-original.svg`,
    },
    {
      skil: "typescript",
      src: `${process.env.PUBLIC_URL}/image/logo/typescript-plain.svg`,
    },
    {
      skil: "react",
      src: `${process.env.PUBLIC_URL}/image/logo/react-original.svg`,
    },
    {
      skil: "next.js",
      src: `${process.env.PUBLIC_URL}/image/logo/nextjs-original.svg`,
    },
  ];

  const cardVariants = {
    hidden: { scale: 0 },
    visible: (i: number) => ({
      scale: 1,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };

  return (
    <div className={style.main}>
      <div className={style.history}>
        <p>피세찬</p>
        <p>2001생</p>
        <p>경일 고등학교 졸업</p>
        <p>동서대학교 재학중(2020년 입학 ~ 2026년 졸업예정)</p>
        <p>Email : vltpcks@gmail.com</p>
        <p
          onClick={() => {
            window.open("https://solved.ac/profile/vltpcks");
          }}
        >
          백준
        </p>
        <p
          onClick={() => {
            window.open("https://github.com/leaftha");
          }}
        >
          Git Hub
        </p>
      </div>
      <div className={style.skilContainer}>
        <h1 className={style.skilTitle}>My Skils</h1>
        <div className={style.skilGrid} ref={skilRef}>
          {skils.map((skil, idx) => (
            <motion.div
              drag
              key={skil.skil}
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
              dragElastic={1}
              whileHover={{ scale: 1.2, transition: { duration: 0.1 } }}
              variants={cardVariants}
              custom={idx}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{
                type: inView ? "spring" : "",
                duration: inView ? 1 : 0,
              }}
              style={{
                x: 0,
                y: 0,
                background: `url(${skil.src}) center/cover no-repeat`,
              }}
            ></motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MySkils;
