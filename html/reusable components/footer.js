class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <style>
      footer {
        width:100%;
        text-align: center;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        overflow: hidden;
        font-family: 'Raleway', sans-serif;
        box-shadow: 0 1vw 2vw hsla(0, 0%, 0%, 0.9);
        background-color: rgba(106, 106, 106, 0.3);
        backdrop-filter: blur(14px);
        color: #333;
      }
      footer a{
        color: #333;
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
        height:5vw;
        width:5vw;
      }

      .footer{
      }

      </style>

      <footer>
      <div class="footer"> 
      Made with Love ;)<br>
      <a href="https://github.com/AryanShakya/AryanShakya.github.io">source code</a><br>
      </div>
      </footer>

      `;
    }
  }
  customElements.define('footer-c', Footer);        