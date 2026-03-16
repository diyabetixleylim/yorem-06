import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../constants';
import { useCart } from '../CartContext';
import { ShoppingBag, Star } from 'lucide-react';
import { motion } from 'motion/react';
import toast from 'react-hot-toast';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.name} sepete eklendi!`, {
      icon: '🌾',
      style: {
        borderRadius: '16px',
        background: '#5A5A40',
        color: '#fff',
      },
    });
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="card group flex flex-col h-full bg-white border border-brand-ink/5 hover:shadow-md transition-all duration-300"
    >
      <Link to={`/urun/${product.id}`} className="flex flex-col h-full">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-2 left-2">
            <span className="bg-white/90 backdrop-blur-sm text-brand-olive text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
              {product.category}
            </span>
          </div>
          <button
            onClick={handleAddToCart}
            className="absolute bottom-3 right-3 bg-brand-olive text-white p-2.5 rounded-full shadow-lg transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10"
          >
            <ShoppingBag size={16} />
          </button>
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-1">
            <h3 className="text-base font-serif font-semibold leading-tight line-clamp-1 group-hover:text-brand-olive transition-colors">{product.name}</h3>
          </div>
          <p className="text-[11px] text-brand-ink/50 line-clamp-2 mb-3 flex-grow leading-relaxed">
            {product.description}
          </p>
          <div className="flex items-center justify-between mt-auto pt-2 border-t border-brand-ink/5">
            <div className="flex items-center gap-1">
              <span className="text-lg font-bold text-brand-olive">{product.price}₺</span>
              <span className="text-[10px] text-brand-ink/40">/{product.unit}</span>
            </div>
            <div className="flex items-center gap-0.5 text-yellow-500">
              <Star size={10} fill="currentColor" />
              <span className="text-[10px] text-brand-ink/40 font-medium">4.9</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
