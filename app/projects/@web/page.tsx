import React from "react";
import AnimatedHeader from "@/app/components/AnimatedHeader/AnimatedHeader";
import { WebIcon } from "@/app/components/Icons/IconComponents/Icons";
import styles from "./project.module.css";
import ProjectCard from "@/app/components/ProjectCard/ProjectCard";
import { Allwebprojects, metaContent } from "@/public/Alltext";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: metaContent.projects.title || "projects",
  description: metaContent.projects.desc || "projects page",
};

type Props = {};

const WebPage = (props: Props) => {
  return (
    <div className={styles.projectPageContainer}>
      <div className={styles.categoryheader}>
        <span className={styles.projectheader}>
          <span>
            <WebIcon className={styles.webicons} />
          </span>{" "}
          <AnimatedHeader
            text="Web Development"
            className={styles.fontadjust}
          />
        </span>
      </div>
      <ul className={styles.projectcardContainer}>
        {Allwebprojects.map((project) => (
          <ProjectCard key={project.id} carddetail={project} />
        ))}
      </ul>
    </div>
  );
};

export default WebPage;
