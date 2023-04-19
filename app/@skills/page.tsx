import styles from "./skills.module.css";
import {
  HtmlIcon,
  CssIcon,
  Git,
  Github,
  Tailwindcss,
  Javascript,
  Jest,
  Typescript,
  Reactjs,
  Reduxjs,
  NextJs,
  Nodejs,
  Expressjs,
  SQL,
  Sequelize,
  Sqlite3,
  MongoDb,
  Mysql,
  Postgress,
  Docker,
  Aws,
  Azure,
  GraphQl,
  Communication,
  GrowthMindSet,
  ProblemSolving,
  Teaching,
  TeamWork,
  Research,
} from "../components/Icons/IconComponents/Icons";
import SkillWrapper from "../components/SkillWrapper/SkillWrapper";

type Props = {};

const page = (props: Props) => {
  return (
    <div className={styles.skillContainer}>
      <h2 className={styles.skillsHeader}>SKILLS</h2>
      <div className={styles.planetcontainer}>
        <div className={styles.firstradial}>
          <SkillWrapper x={"-4vw"} y={"0%"} title="html">
            <HtmlIcon />
          </SkillWrapper>
          <SkillWrapper x={"-1vw"} y={"10vh"} title="css">
            <CssIcon />
          </SkillWrapper>
          <SkillWrapper x={"-1vw"} y={"-12vh"} title="Git">
            <Git />
          </SkillWrapper>
          <SkillWrapper x={"-12vw"} y={"-14vh"} title="GitHub">
            <Github />
          </SkillWrapper>
          <SkillWrapper x={"-12vw"} y={"13vh"} title="Javscript">
            <Javascript />
          </SkillWrapper>
          <SkillWrapper x={"-12vw"} y={"0"} title="React">
            <Reactjs />
          </SkillWrapper>
          <SkillWrapper x={"-22vw"} y={"12vh"} title="Redux">
            <Reduxjs />
          </SkillWrapper>
          <SkillWrapper x={"-22vw"} y={"-16vh"} title="Tailwind">
            <Tailwindcss />
          </SkillWrapper>
          <SkillWrapper x={"-250%"} y={"520%"} title="Nextjs">
            <NextJs />
          </SkillWrapper>
          <SkillWrapper x={"-250%"} y={"-555%"} title="Typescript">
            <Typescript />
          </SkillWrapper>
          <SkillWrapper x={"-17vw"} y={"25vh"} title="Jest">
            <Jest />
          </SkillWrapper>
          <SkillWrapper x={"-30vw"} y={"-15vh"} title="Nodejs">
            <Nodejs />
          </SkillWrapper>
          <SkillWrapper x={"-15vw"} y={"-28vh"} title="Expressjs">
            <Expressjs />
          </SkillWrapper>
          <SkillWrapper x={"-30vw"} y={"14vh"} title="Sequelize ORM">
            <Sequelize />
          </SkillWrapper>
          <SkillWrapper x={"-23vw"} y={"-29vh"} title="Sqlite3 DB">
            <Sqlite3 />
          </SkillWrapper>
          <SkillWrapper x={"-400%"} y={"790%"} title="Mysql DB">
            <Mysql />
          </SkillWrapper>
          <SkillWrapper x={"-25vw"} y={"27vh"} title="Mongo DB">
            <MongoDb />
          </SkillWrapper>
          <SkillWrapper x={"-41vw"} y={"0"} title="Postgress DB">
            <Postgress />
          </SkillWrapper>
          <SkillWrapper x={"-60%"} y={"-740%"} title="SQL">
            <SQL />
          </SkillWrapper>
          <SkillWrapper x={"-60%"} y={"700%"} title="Docker">
            <Docker />
          </SkillWrapper>
          <SkillWrapper x={"-28vw"} y={"-36vh"} title="AWS">
            <Aws />
          </SkillWrapper>
          <SkillWrapper x={"-28vw"} y={"33vh"} title="Azure">
            <Azure />
          </SkillWrapper>
          <SkillWrapper x={"-39vw"} y={"23vh"} title="GraphQL">
            <GraphQl />
          </SkillWrapper>
          <SkillWrapper x={"-10vw"} y={"-36vh"} title="RESTfull Api">
            <span>REST&nbsp;API</span>
          </SkillWrapper>
        </div>
        <div className={styles.secondradial}>
          <SkillWrapper x={"-2vw"} y={"-4vh"} title="Communication">
            <Communication />
          </SkillWrapper>
          <SkillWrapper x={"-9vw"} y={"-4vh"} title="Problem Solving">
            <ProblemSolving />
          </SkillWrapper>
          <SkillWrapper
            x={"-17vw"}
            y={"-4vh"}
            title="learning & growth mindset"
          >
            <GrowthMindSet />
          </SkillWrapper>
          <SkillWrapper x={"-24vw"} y={"-4vh"} title="Teamwork">
            <TeamWork />
          </SkillWrapper>
          <SkillWrapper x={"-32vw"} y={"-4vh"} title="Research">
            <Research />
          </SkillWrapper>
          <SkillWrapper x={"-39vw"} y={"-4vh"} title="Teaching">
            <Teaching />
          </SkillWrapper>
        </div>
      </div>
    </div>
  );
};

export default page;
