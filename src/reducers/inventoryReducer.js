const initialInventoryState = {
  inventory: [],
  loading: false,
  error: null,
};

export const inventoryReducer = (state = initialInventoryState, action) => {
  switch (action.type) {
    case "FETCH_INVENTORY_SUCCESS": {
      return {
        ...state,
        inventory: action.payload,
        loading: false,
        error: null,
      };
    }
    case "FETCH_INVENTORY_FAILURE": {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    case "FETCH_INVENTORY_LOADING": {
      return {
        ...state,
        loading: true,
      };
    }
    case "POST_INVENTORY_SUCCESS": {
      return {
        ...state,
        inventory: [...state.inventory, action.payload],
        loading: false,
        error: null,
      };
    }
    case "POST_INVENTORY_FAILURE": {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    case "POST_INVENTORY_LOADING": {
      return {
        ...state,
        loading: true,
      };
    }
    case "UPDATE_INVENTORY_SUCCESS": {
      return {
        ...state,
        inventory: state.inventory.map((item) => {
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
    case "UPDATE_INVENTORY_FAILURE": {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    case "UPDATE_INVENTORY_LOADING": {
      return {
        ...state,
        loading: true,
      };
    }

    case "DELETE_INVENTORY_SUCCESS": {
      return {
        ...state,
        inventory: state.inventory.filter(
          (item) => item._id !== action.payload._id
        ),
        loading: false,
        error: null,
      };
    }
    case "DELETE_INVENTORY_FAILURE": {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    case "DELETE_INVENTORY_LOADING": {
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
