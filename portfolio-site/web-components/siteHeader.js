const siteHeaderTemplate = document.createElement('template');
siteHeaderTemplate.innerHTML = `
  <style>
    /* Style the header with a grey background and some padding */
    .header {
      padding-top: 9px;
      padding-bottom: 1px;
      background-color: white;
      position: fixed;
      top: 0; /* Position the navbar at the top of the page */
      width: inherit;
      max-width: inherit;
      z-index: 9999999999;
      box-shadow: -200px 0px 0px 0px white, 200px 0px 0px 0px white;
    }
    
    .header:after{ /* define header shadow */
      content: "";
      position: absolute;
      z-index: 9999999998;
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
    
    .header-shadow.header:after{ /* fade in header shadow */
      opacity: 1;
      transition-duration: 0.3s;
    }
    
    /* Style the header links */
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
    
    /* Style the logo link (notice that we set the same value of line-height and font-size to prevent the header to increase when the font gets bigger */
    .header a.logo {
      font-size: 1.5em;
      color: inherit;
      margin-left: 0px;
    }
    
    /* Change the background color on mouse-over */
    .header a:hover {
      color: inherit;
      transition-property: color;
      transition-duration: 0.15s;
    }
    
    /* Style the active/current link*/
    .header a.active {
      color: inherit;
    }
    
    /* Float the link section to the right */
    .header-right {
      float: right;
    }
  </style>

  <div class="header">
    <a href="index.html" class="logo">Ezra Marks</a>
    <div class="header-right">
      <a class="navbar-link" href="index.html">Work</a>
      <a class="navbar-link" href="about.html">About</a>
      <a class="navbar-link" href="resume.html">Resume</a>
    </div>
  </div>
`;

class SiteHeader extends HTMLElement {
  constructor() {
    super();
      document.body.appendChild(siteHeaderTemplate.content.cloneNode(true));

      const activePage = this.getAttribute('active-page');
      document.body.querySelector(`[class='navbar-link'][href='${activePage}']`).classList.add('active')
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