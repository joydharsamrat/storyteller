
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import AddServices from '../../pages/AddServices/AddServices';
import Blogs from '../../pages/Blogs/Blogs';
import Home from '../../pages/Home/Home/Home';
import Login from '../../pages/Login/Login';
import MyReviews from '../../pages/MyReviews/MyReviews';
import Register from '../../pages/Register/Register';
import ServiceDetails from '../../pages/ServiceDetails/ServiceDetails';
import Services from '../../pages/Services/Services';
import ErrorPage from '../../pages/Shared/ErrorPage/ErrorPage';
import PrivateRoutes from '../PrivateRoutes/PrivateRoutes';



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>,
            },
            {
                path: '/serviceDetails/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://storyteller-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: '/myReviews',
                element: <PrivateRoutes><MyReviews></MyReviews></PrivateRoutes>
            },
            {
                path: 'addService',
                element: <PrivateRoutes><AddServices></AddServices></PrivateRoutes>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])
