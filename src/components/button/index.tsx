import classnames from "classnames";
import { ButtonHTMLAttributes } from "react";

import styles from "./styles.module.scss";
import { SpinnerGap } from "@phosphor-icons/react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  variant?: "primary";
  type?: "button" | "submit";
  loading?: boolean;
  disabled?: boolean;
};

export function Button({
  type = "button",
  variant = "primary",
  className,
  loading = false,
  disabled,
  children,
  ...restButtonProps
}: ButtonProps) {
  const buttonChildren = loading ? <SpinnerGap size={24} /> : children;

  const disabledButton = disabled || loading;
  return (
    <button
      type={type}
      disabled={disabledButton}
      className={classnames(
        styles["button"],
        styles[variant],
        { [styles["disabled"]]: disabled },
        className
      )}
      {...restButtonProps}
    >
      {buttonChildren}
    </button>
  );
}

export default Button;
