import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { SiteHeader } from "../SiteHeader";
import { AboutSection } from "./AboutSection";
import { ProjectSection } from "./ProjectsSection";
import { SectionHeader } from "./SectionHeader";

interface Props extends RouteComponentProps {}

export const HomePage: React.FC<Props> = (props) => {
  return (
    <>
      <SiteHeader {...props} />
      <AboutSection />
      <SectionHeader>Featured Projects</SectionHeader>
      <ProjectSection />
    </>
  );
};
