import React, { useState } from 'react';
import { products } from '../constants';
import { ProductCard } from './ProductCard';
import { Search } from 'lucide-react';
import { motion } from 'motion/react';

export const Products: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Hepsi');

  const categories = ['Hepsi', ...new Set(products.map(p => p.category))];

  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Hepsi' || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-16 text-center">
        <span className="text-brand-olive font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Mağazamız</span>
        <h1 className="text-6xl mb-6">Tüm Ürünlerimiz</h1>
        <p className="text-brand-ink/50 max-w-2xl mx-auto leading-relaxed">
          Anadolu'nun bereketli topraklarından özenle seçilen, en doğal ve taze bakliyat çeşitlerimiz. Geleneksel yöntemlerle sofranıza ulaşıyor.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-8 mb-16 items-center justify-between">
        <div className="relative w-full md:w-[400px]">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-brand-ink/30" size={18} />
          <input
            type="text"
            placeholder="Aradığınız lezzeti yazın..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-14 pr-6 py-4 bg-white border border-brand-ink/5 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-olive/10 transition-all"
          />
        </div>

        <div className="flex gap-3 overflow-x-auto pb-4 w-full md:w-auto no-scrollbar">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-8 py-3 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all ${
                selectedCategory === cat
                  ? 'bg-brand-olive text-white shadow-lg shadow-brand-olive/20'
                  : 'bg-white text-brand-ink/50 hover:bg-brand-olive/5 border border-brand-ink/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-32 bg-white rounded-[40px] border border-dashed border-brand-ink/10">
          <p className="text-xl text-brand-ink/30 font-serif italic">Aradığınız kriterlere uygun ürün bulunamadı.</p>
        </div>
      )}
    </div>
  );
};
