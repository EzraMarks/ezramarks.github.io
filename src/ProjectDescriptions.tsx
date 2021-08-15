import fractalForestImg from "./assets/fractal-forest.jpg";
import rhythmWitchImg from "./assets/rhythm-witch.jpg";
import reactionDiffusionVideo from "./assets/reaction-diffusion.mp4";
import pokemonShockGif from "./assets/pokemon-shock.gif";

export interface ProjectDescription {
  title: string;
  subtitle?: string;
  body: React.ReactElement;
  imageSrc?: string;
  videoSrc?: string;
  demoLink?: string;
  demoButtonText?: string;
  githubLink?: string;
}

export const PROJECT_DESCRIPTIONS: { [name: string]: ProjectDescription } = {
  reactionDiffusion: {
    title: "Reaction Diffusion",
    subtitle: "Computer Graphics Simulation",
    body: (
      <>
        <p>
          Reaction-diffusion systems model physical phenomena, commonly
          representing changes in chemical concentrations over time. This
          graphics simulation is based on the{" "}
          <a href="https://groups.csail.mit.edu/mac/projects/amorphous/GrayScott/">
            Gray-Scott model
          </a>
          , simulating two virtual chemicals reacting and diffusing on a 2D
          surface.
        </p>
        <p>
          Built using C++ and GLSL (OpenGL Shading Language) for real-time GPU
          rendering, the simulation is updated each frame via OpenGL
          Framebuffers. Diffuse lighting and specular highlights are calculated
          with a modified version of the{" "}
          <a href="https://users.cs.northwestern.edu/~ago820/cs395/Papers/Phong_1975.pdf">
            Phong reflection model
          </a>
          , using bump mapping to visualize the relative concentrations of
          virtual chemicals in the simulation.
        </p>
      </>
    ),
    videoSrc: reactionDiffusionVideo,
    demoLink:
      "https://www.youtube.com/watch?v=BiV0ookFeFs&ab_channel=EzraMarks",
    githubLink: "https://github.com/EzraMarks/reaction-diffusion",
  },
  strobeBlocker: {
    title: "Strobe Blocker",
    subtitle: "Automated Removal of Seizure Triggers in Video",
    body: (
      <>
        <p>
          This program detects patterns of flashing light in video and outputs
          an augmented video with the photosensitive-triggering light patterns
          removed, achieved in near real-time. Built in Python using NumPy and
          OpenCV.
        </p>
        <p>
          Photosensitivity, formally known as photosensitive epilepsy, is a
          condition that results in sensitivity to certain visual patterns,
          particularly flashing lights. When exposed to these visual stimuli, a
          person with photosensitivity can experience seizures or seizure-like
          symptoms.
        </p>
      </>
    ),
    imageSrc: pokemonShockGif,
    githubLink: "https://github.com/EzraMarks/strobe-blocker",
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
    demoLink: "https://www.ezramarks.com/fractal-forest",
    githubLink: "https://github.com/EzraMarks/fractal-forest",
  },
  rhythmWitch: {
    title: "Rhythm Witch",
    subtitle: "2D Music Game",
    body: (
      <>
        <p>
          Brown-RISD Game Design Fall 2019 project. Programmed by Ezra Marks and
          Tobias Clevinger, with sound design by JD Calvelli and art by Frank
          Liu, Nicole Strubinski, Chris Luke, and Daniel Smith.
        </p>
        <p>Technologies: C#, Unity game engine</p>
      </>
    ),
    imageSrc: rhythmWitchImg,
    demoLink: "https://ezramarks.com/rhythm-witch",
    demoButtonText: "Play Now",
  },
};
