import { RouterProvider, createBrowserRouter } from "react-router-dom";
import QuizPage from "./pages/QuizPage";
import ResultPage from "./pages/ResultPage";
const router = createBrowserRouter([
    {
        path: "/",
        element: <QuizPage />,
    },
    {
        path: "/result",
        element: <ResultPage />,
    }
])
const App = () => <RouterProvider router={router}/>

export default App;
