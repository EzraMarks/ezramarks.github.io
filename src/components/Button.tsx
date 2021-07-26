import React from "react";
import "./Button.css";

interface Props {
  children?: React.ReactNode;
  className?: string;
  href?: string;
  isOpenedInNewTab?: boolean;
  isHighlighted?: boolean;
}

export const Button: React.FC<Props> = ({
  children,
  className,
  href,
  isOpenedInNewTab = true,
  isHighlighted = true,
}) => {
  return (
    <a
      className={`button ${isHighlighted ? "highlighted" : null} ${className}`}
      href={href}
      target={isOpenedInNewTab ? "_blank" : undefined}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};
