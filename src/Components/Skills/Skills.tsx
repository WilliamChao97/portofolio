import { StyledHeading } from "../About/AboutElements";
import RotatingSphere from "../RotatingSphere/RotatingSphere";
import { SkillsBody, SkillsContainer, Text } from "./SkillsElements";

const Skills = () => {
  return (
    <>
      <SkillsBody id="skills">
        <SkillsContainer>
          <StyledHeading>Skills</StyledHeading>
          <Text>
            My journey began as a young man trying to piece things together in 
            my first RaspberryPI. Since a little boy I was always curious 
            about computers and their capabilities.
            <br />
            <br />
            I have been coding for 4 years and I first started to code simple 
            commands in JavaScript. Since then I have expanded my knowledge, 
            and I can comfortably use Python with science libraries (e.g. sci-pi, numpy...).
            Good knowledge of SQL databases and expert knowledge 
            of NoSQL databases such as MongoDB
            I possess strong knowledge in Data
            Structures, Algorithms, and OOP principles. 
            <br />
            <br />
            I have achieved the highest award in both degrees (BSc, MSc) and have
            in depth knowledge of the MERN stack as well as Big Data technologies.
            Working with WexInc allowed me to learn base skills about DevOps 
            technologies like, Kubernetes, Ansible, Docker, Terraform, Jenkins, etc.
          </Text>
        </SkillsContainer>
        <SkillsContainer justify="center">
          <RotatingSphere />
        </SkillsContainer>
      </SkillsBody>
    </>
  );
};

export default Skills;
