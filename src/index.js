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

import Characters from './components/Characters'
import Places from './components/Places'
import Films from './components/Films'
import Gandalf from './components/characters/Gandalf'
import Rohan from './components/places/Rohan'
import Fellowship from './components/films/Fellowship'

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
    path: "/characters/gandalf",
    element: <Gandalf />,
  },
  {
    path: "/places",
    element: <Places />,
  },
  {
    path: "/places/rohan",
    element: <Rohan />,
  },
  {
    path: "/films",
    element: <Films />,
  },
  {
    path: "/films/fellowship",
    element: <Fellowship />,
  },
]);

ReactDOM.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);
