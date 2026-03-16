import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './CartContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { Products } from './components/Products';
import { About } from './components/About';
import { Cart } from './components/Cart';
import { Login } from './components/Login';
import { ProductDetail } from './components/ProductDetail';
import { GiftWheel } from './components/GiftWheel';
import { motion, AnimatePresence } from 'motion/react';
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Toaster position="bottom-center" />
          <Navbar />
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/urunler" element={<Products />} />
                <Route path="/urun/:id" element={<ProductDetail />} />
                <Route path="/hikayemiz" element={<About />} />
                <Route path="/sepet" element={<Cart />} />
                <Route path="/giris" element={<Login />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
          <GiftWheel />
        </div>
      </Router>
    </CartProvider>
  );
}
