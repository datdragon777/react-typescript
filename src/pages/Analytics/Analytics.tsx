// Library
import React, { useState, useCallback, lazy, Suspense } from 'react';
import useSWR from 'swr';

// Import style for Analytics component
import './Analytics.css';

// Import service to call API
import { getAllCustomerService, deleteCustomerService } from '@services';

// Import images or icons
import { plusIcon } from '@assets/images';

// Import components
import {
  Button,
  SortData,
  CustomerItem,
  FormValidation,
  Popup,
  ProfileInfo,
  Loading,
} from '@components';

// Import constant
import {
  BUTTON_VARIANTS,
  BASE_URL,
  PATH,
  MESSAGES,
  ACTION_TYPES_CUSTOMER,
  TOAST_TYPES,
} from '@constants';

// Import list data for Expand component
import { sortTitles } from '@mocks';

// Custom hook
import { useCustomerContext } from '@hooks';

// Import Type
import { ICustomer, ISortTitle, IToast } from '@types';

const FormValidationLazy = lazy(
  () => import('../../components/FormValidation/FormValidation')
);
const PopupLazy = lazy(() => import('../../components/Popup/Popup'));

interface Props {
  onShowToast: IToast;
}

const Analytics: React.FC<Props> = ({ onShowToast }) => {
  // State variables
  const [selectedCustomer, setSelectedCustomer] = useState<ICustomer | null>(
    null
  );
  const [isShowProfileInfo, setIsShowProfileInfo] = useState<boolean>(false);
  const [isShowContextMenu, setIsShowContextMenu] = useState<boolean>(false);
  const [isShowPopup, setIsShowPopup] = useState<boolean>(false);
  const [isShowForm, setIsShowForm] = useState<boolean>(false);
  const { state, getListCustomerDispatch, deleteCustomerDispatch } =
    useCustomerContext();
  const { customers } = state;

  // Open or Close form
  const handleToggleForm = useCallback(() => {
    setIsShowForm(!isShowForm);
  }, [isShowForm]);

  // Open create customer form
  const handleShowCreateForm = useCallback(() => {
    setSelectedCustomer(null); // Clear the selected customer data
    handleToggleForm();
  }, [handleToggleForm]);

  // Open or close delete popup
  const handleTogglePopup = useCallback(() => {
    setIsShowPopup(!isShowPopup);
  }, [isShowPopup]);

  // Handle delete customer
  const handleDeleteCustomer = useCallback(async () => {
    let toastMessage = MESSAGES.DELETE.SUCCESS;
    let toastType = TOAST_TYPES.SUCCESS;
    const response = await deleteCustomerService(selectedCustomer.id);
    if (response.error) {
      toastMessage = MESSAGES.DELETE.FAIL;
      toastType = TOAST_TYPES.FAIL;
    } else {
      deleteCustomerDispatch(response.data);
      setSelectedCustomer(null);
    }
    handleTogglePopup(); // To close delete popup
    onShowToast(toastMessage, toastType);
  }, [
    selectedCustomer,
    handleTogglePopup,
    deleteCustomerDispatch,
    onShowToast,
  ]);

  // Event handler for clicking a customer
  const handleShowProfileInfo = useCallback(
    (customer: ICustomer) => {
      // If clicked on the same customer that is already selected, toggle the profile show
      if (selectedCustomer && selectedCustomer.id === customer.id) {
        setSelectedCustomer(null);
        setIsShowProfileInfo(!isShowProfileInfo);
      } else {
        // If clicked on a different customer, select the new customer and show the new profile
        setSelectedCustomer(customer);
        setIsShowProfileInfo(true);
      }
    },
    [selectedCustomer, isShowProfileInfo]
  );

  // Event handler for showing context menu
  const handleShowContextMenu = useCallback(
    (e: React.MouseEvent<HTMLDivElement>, customer: ICustomer) => {
      e.stopPropagation();
      // If clicked on the same customer that is already selected, toggle the context menu show
      if (selectedCustomer && selectedCustomer.id === customer.id) {
        setIsShowContextMenu(!isShowContextMenu);
      } else {
        // If clicked on a different customer, select the new customer and show the new context menu
        setSelectedCustomer(customer);
        setIsShowContextMenu(true);
      }
    },
    [selectedCustomer, isShowContextMenu]
  );

  const { error: isError, isLoading } = useSWR(
    `${BASE_URL}/${PATH}`,
    getAllCustomerService,
    {
      shouldRetryOnError: false, // avoiding call API continuously when occur error
      onSuccess: (data) => {
        getListCustomerDispatch(data);
      },
    }
  );

  // Render the list of customers
  const renderCustomerList = useCallback(() => {
    return (
      <ul className='customer__list'>
        {customers.map((customer: ICustomer) => (
          <CustomerItem
            key={customer.id + customer.name}
            customer={customer}
            selectedCustomer={selectedCustomer}
            isShowContextMenu={isShowContextMenu}
            onShowContextMenu={handleShowContextMenu}
            onShowProfileInfo={handleShowProfileInfo}
            onToggleForm={handleToggleForm}
            onToggleDeletePopup={handleTogglePopup}
          />
        ))}
      </ul>
    );
  }, [
    customers,
    selectedCustomer,
    isShowContextMenu,
    handleShowProfileInfo,
    handleTogglePopup,
    handleShowContextMenu,
    handleToggleForm,
  ]);

  return (
    <>
      <div className='analytics'>
        <div className='analytics__header'>
          <h2 className='title__page'>Customer List</h2>
          <Button
            btnName='Add Customer'
            variant={BUTTON_VARIANTS.SECONDARY}
            icon={plusIcon}
            onClick={handleShowCreateForm}
          />
        </div>
        {isLoading ? (
          // Check loading status
          <Loading />
        ) : customers.length ? (
          <div className='customer__table'>
            {/* Start sort title */}
            <div className='customer__sort'>
              {sortTitles.map((sortTitle: ISortTitle) => (
                <div
                  className='sort__item col-3'
                  key={sortTitle.id + sortTitle.title}
                >
                  <SortData name={sortTitle.title} />
                </div>
              ))}
            </div>
            {renderCustomerList()}
          </div>
        ) : (
          // Show message when list is empty
          <p className='empty__message'>{MESSAGES.EMPTY_LIST}</p>
        )}
        {isError && onShowToast(MESSAGES.GET.FAIL, TOAST_TYPES.FAIL)}
      </div>

      {/* Show information of selected customer */}
      {selectedCustomer && isShowProfileInfo && (
        <ProfileInfo selectedCustomer={selectedCustomer} />
      )}

      {/* Show form to create customer */}
      {isShowForm && (
        <Suspense
          fallback={
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Loading />
            </div>
          }
        >
          <FormValidationLazy
            onToggleForm={handleToggleForm}
            selectedCustomer={selectedCustomer}
            setSelectedCustomer={setSelectedCustomer}
            onShowToast={onShowToast}
          />
        </Suspense>
      )}

      {/* Show delete popup */}
      {isShowPopup && (
        <Suspense
          fallback={
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Loading />
            </div>
          }
        >
          <PopupLazy
            popupText='Are you sure to delete customer?'
            onTogglePopup={handleTogglePopup}
            onConfirm={handleDeleteCustomer}
          />
        </Suspense>
      )}
    </>
  );
};

export default Analytics;
