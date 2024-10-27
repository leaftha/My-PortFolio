import { useEffect, useRef, useState } from "react";
import style from "../style/projectsStart.module.css";
import { useAnimation, motion, useInView } from "framer-motion";

function ProjectsStart() {
  const [width, setWidth] = useState<number>(0);
  const imgContainerRef = useRef<HTMLDivElement | null>(null);
  const [isTop, setIsTop] = useState(false);
  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;
      setWidth(width);
    };
    update();
    window.addEventListener("resize", update);

    return () => window.addEventListener("resize", update);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (imgContainerRef.current) {
        const node = imgContainerRef.current.getBoundingClientRect();

        if (node.top <= 0) {
          setIsTop(true);
        } else {
          setIsTop(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.addEventListener("scroll", handleScroll);
  }, []);
  console.log(isTop);
  return (
    <div className={style.main}>
      {/* <h1 className={style.title}>My Projects</h1> */}
      <div className={style.imgContianer} ref={imgContainerRef}>
        <motion.img
          initial={{ scale: 1 }}
          animate={
            isTop
              ? { scale: 0.8, borderRadius: 60 }
              : { scale: 1, borderRadius: 0 }
          }
          transition={{ duration: 0.2 }}
          className={style.img}
          style={{ width: width }}
          src={`${process.env.PUBLIC_URL}/image/diet-record.jpg`}
          alt="프로젝트 이미지 1"
        />
        <motion.img
          className={style.img}
          initial={{ scale: 1 }}
          animate={isTop ? { scale: 0.8 } : { scale: 1 }}
          style={{ width: width }}
          src={`${process.env.PUBLIC_URL}/image/reading-history.jpg`}
          alt="프로젝트 이미지 2"
        />
        <motion.img
          className={style.img}
          initial={{ scale: 1 }}
          animate={isTop ? { scale: 0.8 } : { scale: 1 }}
          style={{ width: width }}
          src={`${process.env.PUBLIC_URL}/image/my-travel.jpg`}
          alt="프로젝트 이미지 3"
        />
      </div>
    </div>
  );
}

export default ProjectsStart;
