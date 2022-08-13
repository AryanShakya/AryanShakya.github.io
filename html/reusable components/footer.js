class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <style>
      footer {
        background-color: #333;
        text-align: center;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        overflow: hidden;
        color: aliceblue;
        font-family: 'Raleway', sans-serif;
      }

      footer a:link {
        color: #fff;
        background-color: transparent;
        text-decoration: underline;
      }
      
      footer a:hover {
        color: #fcf403;
        background-color: transparent;
        text-decoration: underline;
      }
      

      img{
        height:2vw;
        size:2vw;
      }

      .footer{
      }

      </style>

      <footer>
      <div class="footer"> 
      Made with <img src="./html/reusable components/css/images/heart.png" alt="nope"> <br>
      <a href="https://github.com/AryanShakya/AryanShakya.github.io">source code</a>
      </div>
      </footer>

      `;
    }
  }
  customElements.define('footer-c', Footer);        