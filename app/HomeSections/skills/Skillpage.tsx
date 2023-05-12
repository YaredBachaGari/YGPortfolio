"use client";
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
} from "../../components/Icons/IconComponents/Icons";
import SkillWrapper from "../../components/SkillWrapper/SkillWrapper";
import { mySkillSet, softSkillSet } from "@/public/Alltext";
import Skill from "@/app/components/SkillSets/Skill";
import Button from "@/app/components/Button/Button";
import { useState } from "react";

type Props = {};

const SkillPage = (props: Props) => {
  const [mode, setMode] = useState(true);
  const handleModeChange = () => {
    setMode(!mode);
  };
  return (
    <div className={styles.skillContainer}>
      <h2 className={styles.skillsHeader}>SKILLS</h2>
      <span className={styles.modechanger} onClick={handleModeChange}>
        <Button label="Change View" variant="primary" type="button" />
      </span>

      <div className={`${styles.mapview} ${mode && styles.nomapview}`}>
        <div className={styles.skillcategorygroup}>
          <p className={styles.skillcategory}>Hard Skills</p>
          <p className={styles.skillcategory}>Soft Skills</p>
        </div>
        <div className={styles.planetcontainer}>
          <div className={styles.firstradial}>
            <div className={styles.proeffiency}></div>
            <SkillWrapper x={"-4vw"} y={"0%"} title="html">
              <HtmlIcon />
              <p className={styles.iconname}>html</p>
            </SkillWrapper>
            <SkillWrapper x={"-1vw"} y={"10vh"} title="css">
              <CssIcon />
              <p className={styles.iconname}>css</p>
            </SkillWrapper>
            <SkillWrapper x={"-1vw"} y={"-12vh"} title="Git">
              <Git />
              <p className={styles.iconname}>Git</p>
            </SkillWrapper>
            <SkillWrapper x={"-12vw"} y={"-14vh"} title="GitHub">
              <Github />
              <p className={styles.iconname}>GitHub</p>
            </SkillWrapper>
            <SkillWrapper x={"-12vw"} y={"13vh"} title="Javascript">
              <Javascript />
              <p className={"styles.iconname"}>Javascript</p>
            </SkillWrapper>
            <SkillWrapper x={"-12vw"} y={"0"} title="React">
              <Reactjs />
              <p className={styles.iconname}>React</p>
            </SkillWrapper>
            <SkillWrapper x={"-22vw"} y={"12vh"} title="Redux">
              <Reduxjs />
              <p className={styles.iconname}>Redux</p>
            </SkillWrapper>
            <SkillWrapper x={"-22vw"} y={"-16vh"} title="Tailwind">
              <Tailwindcss />
              <p className={styles.iconname}>Tailwind</p>
            </SkillWrapper>
            <SkillWrapper x={"-250%"} y={"520%"} title="Nextjs">
              <NextJs />
              <p className={styles.iconname}>Next</p>
            </SkillWrapper>
            <SkillWrapper x={"-250%"} y={"-555%"} title="Typescript">
              <Typescript />
              <p className={styles.iconname}>Typescript</p>
            </SkillWrapper>
            <SkillWrapper x={"-17vw"} y={"25vh"} title="Jest">
              <Jest />
              <p className={styles.iconname}>Jest</p>
            </SkillWrapper>
            <SkillWrapper x={"-30vw"} y={"-15vh"} title="Nodejs">
              <Nodejs />
              <p className={styles.iconname}>Node-js</p>
            </SkillWrapper>
            <SkillWrapper x={"-15vw"} y={"-28vh"} title="Expressjs">
              <Expressjs />
              <p className={styles.iconname}>Expressjs</p>
            </SkillWrapper>
            <SkillWrapper x={"-30vw"} y={"14vh"} title="Sequelize ORM">
              <Sequelize />
              <p className={styles.iconname}>Sequelize</p>
            </SkillWrapper>
            <SkillWrapper x={"-23vw"} y={"-32vh"} title="Sqlite3 DB">
              <Sqlite3 />
              <p className={styles.iconname}>Sqlite3</p>
            </SkillWrapper>
            <SkillWrapper x={"-400%"} y={"790%"} title="Mysql DB">
              <Mysql />
              <p className={styles.iconname}>Mysql</p>
            </SkillWrapper>
            <SkillWrapper x={"-23vw"} y={"29vh"} title="Mongo DB">
              <MongoDb />
              <p className={styles.iconname}>MongoDB</p>
            </SkillWrapper>
            <SkillWrapper x={"-41vw"} y={"0"} title="Postgress DB">
              <Postgress />
              <p className={styles.iconname}>PostgressDB</p>
            </SkillWrapper>
            <SkillWrapper x={"-60%"} y={"-740%"} title="SQL">
              <SQL />
            </SkillWrapper>
            <SkillWrapper x={"-60%"} y={"700%"} title="Docker">
              <Docker />
              <p className={styles.iconname}>Docker</p>
            </SkillWrapper>
            <SkillWrapper x={"-28vw"} y={"-36vh"} title="AWS">
              <Aws />
            </SkillWrapper>
            <SkillWrapper x={"-28vw"} y={"35vh"} title="Azure">
              <Azure />
              <p className={styles.iconname}>Azure</p>
            </SkillWrapper>
            <SkillWrapper x={"-39vw"} y={"25vh"} title="GraphQL">
              <GraphQl />
              <p className={styles.iconname}>GraphQL</p>
            </SkillWrapper>
            <SkillWrapper x={"-10vw"} y={"-36vh"} title="RESTfull Api">
              <span>REST&nbsp;API</span>
            </SkillWrapper>
          </div>
          <div className={styles.secondradial}>
            <SkillWrapper x={"-2vw"} y={"-4vh"} title="Communication">
              <Communication />
              <p className={styles.iconnamesoft}>Communic...</p>
            </SkillWrapper>
            <SkillWrapper x={"-9vw"} y={"-4vh"} title="Problem Solving">
              <ProblemSolving />
              <p className={styles.iconnamesoft}>Solving</p>
            </SkillWrapper>
            <SkillWrapper
              x={"-17vw"}
              y={"-4vh"}
              title="learning & growth mindset"
            >
              <GrowthMindSet />
              <p className={styles.iconnamesoft}>growth mindset</p>
            </SkillWrapper>
            <SkillWrapper x={"-24vw"} y={"-4vh"} title="Teamwork">
              <TeamWork />
              <p className={styles.iconnamesoft}>Teamwork</p>
            </SkillWrapper>
            <SkillWrapper x={"-32vw"} y={"-4vh"} title="Research">
              <Research />
              <p className={styles.iconnamesoft}>Research</p>
            </SkillWrapper>
            <SkillWrapper x={"-39vw"} y={"-4vh"} title="Teaching">
              <Teaching />
              <p className={styles.iconnamesoft}>Teaching</p>
            </SkillWrapper>
          </div>
        </div>
      </div>

      <div
        className={`${styles.disablelistview} ${
          mode && styles.changetolistview
        }`}
      >
        <div className={styles.hardskills}>
          <div>
            <p className={styles.skillCategoryheading}>Front End </p>
            {mySkillSet.map(
              (eachSkill) =>
                eachSkill.type === "frontend" && (
                  <Skill
                    key={eachSkill.id}
                    skill={eachSkill}
                    classIcon={styles.icon}
                    classIconName={styles.iconnamespace}
                  />
                )
            )}
          </div>
          <div>
            <p className={styles.skillCategoryheading}>Back End </p>
            {mySkillSet.map(
              (eachSkill) =>
                eachSkill.type === "backend" && (
                  <Skill
                    key={eachSkill.id}
                    skill={eachSkill}
                    classIcon={styles.icon}
                    classIconName={styles.iconnamespace}
                  />
                )
            )}
          </div>
        </div>
        <div className={styles.softkills}>
          <p className={styles.skillCategoryheading}> Soft Skills </p>
          {softSkillSet.map(
            (eachSkill) =>
              eachSkill.type === "softskill" && (
                <Skill
                  key={eachSkill.id}
                  skill={eachSkill}
                  classIcon={styles.icon}
                  classIconName={styles.iconnamespace}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillPage;
