import './App.css';
import Layout from './components/layout'
import Home from './pages/home'
import Products from './pages/products'
import Contact from './pages/contact'
import Search from './pages/search'
import Cart from './pages/payments/cart'
import Thanks from './pages/payments/thanks'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from './pages/product';
import Order from './pages/payments/order';
import AdminCategory from './pages/admin/admin_category';
import AdminPainting from './pages/admin/admin_painting';
import AdminOrder from './pages/admin/admin_order';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/admin/categories" element={<AdminCategory />} />
          <Route path="/admin/paintings" element={<AdminPainting />} />
          <Route path="/admin/orders" element={<AdminOrder />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path="/thanks" element={<Thanks />} />
          <Route path="/search" element={<Search />} />
          {/* <Route path="*" element={<Home />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
