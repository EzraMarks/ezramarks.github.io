import React from "react";
import { ProjectItem } from "./ProjectItem";
import { PROJECT_DESCRIPTIONS } from "../../ProjectDescriptions";

interface Props {}

export const ProjectSection: React.FC<Props> = (props) => {
  let projectNumber = 0;
  return (
    <>
      {Object.values(PROJECT_DESCRIPTIONS).map((projectDescription) => (
        <ProjectItem
          projectDescription={projectDescription}
          hasImageOnLeft={Boolean(projectNumber++ % 2)}
        />
      ))}
    </>
  );
};
