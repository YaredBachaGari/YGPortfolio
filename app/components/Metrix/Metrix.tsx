'use client'
import React from "react";
import { PlusBtnAloneIcon } from "../Icons/IconComponents/Icons";
import styles from "./Metrix.module.css";
import AnimatedKPI from "../AnimatedKPI/AnimatedKPI";
import { motion } from "framer-motion";

type Props = {
  value: number;
  indicator: string;
  classOne?: string;
  classTwo?: string;
  className?: string;
  bg: "light" | "dark";
  exact?: boolean;
};

const Metrix = ({
  value,
  indicator,
  className = "",
  classOne = "",
  classTwo = "",
  bg,
  exact = false,
}: Props) => {
  return (
    <div className={className}>
      <motion.p className={classOne} whileHover={{y:-5}}>
        <AnimatedKPI value={value} />
        {exact ? "" : "+"}
      </motion.p>
      <p className={classTwo}>{indicator}</p>
    </div>
  );
};

export default Metrix;
