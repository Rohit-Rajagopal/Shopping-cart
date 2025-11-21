import App from "./App";
import Home from "./components/home/home";
import Shop from "./components/Shop/Shop";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "shop",
                element: <Shop />,
            },
        ],
        errorElement: <ErrorPage />,
    },
]

export default routes;