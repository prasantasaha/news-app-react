import { List, fromJS } from "immutable";
import NewsAPI from "newsapi";

const newsapi = new NewsAPI("0c9f7b4f133c473baee1c231e2af9845");

const INITIAL_STATE = fromJS({
  sideBarExpanded: false,
  categories: List([
    "Business",
    "Entertainment",
    "General",
    "Gealth",
    "Science",
    "Sports",
    "Technology"
  ]),
  selectedCategory: "sports",
  sources: List([]),
  articles: List([])
});

// the reducer
export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "setNewsData":
      return state.set(action.key, action.value);
    default:
      return state;
  }
}

// reducers actions
export function setNewsData(key, val) {
  return { type: "setNewsData", key: key, value: val };
}

export function toggleSideBar(flag) {
  return dispatch => {
    dispatch(setNewsData("sideBarExpanded", flag));
  };
}

export function updateCategory(category) {
  return dispatch => {
    dispatch(
      setNewsData("selectedCategory", category ? category.toLowerCase() : null)
    );
  };
}

// Async actions
export function getSources() {
  return dispatch => {
    newsapi.v2.sources().then(data => {
      dispatch(setNewsData("sources", List(data.sources)));
    });
  };
}

export function getTopHeadlines() {
  return (dispatch, getState) => {
    let category = getState().NewsData.get("selectedCategory");
    let options = {
      language: "en",
      country: "us"
    };
    if (category) {
      options.category = category;
    }
    newsapi.v2.topHeadlines(options).then(result => {
      dispatch(setNewsData("articles", List(result.articles)));
    });
  };
}

export function findNewsArticles() {
  return (dispatch, getState) => {
    let searchTerm = getState().NewsData.get("searchTerm");
    let options = {
      language: "en",
      country: "us"
    };
    if (searchTerm) {
      options.q = searchTerm; //TODO: add support for advanced search and pagination
    }
    newsapi.v2.everything(options).then(result => {
      dispatch(setNewsData("articles", List(result.articles)));
    });
  };
}
