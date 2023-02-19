import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Shop } from "./pages/Shop";
import { Cart } from "./pages/Cart";
import { User } from "./pages/User";
import { Checkout } from "./pages/Checkout";
import { ShopContextProvider } from "./context/ShopContext";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/signup" element={<Signup />}/>
            <Route path="/shop" element={<Shop />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/user" element={<User />}/>
            <Route path="/checkout" element={<Checkout />}/>
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
