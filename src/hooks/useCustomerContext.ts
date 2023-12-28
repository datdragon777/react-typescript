import { useContext } from 'react';
import { CustomerContext } from '@contexts';

const useCustomerContext = () => {
  const {
    state,
    getListCustomerDispatch,
    createCustomerDispatch,
    updateCustomerDispatch,
    deleteCustomerDispatch,
  } = useContext(CustomerContext);

  return {
    state,
    getListCustomerDispatch,
    createCustomerDispatch,
    updateCustomerDispatch,
    deleteCustomerDispatch,
  };
};

export default useCustomerContext;
