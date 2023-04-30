import React from "react";
import Helper from "../Helper/Helper";
import styles from "./skill.module.css";

type Props = {
  skill: {
    id: number;
    type: string;
    icon: iconName ;
    skillname: string;
    proficiencyPerc?: string;
  };
  classIcon?: string;
  classIconName?: string;
};

const Skill = ({ skill, classIcon, classIconName }: Props) => {
  const { id, type, icon, skillname, proficiencyPerc } = skill;
  const LookUp = Helper();
  let level;
  let title;

  switch (proficiencyPerc) {
    case "ninetyfive":
      level = "green-div95";
      title = "95%";
      break;

    case "ninety":
      level = "green-div90";
      title = "90%";
      break;
    case "eightyfive":
      level = "green-div85";
      title = "85%";
      break;
    default:
      level = "green-div100";
      title = "99%";
      break;
  }
//
  return (
    <div className={styles.ItemContainer}>
      <div className={styles.technameIcon}>
        <span className={classIcon}>{LookUp[`${icon}`] || ""}</span>{" "}
        <span className={`${styles.techname} ${classIconName}`}>
          {skillname}
        </span>
      </div>
      <div className={styles[`${level}`]} title={title}></div>
    </div>
  );
};

export default Skill;
