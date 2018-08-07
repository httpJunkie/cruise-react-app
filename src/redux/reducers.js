import {
  SELECT_SUBREDDIT,
  INVALID_SUBREDDIT,
  REQUEST_POSTS,
  RECEIVE_POSTS
} from './constants';

import { combineReducers } from 'redux';

// Reducer handling the currently selected subreddit
const selectedSubreddit = (state = 'cats', action) => {
  switch (action.type) {
    case SELECT_SUBREDDIT:
      return action.subreddit
    default:
      return state
  }
}

// Helper function for handling posts
const posts = (
  state = {isFetching: false, isInvalid: false, items: []}, action
) => {
  switch (action.type) {
    case INVALID_SUBREDDIT:
      return {
        ...state,
        isInvalid: true
      }
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true,
        isInvalid: false
      }
    case RECEIVE_POSTS:
      return {
        ...state,
        isFetching: false,
        isInvalid: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      }
    default:
      return state
  }
}

// Reducer handling posts by subreddit
const postsBySubreddit = (
  state = {},
  action
) => {
  switch (action.type) {
    case INVALID_SUBREDDIT:
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return {
        ...state,
        [action.subreddit]: posts(state[action.subreddit], action)
      }
    default:
      return state
  }
}

// Combine reducers
const rootReducer = combineReducers({
  postsBySubreddit,
  selectedSubreddit
});

export default rootReducer;