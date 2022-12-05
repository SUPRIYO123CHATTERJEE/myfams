import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import About from './pages/about';
import Home from './pages/home';
import Products_page from './pages/productsPage';
import Blog_page from './pages/blog-page';
import Contact_page from './pages/contact-page';
import Login from './pages/login';
import Single_product from './pages/single-product';
import Cart from './comp/cart';

const router= createBrowserRouter(createRoutesFromElements([
  <Route>
    <Route path='/' element={<App/>}>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/productsPage' element={<Products_page/>}></Route>
      <Route path='/blog-page' element={<Blog_page/>}></Route>
      <Route path='/singleProduct/:id' element={<Single_product/>}></Route>
      <Route path='/contact-page' element={<Contact_page/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
    </Route>
  </Route>
]))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
