import React from "react";
import { PlusBtnAloneIcon } from "../Icons/IconComponents/Icons";
import styles from "./Metrix.module.css";

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
      <p className={classOne}>{`${value}${exact ? "" : "+"}`}</p>
      <p className={classTwo}>{indicator}</p>
    </div>
  );
};

export default Metrix;
