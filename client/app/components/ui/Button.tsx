import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "icon";
  variant?: "solid" | "outline" | "ghost";
  className?: string;
  disabled?: boolean;
  ariaLabel?: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  size = "md",
  variant = "solid",
  className,
  disabled = false,
  ariaLabel,
}) => {
  const sizeClass = styles[size];
  const variantClass = styles[variant];

  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${sizeClass} ${variantClass} ${className}`}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
