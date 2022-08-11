class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <style>
      
      .HomeHeader{
        overflow: hidden;
        height: 48vw;
        background: url("AryanShakya.github.io/html/reusable components/css/images/header-c.jpg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        font-family: 'Raleway', sans-serif;
        text-align: center;
        text-transform: capitalize;
        font-size: auto;
        color: #fcf403;
      }
      nav {
        font-family: 'Raleway', sans-serif;

        overflow: hidden; 
        background-color: #333;
      }
      
      nav a {
        float: left;
        display: block;
        color: #f2f2f2;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
      }
      
      nav a:hover {
        border-radius: 1vw;
        background-color: #FF9900;
        color: black;
        text-decoration: solid;
      }
      </style>

      <header>
      <nav>
    <a href="html/about.html">About</a>
    <a href="#">Link</a>
    <a href="#">Link</a>
      </nav>

   <div class="HomeHeader">
      <h1>#Differentworld</h1>
   </div>
      </header>

      `;
    }
  }
  customElements.define('header-c', Header);        
