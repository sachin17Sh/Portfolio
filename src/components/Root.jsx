import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import { Outlet } from "react-router-dom";
import "../assets/css/Root.css";

export default function RootLayout() {
  return (
    <div className="root-container">
      <header className="header">
        <Header />
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}
