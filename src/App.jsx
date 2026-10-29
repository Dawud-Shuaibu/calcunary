import { Routes, Route } from "react-router-dom";
import { MenuProvider } from "./contexts/MenuContext";
import Header from "./components/Header";
import Menu from "./components/Menu/Menu";
import Standard from "./components/Calculators/Standard";
import Currency from "./components/Calculators/Currency";
import "./App.css";

function App() {
  const lastUsedCalc = () => {
    const savedPage = localStorage.getItem("lastUsedCalc");
    if (savedPage === "standard") return <Standard />;
    else if (savedPage === "currency") return <Currency />;
    else return <Standard />;
  };

  return (
    <>
      <MenuProvider>
        <Header />
        <Menu />
      </MenuProvider>
      <Routes>
        <Route path="/" element={<Standard />} />
        <Route path="/standard" element={<Standard />} />
        <Route path="/currency" element={<Currency />} />
      </Routes>
    </>
  );
}

export default App;
