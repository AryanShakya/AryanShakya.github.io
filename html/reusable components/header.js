class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <style>
      
      .HomeHeader{
        overflow: hidden;
        height: 65vw;
        background: url("./html/reusable components/css/images/header.svg");
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
    <a href="./index.html" style="float:right;" title="Home"><img src="./html/reusable components/css/images/home.svg" alt="home"></a>
    <a href="./html/projects.html">Projects</a>
    <a href="#">Link</a>
    <a href="#">Link</a>
    <a href="#">Link</a>
      </nav>

   <div class="HomeHeader">
   </div>
      </header>

      `;
    }
  }
  customElements.define('header-c', Header);        
