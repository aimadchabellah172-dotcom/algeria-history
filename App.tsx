/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from "motion/react";
import { 
  History, 
  Map as MapIcon, 
  Flag, 
  BookOpen, 
  Shield, 
  Globe, 
  Compass, 
  Award,
  ChevronDown,
  ExternalLink,
  ChevronLeft
} from "lucide-react";
import React from "react";

// --- Types & Constants ---
interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  color: string;
}

const HISTORICAL_EVENTS: TimelineEvent[] = [
  {
    year: "10,000 ق.م",
    title: "حضارة طاسيلي ناجر",
    description: "أكبر متحف طبيعي للنقوش الصخرية في العالم. تروي جدرانها قصة تحول الصحراء من واحة غناء إلى ما هي عليه اليوم، شاهدة على مهد البشرية.",
    icon: <History className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1590402444811-b6a821e0ca7d?auto=format&fit=crop&q=80&w=1200",
    color: "bg-orange-100 text-orange-800"
  },
  {
    year: "300 ق.م",
    title: "مملكة نوميديا العظمى",
    description: "أسس الملك ماسينيسا أول دولة أمازيغية متحدة وقوية. كانت 'سيرتا' عاصمتها ومصدر قوة عسكرية واقتصادية أذهلت الإمبراطوريات القديمة.",
    icon: <Shield className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&q=80&w=1200",
    color: "bg-blue-100 text-blue-800"
  },
  {
    year: "القرن الـ7 م",
    title: "الفتح والازدهار الإسلامي",
    description: "دخول الإسلام غير هوية المنطقة وجعلها مركزاً للعلماء. تعاقبت دول كالحماديين والزيانيين، وبُنيت منارات العلم والقصور الفاخرة.",
    icon: <BookOpen className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1542662565-7e4b66bae529?auto=format&fit=crop&q=80&w=1200",
    color: <span className="bg-emerald-100 text-emerald-800"></span>, // Placeholder for color fix
  } as any, 
  // Refined list to match beautiful content
  {
    year: "1518 - 1830",
    title: "سيادة البحر المتوسط",
    description: "في العهد العثماني، كانت الجزائر القوة البحرية الأولى. لُقبت بـ'المحروسة' وكانت تهابها الأساطيل العالمية، وتفرض كلمتها في البحار.",
    icon: <Compass className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1623150514153-6093630f940b?auto=format&fit=crop&q=80&w=1200",
    color: "bg-red-100 text-red-800"
  },
  {
    year: "1830 - 1847",
    title: "الأمير عبد القادر",
    description: "مؤسس الدولة الحديثة والرمز العالمي للإنسانية. واجه الاستعمار بجيش منظم وفكر عبقري، تاركاً إرثاً من النضال الشريف.",
    icon: <Flag className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&q=80&w=1200",
    color: "bg-stone-200 text-stone-800"
  },
  {
    year: "1954 - 1962",
    title: "ثورة المليون ونصف شهيد",
    description: "ملحمة كبرى هزت العالم. استعاد الشعب الجزائري كرامته وقدم أغلى التضحيات لينتزع الاستقلال في 5 جويلية 1962، وتصبح الجزائر قبلة للأحرار.",
    icon: <Award className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1510414838637-299f0e1f6e2f?auto=format&fit=crop&q=80&w=1200",
    color: "bg-green-100 text-green-800"
  }
];

// Correcting the third item color/icon logic
HISTORICAL_EVENTS[2] = {
  year: "القرن الـ7 م",
  title: "الفتح والازدهار الإسلامي",
  description: "دخول الإسلام غير هوية المنطقة وجعلها مركزاً للعلماء. تعاقبت دول كالحماديين والزيانيين، وبُنيت منارات العلم والقصور الفاخرة.",
  icon: <BookOpen className="w-6 h-6" />,
  image: "https://images.unsplash.com/photo-1542662565-7e4b66bae529?auto=format&fit=crop&q=80&w=1200",
  color: "bg-emerald-100 text-emerald-800"
};

