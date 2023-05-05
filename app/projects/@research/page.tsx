import React from "react";
import AnimatedHeader from "@/app/components/AnimatedHeader/AnimatedHeader";
import { Research } from "@/app/components/Icons/IconComponents/Icons";
import styles from "./research.module.css";
import ResearchCard from "@/app/components/ResearchCard/ResearchCard";
import { ResearchProjects, metaContent } from "@/public/Alltext";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: metaContent.projects.title || "projects",
  description: metaContent.projects.desc || "projects page",
};

type Props = {};

const Researchpage = (props: Props) => {
  return (
    <div className={styles.researchPageContainer}>
      <div className={styles.categoryheader}>
        <span className={styles.researchheader}>
          <span>
            <Research className={styles.headerIcon} />
          </span>{" "}
          <AnimatedHeader
            text="Published Researches"
            className={styles.fontadjust}
          />
        </span>
      </div>
      <div className={styles.cardcontainer}>
        {
          ResearchProjects.map(proj=>(<ResearchCard key={proj.id} project = {proj}/>))
        }    
      </div>
    </div>
  );
};

export default Researchpage;
