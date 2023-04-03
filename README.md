# CPS Elements - Exemplo - Webpack

Um modelo de configuração mínima demonstrando como importar componentes [CPS Elements](https://github.com/cpsrepositorio/cps-elements) com [Webpack](https://webpack.js.org/) como empacotador do projeto.

> **CPS Elements** é parte do projeto de UI/UX institucional, que também sustenta o [CPS Design System](https://cpsrepositorio.github.io/cps-design-system/), projetados originalmente pelo professor [Erick Petrucelli](https://github.com/ErickPetru). Independentemente de suas origens e motivações iniciais, é um projeto totalmente _open-source_ disponível sob os termos da licença [MIT](https://github.com/cpsrepositorio/cps-elements/blob/main/LICENSE.md).

Em sua versão 5, o Webpack avançou no suporte a [módulos JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Modules) nativos (também conhecidos como _ES modules_) sem necessitar de configurações em especial sendo realmente necessária para o uso dos Web Components do CPS Elements.

Assim, este exemplo foca em demonstrar um conjunto opinativo de configurações uteis no [webpack.config.js](./webpack.config.js), tanto para desenvolvimento quanto para publicação de aplicações com Webpack 5, contendo diversos ajustes sobre carregamento de HTML, CSS, SVG, bem como o empacotamento JavaScript.

Opcionalmente, recursos como ícones podem carregados pela instalação local com o _bundler_ ao invés de serem carregados por CDN. Para tal, a única configuração Webpack necessária é copiar os ícones de `node_modules/@cps-elements/web/assets` para a pasta `dist/assets` da distribuição empacotada do projeto, através do `copy-webpack-plugin`.

Observe que Webpack pode ser usado com _frameworks_ JavaScript, onde configurações extras podem ser necessárias. Mas para utilização com Web nativa, ou seja, HTML, CSS e JavaScript puros, este projeto apresenta os fundamentos para você poder começar de forma produtiva.

## Visualizando no StackBlitz

Este projeto pode ser executado, visualizado e até editado _online_. [Abrir no StackBlitz ⚡️](https://stackblitz.com/edit/cps-elements-example-webpack)

## Executando manualmente este projeto

Para execução com _hot-reload_ em modo de desenvolvimento:

```sh
npm run dev
```

Para compilar para produção:

```sh
npm run build
```

Para iniciar um servidor local e testar a compilação de produção:

```sh
npm run preview
```

Então abra o navegador na URL exibida após os comandos.
