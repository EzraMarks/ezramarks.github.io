import React from "react";
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
          <h3>Project Title</h3>
          <h4>Project Subtitle</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non
            rhoncus purus, id tempor nisi. Quisque eu cursus risus, eget
            pharetra eros. Phasellus ut nibh et neque vulputate volutpat. Nam
            purus lorem, tristique ac faucibus ut, rutrum gravida massa.
            Suspendisse finibus at risus iaculis condimentum. Suspendisse mollis
            nec mi sed fringilla. Duis rhoncus magna turpis.
          </p>
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
