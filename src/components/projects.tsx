import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import style from "../style/Projects.module.css";
import { motion, AnimatePresence, useInView } from "framer-motion";

interface project {
  name: string;
  img: string;
  menber: number;
  time: string;
  git: string;
  address: string;
  description: {
    role: string;
    tech: string;
    projectDescription: string;
    challenge: string;
    solution: string;
    feedback: string;
  };
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
  const projectBody = useRef<HTMLDivElement | null>(null);
  const isVeiw = useInView(projectBody);
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
      description: {
        role: "프론트엔드, 간단한 백엔드 및 디자인",
        tech: "JavaScript, React, Next.js, MongoDB",
        projectDescription:
          "이 프로젝트는 다이어트 관리를 돕기 위해 제작되었습니다. 사용자는 자신의 월별 인바디를 입력하고, 그래프로 비교할 수 있으며, 하루 단위로 운동 기록을 입력해 한 달 동안 얼마나 운동했는지 달력 형태로 확인할 수 있습니다.",
        challenge:
          "초기 기획에서는 사용자의 인바디 데이터를 입력하고 비교하는 기능과, 운동 기록 기능을 구현하는 것이 가장 큰 도전이었습니다.",
        solution:
          "인바디 비교 기능은 차트로 시각화하는 방향으로 진행했으며, 혼자서 차트를 개발하기 어려워 여러 라이브러리를 검토한 후 Chart.js를 사용하여 개발했습니다. MongoDB를 이용해 사용자의 인바디 데이터를 저장하고, 특정 연도와 월 기준으로 차트를 생성하여 데이터를 비교할 수 있도록 구현했습니다. 운동 기록 기능은 달력 라이브러리를 사용해 한 달 달력을 보여주고, 각 날짜를 클릭해 그날의 운동을 입력할 수 있도록 했습니다. 저장 후 해당 날짜에는 '운동 완료' 도장이 찍히는 방식으로 처리했습니다.",
        feedback:
          "React와 Next.js를 처음 배워 이 프로젝트를 만들면서, 여러 부족한 점이 눈에 띄었지만, 처음으로 웹사이트를 제작해 본 경험이 저에게 큰 자신감을 주었습니다. 비록 완벽하진 않았지만, 혼자 힘으로 프로젝트를 완성했다는 점에서 큰 의미가 있었고, 더 성능 좋은 웹사이트를 만들기 위해 많은 노력이 필요함을 깨달았습니다.",
      },
    },

    {
      name: "reading-history",
      img: "",
      menber: 5,
      time: "23/09/20 ~ 23/12/2",
      git: "https://github.com/leaftha/reading-history",
      address: "",
      // description:
      //   "다이어트 기록 사이트를 만든 후 자신감이 생겨 학교 팀 프로젝트에서도 웹사이트를 만들기로 했습니다. 팀원들과 함께 주제를 정하고 사이트를 기획했습니다.\n팀원들이 웹 프로그래밍에 익숙하지 않아서 전반적인 개발은 제가 담당했지만, 그 과정에서 팀원들이 공부하며 같이 협업해 완성했습니다.\n이 사이트는 사용자가 자신이 읽은 책에 대한 독후감을 작성하고, 다른 사용자들이 그 독후감을 보고 댓글로 의견을 나눌 수 있는 기능을 가지고 있습니다.\n협업의 중요성을 배우고, 다양한 의견을 반영해 하나의 결과물을 만들어낸 좋은 경험이었습니다.",
      description: {
        role: "프론트엔드, 간단한 백엔드 및 디자인",
        tech: "JavaScript, React, Next.js, MongoDB",
        projectDescription:
          "이 프로젝트는 다이어트 관리를 돕기 위해 제작되었습니다. 사용자는 자신의 월별 인바디를 입력하고, 그래프로 비교할 수 있으며, 하루 단위로 운동 기록을 입력해 한 달 동안 얼마나 운동했는지 달력 형태로 확인할 수 있습니다.",
        challenge:
          "초기 기획에서는 사용자의 인바디 데이터를 입력하고 비교하는 기능과, 운동 기록 기능을 구현하는 것이 가장 큰 도전이었습니다.",
        solution:
          "인바디 비교 기능은 차트로 시각화하는 방향으로 진행했으며, 혼자서 차트를 개발하기 어려워 여러 라이브러리를 검토한 후 Chart.js를 사용하여 개발했습니다. MongoDB를 이용해 사용자의 인바디 데이터를 저장하고, 특정 연도와 월 기준으로 차트를 생성하여 데이터를 비교할 수 있도록 구현했습니다.",
        feedback:
          "React와 Next.js를 처음 배워 이 프로젝트를 만들면서, 여러 부족한 점이 눈에 띄었지만, 처음으로 웹사이트를 제작해 본 경험이 저에게 큰 자신감을 주었습니다.",
      },
    },
    {
      name: "my-travel",
      img: `${process.env.PUBLIC_URL}/image/my-travel.jpg`,
      menber: 1,
      time: "24/03/23 ~ 24/07/29",
      git: "https://github.com/leaftha/my-travel",
      address: "https://my-travel-sepia.vercel.app/",
      description: {
        role: "프론트엔드, 간단한 백엔드 및 디자인",
        tech: "JavaScript, React, Next.js, MongoDB",
        projectDescription:
          "이 프로젝트는 다이어트 관리를 돕기 위해 제작되었습니다. 사용자는 자신의 월별 인바디를 입력하고, 그래프로 비교할 수 있으며, 하루 단위로 운동 기록을 입력해 한 달 동안 얼마나 운동했는지 달력 형태로 확인할 수 있습니다.",
        challenge:
          "초기 기획에서는 사용자의 인바디 데이터를 입력하고 비교하는 기능과, 운동 기록 기능을 구현하는 것이 가장 큰 도전이었습니다.",
        solution:
          "인바디 비교 기능은 차트로 시각화하는 방향으로 진행했으며, 혼자서 차트를 개발하기 어려워 여러 라이브러리를 검토한 후 Chart.js를 사용하여 개발했습니다. MongoDB를 이용해 사용자의 인바디 데이터를 저장하고, 특정 연도와 월 기준으로 차트를 생성하여 데이터를 비교할 수 있도록 구현했습니다.",
        feedback:
          "React와 Next.js를 처음 배워 이 프로젝트를 만들면서, 여러 부족한 점이 눈에 띄었지만, 처음으로 웹사이트를 제작해 본 경험이 저에게 큰 자신감을 주었습니다.",
      },
      // description:
      //   "주변 친구들이 생각보다 자주 여행을 간다는 것을 알게 되어, 자신의 여행을 기록하고 다른 사람들도 그 기록을 참고해 여행을 계획할 수 있는 사이트를 만들면 좋겠다고 생각했습니다.\n이 사이트는 사용자가 자신의 여행을 기록하고, 하루 일정도 작성할 수 있으며, Google Maps API를 통해 방문한 장소를 기록할 수 있습니다.\nFireBase를 이용하여 여행 하면서 찍은 사진도 기록할 수 있습니다.\n로그인 후 다른 사람들의 여행 기록을 보고 좋아요를 해서 저장 할 수도 있습니다.\n이 프로젝트를 진행하며 프로그래밍 실력이 크게 향상되었고, React 공식 문서를 참고하면서 기초를 다시 다지는 계기가 되었습니다.",
    },
    {
      name: "Data-Structure-and-Algorithm",
      img: "",
      menber: 1,
      time: "23/03/09 ~ ",
      git: "https://github.com/leaftha/Data-Structure-and-Algorithm",
      address: "",
      description: {
        role: "프론트엔드, 간단한 백엔드 및 디자인",
        tech: "JavaScript, React, Next.js, MongoDB",
        projectDescription:
          "이 프로젝트는 다이어트 관리를 돕기 위해 제작되었습니다. 사용자는 자신의 월별 인바디를 입력하고, 그래프로 비교할 수 있으며, 하루 단위로 운동 기록을 입력해 한 달 동안 얼마나 운동했는지 달력 형태로 확인할 수 있습니다.",
        challenge:
          "초기 기획에서는 사용자의 인바디 데이터를 입력하고 비교하는 기능과, 운동 기록 기능을 구현하는 것이 가장 큰 도전이었습니다.",
        solution:
          "인바디 비교 기능은 차트로 시각화하는 방향으로 진행했으며, 혼자서 차트를 개발하기 어려워 여러 라이브러리를 검토한 후 Chart.js를 사용하여 개발했습니다. MongoDB를 이용해 사용자의 인바디 데이터를 저장하고, 특정 연도와 월 기준으로 차트를 생성하여 데이터를 비교할 수 있도록 구현했습니다.",
        feedback:
          "React와 Next.js를 처음 배워 이 프로젝트를 만들면서, 여러 부족한 점이 눈에 띄었지만, 처음으로 웹사이트를 제작해 본 경험이 저에게 큰 자신감을 주었습니다.",
      },
    },
    //   description:
    //     "프로그래머스나 백준에서 자바스크립트로 푼 알고리즘 문제를 기록한 프로젝트입니다.\n백준 프로그래머스 외에도 알고리즘 강의를 들으면 나오는 문제들도 포함되어 있으며, 다시 풀어야 할 문제나 풀때 힌트을 본 문제들은 뒤에 #을 붙여 표시하고 있습니다.\n차근 차근 공부하고 있어 아직 부족하지만 목표로 백준 티어 최소 Platinum을 목표로 노력하고 있습니다.",
    // },
    {
      name: "mini-projects",
      img: "",
      menber: 1,
      time: "23/03/08",
      git: "https://github.com/leaftha/mini-projects",
      address: "",
      description: {
        role: "프론트엔드, 간단한 백엔드 및 디자인",
        tech: "JavaScript, React, Next.js, MongoDB",
        projectDescription:
          "이 프로젝트는 다이어트 관리를 돕기 위해 제작되었습니다. 사용자는 자신의 월별 인바디를 입력하고, 그래프로 비교할 수 있으며, 하루 단위로 운동 기록을 입력해 한 달 동안 얼마나 운동했는지 달력 형태로 확인할 수 있습니다.",
        challenge:
          "초기 기획에서는 사용자의 인바디 데이터를 입력하고 비교하는 기능과, 운동 기록 기능을 구현하는 것이 가장 큰 도전이었습니다.",
        solution:
          "인바디 비교 기능은 차트로 시각화하는 방향으로 진행했으며, 혼자서 차트를 개발하기 어려워 여러 라이브러리를 검토한 후 Chart.js를 사용하여 개발했습니다. MongoDB를 이용해 사용자의 인바디 데이터를 저장하고, 특정 연도와 월 기준으로 차트를 생성하여 데이터를 비교할 수 있도록 구현했습니다.",
        feedback:
          "React와 Next.js를 처음 배워 이 프로젝트를 만들면서, 여러 부족한 점이 눈에 띄었지만, 처음으로 웹사이트를 제작해 본 경험이 저에게 큰 자신감을 주었습니다.",
      },
      // description:
      //   "언어를 공부하거나 새로운 라이브러리, API를 공부할때 연습용 프로젝트 모음 입니다.\nthree.js나 React, 그리고 gsap 같은 새로운 것을 배우고 실습을 할때 작은 토이프로젝트들이 있습니다.\n개인적으로 인터렉티브한 웹을 만드는 것을 좋아하기 때문에 유튜브나 다른 사이트에서 본 것을 클론 코딩을 하여 만들어 본 것들도 있습니다.\n개인적으로 Canvas로 인터렉션들을 만든 프로젝트나 Three.js의 3D애니메이션들이 가장 인상 깊은 프로젝트였습니다.",
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
        <h1 className={style.title}>My Projects</h1>
        <div className={style.Projects} ref={projectBody}>
          <svg
            className={style.prevbtn}
            style={isVeiw ? { position: "fixed" } : { display: "none" }}
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
                <h1 className={style.projectTitle}>{projects[current].name}</h1>
                <p
                  className={style.git}
                  onClick={() => {
                    window.open(projects[current].git);
                  }}
                >
                  {projects[current].git}
                </p>
                {projects[current].img !== "" && (
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
                  <p>
                    <span className={style.projectDescriptionTitle}>역활:</span>
                    {projects[current].description.role}
                  </p>
                  <p>
                    <span className={style.projectDescriptionTitle}>
                      사용 기술:
                    </span>
                    {projects[current].description.tech}
                  </p>
                  <p>
                    <span className={style.projectDescriptionTitle}>
                      프로젝트 설명:
                    </span>
                    {projects[current].description.projectDescription}
                  </p>
                  <p>
                    <span className={style.projectDescriptionTitle}>
                      구체적인 기술적 도전:
                    </span>
                    {projects[current].description.challenge}
                  </p>
                  <p>
                    <span className={style.projectDescriptionTitle}>
                      해결 과정:
                    </span>
                    {projects[current].description.solution}
                  </p>
                  <p>
                    <span className={style.projectDescriptionTitle}>소감:</span>
                    {projects[current].description.feedback}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <svg
            className={style.nextbtn}
            style={isVeiw ? { position: "fixed" } : { display: "none" }}
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
