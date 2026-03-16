import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../constants';
import { useCart } from '../CartContext';
import { ShoppingBag, ArrowLeft, Star, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { motion } from 'motion/react';
import toast from 'react-hot-toast';

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl mb-4">Ürün Bulunamadı</h1>
        <button onClick={() => navigate('/urunler')} className="btn-primary">Ürünlere Dön</button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} sepete eklendi!`, {
      icon: '🛒',
      style: {
        borderRadius: '20px',
        background: '#5A5A40',
        color: '#fff',
      },
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <button 
        onClick={() => navigate(-1)} 
        className="flex items-center gap-2 text-brand-ink/50 hover:text-brand-olive mb-8 transition-colors"
      >
        <ArrowLeft size={20} /> Geri Dön
      </button>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Image Gallery */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          <div className="aspect-square rounded-[40px] overflow-hidden bg-white border border-brand-ink/5 shadow-sm">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square rounded-2xl overflow-hidden border border-brand-ink/5 opacity-50 hover:opacity-100 cursor-pointer transition-opacity">
                <img src={`${product.image}?sig=${i}`} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Info */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div>
            <span className="text-brand-olive font-bold uppercase tracking-widest text-xs mb-2 block">{product.category}</span>
            <h1 className="text-5xl font-serif mb-4">{product.name}</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-yellow-500">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <span className="text-brand-ink/40 text-sm">(124 Değerlendirme)</span>
            </div>
          </div>

          <div className="text-4xl font-bold text-brand-olive">
            {product.price}₺ <span className="text-lg font-normal text-brand-ink/40">/ {product.unit}</span>
          </div>

          <p className="text-brand-ink/60 text-lg leading-relaxed">
            {product.description} Anadolu'nun bereketli topraklarından sofranıza uzanan bu eşsiz lezzet, geleneksel yöntemlerle ve hiçbir katkı maddesi kullanılmadan hazırlanmıştır.
          </p>

          <div className="flex gap-4 pt-4">
            <button 
              onClick={handleAddToCart}
              className="btn-primary flex-1 flex items-center justify-center gap-3 py-4 text-lg"
            >
              <ShoppingBag size={24} /> Sepete Ekle
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-brand-ink/5">
            <div className="text-center space-y-2">
              <div className="w-10 h-10 bg-brand-cream rounded-full flex items-center justify-center mx-auto text-brand-olive">
                <Truck size={20} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider block">Hızlı Teslimat</span>
            </div>
            <div className="text-center space-y-2">
              <div className="w-10 h-10 bg-brand-cream rounded-full flex items-center justify-center mx-auto text-brand-olive">
                <ShieldCheck size={20} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider block">Güvenli Ödeme</span>
            </div>
            <div className="text-center space-y-2">
              <div className="w-10 h-10 bg-brand-cream rounded-full flex items-center justify-center mx-auto text-brand-olive">
                <RotateCcw size={20} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider block">Kolay İade</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
