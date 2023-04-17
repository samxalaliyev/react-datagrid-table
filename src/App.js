import { Route, Routes } from "react-router-dom"
import Header from "./components/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Description from "./pages/Description";


function App() {
  return (
    <div className="App">
      <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/description/:id" element={<Description/>} />
      </Routes>
      
      </>
    </div>
  );
}

export default App;
