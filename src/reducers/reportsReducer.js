const initialReportState = {
  inventoryReport: {
    inventoryRevenue: 0,
    inventoryItems: [],
  },
  salesReport: {
    salesRevenue: 0,
    salesItems: [],
  },
  loading: false,
  error: null,
};

export const reportsReducer = (state = initialReportState, action) => {
  switch (action.type) {
    case "FETCH_INVENTORY_REPORT": {
      return {
        ...state,
        inventoryReport: action.payload,
        loading: false,
        error: null,
      };
    }
    case "FETCH_SALES_REPORT": {
      return {
        ...state,
        salesReport: action.payload,
        loading: false,
        error: null,
      };
    }

    default: {
      return state;
    }
  }
};
