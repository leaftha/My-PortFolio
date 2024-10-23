import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import style from "../style/Projects.module.css";
import { motion, useTransform, useScroll } from "framer-motion";
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
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

function Projects() {
  const cursor = useRef<HTMLDivElement | null>(null);
  const cursorLabel = useRef<HTMLDivElement | null>(null);
  const projectBody = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);
  const { scrollYProgress } = useScroll({ target: projectBody });

  const [currentIndex, setCurrentIndex] = useState(0);

  const index = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 0.8, 1],
    [0, 1, 2, 3, 4]
  );

  useEffect(() => {
    const unsubscribe = index.onChange((latest) => {
      setCurrentIndex(Math.round(latest));
    });

    return () => unsubscribe();
  }, [index]);

  useEffect(() => {
    const moveCursorX = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    const moveCursorY = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
    const moveCursorLabelX = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    const moveCursorLabelY = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });

    const handleMouseMove = (e: MouseEvent) => {
      if (!cursor.current || !cursorLabel.current) return;
      const { clientX, clientY } = e;
      moveCursorX(clientX);
      moveCursorY(clientY);
      moveCursorLabelX(clientX);
      moveCursorLabelY(clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className={style.main} ref={projectBody}>
        <h1 className={style.title}>My Projects</h1>
        <div className={style.Projects}>
          <div className={style.projectsbody}>
            <motion.div key={currentIndex} className={style.contents}>
              <motion.h1
                className={`${style.projectTitle} ${
                  projects[currentIndex]?.img.length !== 0 && style.under
                }`}
                onHoverStart={() => {
                  projects[currentIndex]?.img.length !== 0 && setActive(true);
                }}
                onHoverEnd={() => {
                  projects[currentIndex]?.img.length !== 0 && setActive(false);
                }}
                onClick={() => {
                  projects[currentIndex]?.img.length !== 0 &&
                    window.open(projects[currentIndex].address);
                }}
              >
                {projects[currentIndex]?.name}
              </motion.h1>

              <div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                  className={style.git}
                  onClick={() => window.open(projects[currentIndex]?.git)}
                >
                  {projects[currentIndex]?.git}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, delay: 0.5 }}
                >
                  <span className={style.projectDescriptionTitle}>기간:</span>
                  {projects[currentIndex]?.time}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, delay: 0.7 }}
                >
                  <span className={style.projectDescriptionTitle}>역할:</span>
                  {projects[currentIndex]?.description.role}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, delay: 0.9 }}
                >
                  <span className={style.projectDescriptionTitle}>
                    사용 기술:
                  </span>
                  {projects[currentIndex]?.description.tech}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, delay: 1.1 }}
                >
                  <span className={style.projectDescriptionTitle}>
                    프로젝트 설명:
                  </span>
                  {projects[currentIndex]?.description.projectDescription}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, delay: 1.3 }}
                >
                  <span className={style.projectDescriptionTitle}>
                    구체적인 기술적 도전:
                  </span>
                  {projects[currentIndex]?.description.challenge}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, delay: 1.5 }}
                >
                  <span className={style.projectDescriptionTitle}>
                    해결 과정:
                  </span>
                  {projects[currentIndex]?.description.solution}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, delay: 1.7 }}
                >
                  <span className={style.projectDescriptionTitle}>소감:</span>
                  {projects[currentIndex]?.description.feedback}
                </motion.p>
              </div>
            </motion.div>
          </div>
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
