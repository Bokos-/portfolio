---
title: Necessary React libraries and skills!
date: '2019-01-06T23:03:00'
---

Za posledný môj rok som sa stretol s množstvom knižníc, ktoré sa týkajú Reactu.
Je to dané najmä tým, že som nemal veľké predchádzajúce skúsenosti s Reactom
a zároveň javascript je tak rýchly jazyk, že vychádzá v ňom každý deň
nové množstvo knižníc.
Rád by som si tu odložil doterajšie skúsenosti a priblížil vám čo všetko považujem
dnes za nevynutné vedieť pri práci s Reactom. Knižnice môžu pomôcť hlavne tým, ktorí
s ním začínajú.

## Boilerplate (Kostra)

[create-react-app](https://github.com/facebook/create-react-app)
ak nemáte skúsenosti s Reactom, táto knižnica vám vytvorí boilerplate (alebo kostru) pre vašu
aplikáciu. Obsahuje všetky nevyhnuté konfigurácie a závislosti aby ste mohli
rovno písať React a nemuseli sa o nič starať.

```no-text
What's included? React, JSX, ES6, TypeScript and Flow syntax support.
```

## Data Store

[Redux](https://github.com/reduxjs/react-redux) ide o globálny obchod s premennými. Je vhodný k tomu,
aby ste nemuseli preposielať premennú cez ďalších _x_ komponent do hĺbky. Tak ju
napojíte na globálne obchod. Použitie napríklad: user data, aktuálna téma, stav aplikácie, ...
Používa sa často. Odporúčam si doinštalovať na vývijanie [plugin](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) do chrome.
Ak sa chcete vyhnúť boilerplate, ktorý je spojený s Reduxom, odporúčam [rematch](https://github.com/rematch/rematch).

![Redux](./redux.png)

[React Context](https://reactjs.org/docs/context.html) je to pomerne nová feature od Reactu.
Je teoretickým nahraditeľom Reduxu. Tu sa, ale vytvorí `provider` dát a
jeho vnútorné komponenty vo vnútri ich vedia čitať pomocou `consumera`.

![React Context](./react-context.png)

[MobX](https://github.com/mobxjs/mobx) ďalšia možnosť k uskladneniu
globálnych dát.

## Serverová komunikácia

[fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) natívny príkaz z ES6,
ktorým je možné dopytovať server. Funguje pomocou **Promise**, ale chýbajú mu zatiaľ
nejaké funkcie ako napríklad **abort**.

[Axios](https://github.com/axios/axios) rozšírená verzia **fetch**, založená tiež
na **Promise**.

```javascript{numberLines: true}
const axios = require('axios')
axios
  .get('/user?ID=12345')
  .then(function(response) {
    console.log(response)
  })
  .catch(function(error) {
    console.log(error)
  })
```

[Apollo Client](https://github.com/apollographql/apollo-client) knižnica s plnou podporou
pre [GraphQL](https://graphql.org/). Ponúka tiež [dev tools](https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm) pre Chrome.
Odporúčam si to pozrieť. **GraphQL** v skratke: Viacero dopytov je možné zlúčiť do jedného.
Alebo namiesto reťazových volaní na server, je možné ich nahradiť za jeden.

![GraphQL](./graphql.png)

## CSS

[Styled Component](https://github.com/styled-components/styled-components) vizualizácia
komponentov v javascripte pomocou CSS. Výhodou je napríklad vynutie sa class-name konfliktov.

```javascript{numberLines: true}
const Button = styled.a`
  display: inline-block;
  color: #e62076;
`
render(<Button href="http://www.martinboksa.eu/">GitHub</Button>)
```

[Material UI](https://github.com/mui-org/material-ui) React
komponenty, ktoré implementujú [Google Material dizajn](https://material-ui.com/).

[classnames](https://github.com/JedWatson/classnames) zaradil som to do CSS, ale ide skôr
o utilitu, ktorá pomáha vytvárať class-names pre komponenty. Je to jeden z mojích
najobľúbenejších nástrojov. Podľa mňa výborne zprehľadní kód.

```javascript
classNames('foo', { bar: true }) // => result class name: 'foo bar'
```

[react-responsive](https://github.com/contra/react-responsive) jednoduchý spôsob ako použiť
media query v Reacte.

```javascript{numberLines: true}
import MediaQuery from 'react-responsive'
const Example = () => (
  <div>
    <div>Device Test!</div>
    <MediaQuery query="(min-device-width: 1824px)">
      <div>You have a huge screen</div>
    </MediaQuery>
    <MediaQuery query="(max-width: 1224px)">
      <div>You are sized like a tablet or mobile phone though</div>
    </MediaQuery>
  </div>
)
```

[React DnD](https://github.com/react-dnd/react-dnd) knižnica k vytvoreniu
Drag&Drop rozhrania.

[React Spring](https://github.com/react-spring/react-spring) knižnica na animácie. Mám veľmi dobrú skúsenosť s výkonom
aký je možný s ňou dosiahnúť. Odporúčam
si pozrieť [_"Prečo React potrebuje ďalšiu knižnicu na animácie?"_](https://blog.usejournal.com/why-react-needed-yet-another-animation-library-introducing-react-spring-8212e424c5ce).

![React Spring - Drag&Drop](./dragndrop.gif)

[React Bootstrap](https://github.com/react-bootstrap/react-bootstrap) komponenty
na základe [Bootstrap 4](https://getbootstrap.com/).

## Internationalization

[React Intl](https://github.com/yahoo/react-intl) knižnica na preklady, ktorá okrem iného poskytuje
formátovanie dátumov, čísiel, reťazcov, pluralizácie, ...

[react-i18next](https://github.com/i18next/react-i18next) internacionalizácie pre _reactjs_ / _reactnative_, ktorý je založený na i18next.

V tejto časti by som sám rad zistil aké sú ďalšie spoľahlivé možnosti.\_

## Testing

[Jest](https://jestjs.io/en/) testovacia platforma s nulovou konfiguráciou. Používa ho tiež _Facebook_.

[Enzyme](https://github.com/airbnb/enzyme) testovací nástroj od _Airbnb_.

## Meta Tags

[React Document Title](https://github.com/gaearon/react-document-title) nastavenie `javascript÷title` pomocout `jsx÷<DocumentTitle title="Awesome Title">`.

[React Helmet](https://github.com/nfl/react-helmet) nástroj na správu hlavičiek `html÷<head>`.

## Formuláre

[Redux Form](https://github.com/erikras/redux-form) Higher Order Component, ktorá drží
state v _reduxe_.

## Utils

[lodash](https://lodash.com/docs/4.17.11) rozširuje javascript o veľa zaujímavých funkciíí ako _debounce_.

[Moment.js](https://momentjs.com/) parsovanie, manipulácia a zobrazovanie dátumu a času 📅.

## Rich Editor

[Draft.js](https://github.com/facebook/draft-js) framework s ktorým je možné
vytvoriť _rich editor_. ![Rich Editor](./rich-editor.png)

## Type Checking

[PropTypes](https://www.npmjs.com/package/prop-types) kontrola typu _props_ v runtime.

[flow](https://flow.org/en/docs/frameworks/react/) statický typechecker.

[TypeScript](https://www.typescriptlang.org/) jazyk, ktorý sa prekladá do javascriptu, ale je typový. Odporúčam.

## Nice to know

[Storybook](https://github.com/storybooks/storybook) developerské rozrahnie pre UI komponenty. Vidíte ako vyzerajú vaše komponenty (za dôsledok sú podľa mňa komponenty, ktoré sa dajú lepšie znova použiť a testovať).
![Storybook intro](./storybook-intro.gif)

[Prettier](https://prettier.io/) jeden z mojích ďalších obľúbených nástrojov. Slúži ako formátovač kódu, snáď všetky známe editory ho integrujú. Stačí stlačiť klávesovú skratku a naformátuje dokument.

[ESLint](https://eslint.org/) _The pluggable linting utility for JavaScript and JSX._ Vo všetkých mojích projektoch som ho používal. Niekedy je otravný :).

[TSLint](https://palantir.github.io/tslint/) Ako ESLint ale pre TypeScript, na statickú analýzu kód.

[PixiJS](http://www.pixijs.com/) posledný rok som pracoval na grafickom editore v ktorom bol použitý PixiJS. Môžem plne odporučiť pri práci s grafikov.

[Gatsby](https://www.gatsbyjs.org/) pomáha vytvárať jednoducho stránky bez _"headache"_. Je v ňom napísaný napríklad [React Docs](https://reactjs.org/docs/getting-started.html) alebo tento blog.

---

Knižníč a utilít na prácu s Reactom a javascriptom je naozaj veľa. Myslím, že toto je len zlomok zoznamu čo by vám mohlo byť užitočné.
Ďalších veľa knižníc môžete pozrieť [tu](https://github.com/brillout/awesome-react-components).
