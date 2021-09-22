/* eslint-disable no-use-before-define */
import { List, fromJS } from 'immutable';
import NewsAPI from 'newsapi';

const newsapi = new NewsAPI('0c9f7b4f133c473baee1c231e2af9845');

const INITIAL_STATE = fromJS({
  sideBarExpanded: false,
  isLoading: true,
  language: 'en',
  country: 'us',
  categories: List([
    {
      name: 'business',
      displayName: 'Business',
    },
    {
      name: 'entertainment',
      displayName: 'Entertainment',
    },
    {
      name: 'general',
      displayName: 'General',
    },
    {
      name: 'health',
      displayName: 'Health',
    },
    {
      name: 'science',
      displayName: 'Science',
    },
    {
      name: 'sports',
      displayName: 'Sports',
    },
    {
      name: 'technology',
      displayName: 'Technology',
    },
  ]),
  languages: List([
    { code: 'ar', displayName: 'Arabic' },
    { code: 'de', displayName: 'German' },
    { code: 'en', displayName: 'English' },
    { code: 'es', displayName: 'Spanish' },
    { code: 'fr', displayName: 'French' },
    { code: 'he', displayName: 'Hebrew' },
    { code: 'it', displayName: 'Italian' },
    { code: 'nl', displayName: 'Dutch' },
    { code: 'no', displayName: 'Norwegian' },
    { code: 'pt', displayName: 'Portuguese' },
    { code: 'ru', displayName: 'Russian' },
    { code: 'se', displayName: 'Northern Sami' },
    // { code: "ud", displayName: "" },
    { code: 'zh', displayName: 'Chinese' },
  ]),
  selectedCategory: 'sports',
  sources: List([]),
  articles: List([]),
});

// the reducer
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'setNewsData':
      return state.set(action.key, action.value);
    default:
      return state;
  }
}

// reducers actions
export function setNewsData(key, val) {
  return { type: 'setNewsData', key, value: val };
}

export function toggleSideBar(flag) {
  return dispatch => {
    dispatch(setNewsData('sideBarExpanded', flag));
    document.body.classList.toggle('noscroll', flag);
    /* On some mobile browser when the overlay was previously
    opened and scrolled, if you open it again it doesn't
    reset its scrollTop property */
    document.querySelector('.sidebar ').scrollTop = 0;
  };
}

export function initializeData() {
  return dispatch => {
    const language =
      (navigator.languages && navigator.languages[0]) ||
      navigator.language ||
      navigator.userLanguage;
    const langCountryInfo = language.split('_');

    if (langCountryInfo && langCountryInfo.length > 1) {
      dispatch(setNewsData('language', langCountryInfo[0].loLowerCase()));
      dispatch(setNewsData('country', langCountryInfo[1].toLowerCase()));
    }
    dispatch(setNewsData('selectedCategory', null));
    dispatch(getSources());
  };
}

export function setLang(lang) {
  return dispatch => {
    dispatch(setNewsData('language', lang));
  };
}

export function setCountry(country) {
  return dispatch => {
    dispatch(setNewsData('country', country));
  };
}

export function updateCategory(category) {
  return dispatch => {
    dispatch(setNewsData('selectedCategory', category));
  };
}

// Async actions
export function getSources() {
  return dispatch => {
    newsapi.v2.sources().then(data => {
      dispatch(setNewsData('sources', List(data.sources)));
    });
  };
}

export function getTopHeadlines() {
  return (dispatch, getState) => {
    dispatch(setNewsData('isLoading', true));
    const category = getState().NewsData.get('selectedCategory');
    const options = getDefaultOptions(getState);
    if (category && category.name) {
      options.category = category.name;
    }
    newsapi.v2.topHeadlines(options).then(result => {
      dispatch(setNewsData('articles', List(result.articles)));
      dispatch(setNewsData('isLoading', false));
    });
  };
}

export function findNewsArticles() {
  return (dispatch, getState) => {
    dispatch(setNewsData('isLoading', true));
    const searchTerm = getState().NewsData.get('searchTerm');
    const options = getDefaultOptions(getState);
    if (searchTerm) {
      options.q = searchTerm; // TODO: add support for advanced search and pagination
    }
    newsapi.v2.everything(options).then(result => {
      dispatch(setNewsData('articles', List(result.articles)));
      dispatch(setNewsData('isLoading', false));
    });
  };
}

function getDefaultOptions(getState) {
  const options = {
    language: getState().NewsData.get('language'),
    country: getState().NewsData.get('country'),
    pageSize: 50,
  };
  return options;
}
