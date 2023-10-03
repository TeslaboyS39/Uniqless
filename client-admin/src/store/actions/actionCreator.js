import {
  PRODUCTS_FETCH_SUCCESS,
  PRODUCTS_FETCH_START,
  PRODUCTS_FETCH_FAILED,
  CATEGORIES_FETCH_SUCCESS,
  CATEGORIES_FETCH_START,
  CATEGORIES_FETCH_FAILED,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILED,
  ADD_CATEGORY_REQUEST,
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAILED,
  ADD_ADMIN_REQUEST,
  ADD_ADMIN_SUCCESS,
  ADD_ADMIN_FAILED,
  EDIT_PRODUCT_REQUEST,
  EDIT_PRODUCT_SUCCESS,
  EDIT_PRODUCT_FAILED,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILED,
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAILED,
} from "./actionType";
const baseUrl = "http://localhost:3000";

// UNTUK LOGIN
export const handleLogin = (value, callback) => {
  return async (dispatch, getState) => {
    try {
      console.log(baseUrl + "/login");
      const response = await fetch(baseUrl + "/login", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });
      const data = await response.json();

      if (response.ok) {
        callback({ status: true });
        const data = {
          access_token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjk0MzQzMjg1fQ.fFFqbpot-FxwRIoLsm3zAk_DSGwvqnmzkwhef6j-L3Q",
        };

        localStorage.access_token = data.access_token;
      } else {
        throw { ...data };
      }
    } catch (error) {
      console.log(error.message);
    }
  };
};

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
export const fetchProductsAsyncSuccess = () => {
  return (dispatch) => {
    dispatch(fetchProductsStart());
    fetch(baseUrl + "/products")
      .then((res) => res.json())
      .then((data) => {
        // const action = {
        //   type: "products/fetchProductsSuccess",
        //   payload: data,
        // };
        if (data.message) {
          throw { ...data };
        } else {
          const action = fetchProductsSuccess(data);
          dispatch(action);
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(fetchProductsFailed(err));
      });
  };
};

// FETCH CATEGORIES SYNCHRONOUS SECTION
export const fetchCategoriesStart = () => {
  return {
    type: CATEGORIES_FETCH_START,
  };
};

export const fetchCategoriesSuccess = (data) => {
  return {
    type: CATEGORIES_FETCH_SUCCESS,
    payload: data,
  };
};

export const fetchCategoriesFailed = (data) => {
  return {
    type: CATEGORIES_FETCH_FAILED,
    payload: data,
  };
};

// FETCH CATEGORIES ASYNCHRONOUS SECTION
export const fetchCategoriesAsyncSuccess = () => {
  return (dispatch) => {
    dispatch(fetchCategoriesStart());
    fetch(baseUrl + "/categories")
      .then((res) => res.json())
      .then((data) => {
        // const action = {
        //   type: "products/fetchCategoriesSuccess",
        //   payload: data,
        // };

        const action = fetchCategoriesSuccess(data);
        dispatch(action);
      })
      .catch((err) => {
        console.log(err);
        dispatch(fetchCategoriesFailed(err));
      });
  };
};

// ADD PRODUCT SYNCHRONOUS SECTION
export const addProductRequest = () => {
  return {
    type: ADD_PRODUCT_REQUEST,
  };
};

export const addProductSuccess = (data) => {
  return {
    type: ADD_PRODUCT_SUCCESS,
    payload: data,
  };
};

export const addProductFailed = (error) => {
  return {
    type: ADD_PRODUCT_FAILED,
    payload: error,
  };
};

// ADD PRODUCT ASYNCHRONOUS SECTION
export const addProductAsyncSuccess = (productData, navigate) => {
  return (dispatch) => {
    dispatch(addProductRequest());
    fetch(baseUrl + "/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(addProductSuccess(data));
        navigate("/dashboard");
      })
      .catch((error) => {
        dispatch(addProductFailed(error));
      });
  };
};

// ADD CATEGORY SYNCHRONOUS SECTION
export const addCategoryRequest = () => {
  return {
    type: ADD_CATEGORY_REQUEST,
  };
};

export const addCategorySuccess = (data) => {
  return {
    type: ADD_CATEGORY_SUCCESS,
    payload: data,
  };
};

