"use client";
import React, { useState } from "react";
import styles from "./experiance.module.css";
import {
  PlusCircularBtn,
  CloseBtnCircular,
} from "../../components/Icons/IconComponents/Icons";
import Metrix from "../../components/Metrix/Metrix";
import ExperianceTimeLine from "../../components/ExperianceTimeLine/ExpTimeLine";
import AnimatedKPI from "../../components/AnimatedKPI/AnimatedKPI";

type Props = {};

const Experiance = (props: Props) => {
  const [toggled, setToggled] = useState(false);
  return (
    <div className={styles.experianceContainer}>
      <h2 className={styles.experianceheader}>EXPERIANCE</h2>
      <div className={styles.outerInnerExp}>
        <div className={styles.keyexp}>
          {toggled ? (
            <>
              <CloseBtnCircular
                className={styles.toggleoff}
                onClick={() => setToggled(!toggled)}
              />
              <div className={styles.timeline}>
                <ExperianceTimeLine />
              </div>
            </>
          ) : (
            <>
              <PlusCircularBtn
                className={styles.toggleOn}
                onClick={() => setToggled(!toggled)}
              />

              <div className={styles.maingroup}>
                <div className={styles.groupOne}>
                  <Metrix
                    value={3}
                    indicator="Countries"
                    bg="light"
                    className={styles.cardcontainer}
                    classOne={styles.metrixnumber}
                    classTwo=""
                  />
                  <Metrix
                    value={10}
                    indicator="Years of Experiance"
                    bg="light"
                    className={styles.cardcontainer}
                    classOne={styles.metrixnumber}
                    classTwo=""
                  />
                  <Metrix
                    value={15}
                    indicator="Completed projects"
                    bg="light"
                    className={styles.cardcontainer}
                    classOne={styles.metrixnumber}
                    classTwo=""
                  />
                </div>
                <div className={styles.groupTwo}>
                  <Metrix
                    value={3}
                    indicator="Industries"
                    bg="light"
                    className={styles.cardcontainer}
                    classOne={styles.metrixnumber}
                    classTwo=""
                  />
                  <div className={styles.submetrix}>
                    <p>IT</p>
                    <p>Acedamia</p>
                    <p>Construction</p>
                    <p>Other</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experiance;
