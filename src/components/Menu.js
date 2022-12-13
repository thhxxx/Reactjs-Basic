import React from 'react';
import { NavLink } from 'react-router-dom';
import { initMenu } from '../config/init-state.js';

const Menu = () => {
  return (
    <nav>
      <ul>
        {
          initMenu.map((value, index) => {
            return <li className='rounded-full px-5 py-2.5 text-white mb-2' key={index}>
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