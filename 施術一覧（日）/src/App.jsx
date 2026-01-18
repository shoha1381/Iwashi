import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { Screen } from "./screens/Screen";
import { CustomerList } from "./screens/CustomerList";
import { CustomerDetail } from "./screens/CustomerDetail";
import { Checkout } from "./screens/Checkout";
import { Analytics } from "./screens/Analytics";
import { Summary } from "./screens/Summary";
import { Settings } from "./screens/Settings";
import { Sales } from "./screens/Sales";
import { DesktopSidebar } from "./components/DesktopSidebar";
import { CustomerAchievementList } from "./screens/CustomerAchievementList";

// Layout component that includes the global desktop sidebar
const Layout = ({ children }) => {
    return (
        <>
            <DesktopSidebar />
            {children}
        </>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout><Screen /></Layout>,
    },
    {
        path: "/schedule",
        element: <Layout><Screen /></Layout>,
    },
    {
        path: "/customers",
        element: <Layout><CustomerList /></Layout>,
    },
    {
        path: "/customers/:id",
        element: <Layout><CustomerDetail /></Layout>,
    },
    {
        path: "/checkout",
        element: <Layout><Checkout /></Layout>,
    },
    {
        path: "/sales",
        element: <Layout><Sales /></Layout>,
    },
    {
        path: "/analytics",
        element: <Layout><Analytics /></Layout>,
    },
    {
        path: "/customer-achievements",
        element: <Layout><CustomerAchievementList /></Layout>,
    },
    {
        path: "/summary",
        element: <Layout><Summary /></Layout>,
    },
    {
        path: "/settings",
        element: <Layout><Settings /></Layout>,
    },
]);

export const App = () => {
    return <RouterProvider router={router} />;
};
