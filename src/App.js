import { createContext, useContext, useState } from 'react';
import {Route , Routes} from 'react-router-dom'
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { CocktailsPage } from './pages/cocktails/CocktailsPage';
import { ShotsPage } from './pages/shotsPage/ShotsPage';
import { Home } from './pages/homePage/Home';
import { Navbar } from './pages/Navbar';
import { OrdinaryDrinksPage } from './pages/ordinaryDrinks/OrdinaryDrinks';
import { SoftDrinksPage } from './pages/softDrinksPage/softDrinksPage';
import { GoogleMapPage } from './pages/map/googleMap';

export const CartContext = createContext()
function App() {

  let [cart,setCart] = useState([])


  return (
    <div className="App">
      <CartContext.Provider value={{cart,setCart}}>

      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/cocktails' element={<CocktailsPage />}/>
          <Route path='/shots' element={<ShotsPage />}/>
          <Route path='/ordinary-drinks' element={<OrdinaryDrinksPage />}/>
          <Route path='/soft-drinks' element={<SoftDrinksPage />}/>
          <Route path='/checkout' element={<CheckoutPage />}/>
          <Route path='/where-to-find-us' element={<GoogleMapPage />}/>
        </Routes>

      </CartContext.Provider>
    </div>
  );
}

export default App;
