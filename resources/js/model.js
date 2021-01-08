import { AUTH, gateway } from './config.js';
import { getJSON } from './helper.js';

export const state = {
  heroSummary: {},
  comics: [],
  series: [],
};

export const loadSpider = async function () {
  try {
    const spiderData = await getJSON(`${gateway}${AUTH}`);
    console.log(spiderData);
    state.heroSummary = {
      heroName: spiderData.name,
      heroDesc: spiderData.description,
      someComics: spiderData.comics.items
        .slice(8, 12)
        .map(comic => comic.resourceURI),
      someSeries: spiderData.series.items.map(series => series.resourceURI),
    };
    console.log(state);
  } catch (err) {
    throw err;
  }
};
const getComicsOrSeries = async function (comic = true) {
  try {
    const comicSer = comic
      ? state.heroSummary.someComics
      : state.heroSummary.someSeries;
    const res = comicSer.map(async function (comSer) {
      return await getJSON(`${comSer}?${AUTH}`);
    });
    const data = await Promise.all(res);
    return data;
  } catch (err) {
    throw err;
  }
};
export const loadComics = async function () {
  try {
    const comicData = await getComicsOrSeries();
    comicData.forEach(comic => {
      state.comics.push({
        comicTitle: comic.title,
        comicImage: comic.images,
        comicDesc: comic.description,
        comicCharacters: comic.characters.items.map(chr => chr.name),
      });
    });
  } catch (err) {
    throw err;
  }
};
export const loadSeries = async function () {
  try {
    const seriesData = await getComicsOrSeries(false);

    seriesData
      .filter(ser => !ser.thumbnail.path.includes('image_not_available'))
      .slice(0)
      .forEach(series => {
        state.series.push({
          seriesTitle: series.title,
          seriesImage: series.thumbnail,
        });
      });

    //hello
  } catch (err) {
    throw err;
  }
};
