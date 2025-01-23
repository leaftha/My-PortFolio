import { useEffect, useRef, useState } from "react";
import style from "../style/Projects.module.css";
import { motion, useTransform, useScroll, useInView } from "framer-motion";
import { projects } from "../util/project";
import gsap from "gsap";
import Modal from "./modal";
import SplitType from "split-type";

function Projects() {
  const projectBody = useRef<HTMLDivElement | null>(null);
  const isView = useInView(projectBody);
  const [modal, setModal] = useState({ active: false, idx: 0 });
  const { scrollYProgress } = useScroll({ target: projectBody });

  const [currentIndex, setCurrentIndex] = useState(0);

  const index = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [0, 1, 2, 3, 4, 5]
  );

  useEffect(() => {
    const unsubscribe = index.onChange((latest) => {
      setCurrentIndex(Math.round(latest));
    });

    return () => unsubscribe();
  }, [index]);

  useEffect(() => {
    if (isView) {
      let typeSplit = new SplitType(`.${style.title}`, {
        types: "lines,words,chars",
        tagName: "span",
      });

      gsap.from(`.${style.title} span`, {
        y: "110%",
        opacity: 0,
        rotationZ: "10",
        duration: 0.4,
        stagger: 0.1,
        delay: 0.5,
      });
    }
  }, [isView]);
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
                  projects[currentIndex]?.img.length !== 0 &&
                    setModal({ active: true, idx: currentIndex });
                }}
                onHoverEnd={() => {
                  projects[currentIndex]?.img.length !== 0 &&
                    setModal({ active: false, idx: currentIndex });
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
      <Modal modal={modal} />
    </>
  );
}

export default Projects;
