import "./assets/css/style.css";
import elementsLogo from "./assets/images/cps-elements.svg";
import webpackLogo from "../public/webpack.svg";
import { setupCounter } from "./counter.js";

// Carregar os temas conforme desejado.
import "@cps-elements/web/themes/dark.css";

// Carregar os componentes utilizados.
import "@cps-elements/web/components/button.js";
import "@cps-elements/web/components/icon.js";

// Configurar o caminho base para os recursos incorporados (como ícones).
import { setBasePath } from "@cps-elements/web/utilities/base-path.js";
setBasePath("/");

// Usar o caminho por CDN, se não quiser lidar com cópia de recursos localmente.
// setBasePath('https://cdn.jsdelivr.net/npm/@cps-elements/web');

// Agora <cps-button> e <cps-icon> prontos para utilização no HTML!

document.querySelector("#app").innerHTML = `
  <a href="https://webpack.js.org/" target="_blank">
    <img src="${webpackLogo}" class="logo" alt="Webpack logo" />
  </a>

  <a href="https://cpsrepositorio.github.io/cps-elements/" target="_blank">
    <img src="${elementsLogo}" class="logo cps-elements" alt="CPS Elements logo" />
  </a>

  <h1>Webpack + CPS Elements</h1>

  <div>
    <cps-button id="counter" type="button" variant="accent"></cps-button>
  </div>

  <p>
    Click the button above to add one to the counter.
  </p>
`;

setupCounter(document.querySelector("#counter"));
