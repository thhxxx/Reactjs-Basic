import { createBrowserRouter } from 'react-router-dom';
import ListStudent from '../views/ListStudent.js';
import BlackList from '../views/BlackList.js';
import Login from '../views/Login.js';
import GeneralLayout from '../layouts/GeneralLayout.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <GeneralLayout />,
    children: [
      {
        path: '/',
        element: <ListStudent />
      },
      {
        path: '/black-list',
        element: <BlackList />
      },
      {
        path: '/login',
        element: <Login />
      }
    ]
  },
]);
export default router;