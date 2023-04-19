import React from "react";
import Image from "next/image";
import developer from "../../public/images/Yaredphoto.jpg";
import styles from "./about.module.css";
import { bioContent } from "../../public/Alltext";
import {
  DownloadIcon,
  SkillSpinner,
} from "../components/Icons/IconComponents/Icons";
import floor from "../../public/images/floor3.jpeg";
import Link from "next/link";

const Aboutpage = () => {
  return (
    <div className={styles.aboutpageContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.imgSection}>
          <div className={styles.inner}>
            <SkillSpinner className={styles.spinnerclass} />
            <div className={styles.imgsectionbtn}>
              <Link href={"mailto:yaredbacha@gmail.com"} className={styles.email}>Email Me</Link>
            </div>
          </div>
        </div>
        <div className={styles.bioSection}>
          <div className={styles.biotext}>
            <h2 className={styles.aboutheader}>ABOUT ME</h2>
            <div className={styles.bio}>
              <p>{bioContent.p1}</p>
              <p>{bioContent.p2}</p>
            </div>
            <div className={styles.resumelink}>
              <span>
                <DownloadIcon className={styles.downloadicon} />
              </span>

              <Link href="/ResumeYared.pdf" target={"_blank"} download={true}>
                Download resume
              </Link>
            </div>
          </div>
          {/* <div>
            <Image
              src={floor}
              alt="floor"
              width={1200}
              height={130}
              className={styles.floor}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
