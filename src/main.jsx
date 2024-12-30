import ReactDOM from 'react-dom';
import './index.css'
import ErrorPage from './foundation/ErrorPage.jsx';
import Home from './Pages/Home.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import { StrictMode } from 'react';
import Root from './foundation/Root.jsx';
import Notice from './Pages/Notice.jsx';
import NoticeList from './components/NoticeComponent/NoticeList.jsx';
import CommingSoon from './foundation/CommingSoon.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "notice",
        element: <NoticeList />,
      },
      {
        path: "comming-soon",
        element: <CommingSoon />,
      },
      
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);