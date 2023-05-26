import React from "react";
import {
  TOGGLE_FAVORITES,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
} from "../actions/favoritesActions.js";

const initialState = {
  favorites: [],
  displayFavorites: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITES:
      return {
        ...state,
        displayFavorites: !state.displayFavorites,
      };
    case ADD_FAVORITE:
      const isAdded = state.favorites.find(
        (favorite) => favorite.id === action.payload.id
      );
      if (isAdded) {
        alert("Already added");
        return state;
      } else {
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
      }
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(
          (item) => action.payload.id !== item.id
        ),
      };
    default:
      return state;
  }
};

export default reducer;
