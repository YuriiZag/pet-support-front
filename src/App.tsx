import React, { lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./pages/sharedLayout/sharedLayout";
import { PublicRoute } from "./Components/PublicRoute/publicRoute";
import { PrivateRoute } from "./Components/PrivatRoute/privatRoute";
import { currentUser } from "./Redux/operations";
import { useAppDispatch } from "./customHooks/customHooks";

const HomePage = lazy(() => import("./pages/homePage/homePage"));
const NewsPage = lazy(() => import("./pages/newsPage/newsPage"));
const FindPetPage = lazy(() => import("./pages/findPetPage/findPetPage"));
const OurFriendsPage = lazy(
  () => import("./pages/ourFriendsPage/ourFriendsPage")
);

const UserPage = lazy(() => import("./pages/userPage/userPage"));
const LoginPage = lazy(() => import("./pages/loginPage/loginPage"));
const RegisterPage = lazy(() => import("./pages/registerPage/registerPage"));

const App = () => {
  console.log("app rendered");
  
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);


  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />}></Route>
        <Route path="/news" element={<NewsPage />}></Route>
        <Route path="/notices/:category" element={<FindPetPage />}></Route>
        <Route path="/friends" element={<OurFriendsPage />}></Route>
        <Route
          path="/login"
          element={<PublicRoute redirectTo="/user" component={LoginPage} />}
        ></Route>
        <Route
          path="/register"
          element={
            <PublicRoute redirectTo="/user" component={RegisterPage} />
          }
        ></Route>
        <Route
          path="/user"
          element={<PrivateRoute redirectTo="/" component={UserPage} />}
        ></Route>
      </Route>
    </Routes>
  );
};

export default App;
