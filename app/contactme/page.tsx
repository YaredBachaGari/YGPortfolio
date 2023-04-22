import React from "react";
import styles from "./contactme.module.css";
import ContactForm from "../components/ContactForm/ContactForm";
import {
  EmailIcon,
  LinkedinIcon,
  Github,
  PhoneIcon,
} from "../components/Icons/IconComponents/Icons";
import Link from "next/link";
import { AllLinks } from "@/public/Alltext";

const contactmePage = () => {
  return (
    <div className={styles.contactmecontainer}>
      <div className={styles.textContainer}>
        <div className={styles.address}>
          <p className={styles.header}>I would love to hear from you</p>
          <div className={styles.rightcontent}>
            <p className={styles.Infotitle}>Contact Info</p>
            <div className={styles.contactlinks}>
              <p className={styles.Info}>
                <EmailIcon />
                <Link href={AllLinks.email1}>Email</Link>
              </p>
              <p className={styles.Info}>
                <PhoneIcon />
                <Link href={`tel:${AllLinks.phone}`}>Phone</Link>
              </p>
              <p className={styles.Info}>
                <LinkedinIcon />
                <Link href={AllLinks.Linkedin}>Linkedin</Link>
              </p>
              <p className={styles.Info}>
                <Github />
                <Link href={AllLinks.github}>Github</Link>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.proverb}>
          <p className={styles.quotes}>
            &#8220; Sticks in a bundle are unbreakable &#8221;
          </p>
          <p className={styles.quotesowner}>Ethiopian proverb</p>
        </div>
      </div>
      <div className={styles.formcontainer}>
        <p className={styles.formheader}>CONTACT ME</p>
        <ContactForm />
      </div>
    </div>
  );
};

export default contactmePage;
