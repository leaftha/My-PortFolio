import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import style from "../style/Projects.module.css";
import { motion, AnimatePresence } from "framer-motion";

interface project {
  name: string;
  img: string;
  menber: number;
  time: string;
  git: string;
  address: string;
  description: string;
}

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
  const [current, setCurrent] = useState<number>(0);
  const [active, setActive] = useState(false);

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

  const projects: project[] = [
    {
      name: "diet-record",
      img: `${process.env.PUBLIC_URL}/image/diet-record.jpg`,
      menber: 1,
      time: "23/06/24 ~ 23/10/11",
      git: "https://github.com/leaftha/diet-record",
      address: "https://diet-record.vercel.app/",
      description:
        "처음으로 React와 Next.js를 배우면서 만든 프로젝트입니다.\n당시 다이어트 중이었기 때문에, 나의 인바디 정보와 운동 기록을 체계적으로 관리할 수 있는 사이트가 있으면 좋겠다고 생각했습니다.\n기본적으로 자신의 인바디 정보를 입력하여 월 단위 그래프로 비교가 가능하며, 자신의 하루 운동을 기록하고 오운완 도장을 받을 수 있습니다.\n로그인 후 목표 체중을 설정할 수 있는 기능도 추가했습니다.\n이 프로젝트는 전역 후 본격적으로 프로그래밍을 공부하며 처음으로 만든 웹사이트였고, 비록 부족한 점도 있었지만, 나에게 웹사이트를 만들 수 있다는 자신감을 준 소중한 경험이었습니다.",
    },
    {
      name: "reading-history",
      img: "",
      menber: 5,
      time: "23/09/20 ~ 23/12/2",
      git: "https://github.com/leaftha/reading-history",
      address: "",
      description:
        "다이어트 기록 사이트를 만든 후 자신감이 생겨 학교 팀 프로젝트에서도 웹사이트를 만들기로 했습니다. 팀원들과 함께 주제를 정하고 사이트를 기획했습니다.\n팀원들이 웹 프로그래밍에 익숙하지 않아서 전반적인 개발은 제가 담당했지만, 그 과정에서 팀원들이 공부하며 같이 협업해 완성했습니다.\n이 사이트는 사용자가 자신이 읽은 책에 대한 독후감을 작성하고, 다른 사용자들이 그 독후감을 보고 댓글로 의견을 나눌 수 있는 기능을 가지고 있습니다.\n협업의 중요성을 배우고, 다양한 의견을 반영해 하나의 결과물을 만들어낸 좋은 경험이었습니다.",
    },
    {
      name: "my-travel",
      img: `${process.env.PUBLIC_URL}/image/my-travel.jpg`,
      menber: 1,
      time: "24/03/23 ~ 24/07/29",
      git: "https://github.com/leaftha/my-travel",
      address: "https://my-travel-sepia.vercel.app/",
      description:
        "주변 친구들이 생각보다 자주 여행을 간다는 것을 알게 되어, 자신의 여행을 기록하고 다른 사람들도 그 기록을 참고해 여행을 계획할 수 있는 사이트를 만들면 좋겠다고 생각했습니다.\n이 사이트는 사용자가 자신의 여행을 기록하고, 하루 일정도 작성할 수 있으며, Google Maps API를 통해 방문한 장소를 기록할 수 있습니다.\nFireBase를 이용하여 여행 하면서 찍은 사진도 기록할 수 있습니다.\n로그인 후 다른 사람들의 여행 기록을 보고 좋아요를 해서 저장 할 수도 있습니다.\n이 프로젝트를 진행하며 프로그래밍 실력이 크게 향상되었고, React 공식 문서를 참고하면서 기초를 다시 다지는 계기가 되었습니다.",
    },
    {
      name: "Data-Structure-and-Algorithm",
      img: "",
      menber: 1,
      time: "23/03/09 ~ ",
      git: "https://github.com/leaftha/Data-Structure-and-Algorithm",
      address: "",
      description:
        "프로그래머스나 백준에서 푼 알고리즘 문제를 기록한 프로젝트입니다.\n",
    },
    {
      name: "mini-projects",
      img: "",
      menber: 1,
      time: "23/03/08",
      git: "https://github.com/leaftha/mini-projects",
      address: "",
      description:
        "언어를 공부하거나 새로운 라이브러리 API를 공부할때 연습용 프로젝트 모음 입니다.",
    },
  ];

  const handleNext = () => {
    setCurrent((prev) => (prev + 1 <= projects.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 >= 0 ? prev - 1 : projects.length - 1));
  };

  return (
    <>
      <div className={style.main}>
        <h1>My Projects</h1>
        <div className={style.Projects}>
          <svg
            className={style.prevbtn}
            onClick={handlePrev}
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#5f6368"
          >
            <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
          </svg>

          <div className={style.projectsbody}>
            <AnimatePresence>
              <motion.div
                key={current}
                className={style.projectContainer}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                {projects[current].img != "" && (
                  <motion.img
                    className={style.imgs}
                    onHoverStart={() => {
                      setActive(true);
                    }}
                    onHoverEnd={() => {
                      setActive(false);
                    }}
                    onClick={() => {
                      window.open(projects[current].address);
                    }}
                    src={projects[current].img}
                    alt="프로젝트 이미지"
                  />
                )}
                <div className={style.contents}>
                  <h1>{projects[current].name}</h1>
                  <p
                    onClick={() => {
                      window.open(projects[current].git);
                    }}
                  >
                    Git Hub : {projects[current].git}
                  </p>
                  <p>{projects[current].description}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <svg
            className={style.nextbtn}
            onClick={handleNext}
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#5f6368"
          >
            <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
          </svg>
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
