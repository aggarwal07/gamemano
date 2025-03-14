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
    ratings: 0,
    sortBy: null,
  },
  productsFetched: [],
  productSelected: null,
  productCategories: [],
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
    case ReduxValues.GlobalActions.SET_PRODUCTS_FETCHED:
      newState = {
        ...oldstate,
        productsFetched: action.productsFetched,
      };
      break;

    case ReduxValues.GlobalActions.SET_CATEGORIES:
      newState = {
        ...oldstate,
        productCategories: action.productCategories,
      };
      break;

    case ReduxValues.GlobalActions.SET_PRODUCT_SELECTED:
      newState = {
        ...oldstate,
        productSelected: action.productSelected,
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
