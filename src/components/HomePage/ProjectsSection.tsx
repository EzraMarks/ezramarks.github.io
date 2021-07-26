import React from "react";
import { ProjectItem } from "./ProjectItem";

interface Props {}

export const ProjectSection: React.FC<Props> = (props) => {
  return (
    <div>
      <ProjectItem />;
      <ProjectItem hasImageOnLeft />;
      <ProjectItem />;
      <ProjectItem hasImageOnLeft />;
    </div>
  );
};
