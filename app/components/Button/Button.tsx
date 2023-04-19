import React from "react";
import styles from "./Button.module.css";

type Props = {
  label?: string;
  icon?: React.ReactNode;
  type?: boolean;
  variant: string;
  className?: string;
  direct?: React.ReactNode;
};

const Button = ({
  label,
  icon,
  variant,
  className = "",
  type,
  direct,
}: Props) => {
  return (
    <button
      className={`${className} ${
        variant === "primary" ? styles.variantOne : styles.variantTwo
      }`}
    >
      <span>{icon}</span>
      {type ? direct : label}
      {}
    </button>
  );
};

export default Button;
