import View from './View.js';

class HeaderView extends View {
  _parentEl = document.querySelector('.text-part-header');
  _nav = document.querySelector('.main-nav');
  _btn;
  _generateMarkup() {
    return `<p>
    ${this._data.heroDesc}
    </p>
    <h1 class="header-hero_name">${this._data.heroName}</h1>
    <p>sup you suck</p>
    <button class="btn btn-show">SHOW ME MORE</button>`;
  }
  scrollBtn() {
    const sectionC = Array.from(this._section)
      .filter(sec => sec.classList.contains('section-comics'))
      .reduce((_, sec) => sec);
    this._btn = document.querySelector('.btn-show');
    this._btn.addEventListener('click', function () {
      sectionC.scrollIntoView({ behavior: 'smooth' });
    });
  }
  navScrolling() {
    this._nav.addEventListener('click', function (e) {
      e.preventDefault();
      if (!e.target.closest('.nav_link')) return;
      const id = e.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    });
  }
}
export default new HeaderView();

// const sectionC = document.querySelector('.section-comics');
// const btn = document.querySelector('.btn-show');
// btn.addEventListener('click', function () {
//   console.log('hi');
//   sectionC.scrollIntoView({ behavior: 'smooth' });
// });
