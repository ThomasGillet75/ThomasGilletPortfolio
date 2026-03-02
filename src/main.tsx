import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom'

import Desktop from "./components/pages/HomePage/Desktop.tsx";

import './styles/global.css'
import './styles/variables.css'
import './styles/mixins.css'
import ModalContextProvider from "./components/contexts/ModalContext/ModalContextProvider.tsx";

const repoName = '/ThomasGilletPortfolio';
const router = createBrowserRouter([
        {
            path: "/",
            Component: Desktop,
        }],
    {
        basename: repoName
    }
);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ModalContextProvider>
            <RouterProvider router={router}/>
        </ModalContextProvider>
    </StrictMode>,
)
