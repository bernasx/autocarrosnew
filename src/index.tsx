import { createRoot } from 'react-dom/client'
import {StrictMode} from "react";
import 'tailwindcss/tailwind.css'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from 'components/App'
import Lines from 'components/Lines'
import Layout from 'components/Layout/Layout';
const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout> <App/> </Layout>,
    },
    {
        path: "/lines",
        element: <Layout> <Lines/> </Layout>,
      },
  ]);
const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
  )

