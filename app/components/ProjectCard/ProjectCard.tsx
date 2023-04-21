"use client";
import styles from "./ProjectCard.module.css";
import Image from "next/image";
import dotart from "../../../public/Icons/dorart.jpeg";
import { motion } from "framer-motion";
import {
  Github,
  WebIcon,
  NextJs,
  Typescript,
  Reactjs,
  Reduxjs,
  Tailwindcss,
  Jest,
  Javascript,
  Sequelize,
  Mysql,
  Postgress,
  Aws,
  Azure,
  Sqlite3,
  Nodejs,
  Expressjs,
  HtmlIcon,
  CssIcon,
  Java,
  Csharp,
  Python,
  Docker,
} from "../Icons/IconComponents/Icons";
import chair from "../../../public/Icons/table.jpeg";
import Link from "next/link";

type Props = {
  carddetail: {
    id: number;
    cardImg: string;
    projectTitle: string;
    projectdesc: string;
    techstack: {
      id: number;
      techname:
        | "nextjs"
        | "typscript"
        | "react"
        | "redux"
        | "tailwind"
        | "jest"
        | "javascript"
        | "sequelize"
        | "mysql"
        | "nodejs"
        | "expressjs"
        | "css"
        | "sqlite"
        | "postgres"
        | "aws"
        | "html"
        | "docker"
        | "azure"
        | "csharp"
        | "java"
        | "python";
    }[];
    weblink: string;
    githublink: string;
  };
};

const LookUp = {
  nextjs: <NextJs />,
  typscript: <Typescript />,
  react: <Reactjs />,
  redux: <Reduxjs />,
  tailwind: <Tailwindcss />,
  jest: <Jest />,
  javascript: <Javascript />,
  sequelize: <Sequelize />,
  mysql: <Mysql />,
  postgres: <Postgress />,
  aws: <Aws />,
  azure: <Azure />,
  sqlite: <Sqlite3 />,
  nodejs: <Nodejs />,
  expressjs: <Expressjs />,
  html: <HtmlIcon />,
  css: <CssIcon />,
  csharp: <Csharp />,
  java: <Java />,
  python: <Python />,
  docker: <Docker />,
};

const ProjectCard = ({ carddetail }: Props) => {
  const { cardImg, projectTitle, projectdesc, techstack, weblink, githublink } =
    carddetail;
  return (
    <li className={styles.cardContainer}>
      <Image src={cardImg} alt="tech Icon" width={400} height={250} />
      <div className={styles.textcontainer}>
        <p className={styles.projecttitle}>{projectTitle}</p>
        <p className={styles.projectdesc}>{projectdesc}</p>
        <div className={styles.teckstacks}>
          {techstack?.map((tech) => (
            <span key={tech.id}>{LookUp[`${tech.techname}`]}</span>
          ))}
        </div>
      </div>
      <div className={`${styles.buttoncontainer} ${styles.textcontainer}`}>
        <div className={styles.innerbtn}>
          <span>
            <WebIcon className={styles.smallweb} />
          </span>
          <Link href={weblink} className={styles.cardlinksText} target="_blank">
            Website
          </Link>
        </div>
        <div className={styles.innerbtn}>
          <span>
            <Github className={styles.smallweb} />
          </span>
          <Link
            href={githublink}
            className={styles.cardlinksText}
            target="_blank"
          >
            Github
          </Link>
        </div>
        <Image src={dotart} alt="dot pattern" width={115} height={84} />
      </div>
    </li>
  );
};

export default ProjectCard;
