const siteHeaderTemplate = document.createElement('template');
siteHeaderTemplate.innerHTML = /*html*/ `
    <style>
        .header {
            padding-top: 9px;
            padding-bottom: 1px;
            background-color: white;
            position: fixed;
            top: 0;
            width: inherit;
            max-width: inherit;
            z-index: 99999;
            box-shadow: -200px 0px 0px 0px white, 200px 0px 0px 0px white;
        }
        
        /* Creates header shadow. */
        .header:after {
            content: "";
            position: absolute;
            z-index: 99998;
            top: 100%;
            bottom: 0;
            width: 120%;
            height: 20px;
            left: -10%;
            right: -10%;
            background: radial-gradient(ellipse at 50% -20%, rgba(00, 00, 00, 0.12), rgba(255, 255, 255, 0) 60%);
            opacity: 0;
            transition-duration: 0.2s;
        }
        
        /* Fades in header shadow */
        .header-shadow.header:after{
            opacity: 1;
            transition-duration: 0.3s;
        }
        
        .header a {
            float: left;
            color: rgb(165, 165, 165);
            text-align: center;
            padding: 0px;
            margin: 15px;
            text-decoration: none;
            font-size: 1em;
            transition-property: color;
            transition-duration: 0.15s;
        }

        .header a:hover {
            color: inherit;
            transition-property: color;
            transition-duration: 0.15s;
        }
        
        .header .logo {
            font-size: 1.5em;
            color: inherit;
            margin-left: 0px;
            
        }

        .header .navbar {
            float: right;
        }
        
        /* Highlights the current page in the navbar */
        .header .navbar-link.active {
            color: inherit;
        }
    </style>

    <div class="header">
        <a class="logo" href="./">Ezra Marks</a>
        <div class="navbar">
            <a class="navbar-link index" href="./">Work</a>
            <a class="navbar-link about" href="about.html">About</a>
            <a class="navbar-link resume" href="resume.html">Resume</a>
        </div>
    </div>
`;

class SiteHeader extends HTMLElement {
    constructor() {
        super();
        document.body.appendChild(siteHeaderTemplate.content.cloneNode(true));

        // Highlights the navbar link for the active page, passed in through the
        // `page` attribute in the site-header HTML element,
        // e.g. <site-header page="index"></site-header>
        const page = this.getAttribute('page');
        if (page != null) {
            document.body.querySelector(`[class='navbar-link ${page}']`).classList.add('active');
        }
    }

    connectedCallback() {
        const header = document.querySelector('.header');
        const sticky = header.offsetTop;

        window.onscroll = (event) => {
            if (window.pageYOffset > sticky + 100) {
                header.classList.add('header-shadow');
            } else {
                header.classList.remove('header-shadow');
            }
        }
    }
}

window.customElements.define('site-header', SiteHeader);