import React from "react";
import AnimatedHeader from "@/app/components/AnimatedHeader/AnimatedHeader";
import { Research } from "@/app/components/Icons/IconComponents/Icons";
import styles from "./research.module.css"
import ResearchCard from "@/app/components/ResearchCard/ResearchCard";

type Props = {};

const Researchpage = (props: Props) => {
  return (
    <div className={styles.researchPageContainer}>
      <h2>
        <span className={styles.researchheader}>
          <span>
            <Research  className={styles.headerIcon}/>
          </span>{" "}
          Published Reseaches
        </span>
      </h2>
      <ResearchCard/>
    </div>
  );
};

export default Researchpage;
