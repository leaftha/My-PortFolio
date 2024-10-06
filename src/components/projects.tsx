import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import style from "../style/Projects.module.css";
import { motion, useTransform, useScroll, useInView } from "framer-motion";
import { projects } from "../util/project";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  open: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    closed: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

function Projects() {
  const cursor = useRef<HTMLDivElement | null>(null);
  const cursorLabel = useRef<HTMLDivElement | null>(null);
  const projectBody = useRef<HTMLDivElement | null>(null);
  // const isVeiw = useInView(projectBody);
  const [active, setActive] = useState(false);
  const { scrollYProgress } = useScroll({ target: projectBody });
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-82%"]);

  useEffect(() => {
    const moveCursorX = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    const moveCursorY = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
    const moveCursorLablerX = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    const moveCursorLablerY = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      if (!cursor.current) return;
      const { clientX, clientY } = e;
      // const cursorWidth = cursor.current.offsetWidth / 2;
      // const cursorHeight = cursor.current.offsetHeight / 2;
      moveCursorX(clientX);
      moveCursorY(clientY);
      moveCursorLablerX(clientX);
      moveCursorLablerY(clientY);
    });
  }, []);

  return (
    <>
      <div className={style.main} ref={projectBody}>
        <h1 className={style.title}>My Projects</h1>
        <div className={style.Projects}>
          <motion.div className={style.projectsbody} style={{ x }}>
            {projects.map((project, idx) => (
              <div key={idx} className={style.projectContainer}>
                <div className={style.contents}>
                  <motion.h1
                    className={`${style.projectTitle} ${
                      project.img.length !== 0 && style.under
                    }`}
                    onHoverStart={() => {
                      project.img.length !== 0 && setActive(true);
                    }}
                    onHoverEnd={() => {
                      project.img.length !== 0 && setActive(false);
                    }}
                    onClick={() => {
                      project.img.length !== 0 && window.open(project.address);
                    }}
                  >
                    {project.name}
                  </motion.h1>
                  <p
                    className={style.git}
                    onClick={() => {
                      window.open(project.git);
                    }}
                  >
                    {project.git}
                  </p>
                  <p>
                    <span className={style.projectDescriptionTitle}>기간:</span>
                    {project.time}
                  </p>
                  <p>
                    <span className={style.projectDescriptionTitle}>역활:</span>
                    {project.description.role}
                  </p>
                  <p>
                    <span className={style.projectDescriptionTitle}>
                      사용 기술:
                    </span>
                    {project.description.tech}
                  </p>
                  <p>
                    <span className={style.projectDescriptionTitle}>
                      프로젝트 설명:
                    </span>
                    {project.description.projectDescription}
                  </p>
                  <p>
                    <span className={style.projectDescriptionTitle}>
                      구체적인 기술적 도전:
                    </span>
                    {project.description.challenge}
                  </p>
                  <p>
                    <span className={style.projectDescriptionTitle}>
                      해결 과정:
                    </span>
                    {project.description.solution}
                  </p>
                  <p>
                    <span className={style.projectDescriptionTitle}>소감:</span>
                    {project.description.feedback}
                  </p>
                </div>
              </div>
            ))}
            ;
          </motion.div>
        </div>
      </div>
      <motion.div
        ref={cursor}
        variants={scaleAnimation}
        initial={"initial"}
        animate={active ? "open" : "closed"}
        className={style.cursor}
      ></motion.div>
      <motion.div
        ref={cursorLabel}
        variants={scaleAnimation}
        initial={"initial"}
        animate={active ? "open" : "closed"}
        className={style.cursorLabel}
      >
        View
      </motion.div>
    </>
  );
}

export default Projects;
