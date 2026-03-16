import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Lock, ArrowRight } from 'lucide-react';

export const Login: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card max-w-md w-full p-10"
      >
        <div className="text-center mb-10">
          <h1 className="text-4xl mb-2">{isLogin ? 'Giriş Yap' : 'Kayıt Ol'}</h1>
          <p className="text-brand-ink/60">Yörem 06 ailesine hoş geldiniz.</p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium mb-2">Ad Soyad</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-brand-cream border border-brand-ink/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-olive/20"
                placeholder="Adınız Soyadınız"
              />
            </div>
          )}
          <div>
            <label className="block text-sm font-medium mb-2">E-posta</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-ink/40" size={18} />
              <input
                type="email"
                className="w-full pl-12 pr-4 py-3 bg-brand-cream border border-brand-ink/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-olive/20"
                placeholder="ornek@mail.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Şifre</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-ink/40" size={18} />
              <input
                type="password"
                className="w-full pl-12 pr-4 py-3 bg-brand-cream border border-brand-ink/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-olive/20"
                placeholder="••••••••"
              />
            </div>
          </div>

          {isLogin && (
            <div className="text-right">
              <button className="text-sm text-brand-olive hover:underline">Şifremi Unuttum</button>
            </div>
          )}

          <button className="btn-primary w-full flex items-center justify-center gap-2">
            {isLogin ? 'Giriş Yap' : 'Hesap Oluştur'} <ArrowRight size={18} />
          </button>
        </form>

        <div className="mt-8 text-center pt-8 border-t border-brand-ink/5">
          <p className="text-brand-ink/60">
            {isLogin ? 'Henüz hesabınız yok mu?' : 'Zaten hesabınız var mı?'}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 text-brand-olive font-bold hover:underline"
            >
              {isLogin ? 'Kayıt Ol' : 'Giriş Yap'}
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  );
};
