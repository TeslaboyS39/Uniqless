import {
  PRODUCTS_FETCH_SUCCESS,
  PRODUCTS_FETCH_START,
  PRODUCTS_FETCH_FAILED,
  PRODUCT_DETAIL_FETCH_SUCCESS,
  PRODUCT_DETAIL_FETCH_START,
  PRODUCT_DETAIL_FETCH_FAILED,
} from "./actionType";

// FETCH PRODUCTS SYNCHRONOUS SECTION
export const fetchProductsStart = () => {
  return {
    type: PRODUCTS_FETCH_START,
  };
};

export const fetchProductsSuccess = (data) => {
  return {
    type: PRODUCTS_FETCH_SUCCESS,
    payload: data,
  };
};

export const fetchProductsFailed = (data) => {
  return {
    type: PRODUCTS_FETCH_FAILED,
    payload: data,
  };
};

// FETCH PRODUCTS ASYNCHRONOUS SECTION
const baseUrl = "http://localhost:3000";
export const fetchProductsAsyncSuccess = () => {
  return (dispatch) => {
    dispatch(fetchProductsStart());
    fetch(baseUrl + "/products")
      .then((res) => res.json())
      .then((data) => {
        const action = fetchProductsSuccess(data);
        dispatch(action);
      })
      .catch((err) => {
        console.log(err);
        dispatch(fetchProductsFailed(err));
      });
  };
};

// FETCH DETAIL PRODUCT SYNCHRONOUS
const productDetailFetchStart = () => {
  return {
    type: PRODUCT_DETAIL_FETCH_START,
  };
};

const productDetailFetchSuccess = (data) => {
  return {
    type: PRODUCT_DETAIL_FETCH_SUCCESS,
    payload: data,
  };
};

const productDetailFetchFailed = (data) => {
  return {
    type: PRODUCT_DETAIL_FETCH_FAILED,
    payload: data,
  };
};

// FETCH DETAIL PRODUCT ASYNCHRONOUS
export const fetchProductDetailAsync = (productId) => {
  return (dispatch) => {
    dispatch(productDetailFetchStart());
    fetch(`http://localhost:3000/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        const action = productDetailFetchSuccess(data);
        dispatch(action);
      })
      .catch((err) => {
        console.log(err);
        dispatch(productDetailFetchFailed(err));
      });
  };
};
