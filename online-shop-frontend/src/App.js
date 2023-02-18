import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Shop } from "./pages/Shop";
import { Cart } from "./pages/Cart";
import { User } from "./pages/User";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/user" element={<User />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
