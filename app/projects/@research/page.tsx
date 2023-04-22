import React from "react";
import AnimatedHeader from "@/app/components/AnimatedHeader/AnimatedHeader";
import { Research } from "@/app/components/Icons/IconComponents/Icons";
import styles from "./research.module.css";
import ResearchCard from "@/app/components/ResearchCard/ResearchCard";
import { ResearchProjects } from "@/public/Alltext";

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
            text="Published Reseaches"
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
