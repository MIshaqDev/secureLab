import Header from "../components/header";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-[--background-color] font-sans text-[--text-color]">
      <Header />
      <main className="grow pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
