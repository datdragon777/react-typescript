import React, { useReducer, createContext, ReactNode, Dispatch } from 'react';
import { initialCustomer, customerReducer, actionReducerCustomer } from '@stores';
import { ACTION_TYPES_CUSTOMER } from '@constants';
import { ICustomer } from '@types';

interface CustomerProviderProps {
  children: ReactNode;
}

interface CustomerContextProps {
  state: typeof initialCustomer;
  dispatch: Dispatch<unknown>;
  getListCustomerDispatch: (data: ICustomer) => void;
  createCustomerDispatch: (data: ICustomer) => void;
  updateCustomerDispatch: (data: ICustomer) => void;
  deleteCustomerDispatch: (data: ICustomer) => void;
}

const initialContextValue: CustomerContextProps = {
  state: initialCustomer,
  dispatch: () => {},
  getListCustomerDispatch: () => {},
  createCustomerDispatch: () => {},
  updateCustomerDispatch: () => {},
  deleteCustomerDispatch: () => {},
};

export const CustomerContext = createContext<CustomerContextProps>(initialContextValue);

export const CustomerProvider: React.FC<CustomerProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(customerReducer, initialCustomer);

  const getListCustomerDispatch = (data: ICustomer) => {
    dispatch(actionReducerCustomer(ACTION_TYPES_CUSTOMER.GET_LIST, data));
  };

  const createCustomerDispatch = (data: ICustomer) => {
    dispatch(actionReducerCustomer(ACTION_TYPES_CUSTOMER.ADD, data));
  };

  const updateCustomerDispatch = (data: ICustomer) => {
    dispatch(actionReducerCustomer(ACTION_TYPES_CUSTOMER.UPDATE, data));
  };

  const deleteCustomerDispatch = (data: ICustomer) => {
    dispatch(actionReducerCustomer(ACTION_TYPES_CUSTOMER.DELETE, data));
  };

  const customerContextValue: CustomerContextProps = {
    state,
    dispatch,
    getListCustomerDispatch,
    createCustomerDispatch,
    updateCustomerDispatch,
    deleteCustomerDispatch,
  };

  return (
    <CustomerContext.Provider value={customerContextValue}>
      {children}
    </CustomerContext.Provider>
  );
};