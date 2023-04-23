import React from 'react'
import ReactDOM from 'react-dom'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Root from "./routes/root"
import './index.css'
import reportWebVitals from './reportWebVitals'
import { sendToVercelAnalytics } from './vitals'

import Characters from './components/characters/Gandalf'
import Places from './components/places/Rohan'
import Films from './components/films/Fellowship'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/characters",
    element: <Characters />,
  },
  {
    path: "/places",
    element: <Places />,
  },
  {
    path: "/films",
    element: <Films />,
  },
]);

ReactDOM.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);
