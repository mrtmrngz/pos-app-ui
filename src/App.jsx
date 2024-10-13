import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ProtectedRoute from "./libs/ProtectedRoute.jsx";
import HomePage from "./pages/HomePage.jsx";
import MainLayout from "./components/Layout/MainLayout.jsx";
import CartPage from "./pages/CartPage.jsx";
import BillPage from "./pages/BillPage.jsx";
import CustomersPage from "./pages/CustomersPage.jsx";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <ProtectedRoute />,
        children: [
            {
                path: "",
                element: <MainLayout />,
                children: [
                    {
                        path: "",
                        element: <HomePage />
                    },
                    {
                        path: "cart",
                        element: <CartPage />
                    },
                    {
                        path: "bills",
                        element: <BillPage />
                    },
                    {
                        path: "customers",
                        element: <CustomersPage />
                    }
                ]
            }
        ]
    }
])


const App = () => {
    return  <RouterProvider router={routes} />
};

export default App;