import axios from "axios";

export const fetchInventory = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_INVENTORY_LOADING" });
    const response = await axios.get(
      "https://inventory-management-api.deepanshisharm2.repl.co/api/inventory"
    );

    if (response.data.success === true) {
      dispatch({
        type: "FETCH_INVENTORY_SUCCESS",
        payload: response.data.inventory,
      });
    }
  } catch (error) {
    dispatch({
      type: "FETCH_INVENTORY_FAILURE",
      error: "error fetching inventory ",
    });
  }
};

export const postInventory = (newItem) => async (dispatch) => {
  try {
    dispatch({ type: "POST_INVENTORY_LOADING" });
    const response = await axios.post(
      "https://inventory-management-api.deepanshisharm2.repl.co/api/inventory",
      newItem
    );

    if (response.data.success === true) {
      dispatch({
        type: "POST_INVENTORY_SUCCESS",
        payload: response.data.inventoryItem,
      });
    }
  } catch (error) {
    dispatch({
      type: "POST_INVENTORY_FAILURE",
      error: "error posting inventory ",
    });
  }
};

export const updateInventory = (updatedFields, itemId) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_INVENTORY_LOADING" });
    const response = await axios.put(
      `https://inventory-management-api.deepanshisharm2.repl.co/api/inventory/${itemId}`,
      updatedFields
    );
    if (response.data.success === true) {
      dispatch({
        type: "UPDATE_INVENTORY_SUCCESS",
        payload: response.data.inventoryItem,
      });
    }
  } catch (error) {
    dispatch({
      type: "UPDATE_INVENTORY_FAILURE",
      error: "error updating inventory ",
    });
  }
};

export const deleteInventory = (itemId) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_INVENTORY_LOADING" });
    const response = await axios.delete(
      `https://inventory-management-api.deepanshisharm2.repl.co/api/inventory/${itemId}`
    );
    console.log("put request", response.data);
    if (response.data.success === true) {
      dispatch({
        type: "DELETE_INVENTORY_SUCCESS",
        payload: response.data.inventoryItem,
      });
    }
  } catch (error) {
    dispatch({
      type: "DELETE_INVENTORY_FAILURE",
      error: "error deleting inventory ",
    });
  }
};
