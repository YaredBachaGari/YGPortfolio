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
                  <motion.span
                    className={styles.iconText}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Link href={`mailto:${AllLinks.email1}`} target="_blank">
                      <span className={styles.linkcontent}>
                        <EmailIcon className={styles.iconcomponent} />
                        <span>{AllLinks.email1}</span>
                      </span>
                    </Link>
                  </motion.span>
                </li>
                <li className={styles.infocontainer}>
                  <motion.span
                    className={styles.iconText}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Link href={`tel:${AllLinks.phone}`} target="_blank">
                      <span className={styles.linkcontent}>
                        <PhoneIcon className={styles.iconcomponent} />
                        <span> {AllLinks.phone}</span>
                      </span>
                    </Link>
                  </motion.span>
                </li>
                <li className={styles.infocontainer}>
                  <motion.span
                    className={styles.iconText}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Link
                      href={
                        "https://www.google.com/maps/place/Seattle,+WA/@47.6130284,-122.3420645,11z/data=!3m1!4b1!4m6!3m5!1s0x5490102c93e83355:0x102565466944d59a!8m2!3d47.6062095!4d-122.3320708!16zL20vMGQ5anI"
                      }
                      target="_blank"
                    >
                      <span className={styles.linkcontent}>
                        <LocationIcon className={styles.iconcomponent} />
                        <span> {AllLinks.location}</span>
                      </span>
                    </Link>
                  </motion.span>
                </li>
                <li className={styles.infocontainer}>
                  <motion.span
                    className={styles.iconText}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Link href={AllLinks.Linkedin} target="_blank">
                      <span className={styles.linkcontent}>
                        <LinkedinIcon className={styles.iconcomponent} />
                        <span>Linkedin</span>
                      </span>
                    </Link>
                  </motion.span>
                </li>
                <li className={styles.infocontainer}>
                  <motion.span
                    className={styles.iconText}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Link href={AllLinks.github} target="_blank">
                      <span className={styles.linkcontent}>
                        <Github className={styles.iconcomponent} />
                        <span>GitHub</span>
                      </span>
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
                  <motion.span
                    className={styles.iconText}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Link href={AllLinks.twitter} target="_blank">
                      <span className={styles.linkcontent}>
                        <TwitterIcon className={styles.iconcomponent} />
                        <span>Twitter</span>
                      </span>
                    </Link>
                  </motion.span>
                </li>
                <li className={styles.infocontainer}>
                  <motion.span
                    className={styles.iconText}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Link href={AllLinks.instagram} target="_blank">
                      <span className={styles.linkcontent}>
                        <InstagramIcon className={styles.iconcomponent} />
                        <span>Instagram</span>
                      </span>
                    </Link>
                  </motion.span>
                </li>
                <li className={styles.infocontainer}>
                  <motion.span
                    className={styles.iconText}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Link href={AllLinks.facebook} target="_blank">
                      <span className={styles.linkcontent}>
                        <FacebookIcon className={styles.iconcomponent} />
                        <span>Facebook</span>
                      </span>
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
