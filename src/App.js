import './App.css';
import DashboardPage from './pages/DashBoardPage';
import LoginPage from './pages/LoginPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Protected from './pages/Protected.js';
import EmployeeFormPage from './pages/EmployeeFormPage.js';
import EmployeeListPage from './pages/EmployeeListPage.js';

const router=createBrowserRouter([
  {
    path:"/",
    element: <Protected> <DashboardPage></DashboardPage> </Protected>
  },
  {
    path:"/login",
    element:<LoginPage></LoginPage>
  },
  {
    path:"/employee-form",
    element:<Protected> <EmployeeFormPage></EmployeeFormPage> </Protected>
  },
  {
    path:"/employee-list",
    element:<Protected> <EmployeeListPage></EmployeeListPage> </Protected>
  },
])

function App() {
  
  return (
    <div className='App'>

    <RouterProvider router={router} />
    </div>
  );
}

export default App;
