import ReduxValues from "../ReduxValues";

export const isLoading = (flag = false) => {
  return {
    type: ReduxValues.GlobalActions.SET_IS_LOADING,
    isLoading: flag,
  };
};
export const isSnackBarOpen = ({ isOpen = false, msg, customIcon }) => {
  return {
    type: ReduxValues.GlobalActions.SET_SNACKBAR,
    isOpen,
    msg,
    customIcon,
  };
};
export const setFilterSettings = ({
  categories = null,
  lowerPriceRange = 0,
  upperPriceRange = 1000,
  ratings = null,
  sortBy = null,
} = {}) => {
  return {
    type: ReduxValues.GlobalActions.SET_FILTER_SETTINGS,
    categories,
    lowerPriceRange,
    upperPriceRange,
    ratings,
    sortBy,
  };
};
export const setProductsFetched = (productsFetched = []) => {
  return {
    type: ReduxValues.GlobalActions.SET_PRODUCTS_FETCHED,
    productsFetched,
  };
};

export const setCategories = (productCategories = []) => {
  return {
    type: ReduxValues.GlobalActions.SET_CATEGORIES,
    productCategories,
  };
};

export const setProductSelected = (productSelected = null) => {
  return {
    type: ReduxValues.GlobalActions.SET_PRODUCT_SELECTED,
    productSelected,
  };
};
