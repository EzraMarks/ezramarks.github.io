class PortfolioPage extends HTMLElement {

    constructor() {
        super();
        const root = this.attachShadow({ mode: 'open' });

        // Grabs the JSON data for this portfolio page, based on the `page`
        // attribute passed in to the <portfolio-page> HTML element.
        const page = this.getAttribute('page');
        fetch("./portfolio-descriptions.json")
            .then(response => response.json())
            .then(data => {
                const portfolioItemDescription = data.portfolioDescriptions[page];
                constructPortfolioPage(portfolioItemDescription);
            }
        );

        /**
         * Creates the HTML for the portfolio-page web component, based on the
         * JSON description of the page.
         * @param {Object} desc 
         */
        function constructPortfolioPage(desc) {
            root.innerHTML = `
                <link rel="stylesheet" href="./styles/style.css">
                <style>
                    .page-container {
                        width: 850px;
                        max-width: 100%;
                        margin: 0 auto;
                    }
    
                    .title {
                        padding-top: 0;
                        padding-bottom: 50px;
                    }
    
                    /* Removes margin from top of title. */
                    .title h1:first-of-type {
                        margin-top: 0px;
                    }
    
                    .image-btn {
                        margin-bottom: 30px;
                    }
    
                    .btn {
                        background-color: ${desc.accentColorHex};
                        margin-right: 20px;
                    }

                    .btn:hover {
                        background-color: ${desc.accentColorHex}d0;
                    }

                    .buttons-container {
                        margin-bottom: 60px;
                    }
                </style>
    
                <div class="page-container">
                    <div class="title">
                        <h1>${desc.title}</h1>
                        <h2>${desc.subtitle || ""}</h2>
                    </div>
    
                    <a ${(desc.project.img != null) ? `href="${desc.project.projectLink}"` : `style="display: none;"`}
                        target="_blank">
                        <img class="image-btn" src="${desc.project.img}" alt="screenshot of ${desc.title}"/>
                    </a>
                    
                    <div class="buttons-container">
                        <a ${(desc.project.projectLink != null) ? `href="${desc.project.projectLink}"` : `style="display: none;"`}
                            target="_blank" class="btn">Launch Project</a>
                        <a ${(desc.project.githubLink != null) ? `href="${desc.project.githubLink}"` : `style="display: none;"`}
                            target="_blank" class="btn">View on GitHub</a>
                    </div>
                    
                    <p>${desc.project.description || ""}</p>

                    <slot></slot>
                </div>
            `;
        }
    }
}

window.customElements.define('portfolio-page', PortfolioPage);