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
import { AllLinks, metaContent } from "@/public/Alltext";
import TransitionEffect from "../components/TransitionEffect/TransitionEffect";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: metaContent.contactme.title || "Contact-me",
  description: metaContent.contactme.desc || "contact me page",
};

const contactmePage = () => {
  return (
    <>
      <TransitionEffect />
      <div className={styles.contactmecontainer}>
        <div className={styles.textContainer}>
          <div className={styles.address}>
            <p className={styles.header}>I would love to hear from you</p>
            <div className={styles.rightcontent}>
              <p className={styles.Infotitle}>Contact Info</p>
              <div className={styles.contactlinks}>
                <p className={styles.Info}>
                  <Link href={`mailto:${AllLinks.email1}`} target="_blank">
                    <EmailIcon /> <br />
                    Email
                  </Link>
                </p>
                <p className={styles.Info}>
                  <PhoneIcon />
                  <Link href={`tel:${AllLinks.phone}`}>Phone</Link>
                </p>
                <p className={styles.Info}>
                  <Link href={AllLinks.Linkedin} target="_blank">
                    <LinkedinIcon /> <br />
                    Linkedin
                  </Link>
                </p>
                <p className={styles.Info}>
                  <Link href={AllLinks.github} target="_blank">
                    <Github />
                    <br />
                    Github
                  </Link>
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
    </>
  );
};

export default contactmePage;
