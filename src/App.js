import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Shared/Head/Header';
import Footer from './Components/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Blogs from "./Components/Blogs/Blogs"
import About from "./Components/About/About"
import LogIn from "./Components/LogIn/LogIn"
import Register from "./Components/Register/Register"
import Checkout from "./Components/Checkout/Checkout"
import RequireAuth from "./Components/RequireAuth/RequireAuth"
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/home#services" element={<Home />}></Route>
        <Route path="/blog" element={<Blogs />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        >
        </Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>

      <Footer></Footer>

    </div >
  );
}

export default App;
