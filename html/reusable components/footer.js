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
      </style>

      <footer>
      <p>No Copyright</p>
      <p><a href="https://github.com/AryanShakya/AryanShakya.github.io">source code</a></p>
      </footer>

      `;
    }
  }
  customElements.define('footer-c', Footer);        