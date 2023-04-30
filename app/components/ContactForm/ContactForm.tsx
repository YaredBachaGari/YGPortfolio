"use client";
import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import sendEmail from "@/lib/backendapi";

type Props = {};

const ContactForm = (props: Props) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (!formData.email || formData.message) {
        setErrorMsg("Either email or message is missing!!!");
      }

      const resp = await sendEmail(formData);
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form action="" onSubmit={onSubmitHandler}>
      <div className={styles.fieldcont}>
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          value={formData.firstname}
          placeholder="Enter your first name"
          onChange={onChangeHandler}
        />
      </div>
      <div className={styles.fieldcont}>
        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          value={formData.lastname}
          placeholder="Enter your last name"
          onChange={onChangeHandler}
        />
      </div>
      <div className={styles.fieldcont}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          placeholder="Enter your email"
          onChange={onChangeHandler}
        />
      </div>
      <div className={styles.fieldcont}>
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          placeholder="111-111-1111"
          onChange={onChangeHandler}
        />
      </div>
      <div className={styles.fieldcont}>
        <label htmlFor="message"></label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          placeholder="Write your message"
          rows={5}
          onChange={onChangeHandler}
        />
      </div>
      <div className={styles.btncontainer}>
        <Button
          type="button"
          btntype="submit"
          variant="primary"
          label="Submit"
          className={styles.btnformat}
        />
      </div>
    </form>
  );
};

export default ContactForm;
