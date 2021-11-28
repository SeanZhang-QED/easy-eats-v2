import '../styles/App.css';
import Home from "./Home";
import Login from "./Login";
import Register from "./Register"
import { Route, Routes} from "react-router-dom";
import Main from "./Main";
import Cart from "./Cart";
import {useState} from "react";


function App() {
    const [isLogged, setIsLogged] = useState(false);
    
    
    
  return (
      <div className="App">
          <Routes>
              <Route path="/"  element={<Home isLogged={isLogged} />} />
              <Route path="/home" element={<Home isLogged={isLogged}/>} />
              <Route path="/main" element={<Main />} >
                  <Route path="cart" element={<Cart />} />
              </Route>
              <Route path="/login" element={<Login isLogged={isLogged} handleLogged={()=>{setIsLogged(true)}}/>} />
              <Route path="/register" element={<Register />} />
          </Routes>
      </div>
  );
}

export default App;
