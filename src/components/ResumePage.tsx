import React from "react";
import "./ResumePage.css";
import { SiteHeader } from "./SiteHeader";
import { RouteComponentProps } from "react-router";

interface Props extends RouteComponentProps {}

export const ResumePage: React.FC<Props> = (props) => {
  return (
    <>
      <SiteHeader {...props} />
      <div className="resume-page">
        <div className="resume-pdf-container">
          <iframe
            className="resume-pdf"
            src="./ezra-marks-resume.pdf#view=FitH"
            title="Ezra Marks Resume"
          ></iframe>
        </div>
      </div>
    </>
  );
};
