import React from "react";
import styles from "./cert.module.css";
import Slider from "../components/Certcomponent/Slider";
import TransitionEffect from "../components/TransitionEffect/TransitionEffect";
import type { Metadata } from "next";
import { metaContent } from "@/public/Alltext";

export const metadata: Metadata = {
  title: metaContent.certificates.title || "Certificates",
  description: metaContent.certificates.desc || "Certificates page",
};

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
