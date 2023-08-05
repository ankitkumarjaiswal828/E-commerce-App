import logo from './logo.svg';
import './App.css';
import Login from './Componets/Login'
import Resigter from './Componets/Resigter';
import AddProducts from './Componets/AddProduct';
import UpdateProducts from './Componets/UpdateProduct';
import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import Protected from './Componets/Protected';
import ProductList from './Componets/ProductList';
import SearchProduct from './Componets/SearchProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign" element={<Resigter />} />
          <Route path="/add" element={<Protected Compoent={AddProducts} />} />
          <Route
            path="/update"
            element={<Protected Compoent={UpdateProducts} />}
          />
          <Route path='/search' element={<SearchProduct/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
