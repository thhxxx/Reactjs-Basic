import React from 'react';
import { NavLink } from 'react-router-dom';
import { initMenu } from '../config/init-state.js';

const Menu = () => {
  return (
    <nav>
      <ul className='text-center bg-sky-400/10 inline-flex rounded-full'>
        {
          initMenu.map((value, index) => {
            return <li className='py-2.5 px-5 text-sky-600 first:rounded-l-full' key={index}>
              <NavLink to={value.link_to}>
                {value.name}
              </NavLink>
            </li>;
          })
        }
      </ul>
    </nav>
  );
};

export default Menu;