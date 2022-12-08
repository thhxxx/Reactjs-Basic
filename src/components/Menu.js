import React from 'react';
import { NavLink } from 'react-router-dom';
import { initMenu } from '../config/init-state.js';

const Menu = () => {
  return (
    <nav>
      <ul className='text-center bg-sky-400/10 inline-flex rounded-full'>
        {
          initMenu.map(value => {
            return <li className='py-2.5 px-5 text-sky-600 first:rounded-l-full'>
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