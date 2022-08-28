import { createContext, useContext, useState } from 'react';
import {Route , Routes} from 'react-router-dom'
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { Home } from './pages/homePage/Home';
import { Navbar } from './pages/Navbar';

export const CartContext = createContext()
function App() {

  let [cart,setCart] = useState([])


  return (
    <div className="App">
      <CartContext.Provider value={{cart,setCart}}>

      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/checkout' element={<CheckoutPage />}/>
        </Routes>

      </CartContext.Provider>
    </div>
  );
}

export default App;
