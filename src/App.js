import './App.css';
import { Route, Routes } from 'react-router-dom';
// import { Header } from './layout/Header';
import { SignInPage } from './pages/signInPage';
import { ProductesPage } from './pages/productesPage';
import { ProductDetailsPage } from './pages/productDetailsPage';

function App() {
  return (
    <div className="App">
     
     <Routes>
      <Route path='/'element={ <SignInPage/>}/>
     
      <Route path='/productesPage'element={<ProductesPage/>}/>
      <Route path='/product/:productId'element={<ProductDetailsPage/>}/>

      
     </Routes>
    </div>
  );
}

export default App;
