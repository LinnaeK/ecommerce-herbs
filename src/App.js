import './App.css';
import Layout from './components/Navigational/Layout.js'
import { Route, Routes, Router } from 'react-router-dom'
import Products from './pages/Products'
import Philosophy from './pages/Philosophy';
import AboutUs from './pages/AboutUs';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Layout />
      <Routes>
        <Route path='/' exact={true} element={<Products />}/>
        <Route path='/philosophy' element={<Philosophy/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
      </Routes>
    </Fragment>
  );
}

export default App;
