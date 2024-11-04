import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/header-and-footer/Header";

function App() {
  return (
    <>
      <div className="mx-16">
        <Header></Header>
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default App;
