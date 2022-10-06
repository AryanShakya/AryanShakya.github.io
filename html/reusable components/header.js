class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <style>
           
      nav {
        font-size:3vw;
        font-family: 'Raleway', sans-serif;
        overflow: hidden; 
        // background: linear-gradient(135deg, hsla(339, 100%, 55%, 1) 0%, hsla(217, 100%, 50%, 1) 100%);
      }
      
      nav a {
        float: left;
        display: block;
        color: black;
        text-align: center;
        padding: 14px ;
        padding-bottom: 16px;
        text-decoration: none;
      }
      
      nav a:hover {
        border-radius: 0.5rem;
        color: white;
        text-decoration: solid;
      }
      </style>

      <header>
      <nav>
    <a href="./index.html" style="float:right;" title="Badass Home page"><img src="./html/reusable components/css/images/home.gif" alt="home"></a>
    <a href="./about.html" title="About me, yay!">About</a>
    <a href="./projects.html" title="Cool initiatives">Projects</a>
      </nav>
      </header>

      `;
    }
  }
  customElements.define('header-c', Header);        
