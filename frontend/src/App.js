import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar/Navbar';
import {Shop} from './Pages/Shop';
import {ShopCategory} from './Pages/ShopCategory';
import {Product} from './Pages/Product';
import {Cart} from './Pages/Cart';
import {Login} from './Pages/Login';
import { Footer } from './Components/Footer/Footer';
import men_banner from '../src/Components/Assests/banner_mens.png'
import women_banner from '../src/Components/Assests/banner_women.png'
import kids_banner from '../src/Components/Assests/banner_kids.png'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/men' element={<ShopCategory banner={men_banner} category='men'/>} />
          <Route path='/women' element={<ShopCategory banner={women_banner} category='women' />} />
          <Route path='/kids' element={<ShopCategory banner={kids_banner} category='kid' />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />}  />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/Login' element={<Login />} />

        </Routes>
        <Footer/>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
