import {Route , Routes} from 'react-router-dom'
import { Cocktail } from './pages/Cocktails';
import { Home } from './pages/homePage/Home';
import { Navbar } from './pages/Navbar';


function App() {

    console.log('here');
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/cocktails' element={<Navbar />}/>
        </Routes>
    </div>
  );
}

export default App;
