import App from "./App";
import Home from "./components/home/home";
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
        ],
        errorElement: <ErrorPage />,
    },
]

export default routes;