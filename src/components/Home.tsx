import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../constants';
import { ProductCard } from './ProductCard';
import { ArrowRight, Award, TrendingUp, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export const Home: React.FC = () => {
  const featuredProducts = products.slice(0, 4);
  const monthProduct = products[0]; // Çömlekçatlatan Pirinç as product of the month

  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?q=80&w=1920&auto=format&fit=crop"
            alt="Wheat Field"
            className="w-full h-full object-cover brightness-[0.45]"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1 bg-brand-olive/30 backdrop-blur-md border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              Geleneksel & Doğal
            </span>
            <h1 className="text-6xl md:text-8xl font-serif mb-8 leading-[0.9] tracking-tighter">
              Toprağın <br /> <span className="italic text-brand-cream/80">Saf Hali.</span>
            </h1>
            <p className="text-lg md:text-xl mb-10 text-white/70 font-light leading-relaxed max-w-lg">
              Yörem 06 ile mutfağınıza doğallık geliyor. Katkısız, geleneksel ve tertemiz bakliyatlarımızı keşfedin.
            </p>
            <div className="flex flex-wrap gap-5">
              <Link to="/urunler" className="btn-primary bg-white text-brand-olive hover:bg-brand-cream px-10">
                Alışverişe Başla
              </Link>
              <Link to="/hikayemiz" className="btn-outline border-white text-white hover:bg-white hover:text-brand-olive px-10">
                Hikayemiz
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product of the Month */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[48px] overflow-hidden shadow-xl border border-brand-ink/5">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-12 lg:p-20 space-y-8">
              <div className="flex items-center gap-3 text-brand-olive font-bold uppercase tracking-widest text-xs">
                <Award size={18} />
                Ayın Ürünü
              </div>
              <h2 className="text-5xl font-serif leading-tight">{monthProduct.name}</h2>
              <p className="text-brand-ink/60 text-lg leading-relaxed">
                Bu ayın yıldızı, sofraların bereketi Çömlekçatlatan Pirinç. Geleneksel yöntemlerle hasat edilen, pişerken etrafa yaydığı o eşsiz kokuyla çocukluğunuzun pilav lezzetini geri getiren özel seçimimiz.
              </p>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <span className="block text-3xl font-bold text-brand-olive">{monthProduct.price}₺</span>
                  <span className="text-xs text-brand-ink/40 uppercase tracking-widest font-bold">Özel Fiyat</span>
                </div>
                <Link to="/urunler" className="btn-primary">
                  Hemen İncele
                </Link>
              </div>
            </div>
            <div className="h-full min-h-[400px]">
              <img
                src={monthProduct.image}
                alt="Ayın Ürünü"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products - Smaller Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-brand-olive font-bold uppercase tracking-widest text-xs mb-2 block">Seçtiklerimiz</span>
            <h2 className="text-5xl font-serif">Öne Çıkanlar</h2>
          </div>
          <Link to="/urunler" className="text-brand-olive font-bold flex items-center gap-2 hover:gap-3 transition-all">
            Tüm Ürünler <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          <div className="hidden xl:flex card bg-brand-olive/5 border-dashed border-2 border-brand-olive/20 items-center justify-center p-8 text-center flex-col space-y-4">
            <TrendingUp size={40} className="text-brand-olive/40" />
            <p className="font-serif text-lg text-brand-olive/60">Daha fazla doğal lezzet keşfetmek için...</p>
            <Link to="/urunler" className="text-brand-olive font-bold text-sm underline underline-offset-4">Tümünü Gör</Link>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white py-20 border-y border-brand-ink/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-16">
          <div className="flex items-start gap-6">
            <div className="bg-brand-cream p-4 rounded-2xl text-brand-olive">
              <ShieldCheck size={32} />
            </div>
            <div>
              <h4 className="text-xl font-serif mb-2">Analizli & Güvenli</h4>
              <p className="text-sm text-brand-ink/50 leading-relaxed">Tüm ürünlerimiz düzenli olarak analiz edilir, hijyen standartlarına uygun paketlenir.</p>
            </div>
          </div>
          <div className="flex items-start gap-6">
            <div className="bg-brand-cream p-4 rounded-2xl text-brand-olive">
              <Award size={32} />
            </div>
            <div>
              <h4 className="text-xl font-serif mb-2">Yerli Üretim</h4>
              <p className="text-sm text-brand-ink/50 leading-relaxed">Anadolu'nun bereketli topraklarından, yerli tohumlarla üretilen gerçek lezzetler.</p>
            </div>
          </div>
          <div className="flex items-start gap-6">
            <div className="bg-brand-cream p-4 rounded-2xl text-brand-olive">
              <TrendingUp size={32} />
            </div>
            <div>
              <h4 className="text-xl font-serif mb-2">Taze Hasat</h4>
              <p className="text-sm text-brand-ink/50 leading-relaxed">Raflarda bekleyen değil, yeni hasat edilmiş en taze ürünleri kapınıza getiriyoruz.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
