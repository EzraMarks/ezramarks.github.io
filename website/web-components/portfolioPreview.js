class PortfolioPreview extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    set description(desc) {
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./styles/style.css">
            <style>
                .portfolio-preview {
                    text-align: center;
                    margin: 12px;
                    padding: 0px;
                    background-repeat: no-repeat;
                    background-size: ${desc.thumbnail.imgSize || "100%"};
                    background-position: center;
                    background-color: ${desc.thumbnail.colorHex};
                    background-image: url("${desc.thumbnail.img}");
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
                    background-color: ${desc.thumbnail.colorHex};
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
                        <h3>${desc.subtitle || ""}</h3>
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