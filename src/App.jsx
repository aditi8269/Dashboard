import './App.css'
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import Home from './Pages/Home';
import Setting from './Pages/Setting';
import Analytics from './Pages/Analytics';
import Products from './Pages/Products';

function App() {
  

  return (
    <>
     <BrowserRouter>
       <Routes>
        <Route path='/' exact element={<Home/>}></Route>
        <Route path='/setting' exact element={<Setting/>}></Route>
        <Route path='/products' exact element={<Products/>}></Route>
        <Route path='/analytic' exact element={<Analytics/>}></Route>
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
