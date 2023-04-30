import React from "react";
import styles from "./Button.module.css";
import Link from "next/link";

type Props = {
  label?: string;
  icon?: React.ReactNode;
  type: "button" | "link";
  variant: "primary" | "secondary";
  className?: string;
  direct?: React.ReactNode;
  to?: string;
  download?: boolean;
  btntype?: "button" | "submit" | "reset";
  handleClick?: () => void;
};

const Button = ({
  label,
  icon,
  variant,
  className = "",
  type,
  direct,
  to,
  download,
  btntype,
  handleClick,
}: Props) => {
  if (type === "link") {
    return (
      <button
        className={`${styles.buttonContainer} ${
          variant === "primary" ? styles.variantOne : styles.variantTwo
        }`}
      >
        <Link
          href={to || "#"}
          className={`${styles.linkContainer}`}
          download={download ? true : false}
        >
          <div className={styles.innerContent}>
            <span
              className={
                variant === "primary"
                  ? styles.primaryIcon
                  : styles.secondaryIcon
              }
            >
              {icon}
            </span>
            <span className={styles.buttonlabel}>{label}</span>
          </div>
        </Link>
      </button>
    );
  }
  return (
    <button
      type={btntype || "button"}
      onClick={handleClick}
      className={`${className} ${
        variant === "primary" ? styles.variantOne : styles.variantTwo
      }`}
    >
      <span>{icon && icon}</span>
      {label}
    </button>
  );
};

export default Button;
