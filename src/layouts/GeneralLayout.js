import React, { useEffect } from 'react';
import Menu from '../components/Menu.js';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCities, getDistricts } from '../reducers/LocationReducer.js';

const GeneralLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCities());
    dispatch(getDistricts());
  }, [dispatch]);

  return (
    <div className='text-sm'>
      <div className='flex h-screen	'>
        <div className='w-80 bg-sky-600 p-5'>
          <Menu />
        </div>
        <div className='grow p-5'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default GeneralLayout;