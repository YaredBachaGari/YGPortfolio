"use client";

import React, { useState, useEffect } from "react";
import styles from "./NavBar.module.css";
import { navContent } from "../../../public/Alltext";
import Link from "next/link";
import { Monoton, Montserrat } from "next/font/google";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import CustomLink from "../CustomLink/CustomLink";
import { MenuIcon, CloseIcon } from "../Icons/IconComponents/Icons";
import { useRouter } from "next/navigation";

const monoton = Monoton({
  weight: "400",
  subsets: ["latin"],
});

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1500,
  });

  const handleRouting = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setScreenSize({
          width: window.innerWidth,
        });
      }
    };
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return (
    <nav className={styles.navOuterContainer}>
      <div
        className={`${styles.navinnerContainer} 
        ${isOpen && screenSize.width > 900 && styles.removeMenuSidebar}`}
      >
        <motion.div
          className={`${styles.logo} ${monoton.className}`}
          whileHover={{ scale: 1.5 }}
        >
          <Link href="/">YG</Link>
        </motion.div>

        <motion.ul
          className={`${styles.menu} ${isOpen && styles.mobileview} ${
            isOpen && screenSize.width > 1000 && styles.shiftToSide
          }`}
        >
          {navContent.map((menu) => {
            return (
              <motion.li
                key={menu.id}
                className={styles.list}
                whileHover={{ scale: 1.15 }}
                onClick={() => handleRouting()}
              >
                <CustomLink
                  href={menu.to}
                  title={menu.text}
                  className={pathname === menu.to ? `${styles.activemenu}` : ""}
                />
              </motion.li>
            );
          })}
        </motion.ul>
        <div className={styles.humberger}>
          {isOpen ? (
            <CloseIcon
              onClick={() => setIsOpen(!isOpen)}
              color={isOpen && screenSize.width > 1000 ? "white" : "black"}
              hoverColor="#ec5940"
            />
          ) : (
            <motion.div
              whileTap={{
                rotate: 360,
                transition: { duration: 5, ease: "easeOut" },
              }}
            >
              <MenuIcon
                className={styles.menuIcon}
                onClick={() => setIsOpen(!isOpen)}
              />
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
