import React from "react";
import { Button } from "../Button";
import "./ProjectItem.css";

interface Props {
  hasImageOnLeft?: boolean;
}

export const ProjectItem: React.FC<Props> = ({ hasImageOnLeft = false }) => {
  return (
    <div
      className={`project-item ${
        hasImageOnLeft ? "image-left" : "image-right"
      }`}
    >
      <div className="description-column">
        <div className="description">
          <h3 className="description-title">Project Title</h3>
          <h4 className="description-subtitle">Project Subtitle</h4>
          <div className="description-body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non
              rhoncus purus, id tempor nisi. Quisque eu cursus risus, eget
              pharetra eros. Phasellus ut nibh et neque vulputate volutpat. Nam
              purus lorem, tristique ac faucibus ut, rutrum gravida massa.
              Suspendisse finibus at risus iaculis condimentum. Suspendisse
              mollis nec mi sed fringilla. Duis rhoncus magna turpis.
            </p>
          </div>
          <div className="buttons-container">
            <Button href="www.google.com">View Demo</Button>
            <Button isHighlighted={false}>GitHub</Button>
          </div>
        </div>
      </div>
      <div className="image-column">
        <div className="image">
          <img
            src={
              "https://shambhalamusicfestival.com/wp-content/uploads/2019/04/2019_fractal_web_banner-1.jpg"
            }
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
