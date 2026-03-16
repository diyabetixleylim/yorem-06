import React, { useState } from 'react';
import { useCart } from '../CartContext';
import { Trash2, Plus, Minus, ShoppingBag, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export const Cart: React.FC = () => {
  const { cart, updateQuantity, removeFromCart, totalPrice } = useCart();
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);

  const applyCoupon = () => {
    if (coupon.toUpperCase() === 'YOREM06' || coupon.toUpperCase() === 'YOREM06HEDIYE') {
      setDiscount(totalPrice * 0.1);
      alert('Kupon uygulandı! %10 indirim kazandınız.');
    } else {
      alert('Geçersiz kupon kodu.');
    }
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="w-24 h-24 bg-brand-olive/10 text-brand-olive rounded-full flex items-center justify-center mx-auto mb-8">
          <ShoppingBag size={48} />
        </div>
        <h1 className="text-4xl mb-4">Sepetiniz Boş</h1>
        <p className="text-brand-ink/60 mb-8">Henüz sepetinize bir ürün eklemediniz.</p>
        <Link to="/urunler" className="btn-primary inline-block">
          Alışverişe Başla
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl mb-12">Alışveriş Sepeti</h1>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          {cart.map((item) => (
            <motion.div
              layout
              key={item.id}
              className="card p-6 flex items-center gap-6"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 rounded-2xl object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="flex-1">
                <h3 className="text-xl font-serif">{item.name}</h3>
                <p className="text-brand-ink/40 text-sm mb-2">{item.unit}</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-brand-ink/10 rounded-full px-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1 hover:text-brand-olive"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 hover:text-brand-olive"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-600 p-2"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-brand-olive">{item.price * item.quantity}₺</p>
                <p className="text-xs text-brand-ink/40">{item.price}₺ / birim</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="space-y-6">
          <div className="card p-8">
            <h2 className="text-2xl mb-6">Sipariş Özeti</h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-brand-ink/60">
                <span>Ara Toplam</span>
                <span>{totalPrice}₺</span>
              </div>
              <div className="flex justify-between text-brand-ink/60">
                <span>Kargo</span>
                <span>Ücretsiz</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>İndirim</span>
                  <span>-{discount.toFixed(2)}₺</span>
                </div>
              )}
              <div className="pt-4 border-t border-brand-ink/10 flex justify-between text-xl font-bold">
                <span>Toplam</span>
                <span className="text-brand-olive">{(totalPrice - discount).toFixed(2)}₺</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative">
                <Tag className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-ink/40" size={18} />
                <input
                  type="text"
                  placeholder="İndirim Kodu"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-brand-cream border border-brand-ink/10 rounded-full focus:outline-none"
                />
              </div>
              <button
                onClick={applyCoupon}
                className="btn-outline w-full py-2 text-sm"
              >
                Kuponu Uygula
              </button>
            </div>

            <button className="btn-primary w-full mt-8">
              Ödemeye Geç
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
