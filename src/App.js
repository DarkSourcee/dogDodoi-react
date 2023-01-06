import { Routes, Route, BrowserRouter  } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from './pages/Home'
import Header from './components/Header/Header'

function App() {
  return (
   <>
      <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
