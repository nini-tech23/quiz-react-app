import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";
import RootLayout from "./components/common/RootLayout";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import QuizListPage from "./pages/QuizListPage";
import RootLayoutLibrary from "./components/common/RootLayoutLibrary";
import UserAccountPage from "./pages/UserAccountPage";
import { UserProvider } from "./contexts/UserContext";
import ResultPage from "./pages/ResultPage";
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
                element: <QuizListPage />,
            },
        ],
    },
    {
        path: "/user",
        element: <UserAccountPage />,
    },
    {
        path: "/quiz",
        element: <QuizPage />,
    },
    {
        path: "/quizresults/:resultId",
        element: <ResultPage />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/signup",
        element: <SignUpPage />,
    },
]);
const App = () => (
    <UserProvider>
        <RouterProvider router={router} />
    </UserProvider>
);

export default App;
