"use client";
import React from "react";
import Link from "next/link";
import styles from "./CustomLink.module.css";

type Props = {
  href: string;
  title: string;
  className?: string;
};

const CustomLink = ({ href, title, className = "" }: Props) => {
  return (
    <Link href={href} className={`${styles.customlist} ${className}`}>
      {title}
      <span className={styles.listUnderline}>&nbsp;</span>
    </Link>
  );
};

export default CustomLink;
