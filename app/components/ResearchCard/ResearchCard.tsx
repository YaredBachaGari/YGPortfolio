"use client";
import React from "react";
import styles from "./ResearchCard.module.css";
import Image from "next/image";
import tables from "../../../public/images/table.jpeg";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
  project: {
    id: number;
    title: string;
    Authors: string;
    journal: string;
    yearpublished: string;
    link: string;
    coverimg?: string;
    status: boolean;
  };
};

const ResearchCard = ({ project }: Props) => {
  const { id, title, Authors, journal, yearpublished, link, coverimg, status } =
    project;
  const imgur = coverimg ? coverimg : tables;
  if (id % 2 === 0) {
    return (
      <motion.div
        className={styles.innerContainerodd}
        whileHover={{ scale: 1.05 }}
      >
        <div className={styles.rightdivodd}>
          <Image
            src={imgur}
            alt="article image"
            width={300}
            height={300}
            priority
          />
        </div>
        <div className={`${styles.leftdivodd} ${styles.commontext}`}>
          <p className={styles.papertitle}> {title}</p>
          <p className={styles.Authors}>{Authors}</p>
          <p>{journal}</p>
          <p>Published in: {yearpublished}</p>
          {status ? (
            <Link href={link} target="_blank">
              {status ? "Read article" : "Under review"}
            </Link>
          ) : (
            <Link href={link} target="_blank" passHref={false}>
              {status ? "Read article" : "Under review"}
            </Link>
          )}
        </div>
      </motion.div>
    );
  }
  return (
    <motion.div className={styles.innerContainer} whileHover={{ scale: 1.05 }}>
      <div className={`${styles.leftdiv} ${styles.commontext}`}>
        <p className={styles.papertitle}> {title}</p>
        <p className={styles.Authors}>{Authors}</p>
        <p>{journal}</p>
        <p>Published in: {yearpublished}</p>
        <Link href={link} target="_blank">
          Read article
        </Link>
      </div>
      <div className={styles.rightdiv}>
        <Image
          src={imgur}
          alt="article image"
          width={300}
          height={300}
          priority
        />
      </div>
    </motion.div>
  );
};

export default ResearchCard;
