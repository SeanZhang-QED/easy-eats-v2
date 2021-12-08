import '../styles/App.css';
import Home from "./Home";
import Login from "./Login";
import Register from "./Register"
import {Route, Routes, useNavigate} from "react-router-dom";
import Main from "./Main";
import Cart from "./Cart";
import {useState} from "react";
import {TOKEN_KEY} from "../constants";


function App() {
    const [isLogged, setIsLogged] = useState(localStorage.getItem(TOKEN_KEY) ? true : false);
    const handleLogged = (token) => {
        if (token) {
            localStorage.setItem(TOKEN_KEY, token);
            setIsLogged(true);
        }
    };

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home isLogged={isLogged}/>}/>
                <Route path="/home" element={<Home isLogged={isLogged}/>}/>
                <Route path="/main" element={<Main isLogged={isLogged}/>}>
                    <Route path="cart" element={<Cart/>}/>
                </Route>
                <Route path="/login" element={<Login isLogged={isLogged} handleLogged={handleLogged}/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </div>
    );
}

export default App;
