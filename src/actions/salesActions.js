import axios from "axios";

export const fetchSales = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_SALES_LOADING" });
    const response = await axios.get(
      "https://inventory-management-api.deepanshisharm2.repl.co/api/sales"
    );

    if (response.data.success === true) {
      dispatch({
        type: "FETCH_SALES_SUCCESS",
        payload: response.data.sales,
      });
    }
  } catch (error) {
    dispatch({
      type: "FETCH_SALES_FAILURE",
      error: "error fetching sales ",
    });
  }
};

export const postSales = (newItem) => async (dispatch) => {
  try {
    dispatch({ type: "POST_SALES_LOADING" });
    const response = await axios.post(
      "https://inventory-management-api.deepanshisharm2.repl.co/api/sales",
      newItem
    );

    if (response.data.success === true) {
      dispatch({
        type: "POST_SALES_SUCCESS",
        payload: response.data.salesItem,
      });
    }
  } catch (error) {
    dispatch({
      type: "POST_SALES_FAILURE",
      error: "error posting sales ",
    });
  }
};

export const updateSales = (updatedFields, itemId) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_SALES_LOADING" });
    const response = await axios.put(
      `https://inventory-management-api.deepanshisharm2.repl.co/api/sales/${itemId}`,
      updatedFields
    );
    if (response.data.success === true) {
      dispatch({
        type: "UPDATE_SALES_SUCCESS",
        payload: response.data.salesItem,
      });
    }
  } catch (error) {
    dispatch({
      type: "UPDATE_SALES_FAILURE",
      error: "error updating sales ",
    });
  }
};

export const deleteSales = (itemId) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_SALES_LOADING" });
    const response = await axios.delete(
      `https://inventory-management-api.deepanshisharm2.repl.co/api/sales/${itemId}`
    );

    if (response.data.success === true) {
      dispatch({
        type: "DELETE_SALES_SUCCESS",
        payload: response.data.salesItem,
      });
    }
  } catch (error) {
    dispatch({
      type: "DELETE_SALES_FAILURE",
      error: "error deleting sales ",
    });
  }
};

export const filterSales = () => async (dispatch) => {
  try {
    dispatch({ type: "FILTER_SALES_LOADING" });
    const response = await axios.get(
      "https://inventory-management-api.deepanshisharm2.repl.co/api/sales/sort"
    );

    if (response.data.success === true) {
      dispatch({
        type: "FILTER_SALES_SUCCESS",
        payload: response.data.sortedSales,
      });
    }
  } catch (error) {
    dispatch({
      type: "FILETR_SALES_FAILURE",
      error: "error sorting sales ",
    });
  }
};
