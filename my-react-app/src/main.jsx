import { StrictMode } from 'react'
import { createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Page2 from './Page2.jsx'
import Page3 from './Page3.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/page2",
    element: <Page2 />,
  },
  {
    path: "/Edit/:id",
    element: <Page3 />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
