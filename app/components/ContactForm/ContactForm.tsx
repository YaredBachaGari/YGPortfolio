import React from "react";
import styles from "./ContactForm.module.css";
import Button from "../Button/Button";

type Props = {};

const ContactForm = (props: Props) => {
  return (
    <form action="">
      <div className={styles.fieldcont}>
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          placeholder="Enter your first name"
        />
      </div>
      <div className={styles.fieldcont}>
        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          placeholder="Enter your last name"
        />
      </div>
      <div className={styles.fieldcont}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Enter your email"
        />
      </div>
      <div className={styles.fieldcont}>
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Enter your phone number"
        />
      </div>
      <div className={styles.fieldcont}>
        <label htmlFor="message"></label>
        <textarea
          id="message"
          name="message"
          placeholder="Write your message"
          rows={5}
        />
      </div>
      <div className={styles.btncontainer}>
        <Button
          type="button"
          variant="primary"
          label="Submit"
          className={styles.btnformat}
        />
      </div>
    </form>
  );
};

export default ContactForm;
