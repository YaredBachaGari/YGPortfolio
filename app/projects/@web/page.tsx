import React from "react";
import AnimatedHeader from "@/app/components/AnimatedHeader/AnimatedHeader";
import { WebIcon } from "@/app/components/Icons/IconComponents/Icons";
import styles from "./project.module.css";
import ProjectCard from "@/app/components/ProjectCard/ProjectCard";
import { Allwebprojects } from "@/public/Alltext";

type Props = {};

const WebPage = (props: Props) => {
  return (
    <div className={styles.projectPageContainer}>
      <h2>
        <span className={styles.projectheader}>
          <span>
            <WebIcon />
          </span>{" "}
          Web Development
        </span>
      </h2>
      <div>
        <ul className={styles.projectcardContainer}>
          {Allwebprojects.map((project) => (
            <ProjectCard key={project.id} carddetail={project} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WebPage;
