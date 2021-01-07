import View from './View.js';
class ComicView extends View {
  _parentEl = document.querySelector('.comic__output');
  _generateMarkup() {
    return this._formMarkup();
  }

  _formMarkup() {
    return this._data
      .map(
        data => `<div class="row comic-row">
      <div class="col span-1-of-2 img-cont">
        <img
          src="${data.comicImage[0].path}/portrait_fantastic.${
          data.comicImage[0].extension
        }"
          alt="comic image"
          class="comic-image"
        />
      </div>
      <div class="col span-1-of-2 text-cont">
        <h3 class="comic-title">${data.comicTitle}</h3>
        <p class="character-names">${data.comicCharacters.join(', ')}</p>
        <p class="description">
          ${data.comicDesc}
        </p>
      </div>
    </div>`
      )
      .join('');
  }
}
export default new ComicView();
