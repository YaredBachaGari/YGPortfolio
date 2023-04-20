import React from "react";
import AnimatedHeader from "@/app/components/AnimatedHeader/AnimatedHeader";
import { Research } from "@/app/components/Icons/IconComponents/Icons";
import styles from "./research.module.css"

type Props = {};

const Researchpage = (props: Props) => {
  return (
    <div>
      <h2>
        <span className={styles.projectheader}>
          <span>
            <Research />
          </span>{" "}
          Published Reseaches
        </span>
      </h2>
    </div>
  );
};

export default Researchpage;
