import fractalForestImg from "./assets/fractal-forest.jpg";
import rhythmWitchImg from "./assets/rhythm-witch.jpg";

export interface ProjectDescription {
  title: string;
  subtitle: string;
  body: React.ReactElement;
  imageSrc: string;
  demoLink?: string;
  githubLink?: string;
}

export const PROJECT_DESCRIPTIONS: { [name: string]: ProjectDescription } = {
  rhythmWitch: {
    title: "Rhythm Witch",
    subtitle: "2D Music Game",
    body: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non
          rhoncus purus, id tempor nisi. Quisque eu cursus risus, eget pharetra
          eros. Phasellus ut nibh et neque vulputate volutpat. Nam purus lorem,
          tristique ac faucibus ut, rutrum gravida massa. Suspendisse finibus at
          risus iaculis condimentum. Suspendisse mollis nec mi sed fringilla.
          Duis rhoncus magna turpis.
        </p>
        <p>Technologies: Stuff</p>{" "}
      </>
    ),
    imageSrc: rhythmWitchImg,
    demoLink: "https://brownrisdgames.itch.io/rhythmwitch",
  },
  fractalForest: {
    title: "Fractal Forest",
    subtitle: "Interactive Art with JavaScript",
    body: (
      <>
        <p>
          Creating a fractal tree was one of my earliest coding projects; its
          simple elegance helped inspire me to study Computer Science. Staying
          home in Vermont during the Covid lockdown has given me some time to
          revisit these beautiful, algorithmic patterns of nature, growing that
          basic recursive fractal tree into an object-oriented Fractal Forest.
          This project was built in JavaScript with the help of the p5.js
          graphics library, created by the community behind the open-source{" "}
          <a href="https://processing.org/">Processing</a> software.
        </p>
      </>
    ),
    imageSrc: fractalForestImg,
    githubLink: "https://github.com/EzraMarks/fractal-forest",
  },
};
