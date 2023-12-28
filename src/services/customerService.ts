import { BASE_URL, PATH, SERVICE_TYPES_CUSTOMER } from '@constants';

// Get customer list
const getAllCustomerService = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('An error occurred while fetching the data.');
  }
  const data = await response.json();
  return data;
};

const services = async (path, method, data) => {
  const url = `${BASE_URL}/${path}`;
  try {
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const dataResponse = await response.json();

    if (response.ok) {
      return { data: dataResponse, error: null };
    } else {
      return { error: dataResponse };
    }
  } catch (error) {
    return { error };
  }
};

// Create customer
const createCustomerService = async (customerData) => {
  return await services(`${PATH}`, SERVICE_TYPES_CUSTOMER.CREATE, customerData);
};

// Update customer
const updateCustomerService = async (id, customerData) => {
  return await services(`${PATH}/${id}`, SERVICE_TYPES_CUSTOMER.UPDATE, customerData);
};

// Delete customer
const deleteCustomerService = async (id) => {
  return await services(`${PATH}/${id}`, SERVICE_TYPES_CUSTOMER.DELETE);
};

export {
  getAllCustomerService,
  createCustomerService,
  updateCustomerService,
  deleteCustomerService,
};
