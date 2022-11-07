
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import FirstSection from '../../pages/Home/FirstSection/FirstSection';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <FirstSection></FirstSection>
            }
        ]
    }
])