export const addCategoryFailed = (error) => {
  return {
    type: ADD_CATEGORY_FAILED,
    payload: error,
  };
};

// ADD CATEGORY ASYNCHRONOUS SECTION
export const addCategoryAsyncSuccess = (categoryData, navigate) => {
  return (dispatch) => {
    dispatch(addCategoryRequest());
    fetch(baseUrl + "/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(categoryData),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(addCategorySuccess(data));
        navigate("/categories");
      })
      .catch((error) => {
        dispatch(addCategoryFailed(error));
      });
  };
};

// ADD ADMIN SYNCHRONOUS SECTION
export const addAdminRequest = () => {
  return {
    type: ADD_ADMIN_REQUEST,
  };
};

export const addAdminSuccess = (data) => {
  return {
    type: ADD_ADMIN_SUCCESS,
    payload: data,
  };
};

export const addAdminFailed = (error) => {
  return {
    type: ADD_ADMIN_FAILED,
    payload: error,
  };
};

// ADD ADMIN ASYNCHRONOUS SECTION
export const addAdminAsyncSuccess = (adminData, navigate) => {
  return (dispatch) => {
    dispatch(addAdminRequest());
    fetch(baseUrl + "/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(adminData),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(addAdminSuccess(data));
        navigate("/dashboard");
      })
      .catch((error) => {
        dispatch(addAdminFailed(error));
      });
  };
};

// EDIT PRODUCT SYNCHRONOUS SECTION
export const editProductRequest = () => {
  return {
    type: EDIT_PRODUCT_REQUEST,
  };
};

export const editProductSuccess = (data) => {
  return {
    type: EDIT_PRODUCT_SUCCESS,
    payload: data,
  };
};

export const editProductFailed = (error) => {
  return {
    type: EDIT_PRODUCT_FAILED,
    payload: error,
  };
};

// EDIT PRODUCT ASYNCHRONOUS SECTION
export const editProductAsyncSuccess = (productId, productData, navigate) => {
  return (dispatch) => {
    dispatch(editProductRequest());
    fetch(baseUrl + `/products/${productId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(editProductSuccess(data));
        navigate("/dashboard");
      })
      .catch((error) => {
        dispatch(editProductFailed(error));
      });
  };
};

// DELETE PRODUCT SYNCHRONOUS SECTION
export const deleteProductRequest = () => {
  return {
    type: DELETE_PRODUCT_REQUEST,
  };
};

export const deleteProductSuccess = (productId) => {
  return {
    type: DELETE_PRODUCT_SUCCESS,
    payload: productId,
  };
};

export const deleteProductFailed = (error) => {
  return {
    type: DELETE_PRODUCT_FAILED,
    payload: error,
  };
};

// DELETE PRODUCT ASYNCHRONOUS SECTION
export const deleteProductAsyncSuccess = (productId) => {
  return (dispatch) => {
    dispatch(deleteProductRequest());
    fetch(baseUrl + `/products/${productId}`, {
      method: "DELETE",
    })
      .then(() => {
        dispatch(deleteProductSuccess(productId));
      })
      .catch((error) => {
        dispatch(deleteProductFailed(error));
      });
  };
};

// DELETE CATEGORY SYNCHRONOUS SECTION
export const deleteCategoryRequest = () => {
  return {
    type: DELETE_CATEGORY_REQUEST,
  };
};

export const deleteCategorySuccess = (categoryId) => {
  return {
    type: DELETE_CATEGORY_SUCCESS,
    payload: categoryId,
  };
};

export const deleteCategoryFailed = (error) => {
  return {
    type: DELETE_CATEGORY_FAILED,
    payload: error,
  };
};

// DELETE CATEGORY ASYNCHRONOUS SECTION
export const deleteCategoryAsyncSuccess = (categoryId) => {
  return (dispatch) => {
    dispatch(deleteCategoryRequest());
    fetch(baseUrl + `/categories/${categoryId}`, {
      method: "DELETE",
    })
      .then(() => {
        dispatch(deleteCategorySuccess(categoryId));
      })
      .catch((error) => {
        dispatch(deleteCategoryFailed(error));
      });
  };
};
