"use client";
import React, { useRef } from "react";
import styles from "./SingleEduction.module.css";
import ScrollSpin from "../ScrollSpin/ScrollSpin";

type Props = {
  details: {
    id: number;
    period: {
      from: string;
      to: string;
    };
    institution: string;
    city: string;
    country: string;
    level: string;
    field: string;
  };
  ref: React.RefObject<HTMLLIElement >;
};

const SingleEducation = ({ details, ref }: Props) => {
  // const ref = useRef(null);
  const { id, period, institution, city, country, level, field } = details;
  const isUniversity =
    level === "Bachelor" || level === "Master" ? true : false;
  return (
    <li className={styles.singleEducation} ref={ref}>
      <ScrollSpin
        referance={ref}
        class1={styles.class1}
        class2={styles.class2}
        class3={styles.class3}
        class4={styles.class4}
      />
      <div className={styles.eduheader}>
        {isUniversity ? (
          <p className={styles.studylevel}>
            {`${level} in `} <span className={styles.studyfield}>{field}</span>
          </p>
        ) : (
          <p className={styles.studylevel}>
            {`${level} `} <span className={styles.studyfield}>{field}</span>
          </p>
        )}
      </div>
      <div className={styles.studyplace}>
        <p>{institution}</p>
        <p>
          {city},{country}
        </p>
      </div>
      <div>
        {isUniversity ? (
          <p className={styles.graduated}>
            {period.from} - {period.to}
          </p>
        ) : (
          <p className={styles.graduated}>{period.from}</p>
        )}
      </div>
    </li>
  );
};

export default SingleEducation;
