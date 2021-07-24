import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { SiteHeader } from "../SiteHeader";
import { AboutSection } from "./AboutSection";

interface Props extends RouteComponentProps {}

export const HomePage: React.FC<Props> = (props) => {
  return (
    <>
      <SiteHeader {...props} />
      <AboutSection />
    </>
  );
};
