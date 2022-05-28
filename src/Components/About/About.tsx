// import photoOfMe from "./../../Assets/me.png";
import {
  AboutBody,
  AboutContainer,
  StyledHeading,
  // Photo,
  TextSection,
} from "./AboutElements";

const About = () => {
  return (
    <>
      <AboutBody id="about">
        <AboutContainer>
          <StyledHeading>Who I Am?</StyledHeading>
          <TextSection>
            I am a Software Developer with an MSc in Big data technologies 
            and a BSc in Computer Science from Glasgow Caledonian University.
            <br />
            <br />
            Currently, I'm working as a DevOps engineer for the world's largest
            fleet management organization, Wex Inc. In my spare time I like to 
            undertake freelance projects specialised on the MERN stack.
            <br />
            <br />I am passionate about solving technical problems, researching
            and developing new software and technologies. I undertake and
            challenge myself to always improve, by being proactive, diligent,
            responsible, and committed to finding the perfect solution to problems
          </TextSection>
        </AboutContainer>
        <AboutContainer>
          {/* <Photo src={photoOfMe} /> */}
        </AboutContainer>
      </AboutBody>
    </>
  );
};

export default About;
