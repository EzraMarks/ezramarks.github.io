import React from "react";
import { ProjectDescription } from "../../ProjectDescriptions";
import { Button } from "../Button";
import "./ProjectItem.css";

interface Props {
  projectDescription: ProjectDescription;
  hasImageOnLeft?: boolean;
}

export const ProjectItem: React.FC<Props> = ({
  projectDescription,
  hasImageOnLeft = false,
}) => {
  let image = null;
  if (projectDescription.videoSrc) {
    image = (
      <video autoPlay loop muted>
        <source src={projectDescription.videoSrc} type="video/mp4" />
      </video>
    );
  } else if (projectDescription.imageSrc) {
    image = (
      <img src={projectDescription.imageSrc} alt={projectDescription.title} />
    );
  }

  return (
    <div
      className={`project-item ${
        hasImageOnLeft ? "image-left" : "image-right"
      }`}
    >
      <div className="description-column">
        <div className="description">
          <h3 className="description-title">{projectDescription.title}</h3>
          <h4 className="description-subtitle">
            {projectDescription.subtitle}
          </h4>
          <div className="description-body">{projectDescription.body}</div>
          <div className="buttons-container">
            {projectDescription.demoLink ? (
              <Button href={projectDescription.demoLink}>
                {projectDescription.demoButtonText ?? "View Demo"}
              </Button>
            ) : null}
            {projectDescription.githubLink ? (
              <Button
                href={projectDescription.githubLink}
                isHighlighted={false}
              >
                GitHub
              </Button>
            ) : null}
          </div>
        </div>
      </div>
      <div className="image-column">
        <div className="image">{image}</div>
      </div>
    </div>
  );
};
