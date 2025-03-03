import { Outlet } from "react-router-dom";
import { Header } from "../../Components/Header/header";
import { Container } from "./sharedLayout.styled";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";


export const SharedLayout = () => {


  return (
    <Container>
      <ToastContainer></ToastContainer>
      <Header></Header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
