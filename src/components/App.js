import '../styles/App.css';
import Home from "./Home";
import Login from "./Login";
import Register from "./Register"
import { Route, Routes} from "react-router-dom";
import Main from "./Main";
import Cart from "./Cart";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/"  element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/main" element={<Main />} >
              <Route path="cart" element={<Cart />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
