class PortfolioPreview extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    set description(desc) {
        this.shadowRoot.innerHTML = `
            <style>
                .portfolio-preview {
                    text-align: center;
                    margin: 12px;
                    padding: 0px;
                    background-repeat: no-repeat;
                    background-size: 80%;
                    background-position: center;
                    background-color: ${desc.thumbnail.color};
                    background-image: url("${desc.thumbnail.img}");
                }

                .image-btn {
                    border-radius: 5px;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
                    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
                }
                  
                .image-btn:hover {
                    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
                }

                .container {
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
                    background-color: ${desc.thumbnail.color};
                }

                /* Maintains a 16:9 aspect ratio on each item. */
                .container::before {
                    content: "";
                    width: 1px;
                    margin-left: -1px;
                    float: left;
                    height: 0;
                    padding-top: 66.67%; /* Controls the aspect ratio. */
                }

                .container::after {
                    content: "";
                    display: table;
                    clear: both;
                }

                /* Shows content on hover */
                .container:hover {
                    opacity: 1;
                    transition-property: opacity;
                    transition-duration: 0.3s;
                }

                .hover-text {
                    position: absolute;
                    width: 80%;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    z-index: 999;
                }
                
                .hover-graphic * {
                    filter: brightness(0.75);
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    border-radius: inherit;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            </style>

            <div class="portfolio-preview image-btn" title="">
                <a class="container" href="${desc.portfolioLink}">
                    <div class="hover-text">
                        <h2>${desc.title}</h2>
                        <h3>${desc.subtitle}</h3>
                    </div>
                    <div class="hover-graphic">${
                        // Generates the HTML content for the on-hover graphic,
                        // either an image or a video.
                        function generateHoverGraphicHtml() {
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
                        }()
                    }</div>
                </a>
            </div>
        `;
    }
}

window.customElements.define('portfolio-preview', PortfolioPreview);