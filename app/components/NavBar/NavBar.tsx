"use client";

import React, { useState } from "react";
import styles from "./NavBar.module.css";
import { navContent } from "../../../public/Alltext";
import Link from "next/link";
import { Monoton, Montserrat } from "next/font/google";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import CustomLink from "../CustomLink/CustomLink";
import { MenuIcon, CloseIcon } from "../Icons/IconComponents/Icons";

const monoton = Monoton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-monoton",
});

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
                  className={pathname === menu.to ? `${styles.activemenu}` : ""}
                />
              </motion.li>
            );
          })}
        </ul>
        <div className={styles.humberger}>
          {isOpen ? (
            <CloseIcon
              onClick={() => setIsOpen(!isOpen)}
              color="black"
              hoverColor="#ec5940"
            />
          ) : (
            <MenuIcon
              className={styles.menuIcon}
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
