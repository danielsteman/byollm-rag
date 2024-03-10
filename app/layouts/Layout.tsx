import { Outlet } from "@remix-run/react";
import { ReactNode } from "react";
import Footer from "~/components/Footer";
import Header from "~/components/Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  children;
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
