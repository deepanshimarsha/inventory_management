const initialSalesState = {
  sales: [],
  orignalSales: [],
  loading: false,
  error: null,
};

export const salesReducer = (state = initialSalesState, action) => {
  switch (action.type) {
    case "FETCH_SALES_SUCCESS": {
      return {
        ...state,
        sales: action.payload,

        loading: false,
        error: null,
      };
    }
    case "FETCH_SALES_FAILURE": {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    case "FETCH_SALES_LOADING": {
      return {
        ...state,
        loading: true,
      };
    }

    case "FILTER_SALES_SUCCESS": {
      return {
        ...state,
        sales: action.payload,

        loading: false,
        error: null,
      };
    }
    case "FILTER_SALES_FAILURE": {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    case "FILTER_SALES_LOADING": {
      return {
        ...state,
        loading: true,
      };
    }
    case "POST_SALES_SUCCESS": {
      return {
        ...state,
        sales: [...state.sales, action.payload],
        orignalSales: [...state.sales, action.payload],
        loading: false,
        error: null,
      };
    }
    case "POST_SALES_FAILURE": {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    case "POST_SALES_LOADING": {
      return {
        ...state,
        loading: true,
      };
    }
    case "UPDATE_SALES_SUCCESS": {
      return {
        ...state,
        sales: state.sales.map((item) => {
          if (item._id === action.payload._id) {
            return action.payload;
          } else {
            return item;
          }
        }),
        orignalSales: state.sales.map((item) => {
          if (item._id === action.payload._id) {
            return action.payload;
          } else {
            return item;
          }
        }),
        loading: false,
        error: null,
      };
    }
    case "UPDATE_SALES_FAILURE": {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    case "UPDATE_SALES_LOADING": {
      return {
        ...state,
        loading: true,
      };
    }

    case "DELETE_SALES_SUCCESS": {
      return {
        ...state,
        sales: state.sales.filter((item) => item._id !== action.payload._id),
        orignalSales: state.sales.filter(
          (item) => item._id !== action.payload._id
        ),
        loading: false,
        error: null,
      };
    }
    case "DELETE_SALES_FAILURE": {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    case "DELETE_SALES_LOADING": {
      return {
        ...state,
        loading: true,
      };
    }
    default: {
      return state;
    }
  }
};
