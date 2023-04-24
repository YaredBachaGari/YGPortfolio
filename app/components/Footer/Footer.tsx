"use client";
import styles from "./Footer.module.css";
import foot1 from "../../../public/images/worldimg.avif";
import { AllLinks } from "../../../public/Alltext";
import { motion } from "framer-motion";
import {
  EmailIcon,
  PhoneIcon,
  LocationIcon,
  LinkedinIcon,
  Github,
  TwitterIcon,
  InstagramIcon,
  FacebookIcon,
} from "../../components/Icons/IconComponents/Icons";
import Link from "next/link";

const YearPicker = () => {
  let displayYear: number | string;
  const thisYear = new Date().getFullYear();
  if (thisYear > 2023) {
    displayYear = `2023 - ${thisYear}`;
    return displayYear;
  } else {
    displayYear = thisYear;
  }
  return displayYear;
};

const Footer = () => {
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
                  <motion.span
                    className={styles.iconText}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Link href={`mailto:${AllLinks.email1}`} target="_blank">
                      {AllLinks.email1}
                    </Link>
                  </motion.span>
                </li>
                <li className={styles.infocontainer}>
                  <PhoneIcon className={styles.iconcomponent} />
                  <motion.span
                    className={styles.iconText}
                    whileHover={{ scale: 1.1 }}
                  >
                    {AllLinks.phone}
                  </motion.span>
                </li>
                <li className={styles.infocontainer}>
                  <LocationIcon className={styles.iconcomponent} />
                  <motion.span
                    className={styles.iconText}
                    whileHover={{ scale: 1.1 }}
                  >
                    {AllLinks.location}
                  </motion.span>
                </li>
                <li className={styles.infocontainer}>
                  <LinkedinIcon className={styles.iconcomponent} />
                  <motion.span
                    className={styles.iconText}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Link href={AllLinks.Linkedin} target="_blank">
                      Linkedin
                    </Link>
                  </motion.span>
                </li>
                <li className={styles.infocontainer}>
                  <Github className={styles.iconcomponent} />
                  <motion.span
                    className={styles.iconText}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Link href={AllLinks.github} target="_blank">
                      GitHub
                    </Link>
                  </motion.span>
                </li>
              </ul>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.social}>
              <p className={styles.contactme}>SOCIAL MEDIA</p>
              <ul className={styles.contactmeright}>
                <li className={styles.infocontainer}>
                  <TwitterIcon />
                  <motion.span
                    className={styles.iconText}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Link href={AllLinks.twitter} target="_blank">
                      Twitter
                    </Link>
                  </motion.span>
                </li>
                <li className={styles.infocontainer}>
                  <InstagramIcon />
                  <motion.span
                    className={styles.iconText}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Link href={AllLinks.instagram} target="_blank">
                      Instagram
                    </Link>
                  </motion.span>
                </li>
                <li className={styles.infocontainer}>
                  <FacebookIcon />
                  <motion.span
                    className={styles.iconText}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Link href={AllLinks.facebook} target="_blank">
                      Facebook
                    </Link>
                  </motion.span>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.copyright}>
            Designed and Implemented by Yared Gari | {YearPicker()} &copy; All
            Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
