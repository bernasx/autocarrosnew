import { createRoot } from 'react-dom/client'
import {StrictMode} from "react";
import 'tailwindcss/tailwind.css'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from 'components/App'
import Lines from 'components/Lines'
import Rares from 'components/Rares';
import Layout from 'components/Layout/Layout';
import { BusDataProvider } from 'Providers/BusDataProvider';
const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout> <App/> </Layout>,
    },
    {
        path: "/lines",
        element: <Layout> <Lines/> </Layout>,
      },
      {
        path: "/rares",
        element: <Layout> <Rares/> </Layout>,
      },
  ],
  {basename: "/autocarrosnew/"});
const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
    <StrictMode>
      <BusDataProvider>
        <RouterProvider router={router} />
      </BusDataProvider>
    </StrictMode>
  )

