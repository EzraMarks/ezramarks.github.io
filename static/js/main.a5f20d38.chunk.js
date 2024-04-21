(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/ezra-marks-profile-photo.467cdf0d.jpg"},function(e,t,a){e.exports=a.p+"static/media/fractal-forest.69eee648.jpg"},function(e,t,a){e.exports=a.p+"static/media/rhythm-witch.9ba95298.jpg"},function(e,t,a){e.exports=a.p+"static/media/reaction-diffusion.90411f60.mp4"},function(e,t,a){e.exports=a.p+"static/media/pokemon-shock.dc06af40.gif"},function(e,t,a){e.exports=a(39)},,,,,function(e,t,a){},,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(12),l=a.n(r),o=a(7),c=a(1);a(24);const s=e=>{let{history:t,location:a,match:n}=e;const r=e=>a.pathname===e?"active":null;return i.a.createElement("div",{className:"site-header"},i.a.createElement("h1",{className:"site-title"},i.a.createElement(o.b,{to:"/"},"Ezra Marks")),i.a.createElement("div",{className:"navbar"},i.a.createElement(o.b,{className:"navbar-link home ".concat(r("/")),to:"/"},"Home"),i.a.createElement(o.b,{className:"navbar-link resume ".concat(r("/resume")),to:"/resume"},"Resume")))};a(33);var m=a(14),u=a.n(m);const h=()=>i.a.createElement("div",{className:"about-section"},i.a.createElement("div",{className:"about-photo"},i.a.createElement("img",{src:u.a,alt:"profile"})),i.a.createElement("div",{className:"about-text"},i.a.createElement("h3",null,"Hi, I'm Ezra."),i.a.createElement("p",null,"I like to make things."),i.a.createElement("p",null,"I\u2019m a Brown University senior, studying Computer Science and Cognitive Science. My central focus is software engineering, with interests in human-computer interaction, user experience, and artificial intelligence."),i.a.createElement("p",null,"My core passion is and always has been creating, though my medium of choice may change\u2014I've gone from cardboard and hot glue all the way to computer software, and on occasion back to cardboard and hot glue. Both are beautiful and versatile ways for me to bring new ideas into the world."),i.a.createElement("p",null,"I would love to hear from you by email at ",i.a.createElement("b",null,"ezra_marks@brown.edu"),", or visit me on the platforms below."),i.a.createElement("div",{className:"social-icons"},i.a.createElement("a",{id:"linkedin-icon",className:"social-icon",href:"https://www.linkedin.com/in/ezramarks/",target:"_blank",rel:"noopener noreferrer"}),i.a.createElement("a",{id:"github-icon",className:"social-icon",href:"https://github.com/EzraMarks",target:"_blank",rel:"noopener noreferrer"}),i.a.createElement("a",{id:"instagram-icon",className:"social-icon",href:"https://www.instagram.com/ezrablankmarks",target:"_blank",rel:"noopener noreferrer"}))));a(34);const d=e=>{let{children:t,className:a,href:n,isOpenedInNewTab:r=!0,isHighlighted:l=!0}=e;return i.a.createElement("a",{className:"button ".concat(l?"highlighted":null," ").concat(a),href:n,target:r?"_blank":void 0,rel:"noopener noreferrer"},t)};a(35);const p=e=>{var t;let{projectDescription:a,hasImageOnLeft:n=!1}=e,r=null;return a.videoSrc?r=i.a.createElement("video",{autoPlay:!0,loop:!0,muted:!0},i.a.createElement("source",{src:a.videoSrc,type:"video/mp4"})):a.imageSrc&&(r=i.a.createElement("img",{src:a.imageSrc,alt:a.title})),i.a.createElement("div",{className:"project-item ".concat(n?"image-left":"image-right")},i.a.createElement("div",{className:"description-column"},i.a.createElement("div",{className:"description"},i.a.createElement("h3",{className:"description-title"},a.title),i.a.createElement("h4",{className:"description-subtitle"},a.subtitle),i.a.createElement("div",{className:"description-body"},a.body),i.a.createElement("div",{className:"buttons-container"},a.demoLink?i.a.createElement(d,{href:a.demoLink},null!==(t=a.demoButtonText)&&void 0!==t?t:"View Demo"):null,a.githubLink?i.a.createElement(d,{href:a.githubLink,isHighlighted:!1},"GitHub"):null))),i.a.createElement("div",{className:"image-column"},i.a.createElement("div",{className:"image"},r)))};var g=a(15),f=a.n(g),E=a(16),b=a.n(E),v=a(17),w=a.n(v),k=a(18),y=a.n(k);const N={reactionDiffusion:{title:"Reaction Diffusion",subtitle:"Computer Graphics Simulation",body:i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,"Reaction-diffusion systems model physical phenomena, commonly representing changes in chemical concentrations over time. This graphics simulation is based on the"," ",i.a.createElement("a",{href:"https://groups.csail.mit.edu/mac/projects/amorphous/GrayScott/"},"Gray-Scott model"),", simulating two virtual chemicals reacting and diffusing on a 2D surface."),i.a.createElement("p",null,"Built using C++ and GLSL (OpenGL Shading Language) for real-time GPU rendering, the simulation is updated each frame via OpenGL Framebuffers. Diffuse lighting and specular highlights are calculated with a modified version of the"," ",i.a.createElement("a",{href:"https://users.cs.northwestern.edu/~ago820/cs395/Papers/Phong_1975.pdf"},"Phong reflection model"),", using bump mapping to visualize the relative concentrations of virtual chemicals in the simulation.")),videoSrc:w.a,demoLink:"https://www.youtube.com/watch?v=BiV0ookFeFs&ab_channel=EzraMarks",githubLink:"https://github.com/EzraMarks/reaction-diffusion"},strobeBlocker:{title:"Strobe Blocker",subtitle:"Automated Removal of Seizure Triggers in Video",body:i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,"This program detects patterns of flashing light in video and outputs an augmented video with the photosensitive-triggering light patterns removed, achieved in near real-time. Built in Python using NumPy and OpenCV."),i.a.createElement("p",null,"Photosensitivity, formally known as photosensitive epilepsy, is a condition that results in sensitivity to certain visual patterns, particularly flashing lights. When exposed to these visual stimuli, a person with photosensitivity can experience seizures or seizure-like symptoms.")),imageSrc:y.a,githubLink:"https://github.com/EzraMarks/strobe-blocker"},fractalForest:{title:"Fractal Forest",subtitle:"Interactive Art with JavaScript",body:i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,"Creating a fractal tree was one of my earliest coding projects; its simple elegance helped inspire me to study Computer Science. Staying home in Vermont during the Covid lockdown has given me some time to revisit these beautiful, algorithmic patterns of nature, growing that basic recursive fractal tree into an object-oriented Fractal Forest. This project was built in JavaScript with the help of the p5.js graphics library, created by the community behind the open-source"," ",i.a.createElement("a",{href:"https://processing.org/"},"Processing")," software.")),imageSrc:f.a,demoLink:"https://www.ezramarks.com/fractal-forest",githubLink:"https://github.com/EzraMarks/fractal-forest"},rhythmWitch:{title:"Rhythm Witch",subtitle:"2D Music Game",body:i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,"Brown-RISD Game Design Fall 2019 project. Programmed by Ezra Marks and Tobias Clevinger, with sound design by JD Calvelli and art by Frank Liu, Nicole Strubinski, Chris Luke, and Daniel Smith."),i.a.createElement("p",null,"Technologies: C#, Unity game engine")),imageSrc:b.a,demoLink:"https://ezramarks.com/rhythm-witch",demoButtonText:"Play Now"}},S=e=>{let t=0;return i.a.createElement(i.a.Fragment,null,Object.values(N).map(e=>i.a.createElement(p,{projectDescription:e,hasImageOnLeft:Boolean(t++%2)})))};a(36);const z=e=>{let{children:t}=e;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"section-header"},i.a.createElement("h2",{className:"title"},t),i.a.createElement("div",{className:"line"})))},F=e=>i.a.createElement(i.a.Fragment,null,i.a.createElement(s,e),i.a.createElement(h,null),i.a.createElement(z,null,"Featured Projects"),i.a.createElement(S,null));a(37);const L=e=>i.a.createElement(i.a.Fragment,null,i.a.createElement(s,e),i.a.createElement("div",{className:"resume-page"},i.a.createElement("div",{className:"resume-pdf-container"},i.a.createElement("iframe",{className:"resume-pdf",src:"https://www.ezramarks.com/ezra-marks-resume.pdf#view=FitH",title:"Ezra Marks Resume"}))));var j=()=>i.a.createElement(o.a,null,i.a.createElement(c.c,null,i.a.createElement(c.a,{path:"/",exact:!0,component:F}),i.a.createElement(c.a,{path:"/resume",exact:!0,component:L}),i.a.createElement(c.a,{path:"/",render:()=>i.a.createElement("div",null,"404")})));a(38);l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(j,null)),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.a5f20d38.chunk.js.map