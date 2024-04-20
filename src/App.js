import { RouterProvider, createBrowserRouter } from "react-router-dom";
import QuizPage from "./pages/QuizPage";
const router = createBrowserRouter([
    {
        path: "/",
        element: <QuizPage />,
    },
])
const App = () => <RouterProvider router={router}/>

export default App;
