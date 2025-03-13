import ReduxValues from "../ReduxValues";

let initialState = {
  snackbar: {
    isOpen: false,
    msg: null,
    customIcon: null,
  },
  isLoading: false,
  filters: {
    categories: "",
    lowerPriceRange: 0,
    upperPriceRange: 1000,
    ratings: null,
    sortBy: null,
  },
};
const saveCartToLocalStorage = (cart) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }
};

const reducer = (oldstate = initialState, action) => {
  let newState;

  switch (action.type) {
    case ReduxValues.GlobalActions.SET_IS_LOADING:
      newState = {
        ...oldstate,
        isLoading: action.isLoading,
      };
      break;
    case ReduxValues.GlobalActions.SET_SNACKBAR:
      newState = {
        ...oldstate,
        snackbar: {
          msg: action.message || null,
          isOpen: action.isOpen || false,
          customIcon: action.icon || null,
        },
      };
      break;
    case ReduxValues.GlobalActions.SET_FILTER_SETTINGS:
      newState = {
        ...oldstate,
        filters: {
          ...oldstate.filters,
          categories: action.categories ?? oldstate.filters.categories,
          lowerPriceRange:
            action.lowerPriceRange ?? oldstate.filters.lowerPriceRange,
          upperPriceRange:
            action.upperPriceRange ?? oldstate.filters.upperPriceRange,
          ratings: action.ratings ?? oldstate.filters.ratings,
          sortBy: action.sortBy ?? oldstate.filters.sortBy,
        },
      };
      break;
    default:
      newState = oldstate;
  }

  // Save the new state to localStorage
  // saveStateToLocalStorage(newState);

  return newState;
};

export default reducer;
