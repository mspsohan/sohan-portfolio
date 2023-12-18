import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Test from "../pages/Test/Test";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Main />,
      errorElement: <div>Error.....</div>,
      children: [
         {
            path: "/",
            element: <Home />
         },
         {
            path: "/test",
            element: <Test />
         }
      ]
   }
])

export default router;