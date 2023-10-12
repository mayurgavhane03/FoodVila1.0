import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; // Import Provider from react-redux
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import RestaurantMenu from "./Components/RestaurantMenu";
import Profile from "./Components/ProfileClass";
import Instamart from "./Components/Instamart";
import UserContext from "./Utils/UserContext";
import Cart from "./Components/Cart";
import UserRegistration from "./Components/Login";
import newlogin from "./Components/newlogin";
import store from "./Utils/store"; // Import your Redux store

const AppLayout = () => {

  
  return (
    <Provider store={store}> {/* Provide the Redux store to the entire app */}
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "instamart",
        element: <Instamart />,
      },
      {
        path: "about",
        element: <About />,
        children:[
          {
            path: "profile",
            element: <Profile />,
          }
        ]
       
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "userregistration",
        element: <UserRegistration />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
     
      {
        path: "restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "login",
        element: <Login />,
      }
    ],

  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
