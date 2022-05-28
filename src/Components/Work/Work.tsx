import Project from "../Project/Project";
import { WorkBody, WorkContainer } from "./WorkElements";
import { StyledHeading } from "../About/AboutElements";

// Import photos
import dataYogiImg from "../../Assets/datayogi.png"
import insightFuturesImg from "../../Assets/insightfutures.jpg"
import wexImg from "../../Assets/wex.png"

const Work = () => {
  const dataYogi: string[] = [
    "Javascript",
    "React",
    "Redux",
    "NodeJS",
    "Express",
    "MongoDB",
    "Azure",
    "Fullstack",
  ];

  const insightFutures: string[] = [
    "Javascript",
    "Python",
    "React",
    "Redux",
    "NodeJS",
    "Express",
    "MongoDB",
    "Azure",
    "PowerBI",
    "Fullstack",
    "Numpy",
    "sci-pi",
  ];

  const wex: string[] = [
    "Ansible",
    "Python",
    "Spark",
    "Terraform",
    "Jenkins",
    "AWS",
    "Postgresql",
    "Kubernetes",
    "Docker",
    "DevOps engineer",
  ];

  return (
    <>
      <WorkBody id="work">
        <WorkContainer style={{ alignSelf: "flex-start" }}>
          <StyledHeading>Some of the things I've worked on</StyledHeading>
        </WorkContainer>
        <div style={{ height: 40 }}></div>
        <Project
          invertedOrientation={true}
          projectName="Wex Inc."
          projectDescription="Currently working as DevOps engineer and developer for Wex Inc Europe. WEX is a global leader in financial technology solutions. We simplify the complexities of payment systems across continents and industries—including Fleet, Corporate Payments, and Benefits."
          image={wexImg}
          video={""}
          stackItems={wex}
        ></Project>
        <Project
          invertedOrientation={false}
          projectName="DataYogi"
          projectDescription="Work in progress... DataYogi is a project that aims to revolutionise the data industry and give users the right to use their data as they see fit."
          image={dataYogiImg}
          video={""}
          stackItems={dataYogi}
        ></Project>
        <Project
          invertedOrientation={true}
          projectName="Insight Futures"
          projectDescription="As part of my master degree, I worked with Insight Futures to help them create a fullstack environment with real users and real time data analysis."
          image={insightFuturesImg}
          video={""}
          stackItems={insightFutures}
        ></Project>
        <br />
        <h1 style={{ color: "white", paddingBottom: "1.2em" }}>
          You can check more of my work here {" "}
          <a
            style={{ color: "white", alignSelf: "center" }}
            href="https://github.com/KaSpiros"
          >
            Github
          </a>
        </h1>
      </WorkBody>
    </>
  );
};

export default Work;
