import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as model from './model.js';
import headerView from './views/headerView.js';
import comicView from './views/comicView.js';
import seriesView from './views/seriesView.js';
// if (module.hot) {
//   module.hot.accept();
// }
const controlComics = async function () {
  try {
    await model.loadComics();
    comicView.render(model.state.comics);
  } catch (err) {
    console.log(err);
  }
};
const controlSeries = async function () {
  try {
    await model.loadSeries();
    seriesView.render(model.state.series);
  } catch (err) {
    console.log(err);
  }
};

const controlMain = async function () {
  try {
    headerView.renderSpinner();
    await model.loadSpider();
    headerView.render(model.state.heroSummary);
    headerView.navScrolling();
    headerView.scrollBtn();
    await controlComics();
    await controlSeries();
    headerView.initRender();
  } catch (err) {
    console.log(err);
  }
};

controlMain();
//
// ad3a9015df220cd29480c245eff0a9de
// 18070c18524b7728dcdc5b775eb967d4d94741ff8ad3a9015df220cd29480c245eff0a9de
//hash =13e1ecb06b3ac00f45e9f3616e17942f

{
  /* <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
enim ad minim veniam, quis nostrud exercitation ullamco laboris.
</p>
<h1 class="header-hero_name">Hero-GUY</h1> */
}
