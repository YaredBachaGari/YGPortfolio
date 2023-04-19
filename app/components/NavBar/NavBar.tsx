"use client";

import React from "react";
import styles from "./NavBar.module.css";
import { navContent } from "../../../public/Alltext";
import Link from "next/link";
import { Monoton, Montserrat } from "next/font/google";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import CustomLink from "../CustomLink/CustomLink";
import HumburgerIcon from "../../../public/Icons/humberger.svg";
import { MenuIcon } from "../Icons/IconComponents/Icons";
const monoton = Monoton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-monoton",
});

const NavBar = () => {
  const pathname = usePathname();
  return (
    <nav className={styles.navOuterContainer}>
      <div className={styles.navinnerContainer}>
        <motion.div
          className={`${styles.logo} ${monoton.className}`}
          whileHover={{ scale: 1.5 }}
        >
          <Link href="/">YG</Link>
        </motion.div>
        <div className="">
          <ul className={styles.menu}>
            {navContent.map((menu) => {
              return (
                <motion.li
                  key={menu.id}
                  className={styles.list}
                  whileHover={{ scale: 1.15 }}
                >
                  <CustomLink
                    href={menu.to}
                    title={menu.text}
                    className={
                      pathname === menu.to ? `${styles.activemenu}` : ""
                    }
                  />
                  {/* <Link href={menu.to}>{menu.text}</Link> */}
                </motion.li>
              );
            })}
            <MenuIcon className={styles.menuIcon} />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
