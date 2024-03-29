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
    width: typeof window !== "undefined" ? window.innerWidth : 1500,
  });

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setScreenSize({
          width: window.innerWidth,
        });
      }
    };
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);
  return (
    <motion.li className={styles.cardContainer} whileHover={{ scale: 1.05 }}>
      <Image
        src={cardImg}
        alt="tech Icon"
        width={screenSize.width > 420 ? 400 : 330}
        height={250}
        priority
        className={styles.projectcardcover}
      />
      <div className={styles.textcontainer}>
        <p className={styles.projecttitle}>{projectTitle}</p>
        <p className={styles.projectdesc}>{projectdesc}</p>
        <div className={styles.teckstacks}>
          {techstack?.map((tech) => (
            <div key={tech.id} className={styles.iconcontainer}>
              <span>{LookUp[`${tech.techname}`]}</span>
              <span className={styles.icontitle}>{tech.techname}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={`${styles.buttoncontainer} ${styles.textcontainer}`}>
        <div className={`${styles.innerbtn} ${styles.dontshow}`}>
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
    </motion.li>
  );
};

export default ProjectCard;
