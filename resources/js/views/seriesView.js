import View from './View.js';

class SeriesView extends View {
  _parentEl = document.querySelector('.show-display');
  _generateMarkup() {
    return `<div class="row show-display">
    <img
      src="${this._data[2].seriesImage.path}/standard_xlarge.${this._data[2].seriesImage.extension}"
      alt="Series Cover"
      class="series-picture "
    />
    <h3 class="series-title">${this._data[2].seriesTitle}</h3>`;
  }
}
export default new SeriesView();
