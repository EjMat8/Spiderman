import View from './View.js';

class HeaderView extends View {
  _parentEl = document.querySelector('.text-part-header');

  _generateMarkup() {
    return `<p>
    ${this._data.heroDesc}
    </p>
    <h1 class="header-hero_name">${this._data.heroName}</h1>
    <a href="#" class="btn">SHOW ME MORE</a>`;
  }
}
export default new HeaderView();
