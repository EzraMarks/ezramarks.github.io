const projectPreviewTemplate = document.createElement('template');
projectPreviewTemplate.innerHTML = `
  <style>
    /* main div for a project preview item */
    .project-preview {
      text-align: center;
      border-radius: 10px;
      margin: 12px;
      padding: 0px;
      background-repeat: no-repeat;
      background-size: 80%;
      background-position: center;
    }

    /* inner link container which resides in each div,
    * so the link will take up the entire div, excluding the margin/padding */
    .link {
      opacity: 0;
      display: block;
      width: 100%;
      height: 100%;
      color: white;
      text-decoration: none;
      position: relative;
      overflow: hidden;
      border-radius: inherit;
      transition-property: opacity;
      transition-duration: 0.2s;
    }

    /* on hover, show the contents of the container */
    .link:hover {
      opacity: 1;
      transition-property: opacity;
      transition-duration: 0.3s;
    }

    /* position & style text in the on-hover preview */
    .hover-text {
      position: absolute;
      width: 80%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 999;
    }

    /* position and style the graphic in the on-hover preview */
    .hover-graphic * {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0.8;
      border-radius: inherit;
      width: 100%;
    }

    /* maintain a 16:9 aspect ratio on each item */
    .aspect-ratio-box::before {
      content: "";
      width: 1px;
      margin-left: -1px;
      float: left;
      height: 0;
      padding-top: 56.25%; /* controls the aspect ratio */
    }
    .aspect-ratio-box::after {
      content: "";
      display: table;
      clear: both;
    }
  </style>

  <div class="project-preview" title="">
    <a class="link" href="LINK">
      <div class="aspect-ratio-box">
        <div class="hover-text">
          <h2 class="title">TITLE</h2>
          <h3 class="description">DESCRIPTION</h3>
        </div>
        <div class="hover-graphic">HOVERIMG-HOVERVIDEO</div>
      </div>
    </a>
  </div>
`;

class ProjectPreview extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(projectPreviewTemplate.content.cloneNode(true));

    const title = this.getAttribute('title');
    const description = this.getAttribute('description');
    const link = this.getAttribute('link');
    const thumbnailColor = this.getAttribute('thumbnail-color');
    const thumbnailImg = this.getAttribute('thumbnail-img');
    const hoverColor = this.getAttribute('hover-color');
    const hoverImg = this.getAttribute('hover-img');
    const hoverVideo = this.getAttribute('hover-video');
    
    this.shadowRoot.querySelector('.title').innerText = title;
    this.shadowRoot.querySelector('.description').innerText = description;
    this.shadowRoot.querySelector('.link').href = link;
    this.shadowRoot.querySelector('.project-preview').style.backgroundColor = thumbnailColor;
    this.shadowRoot.querySelector('.project-preview').style.backgroundImage = `url(${thumbnailImg})`;
    // hover-color defaults to thumbnail-color if hover-color is not specified.
    this.shadowRoot.querySelector('.link').style.backgroundColor = hoverColor || thumbnailColor;

    let hoverGraphic = "";
    if (hoverImg != null) {
      hoverGraphic = `<img src="${hoverImg}"/>`
    } else if (hoverVideo != null) {
      hoverGraphic = `
        <video autoplay muted loop>
        <source src="${hoverVideo}"
        type="video/mp4"/>
        </video>
        `;
    }
    this.shadowRoot.querySelector('.hover-graphic').innerHTML = hoverGraphic;
  }
}

window.customElements.define('project-preview', ProjectPreview);