// --- Shared Components ---

const SectionHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="text-center mb-24 px-4">
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="inline-block mb-6 px-4 py-1.5 bg-emerald-50 rounded-full text-[#166534] font-arabic font-bold text-sm"
    >
      فصول من المجد
    </motion.div>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="font-arabic font-bold text-5xl md:text-7xl mb-8 text-[#166534]"
    >
      {title}
    </motion.h2>
    <motion.p 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
      className="text-gray-500 max-w-3xl mx-auto text-xl md:text-2xl leading-relaxed italic font-light"
    >
      {subtitle}
    </motion.p>
  </div>
);

// --- Main App Component ---

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen font-sans overflow-x-hidden selection:bg-[#166534] selection:text-white bg-[#fcfbf7] text-[#1a1a1a]">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-[#166534] origin-right z-50 shadow-lg"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
            className="w-full h-full"
          >
            <img 
              src="https://images.unsplash.com/photo-1510414838637-299f0e1f6e2f?auto=format&fit=crop&q=80&w=1920" 
              alt="Algeria Landscape" 
              className="w-full h-full object-cover opacity-60 grayscale-[20%]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-[#fcfbf7]" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-3 mb-8 bg-white/5 backdrop-blur-md px-6 py-2 rounded-full border border-white/10">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-white/80 font-arabic text-lg tracking-widest">أهلاً بك في أرض البطولات</span>
            </div>
            <h1 className="font-arabic font-bold text-7xl md:text-[10rem] text-white mb-8 leading-[1] drop-shadow-2xl">
              تاريخ الجزائر
            </h1>
            <p className="text-gray-200 text-xl md:text-3xl max-w-3xl mx-auto leading-relaxed font-arabic font-light mb-12 drop-shadow-lg italic">
              "نحن القوم الذين إذا غضبنا.. أرينا العالم معنى الكرامة. رحلة في أعماق مهد البشرية."
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <motion.button 
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#166534] text-white px-12 py-5 rounded-2xl font-arabic font-bold text-xl hover:bg-[#115e59] transition-all shadow-2xl flex items-center gap-3 group"
              >
                تصفح التاريخ <ChevronLeft className="w-6 h-6 group-hover:-translate-x-2 transition-transform" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-xl text-white border border-white/20 px-12 py-5 rounded-2xl font-arabic font-bold text-xl hover:bg-white/20 transition-all shadow-xl"
              >
                المعرض المرئي
              </motion.button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/40 cursor-pointer"
        >
          <ChevronDown className="w-12 h-12" />
        </motion.div>
      </header>

      {/* Stats Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 text-center">
            {[
              { label: "المساحة", value: "2.38M", sub: "كم² - الأكبر إفريقيا", icon: <MapIcon className="w-8 h-8" /> },
              { label: "الحضارة", value: "+10,000", sub: "سنة من التاريخ", icon: <History className="w-8 h-8" /> },
              { label: "الموقع", value: "استراتيجي", sub: "بوابة إفريقيا والأندلس", icon: <Globe className="w-8 h-8" /> },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative bg-white p-12 rounded-[3.5rem] shadow-2xl shadow-emerald-900/5 group hover:-translate-y-4 transition-all duration-500 border border-gray-100"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-bl-[100%] transition-all group-hover:scale-110" />
                <div className="inline-flex items-center justify-center p-6 bg-emerald-50 text-[#166534] rounded-3xl mb-8 shadow-inner group-hover:bg-[#166534] group-hover:text-white transition-colors">
                  {stat.icon}
                </div>
                <h3 className="text-6xl font-bold text-gray-900 mb-2 font-mono">{stat.value}</h3>
                <p className="text-gray-500 font-arabic text-2xl mb-1">{stat.label}</p>
                <span className="text-xs text-emerald-600 font-bold uppercase tracking-[0.3em]">{stat.sub}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-40 bg-[#fcfbf7] relative">
        <SectionHeader 
          title="ملحمة الألف عام" 
          subtitle="تتبع الخط الزمني لأمة صنعت التاريخ، من نقوش طاسيلي السحيقة إلى فجر الاستقلال."
        />

        <div className="max-w-7xl mx-auto px-4 relative">
          {HISTORICAL_EVENTS.map((event, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className={`flex flex-col md:flex-row items-center mb-48 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full md:w-1/2 px-4 md:px-16">
                <div className="bg-white p-12 rounded-[4rem] shadow-2xl shadow-emerald-900/5 hover:shadow-emerald-900/10 transition-all duration-700 border border-emerald-50 group hover:-rotate-1">
                  <div className={`inline-flex items-center justify-center px-6 py-2 rounded-full text-sm font-bold mb-8 shadow-sm ${event.color}`}>
                    {event.year}
                  </div>
                  <h3 className="font-arabic font-bold text-3xl md:text-5xl mb-8 text-[#1a1a1a] flex items-center gap-4">
                    <span className="p-4 bg-emerald-50 rounded-2xl text-[#166534] shadow-inner group-hover:scale-110 transition-transform">
                      {event.icon}
                    </span>
                    {event.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-2xl mb-10 italic font-light">
                    "{event.description}"
                  </p>
                  <button className="text-[#166534] font-bold text-xl flex items-center gap-3 hover:gap-6 transition-all">
                    استكشف الأرشيف <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="w-full md:w-1/2 px-4 md:px-16 mt-16 md:mt-0">
                <motion.div 
                   whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                   className="relative rounded-[4rem] overflow-hidden shadow-3xl aspect-[4/3] border-8 border-white"
                >
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-40 bg-white">
        <SectionHeader 
          title="فسيفساء الثقافة" 
          subtitle="الجزائر قارة تختزل تنوعاً ثقافياً مذهلاً، من أزهار المدن المتوسطية إلى رمال الصحراء الكبرى."
        />
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { tag: "صناعة", title: "الحلي التقليدية", img: "https://images.unsplash.com/photo-1515562141521-7a4c6225e076?auto=format&fit=crop&q=80&w=600" },
            { tag: "عمارة", title: "قصبة الجزائر", img: "https://images.unsplash.com/photo-1623150514153-6093630f940b?auto=format&fit=crop&q=80&w=600" },
            { tag: "أزياء", title: "اللباس العاصمي", img: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&q=80&w=600" },
            { tag: "طبيعة", title: "جبال جرجرة", img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=600" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -20 }}
              className="group relative h-[450px] rounded-[4rem] overflow-hidden shadow-2xl cursor-pointer"
            >
              <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-10 right-10 text-right">
                <span className="text-emerald-400 text-sm font-bold uppercase mb-2 block">{item.tag}</span>
                <h4 className="text-white text-2xl font-arabic font-bold">{item.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] py-32 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-arabic font-bold text-7xl md:text-9xl mb-12 opacity-10">الجزائر</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center justify-between text-right mb-20">
             <div className="space-y-6">
               <h3 className="text-4xl font-arabic font-bold text-emerald-400">بوابة تاريخ الجزائر</h3>
               <p className="text-gray-400 text-xl leading-relaxed">أرض الحضارات، منبع الأبطال، ومستقبل واعد يرتكز على إرث عظيم.</p>
             </div>
             <div className="flex justify-center md:justify-end gap-6 text-emerald-400">
               <Globe className="w-10 h-10" />
               <Award className="w-10 h-10" />
               <Flag className="w-10 h-10" />
             </div>
          </div>
          <div className="h-px bg-white/10 mb-12" />
          <p className="text-gray-500 font-arabic">© {new Date().getFullYear()} مهد الثوار ومنارة الأحرار. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  );
}
