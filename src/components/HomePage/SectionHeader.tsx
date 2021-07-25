import React from "react";
import "./SectionHeader.css";

interface Props {
  children?: React.ReactNode;
}

export const SectionHeader: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="section-header">
        <h2 className="title">{children}</h2>
        <div className="line"></div>
      </div>
    </>
  );
};
