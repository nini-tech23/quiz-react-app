import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";
import RootLayout from "./components/RootLayout";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import QuizListPage from "./pages/QuizListPage";
import RootLayoutLibrary from './components/RootLayoutLibrary';
const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },

        ],
    },
    {
        path: "/",
        element: <RootLayoutLibrary />,
        children: [
            {
                path: "/library",
                element: <QuizListPage/>,
            },

        ],
    },
    {
        path: "/quiz",
        element: <QuizPage />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/signup",
        element: <SignUpPage />,
    },
])
const App = () => <RouterProvider router={router}/>

export default App;
