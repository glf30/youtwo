import React, {
  type FC,
  type ButtonHTMLAttributes,
  type AnchorHTMLAttributes,
} from "react";
import Link from "next/link";

type ButtonOrAnchorProps = ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

interface ButtonProps extends ButtonOrAnchorProps {
  variant?: "primary" | "secondary-gray" | "tertiary-gray";
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  href?: string;
}

const Button: FC<ButtonProps> = ({
  onClick,
  variant = "primary",
  size = "md",
  href,
  disabled,
  className = "",
  ...props
}) => {
  const sizeClasses = {
    sm: "px-2 py-1 text-xs",
    md: "px-2 py-1 text-sm",
    lg: "px-2.5 py-1.5 text-sm",
    xl: "px-2.5 py-1.5 text-sm",
    "2xl": "px-3 py-2 text-sm",
  };
  const variantClasses = {
    primary:
      "bg-violet-600 text-white focus:ring-4 hover:bg-violet-700 transition duration-300 ease-in-out shadow-sm focus:ring-violet-100 focus-visible:outline-4 focus-visible:outline-violet-100 focus-visible:outline-offset-4",
    "secondary-gray":
      "bg-white text-gray-700 focus:ring-4 shadow-sm ring-1 ring-inset focus:ring-gray-100 focus-visible:outline-4 focus-visible:outline-gray-100 focus-visible:outline-offset-4 ring-gray-300 hover:text-gray-800 hover:bg-gray-50 transition duration-300 ease-in-out",
    "tertiary-gray":
      "hover:bg-gray-50 text-gray-600 focus:bg-white hover:text-gray-700 transition duration-300 ease-in-out",
  };

  const buttonClasses = [
    className,
    "rounded-lg",
    "font-semibold",
    sizeClasses[size],
    variantClasses[variant],
    disabled ? "opacity-50 cursor-not-allowed" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const commonProps = {
    className: buttonClasses,
    onClick,
    disabled,
    ...props,
  };

  return href ? (
    <Link href={href} {...commonProps} />
  ) : (
    <button {...commonProps} />
  );
};

export default Button;
