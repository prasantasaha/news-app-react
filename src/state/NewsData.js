import { List, fromJS } from "immutable";
import NewsAPI from "newsapi";

const newsapi = new NewsAPI("0c9f7b4f133c473baee1c231e2af9845");

const INITIAL_STATE = fromJS({
  categories: List([
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology"
  ]),
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

// Async actions
export function getTopHeadlines() {
  return (dispatch) => {
    newsapi.v2
      .topHeadlines({
        language: "en",
        country: "us"
      })
      .then(result => {
        dispatch(setNewsData("articles", List(result.articles)));
      });
  };
}
