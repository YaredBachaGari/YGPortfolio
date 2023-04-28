"use client";
import { useState, useEffect } from "react";
import styles from "./ProjectCard.module.css";
import Image from "next/image";
import dotart from "../../../public/Icons/dorart.jpeg";
import { motion } from "framer-motion";
import { Github, WebIcon } from "../Icons/IconComponents/Icons";
import Link from "next/link";
import Helper from "../Helper/Helper";

type Props = {
  carddetail: {
    id: number;
    cardImg: string;
    projectTitle: string;
    projectdesc: string;
    techstack: techname;
    weblink: string;
    githublink: string;
  };
};

const ProjectCard = ({ carddetail }: Props) => {
  const { cardImg, projectTitle, projectdesc, techstack, weblink, githublink } =
    carddetail;

  const LookUp = Helper();

  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <li className={styles.cardContainer}>
      <Image
        src={cardImg}
        alt="tech Icon"
        width={screenSize.width > 420 ? 400 : 370}
        height={250}
        priority
      />
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
        <Image
          src={dotart}
          alt="dot pattern"
          width={screenSize.width > 420 ? 115 : 90}
          height={screenSize.width > 420 ? 84 : 60}
          priority
        />
      </div>
    </li>
  );
};

export default ProjectCard;