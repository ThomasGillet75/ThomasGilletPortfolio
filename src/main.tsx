import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import Desktop from "./components/pages/HomePage/Desktop.tsx";

import './styles/global.css'
import './styles/variables.css'
import './styles/mixins.css'

const router = createBrowserRouter([
    {
        path: "/",
        Component: Desktop,
    },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
