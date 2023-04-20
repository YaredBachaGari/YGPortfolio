import React from "react";
import styles from "./home.module.css";
import AnimatedHeader from "../components/AnimatedHeader/AnimatedHeader";

const ProjectsPage = () => {
  return (
    <div className={styles.homecontainer}>
      <AnimatedHeader text="Projects" />
    </div>
  );
};

export default ProjectsPage;
