export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  unit: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Çömlekçatlatan Pirinç",
    price: 85,
    category: "Pirinç",
    image: "https://picsum.photos/seed/rice/600/600",
    description: "Adını eski usul pilavdan alır. Çömlekte piştiğinde öyle kabarır, öyle bereketlenir ki 'Bu pirinç çömleği bile çatlatır' dedirtir.",
    unit: "1 kg"
  },
  {
    id: "2",
    name: "Erişte",
    price: 65,
    category: "Makarna",
    image: "https://picsum.photos/seed/pasta/600/600",
    description: "Ev yapımı, bol yumurtalı ve geleneksel yöntemlerle kesilmiş doğal erişte.",
    unit: "500 g"
  },
  {
    id: "3",
    name: "Pilavlık Köy Bulguru",
    price: 45,
    category: "Bulgur",
    image: "https://picsum.photos/seed/bulgur/600/600",
    description: "Taş değirmende kırılmış, tam lezzetli ve besleyici köy bulguru.",
    unit: "1 kg"
  },
  {
    id: "4",
    name: "Atalım Hanımteni Şeker Fasulyesi",
    price: 120,
    category: "Fasulye",
    image: "https://picsum.photos/seed/beans/600/600",
    description: "İnce kabuklu, çabuk pişen ve ağızda dağılan meşhur şeker fasulyesi.",
    unit: "1 kg"
  },
  {
    id: "5",
    name: "Gökçe Nohut",
    price: 75,
    category: "Nohut",
    image: "https://picsum.photos/seed/chickpeas/600/600",
    description: "İri taneli, kolay pişen ve lezzetiyle sofraların vazgeçilmezi olan Gökçe nohut.",
    unit: "1 kg"
  },
  {
    id: "6",
    name: "Doğal Köy Barbunyası",
    price: 95,
    category: "Barbunya",
    image: "https://picsum.photos/seed/barbunya/600/600",
    description: "Taze ve doğal, geleneksel yöntemlerle kurutulmuş köy barbunyası.",
    unit: "1 kg"
  },
  {
    id: "7",
    name: "Yerli Patlatmalık Mısır",
    price: 40,
    category: "Mısır",
    image: "https://picsum.photos/seed/popcorn/600/600",
    description: "Yerli tohumdan üretilmiş, tam patlayan ve çıtır çıtır mısır.",
    unit: "500 g"
  },
  {
    id: "8",
    name: "Taş Değirmen Tam Buğday Unu",
    price: 55,
    category: "Un",
    image: "https://picsum.photos/seed/flour1/600/600",
    description: "Besin değerini kaybetmeden taş değirmende öğütülmüş tam buğday unu.",
    unit: "2 kg"
  },
  {
    id: "9",
    name: "Katkısız Doğal Beyaz Un",
    price: 50,
    category: "Un",
    image: "https://picsum.photos/seed/flour2/600/600",
    description: "Hiçbir katkı maddesi içermeyen, doğal ve beyaz un.",
    unit: "2 kg"
  },
  {
    id: "10",
    name: "Yerli Yeşil Mercimek",
    price: 60,
    category: "Mercimek",
    image: "https://picsum.photos/seed/lentils/600/600",
    description: "Protein deposu, yerli üretim yeşil mercimek.",
    unit: "1 kg"
  },
  {
    id: "11",
    name: "Hakiki Köy Cevizi",
    price: 180,
    category: "Kuruyemiş",
    image: "https://picsum.photos/seed/walnut/600/600",
    description: "İnce kabuklu, dolgun içli ve taze hakiki köy cevizi.",
    unit: "1 kg"
  },
  {
    id: "12",
    name: "Yeni Börülce",
    price: 80,
    category: "Börülce",
    image: "https://picsum.photos/seed/borulce/600/600",
    description: "Taze hasat edilmiş, besleyici ve lezzetli yeni sezon börülce.",
    unit: "1 kg"
  }
];

