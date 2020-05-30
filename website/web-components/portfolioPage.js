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

                    img {
                        width: 100%;
                    }
                    
                    video {
                        width: 100%;
                    }
    
                    .image-btn {
                        border-radius: 5px;
                        margin-bottom: 30px;

                        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
                        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
                    }
                      
                    .image-btn:hover {
                        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
                    }
    
                    .btn {
                        color: #fff;
                        font-weight: bold;
                        background-color: ${desc.accentColorHex};
                        box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2);
                        border-radius: 2px;
                        padding: 12px 16px;
                        text-decoration: none;
                        cursor: pointer;
                        display: inline-block;
                        -webkit-tap-highlight-color: transparent;
                        transition: .3s ease-out;

                        margin: 0px 20px 0px 0px;
                    }

                    .btn:hover {
                        color: #fff;
                        background-color: ${desc.accentColorHex}d0;
                        transition: .3s ease-out;
                        box-shadow: 0 3px 3px 0 rgba(0,0,0,0.14),0 1px 7px 0 rgba(0,0,0,0.12),0 3px 1px -1px rgba(0,0,0,0.2);
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