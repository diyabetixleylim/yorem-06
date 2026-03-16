import React from 'react';
import { motion } from 'motion/react';

export const About: React.FC = () => {
  return (
    <div className="pb-20">
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/nature/1920/1080"
            alt="About Hero"
            className="w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-serif mb-4"
          >
            Hikayemiz
          </motion.h1>
          <p className="text-xl font-light tracking-widest uppercase">Yörem 06 & Çömlekçatlatan</p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="prose prose-lg prose-stone mx-auto text-center space-y-8"
        >
          <p className="text-2xl font-serif italic text-brand-olive">
            Bazı hikâyeler bir şirket kurmakla başlamaz. Bir sözle başlar.
          </p>

          <p>
            Bizim hikâyemiz de öyle başladı. Yıllar önce mutfaklarımızda pişen yemeklerin kokusu başkaydı.
            Pilavın kokusu ayrıydı, bulgurun tadı ayrıydı. Nohut, fasulye, mercimek… hepsinin kendine has bir lezzeti vardı.
          </p>

          <p>
            Çünkü o zamanlar gıda sadece bir ürün değildi. Toprağın gerçek haliydi.
            Zamanla raflar değişti. Tohumlar değişti. Lezzetler değişti.
          </p>

          <p className="font-serif text-3xl text-brand-ink py-4">
            Ama biz bir şeyi değiştirmemeye karar verdik.
          </p>

          <p>
            Toprağın bize emanet ettiği o eski tohumları korumaya… Gerçek gıdanın nasıl olması gerektiğini unutturmamaya…
            İşte Yörem06 böyle doğdu.
          </p>

          <p>
            Bugün pirincimiz var. Bulgurumuz var. Nohutumuz, fasulyemiz, mercimeğimiz, unumuz var.
            Ama aslında hepsinin ortak bir tarafı var: Hepsi toprağın bize verdiği haliyle. Katkısız. Doğal. Olduğu gibi.
          </p>

          <div className="bg-brand-olive/5 p-12 rounded-[40px] my-12">
            <h2 className="text-3xl font-serif mb-6">Çömlekçatlatan Pirinç</h2>
            <p>
              Çömlekçatlatan Pirinç ise bu hikâyenin kalbi. Adını eski usul pilavdan alır.
              Çömlekte piştiğinde öyle kabarır, öyle bereketlenir ki “Bu pirinç çömleği bile çatlatır.”
              Biz bu adı bir marka olsun diye değil, bir geleneği yaşatmak için taşıyoruz.
            </p>
          </div>

          <p>
            Bugün binlerce sofraya ulaşıyorsak bu bizim başarımız değil. Bu; toprağın, emeğin ve bize güvenen insanların hikâyesidir.
          </p>

          <div className="pt-12 border-t border-brand-ink/10">
            <p className="text-xl font-serif mb-2">“İşte gerçek gıdanın tadı bu.”</p>
            <p className="text-brand-ink/60">O an anlarız ki doğru yoldayız.</p>
          </div>

          <div className="pt-8">
            <p className="font-serif text-2xl">Emrah Eren</p>
            <p className="text-brand-olive font-medium">Yörem 06</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
