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
        role: "프론트엔드, 간단한 백엔드",
        tech: "JavaScript, React, Next.js, MongoDB",
        projectDescription:
          "대학교 수업에서 팀프로젝트로 한국의 부족한 도서량을 생각하여 만들었습니다. 자신이 재미있게 읽은 책의 독후감 또는 추천하는 내용을 쓰고, 다른 사람이 그 글을 읽고 자신의 의견을 댓글로 적으면 대댓글로 서로 의견을 나눌 수 있는 웹 사이트입니다.",
        challenge:
          "그저 자신의 독후감을 적으면, 기획에서 찾아봤던 도서독후감 사이트와 다를 봐가 없어, 팀원들과 의논 끝에 서로 책에 대해 토론 또는 자신의 느낌을 나눌수 있는 기능이 있으면 좋겠다는 의견이 채택되어 개발하게 되었습니다.",
        solution:
          "자신의 읽은 책의 독후감을 적는 부분은 비교적 쉽게 개발 되었습니다. 읽은 책의 제목, 저자 등을 적고, 자신의 독후감을 MarkDown을 이용하여 입력, 저장하면 MongoDB를 통해 데이터를 저장하였습니다.하지만 다른 사용자들과 느낌, 의견을 나눌 수있는 토론 기능을 개발하는 데에 난항의 겪었습니다. 처음에는 실시간 웹 소켓을 이용하여 채팅방 형식을 하는 것 또는 나무위키의 토론 기능을 벤치마킹하여 개발 할려 하였느나, Vacel을 을 통해 웹을 배포할 계획 이었기에 찾아 보던중 Vacel에서는 소켓을 이용하는 것을 어렵다는 이야기를 보았고 자료 또한 적었다는 것을 알았습니다. 지금에는 FireBase를 이용하면 실시간 채팅이 가능 하겠으나, 프로젝트를 하는 도중에는 생각하지 못하여 사용자의 독후감에 댓글기능과 대댓글을 쓸수 있는 기능을 구현하여 대신 하였습니다.",
        feedback:
          "항상 독학으로 프로그래밍을 배우는 저에게 처음으로 팀 프로젝트를 한 경험이었습니다. 물론 팀원들이 웹개발에 많이 지식이 있지 못하고 프로젝트를 진행하며 공부하여 후반에 같이 개발하게 되었지만, 다른 사람과 의견을 이야기하고 생각을 주고 받는 경험은 뜻 깊은 경험이었습니다. 협업의 중요성을 배우고, 다양한 의견을 반영해 하나의 결과물을 만들어낸 좋은 경험이었습니다.",
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
          "주위에 생각보다 여행을 자주 가는 사람들이 많아 기획하게 되었습니다. 자신의 여행의 계획을 적어 기록할수 있고 공개기능을 통해 다른 사용자가 보고 자신의 여행을 계획할때 참고 할수 있게 만들었습니다.",
        challenge:
          "여행의 계획을 저장 할려면 시각적으로 보여주는 것이 좋다는 생각을 하였습니다. 또한 사용자가 여행 장소를 입력하는 것도 자동완성으로 검색후 보여주는 것이 좋겠다는 생각을 하였습니다. 또한 여행중 찰영한 사진을 저장 하는 기능을 넣는 것이 공개된 여행 계획을 다른 사용자가 보고 참고할때 도움을 줄수 있다고 생각하여 기획에서 추가 하였습니다.",
        solution:
          "자신이 여행한 장소를 시각적으로 보여주는 것은 Google Maps Api를 이용하기로 하였습니다. 다른 회사의 지도 api에 비해 사용자들에게 익숙하고 디자인에서 깔끔하는 생각이 들어 선택하게 되었습니다. 하지만 Google Maps Api는 지속적인 업데이트가 있어 공식 문서외에는 옛날 자료가 많거나 전 버전 자료가 많았습니다. 공식 문서는 쉽게 설명이 되어있지않아 힘든 도전이었습니다. 또한 Api를 이용하는 부분에서 자신의 React지식이 얉다는 것을 알게 되어 프로젝트 동시에 React를 공식문서를 바탕으로 다시 공부하기 시작 하였습니다.(자동 완성 이야기)이미지를 저장하는 방식은 웹을 Vacel에 배포할 예정이라 따로 서버를 마련하지 않을 예정이라 웹 클라우드에 이미지를 저장하여 보여줄 생각을 하였습니다. 처음에는 AWS를 생각하였으니 무료 이용기간이 지난 점이나 어려운 이용 방식, 모르는 가격 책정 방식 등을 이유로 FireBase를 이용하기로 결정하였습니다. 마침 지도 api를 Google을 쓰고 있어 사용하기에도 편리하였습니다.이미지 첨부하여 저장 하면 FireBase에 저장한 후 해당 이미지의 URL를 게시물의 MongoDB에 저장 하여 웹에서 보여주는 방식을 이용하였습니다.",
        feedback:
          "프로젝트 진행중 배웠던 React가 얼마나 얉은 지식이었는지 알게 되는 프로젝트이었습니다. 또한 두개의 리액트 훅만 알고 있었던 사실에 매우 부끄러웠으며, 공식 문서를 바탕으로 다시 공부를 하니 프로젝트 중에도 다양한 훅을 쓸려고 노력하였습니다. useReduce와 Context를 사용하고자 하였으며, 자신의 부족함을 채울 수 있는 좋은 경험이었습니다.",
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
        role: "알고리즘 공부 및 코딩 테스트 공부",
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
