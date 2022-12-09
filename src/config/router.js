import { createBrowserRouter } from 'react-router-dom';
import ListStudent from '../views/ListStudent.js';
import AddStudent from '../views/AddStudent.js';
import BlackList from '../views/BlackList.js';
import Login from '../views/Login.js';
import GeneralLayout from '../Layouts/GeneralLayout.js';

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
        path: '/add-student',
        element: <AddStudent />
      },
      {
        path: '/black-list',
        element: <BlackList />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  }
]);
export default router;