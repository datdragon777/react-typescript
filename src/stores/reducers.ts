import { ACTION_TYPES_CUSTOMER } from '@constants';

export const initialCustomer = {
  customers: [],
};

export const customerReducer = (state, action) => {
  const { type, payload } = action;
  const { customers } = state;
  switch (type) {
    case ACTION_TYPES_CUSTOMER.GET_LIST: {
      return { ...state, customers: payload}
    }
    case ACTION_TYPES_CUSTOMER.ADD: {
      return { ...state, customers: [payload, ...customers] };
    }
    case ACTION_TYPES_CUSTOMER.UPDATE: {
      const updatedCustomer = customers.map((customer) => {
        if (customer.id === payload.id) {
          return { ...customer, ...payload };
        }
        return customer;
      });
      return { ...state, customers: updatedCustomer };
    }
    case ACTION_TYPES_CUSTOMER.DELETE: {
      const filteredCustomers = customers.filter(
        (customer) => customer.id !== payload.id
      );
      return { ...state, customers: filteredCustomers };
    }
    default:
      return state;
  }
};
