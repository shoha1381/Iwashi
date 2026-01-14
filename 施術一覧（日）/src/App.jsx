import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Screen } from "./screens/Screen";
import { CustomerList } from "./screens/CustomerList";
import { CustomerDetail } from "./screens/CustomerDetail";
import { Checkout } from "./screens/Checkout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Screen />,
    },
    {
        path: "/schedule",
        element: <Screen />,
    },
    {
        path: "/customers",
        element: <CustomerList />,
    },
    {
        path: "/customers/:id",
        element: <CustomerDetail />,
    },
    {
        path: "/checkout",
        element: <Checkout />,
    },
]);

export const App = () => {
    return <RouterProvider router={router} />;
};
