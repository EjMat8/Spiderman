import { mark } from 'regenerator-runtime';

export default class View {
  _data;
  _section = document.querySelectorAll('section');
  _body = document.querySelector('body');
  _content = document.querySelector('.content');
  _spinner;

  render(data) {
    this._data = data;
    const markup = this._generateMarkup();

    this._clear();
    this._parentEl.insertAdjacentHTML('beforeend', markup);
  }
  initRender() {
    this._spinner = document.querySelector('.loader');
    this._spinner.remove();
    this._content.classList.remove('hidden');
  }
  _clear() {
    this._parentEl.innerHTML = '';
  }
  renderSpinner() {
    const markup = `<div class="loader">Loading...</div>`;
    this._body.insertAdjacentHTML('afterbegin', markup);
  }
}
