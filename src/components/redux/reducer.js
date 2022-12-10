//import { ADD_FAVORITES, DELETE_FAVORITES } from "./types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_FAVORITES":
      //state.myFavorites.push(action.payload)
      return {
        ...state,
        myFavorites: [...state.allCharacters, action.payload], //, action.payload
        allCharacters: [...state.allCharacters, action.payload],
      };

    case "DELETE_FAVORITES":
      const filtered = state.myFavorites.filter(
        (fav) => fav.id !== action.payload
      );
      return {
        ...state,
        myFavorites: filtered,
      };

    case "FILTER":
      //console.log(action.payload);
      const filteredChar = state.allCharacters.filter(
        (char) => char.gender === action.payload
      );
      return {
        ...state,
        myFavorites: action.payload === 'All' ? state.allCharacters : filteredChar,
      };

    case 'ORDER':
      const orderChar = state.allCharacters.sort((a,b) => {
        if(action.payload === 'ascendente'){
          if(a.id < b.id) return -1
          if(b.id < a.id) return 1
          return 0;
        }else {
          if(a.id < b.id) return 1
          if(b.id < a.id) return -1
          return 0;
        }
      })
    return{
      ...state,
      myFavorites: [...orderChar]
    }

    default:
      return { ...state }; //state 'solo'
  }
}
