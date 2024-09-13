import { useState } from "react";
import style from "../style/Projects.module.css";

function Projects() {
  const [current, setCurrent] = useState<number>(0);

  const projects: object[] = [
    {
      name: "diet-record",
      img: "",
      menber: "1",
      time: "23/06/24 ~ 23/10/11",
      git: "https://github.com/leaftha/diet-record",
      address: "https://diet-record.vercel.app/",
      description:
        "처음으로 React와 Next.js를 배우면서 만든 프로젝트입니다.\n당시 다이어트 중이었기 때문에, 나의 인바디 정보와 운동 기록을 체계적으로 관리할 수 있는 사이트가 있으면 좋겠다고 생각했습니다.\n기본적으로 자신의 인바디 정보를 입력하여 월 단위 그래프로 비교가 가능하며, 자신의 하루 운동을 기록하고 오운완 도장을 받을 수 있습니다.\n로그인 후 목표 체중을 설정할 수 있는 기능도 추가했습니다.\n이 프로젝트는 전역 후 본격적으로 프로그래밍을 공부하며 처음으로 만든 웹사이트였고, 비록 부족한 점도 있었지만, 나에게 웹사이트를 만들 수 있다는 자신감을 준 소중한 경험이었습니다.",
    },
    {
      name: "reading-history",
      img: "",
      menber: "5",
      time: "23/09/20 ~ 23/12/2",
      git: "https://github.com/leaftha/reading-history",
      address: "",
      description:
        "다이어트 기록 사이트를 만든 후 자신감이 생겨 학교 팀 프로젝트에서도 웹사이트를 만들기로 했습니다. 팀원들과 함께 주제를 정하고 사이트를 기획했습니다.\n팀원들이 웹 프로그래밍에 익숙하지 않아서 전반적인 개발은 제가 담당했지만, 그 과정에서 팀원들이 공부하며 같이 협업해 완성했습니다.\n이 사이트는 사용자가 자신이 읽은 책에 대한 독후감을 작성하고, 다른 사용자들이 그 독후감을 보고 댓글로 의견을 나눌 수 있는 기능을 가지고 있습니다.\n협업의 중요성을 배우고, 다양한 의견을 반영해 하나의 결과물을 만들어낸 좋은 경험이었습니다.",
    },
    {
      name: "my-travel",
      img: "",
      menber: "1",
      time: "24/03/23 ~ 24/07/29",
      git: "https://github.com/leaftha/my-travel",
      address: "https://my-travel-sepia.vercel.app/",
      description:
        "주변 친구들이 생각보다 자주 여행을 간다는 것을 알게 되어, 자신의 여행을 기록하고 다른 사람들도 그 기록을 참고해 여행을 계획할 수 있는 사이트를 만들면 좋겠다고 생각했습니다.\n이 사이트는 사용자가 자신의 여행을 기록하고, 하루 일정도 작성할 수 있으며, Google Maps API를 통해 방문한 장소를 기록할 수 있습니다.\nFireBase를 이용하여 여행 하면서 찍은 사진도 기록할 수 있습니다.\n로그인 후 다른 사람들의 여행 기록을 보고 좋아요를 해서 저장 할 수도 있습니다.\n이 프로젝트를 진행하며 프로그래밍 실력이 크게 향상되었고, React 공식 문서를 참고하면서 기초를 다시 다지는 계기가 되었습니다.",
    },
    {
      name: "Data-Structure-and-Algorithm",
      img: "",
      menber: "1",
      time: "23/03/09 ~ ",
      git: "https://github.com/leaftha/Data-Structure-and-Algorithm",
      address: "",
      description:
        "프로그래머스나 백준에서 푼 알고리즘 문제를 기록한 프로젝트입니다.\n",
    },
    {
      name: "mini-projects",
      img: "",
      menber: "1",
      time: "23/03/08",
      git: "https://github.com/leaftha/mini-projects",
      address: "",
      description:
        "언어를 공부하거나 새로운 라이브러리 API를 공부할때 연습용 프로젝트 모음 입니다.",
    },
  ];

  return (
    <div className={style.main}>
      <h1>My Projects</h1>
      <div className={style.Projects}>
        <button>{"<"}</button>
        <div>
          {projects.map((project, idx) => (
            <div></div>
          ))}
        </div>
        <button>{">"}</button>
      </div>
    </div>
  );
}

export default Projects;
