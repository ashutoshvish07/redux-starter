import {
  GET_FEEDS_LOADING,
  GET_FEEDS_SUCCESS,
  GET_FEEDS_ERROR,
} from "./feed.type";

const init = {
  getFeeds: {
    loading: false,
    error: false,
  },
  data: [],
};

export const feedReducer = (state = init, { type, payload }) => {
  // console.log("payload", payload);
  switch (type) {
    case GET_FEEDS_LOADING: {
      return {
        ...state,
        getFeeds: {
          ...state.getFeeds,
          loading: true,
          error: false,
        },
      };
    }
    case GET_FEEDS_SUCCESS: {
      return {
        ...state,
        getFeeds: {
          ...state.getFeeds,
          loading: false,
          error: false,
        },
        data: payload,
      };
    }
    case GET_FEEDS_ERROR: {
      return {
        ...state,
        getFeeds: {
          ...state.getFeeds,
          loading: false,
          error: true,
        },
      };
    }

    default: {
      return state;
    }
  }
};
