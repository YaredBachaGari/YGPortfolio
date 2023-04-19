import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import foot1 from "../../../public/images/worldimg.avif";
import { AllLinks } from "../../../public/Alltext";
import {
  EmailIcon,
  PhoneIcon,
  LocationIcon,
  LinkedinIcon,
  Github,
} from "../../components/Icons/IconComponents/Icons";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.footerTextContainer}>
          <div className={styles.content}>
            <div>
              <p className={styles.contactme}>CONTACT</p>
              <ul className={styles.contactmeleft}>
                <li className={styles.infocontainer}>
                  <EmailIcon className={styles.iconcomponent} />
                  <span className={styles.iconText}>
                    <Link href={`mailto:${AllLinks.email1}`} target="_blank">
                      Email
                    </Link>
                  </span>
                </li>
                <li className={styles.infocontainer}>
                  <PhoneIcon className={styles.iconcomponent} />
                  <span className={styles.iconText}>{AllLinks.phone}</span>
                </li>
                <li className={styles.infocontainer}>
                  <LocationIcon className={styles.iconcomponent} />
                  <span className={styles.iconText}>{AllLinks.location}</span>
                </li>
                <li className={styles.infocontainer}>
                  <LinkedinIcon className={styles.iconcomponent} />
                  <span className={styles.iconText}>
                    <Link href={AllLinks.Linkedin} target="_blank">
                      Linkedin
                    </Link>
                  </span>
                </li>
                <li className={styles.infocontainer}>
                  <Github className={styles.iconcomponent} />
                  <span className={styles.iconText}>
                    <Link href={AllLinks.github} target="_blank">
                      GitHub
                    </Link>
                  </span>
                </li>
              </ul>
            </div>
            <div className={styles.divider}></div>

            <div className={styles.contactme}>
              <div className={styles.social}>
                <p>SOCIAL MEDIA</p>
                <ul>
                  <li className={styles.infocontainer}>twitter</li>
                  <li className={styles.infocontainer}>Instagram</li>
                  <li className={styles.infocontainer}>faceebook</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.copyright}>
            &copy;2023 Designed and Implemented by Yared Gari
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
