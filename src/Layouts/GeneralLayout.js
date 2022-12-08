import React from 'react';
import Menu from '../components/Menu.js';
import { Outlet } from 'react-router-dom';

const GeneralLayout = () => {
  return (
    <div className='p-5 text-sm'>
      <Menu />
      <Outlet />
    </div>
  );
};

export default GeneralLayout;