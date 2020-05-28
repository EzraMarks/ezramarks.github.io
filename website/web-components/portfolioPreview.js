class PortfolioPreview extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  set description(desc) {
    this.shadowRoot.innerHTML = `
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
        background-color: ${desc.thumbnail.color};
        background-image: url("${desc.thumbnail.img}");
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
        background-color: ${desc.thumbnailHover.color || desc.thumbnail.color}
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
      <a class="link" href="${desc.portfolioLink}">
        <div class="aspect-ratio-box">
          <div class="hover-text">
            <h2 class="title">${desc.title}</h2>
            <h3 class="description">${desc.subtitle}</h3>
          </div>
          <div class="hover-graphic">
            ${function generateHoverGraphicHtml() {
              let hoverGraphic = ``;
              if (desc.thumbnailHover.img != null) {
                hoverGraphic = `<img src="${desc.thumbnailHover.img}"/>`
              } else if (desc.thumbnailHover.video != null) {
                hoverGraphic = `
                  <video autoplay muted loop>
                  <source src="${desc.thumbnailHover.video}"
                  type="video/mp4"/>
                  </video>
                  `;
              }
              return hoverGraphic;
            }()}
          </div>
        </div>
      </a>
    </div>
    `;
  }
}

window.customElements.define('portfolio-preview', PortfolioPreview);