import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Gift, X } from 'lucide-react';
import confetti from 'canvas-confetti';

const GIFTS = [
  "Çömlekçatlatan Pirinç (1kg)",
  "Erişte (500g)",
  "Köy Bulguru (1kg)",
  "Şeker Fasulyesi (1kg)",
  "Gökçe Nohut (1kg)",
  "Köy Barbunyası (1kg)",
  "Yeşil Mercimek (1kg)",
  "Köy Cevizi (1kg)"
];

export const GiftWheel: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [rotation, setRotation] = useState(0);

  const spin = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    const newRotation = rotation + 1800 + Math.random() * 360;
    setRotation(newRotation);

    setTimeout(() => {
      setIsSpinning(false);
      const normalizedRotation = (newRotation % 360);
      const index = Math.floor(((360 - normalizedRotation) % 360) / (360 / GIFTS.length));
      setResult(GIFTS[index]);
      
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#5A5A40', '#f5f5f0', '#D4AF37']
      });
    }, 4000);
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 bg-brand-olive text-white p-4 rounded-full shadow-lg flex items-center gap-2"
      >
        <Gift size={24} />
        <span className="font-medium">Hediye Çarkı</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-brand-cream max-w-md w-full rounded-[40px] p-8 relative overflow-hidden"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-brand-ink/40 hover:text-brand-ink"
              >
                <X size={24} />
              </button>

              <div className="text-center mb-8">
                <h2 className="text-3xl mb-2">Şansını Dene!</h2>
                <p className="text-brand-ink/60">Çarkı çevir, bugün şansına hangi doğal lezzet çıkacak?</p>
              </div>

              <div className="relative aspect-square w-full max-w-[320px] mx-auto mb-8">
                <motion.div
                  animate={{ rotate: rotation }}
                  transition={{ duration: 4, ease: [0.45, 0.05, 0.55, 0.95] }}
                  className="w-full h-full rounded-full border-[12px] border-brand-olive relative overflow-hidden shadow-[0_0_50px_rgba(90,90,64,0.3)] bg-white"
                >
                  {/* Wheel Segments */}
                  <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                    {GIFTS.map((_, i) => {
                      const angle = (360 / GIFTS.length);
                      const startAngle = i * angle;
                      const endAngle = (i + 1) * angle;
                      const x1 = 50 + 50 * Math.cos((Math.PI * startAngle) / 180);
                      const y1 = 50 + 50 * Math.sin((Math.PI * startAngle) / 180);
                      const x2 = 50 + 50 * Math.cos((Math.PI * endAngle) / 180);
                      const y2 = 50 + 50 * Math.sin((Math.PI * endAngle) / 180);
                      
                      return (
                        <path
                          key={i}
                          d={`M 50 50 L ${x1} ${y1} A 50 50 0 0 1 ${x2} ${y2} Z`}
                          fill={i % 2 === 0 ? '#5A5A40' : '#f5f5f0'}
                          stroke="#5A5A40"
                          strokeWidth="0.2"
                        />
                      );
                    })}
                  </svg>

                  {/* Gift Labels */}
                  {GIFTS.map((gift, i) => (
                    <div
                      key={i}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none"
                      style={{ transform: `translate(-50%, -50%) rotate(${i * (360 / GIFTS.length) + (360 / GIFTS.length / 2)}deg)` }}
                    >
                      <div 
                        className="absolute top-8 left-1/2 -translate-x-1/2 text-center w-24 leading-tight" 
                        style={{ color: i % 2 === 0 ? 'white' : '#5A5A40' }}
                      >
                        <span className="text-[8px] font-serif italic block opacity-80 mb-0.5">Hediye</span>
                        <span className="text-[9px] font-bold uppercase tracking-tighter block leading-[1.1]">
                          {gift.split(' (')[0]}
                        </span>
                      </div>
                    </div>
                  ))}
                </motion.div>
                
                {/* Pointer */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 z-20">
                  <div className="w-6 h-8 bg-red-600 shadow-lg" style={{ clipPath: 'polygon(50% 100%, 0 0, 100% 0)' }} />
                </div>
                
                {/* Center Cap */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-brand-olive rounded-full border-4 border-brand-cream shadow-xl z-10 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                </div>
              </div>


              <div className="text-center">
                {!result ? (
                  <button
                    onClick={spin}
                    disabled={isSpinning}
                    className="btn-primary w-full disabled:opacity-50"
                  >
                    {isSpinning ? 'Çevriliyor...' : 'Çarkı Çevir'}
                  </button>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <p className="text-xl mb-4">Tebrikler! Kazandınız:</p>
                    <p className="text-2xl font-serif text-brand-olive mb-6">{result}</p>
                    <p className="text-sm text-brand-ink/60 mb-6">Hediye ürününüz sepetinize eklendi veya bir sonraki alışverişinizde geçerli kodunuz: <span className="font-bold text-brand-ink">YOREM06HEDIYE</span></p>
                    <button
                      onClick={() => {
                        setResult(null);
                        setIsOpen(false);
                      }}
                      className="btn-outline w-full"
                    >
                      Kapat
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
