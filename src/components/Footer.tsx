import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-brand-ink/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="text-3xl font-serif font-bold text-brand-olive">
              Yörem 06
            </Link>
            <p className="text-brand-ink/60 leading-relaxed">
              Toprağın bize emanet ettiği o eski tohumları korumaya ve gerçek gıdanın tadını unutturmamaya kararlıyız.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-brand-olive/5 text-brand-olive rounded-full flex items-center justify-center hover:bg-brand-olive hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-brand-olive/5 text-brand-olive rounded-full flex items-center justify-center hover:bg-brand-olive hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-brand-olive/5 text-brand-olive rounded-full flex items-center justify-center hover:bg-brand-olive hover:text-white transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-serif mb-6">Hızlı Linkler</h4>
            <ul className="space-y-4 text-brand-ink/60">
              <li><Link to="/" className="hover:text-brand-olive">Ana Sayfa</Link></li>
              <li><Link to="/urunler" className="hover:text-brand-olive">Ürünlerimiz</Link></li>
              <li><Link to="/hikayemiz" className="hover:text-brand-olive">Hikayemiz</Link></li>
              <li><Link to="/giris" className="hover:text-brand-olive">Giriş Yap</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif mb-6">Kategoriler</h4>
            <ul className="space-y-4 text-brand-ink/60">
              <li><Link to="/urunler" className="hover:text-brand-olive">Pirinç & Bulgur</Link></li>
              <li><Link to="/urunler" className="hover:text-brand-olive">Bakliyatlar</Link></li>
              <li><Link to="/urunler" className="hover:text-brand-olive">Un Çeşitleri</Link></li>
              <li><Link to="/urunler" className="hover:text-brand-olive">Kuruyemiş</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif mb-6">Bültenimize Katılın</h4>
            <p className="text-sm text-brand-ink/50 mb-6 leading-relaxed">Yeni hasat ürünlerimizden ve özel indirimlerden ilk siz haberdar olun.</p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="E-posta adresiniz" 
                className="w-full px-5 py-3 bg-brand-cream border border-brand-ink/5 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive/10"
              />
              <button className="btn-primary w-full py-3 text-xs font-bold uppercase tracking-widest">Abone Ol</button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-brand-ink/5 text-center text-brand-ink/40 text-sm">
          <p>© 2026 Yörem 06. Tüm hakları saklıdır. Emrah Eren tarafından sevgiyle.</p>
        </div>
      </div>
    </footer>
  );
};
