import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { projects } from "../util/project";
import gsap from "gsap";
import style from "../style/modal.module.css";

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

function Modal(props: { modal: { active: boolean; idx: number } }) {
  const container = useRef<HTMLDivElement | null>(null);
  const cursor = useRef<HTMLDivElement | null>(null);
  const cursorLabel = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const moveContainerX = gsap.quickTo(container.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const moveContainerY = gsap.quickTo(container.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
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
      moveContainerX(clientX);
      moveContainerY(clientY);
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
  console.log(projects[props.modal.idx].img);
  return (
    <>
      <motion.div
        ref={container}
        variants={scaleAnimation}
        initial="initial"
        animate={props.modal.active ? "open" : "closed"}
        className={style.modalContainer}
      >
        <div className={style.modalSlider}>
          <img
            src={projects[props.modal.idx].img}
            width={300}
            height={0}
            alt={projects[props.modal.idx].name}
          />
        </div>
      </motion.div>
      <motion.div
        ref={cursor}
        variants={scaleAnimation}
        initial={"initial"}
        animate={props.modal.active ? "open" : "closed"}
        className={style.cursor}
      ></motion.div>
      <motion.div
        ref={cursorLabel}
        variants={scaleAnimation}
        initial={"initial"}
        animate={props.modal.active ? "open" : "closed"}
        className={style.cursorLabel}
      >
        View
      </motion.div>
    </>
  );
}

export default Modal;
