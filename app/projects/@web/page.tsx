import React from "react";
import AnimatedHeader from "@/app/components/AnimatedHeader/AnimatedHeader";
import { WebIcon } from "@/app/components/Icons/IconComponents/Icons";
import styles from "./project.module.css";
import ProjectCard from "@/app/components/ProjectCard/ProjectCard";

type Props = {};

const WebPage = (props: Props) => {
  return (
    <div>
      <h2>
        <span className={styles.projectheader}>
          <span>
            <WebIcon />
          </span>{" "}
          Web Development
        </span>
      </h2>
      <div>
        <ul>
          <ProjectCard />
        </ul>
      </div>
    </div>
  );
};

export default WebPage;
