class PortfolioPage extends HTMLElement {

    constructor() {
        super();
        const root = this.attachShadow({ mode: 'open' });

        // Grabs the JSON data for this portfolio page, based on the `page`
        // attribute passed in with the HTML element.
        const page = this.getAttribute('page');
        fetch("./portfolio-pages/portfolio-descriptions.json")
            .then(response => response.json())
            .then(data => {
                const portfolioItemDescription = data.portfolioDescriptions[page];
                constructPortfolioPage(portfolioItemDescription);
            }
        );

        const _this = this;
        /**
         * Creates the HTML for the portfolio-page web component, based on the
         * JSON description of the page.
         * @param {Object} desc 
         */
        function constructPortfolioPage(desc) {
            root.innerHTML = `
                <style>
                    .article-container {
                        width: 850px;
                        max-width: 100%;
                        margin: 0 auto;
                    }
    
                    .article-container .title {
                        padding-top: 0;
                        padding-bottom: 50px;
                    }
    
                    /* remove margin from top of title */
                    .article-container .title h1:first-of-type {
                        margin-top: 0px;
                    }

                    img {
                        width: 100%;
                    }
                    
                    video {
                        width: 100%;
                    }
    
                    .image-button {
                        border: 4px solid #18C38F;
                        transition-duration: 0.1s;
                    }
                    
                    .image-button:hover {
                        transition-duration: 0.2s;
                        box-shadow: 0px 0px 8px 8px rgb(190, 190, 190);
                    }
    
                    .button {
                        background-color: #1c87c9;
                        border: none;
                        color: white;
                        padding: 20px 34px;
                        text-align: center;
                        text-decoration: none;
                        display: inline-block;
                        font-size: 20px;
                        margin: 4px 2px;
                        cursor: pointer;
                </style>
    
                <div class="article-container">
                    <div class="title">
                        <h1>${desc.title}</h1>
                        <h2>${desc.subtitle}</h2>
                    </div>
    
                    <a href="${desc.project.projectLink}" target="_blank">
                        <img class="image-button" src="${desc.project.img}" alt="screenshot of ${desc.title}"/>
                    </a>
                    
                    <a href="${desc.project.projectLink}" target="_blank" class="button">PROJECT</a>
                    <a href="${desc.project.githubLink}" target="_blank" class="button">GITHUB</a>
                    
                    <p>${desc.project.description || ""}</p>

                    <slot></slot>
                </div>
            `;
        }
    }
}

window.customElements.define('portfolio-page', PortfolioPage);