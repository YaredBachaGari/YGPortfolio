import React from "react";
import styles from "./ResearchCard.module.css";
import Image from "next/image";
import tables from "../../../public/images/table.jpeg";
import Link from "next/link";

type Props = {};

const ResearchCard = (props: Props) => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.leftdiv}>
          <p className={styles.papertitle}>
            Quantifying the United Nations’ Watercourse Convention Indicators to
            Inform Equitable Transboundary River Sharing: Application to the
            Nile River Basin
          </p>
          <p>
            Yared Gari 1,*, Paul Block, Getachew Assefa, Muluneh Mekonnen and
            Seifu A. Tilahun
          </p>
          <p>journal of Water</p>
          <p>Published: 8 September 2020</p>
          <Link
            href={"https://www.mdpi.com/2073-4441/12/9/2499"}
            target="_blank"
          >
            Read article
          </Link>
        </div>
        <div className={styles.rightdiv}>
          <Image src={tables} alt="article image" width={300} height={300} />
        </div>
      </div>
    </div>
  );
};

export default ResearchCard;
