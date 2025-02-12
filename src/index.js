import ReactDom from 'react-dom/client';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Home from './views/Home';
import Dashboard from './views/Dashboard';
import Contact from './views/contact';
import About from './views/about';

const router=createBrowserRouter([
    {
        path:"/",
        element:<Home/>,
    },
    {
        path:"/about",
        element:<About/>
    },
    {
        path:"/contact",
        element:<Contact/>,
    },
    {
        path:"/dashboard",
        element:<Dashboard/>,
    }

])
   
const root=ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}/>);
