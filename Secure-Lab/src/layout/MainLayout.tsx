import Header from "../components/header";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-[--background-color] font-sans text-[--text-color]">
      <Header />
      <main className="pt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
