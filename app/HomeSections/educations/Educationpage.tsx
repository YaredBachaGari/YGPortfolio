"use client";
import React, { useState } from "react";
import styles from "./education.module.css";
import {
  PlusCircularBtn,
  CloseBtnCircular,
  Degreeicon,
  Diploma,
  CertIcon,
} from "../../components/Icons/IconComponents/Icons";
import Metrix from "../../components/Metrix/Metrix";
import EducationTimeLine from "../../components/EducationTimeLine/EducationTimeLine";

type Props = {};

const Educations = (props: Props) => {
  const [toggled, setToggled] = useState(false);
  return (
    <div className={styles.educationContainer}>
      <h2 className={styles.educationheader}>EDUCATION</h2>
      <div className={styles.outerInnerEdu}>
        <div className={styles.keyexp}>
          {toggled ? (
            <>
              <CloseBtnCircular
                className={styles.toggleoff}
                onClick={() => setToggled(!toggled)}
              />
              <div className={styles.timeline}>
                <EducationTimeLine />
              </div>
            </>
          ) : (
            <>
              <PlusCircularBtn
                className={styles.toggleOn}
                onClick={() => setToggled(!toggled)}
              />
              <div className={styles.maingroup}>
                <div className={styles.metrixicon}>
                  <Metrix
                    value={2}
                    indicator="Degrees"
                    bg="dark"
                    className={styles.cardcontainer}
                    classOne={styles.metrixnumber}
                    classTwo=""
                    exact={true}
                  />
                  <Degreeicon className={styles.degreeicon} />
                </div>
                <div className={styles.metrixicon}>
                  <Metrix
                    value={2}
                    indicator="Bootcamp"
                    bg="dark"
                    className={styles.cardcontainer}
                    classOne={styles.metrixnumber}
                    classTwo=""
                    exact={true}
                  />
                  <Diploma className={styles.degreeicon} />
                </div>
                <div className={styles.metrixicon}>
                  <Metrix
                    value={25}
                    indicator="Certificates"
                    bg="dark"
                    className={styles.cardcontainer}
                    classOne={styles.metrixnumber}
                    classTwo=""
                  />
                  <CertIcon className={styles.degreeicon} />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Educations;
