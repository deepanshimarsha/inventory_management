export const getInventoryReport = (inventory) => (dispatch) => {
  const inventoryRevenue = inventory.reduce(
    (acc, curr) => curr.price * curr.quantity + acc,
    0
  );

  const inventoryItems = inventory.map(({ name, quantity }) => ({
    name,
    quantity,
  }));

  dispatch({
    type: "FETCH_INVENTORY_REPORT",
    payload: { inventoryRevenue, inventoryItems },
  });
};

export const getSalesReport = (sales) => (dispatch) => {
  const salesRevenue = sales.reduce(
    (acc, curr) => curr.price * curr.quantity + acc,
    0
  );

  const salesItems = sales.map(({ name, quantity }) => ({
    name,
    quantity,
  }));

  dispatch({
    type: "FETCH_SALES_REPORT",
    payload: { salesRevenue, salesItems },
  });
};
