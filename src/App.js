import './App.css';
import CartSummary from './pages/cartsummary';
import Checkout from './pages/checkout';
import Shop from './pages/shop';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (  
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/cartsummary' element={<CartSummary />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
