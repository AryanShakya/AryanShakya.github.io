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
        font-size: 1vw;
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
        background: linear-gradient(315deg, hsla(44, 100%, 52%, 1) 0%, rgba(255, 0, 0, 0.922) 100%);
        color: black;
        text-decoration: solid;
      }
      </style>

      <header>
      <nav>
    <a href="./about.html">About</a>
    <a href="#">Link</a>
    <a href="#">Link</a>
      </nav>

   <div class="HomeHeader">
      <h1>#Differentworld</h1>
      <h6>Sorry, but this website suits well for bigger screens</h6>
      <h6>this may distort on mobiles for now.</h6>
   </div>
      </header>

      `;
    }
  }
  customElements.define('header-c', Header);        
