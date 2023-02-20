import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { Shop } from "./components/shop/Shop";
import { Cart } from "./components/cart/Cart";
import { Checkout } from "./components/checkout/Checkout";
import { ShopContextProvider } from "./context/ShopContext";
import { Login } from "./components/registration/Login";
import { Signup } from "./components/registration/Signup";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
