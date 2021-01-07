import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as model from './model.js';
import headerView from './views/headerView.js';
import comicView from './views/comicView.js';

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
    console.log(model.state.series);
  } catch (err) {
    console.log(err);
  }
};

const controlHeader = async function () {
  try {
    await model.loadSpider();
    headerView.render(model.state.heroSummary);
  } catch (err) {
    console.log(err);
  }
};

const init = async function () {
  await controlHeader();
  await controlComics();
  await controlSeries();
};
init();

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
