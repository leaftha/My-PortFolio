import { useEffect, useRef, useState } from "react";
import style from "../style/projectsStart.module.css";

function ProjectsStart() {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;
      setWidth(width);
    };
    update();
    window.addEventListener("resize", update);

    return () => window.addEventListener("resize", update);
  }, []);
  return (
    <div className={style.main}>
      <div className={style.imgContianer}>
        <img
          className={style.img}
          style={{ width: width }}
          src={`${process.env.PUBLIC_URL}/image/diet-record.jpg`}
          alt="프로젝트 이미지 1"
        />
        <img
          className={style.img}
          style={{ width: width }}
          src={`${process.env.PUBLIC_URL}/image/reading-history.jpg`}
          alt="프로젝트 이미지 2"
        />
        <img
          className={style.img}
          style={{ width: width }}
          src={`${process.env.PUBLIC_URL}/image/my-travel.jpg`}
          alt="프로젝트 이미지 3"
        />
      </div>
    </div>
  );
}

export default ProjectsStart;
