import React from "react";
import styles from "./cert.module.css";
import Slider from "../components/Certcomponent/Slider";
import TransitionEffect from "../components/TransitionEffect/TransitionEffect";

const CertificatesPage = () => {
  return (
    <>
      <TransitionEffect />
      <div className={styles.homecontainer}>
        <Slider />
      </div>
    </>
  );
};

export default CertificatesPage;
