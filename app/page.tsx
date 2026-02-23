"use client";
import React, { useState } from 'react';
import { 
  Search, ShoppingCart, Menu, Upload, 
  ChevronRight, Laptop, BookOpen, Palette, 
  Heart, Bell, User, Briefcase, Filter,
  Instagram, Facebook, Twitter
} from 'lucide-react';
// Asegúrate de que este path sea correcto según tu estructura de carpetas
import { supabase } from "../lib/supabase";

export default function ChiribogaReplica() {
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      setUploading(true);
      const fileName = `${Date.now()}-${file.name}`;
      const { error } = await supabase.storage.from('listas').upload(fileName, file);
      if (error) throw error;
      alert("✅ ¡Lista enviada con éxito!");
    } catch (e: any) { 
      alert(e.message || "Error al subir"); 
    } finally { 
      setUploading(false); 
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FB] text-slate-900 font-sans selection:bg-orange-100 selection:text-orange-600">
      
      {/* --- TOP NAV --- */}
      <nav className="bg-[#111827] text-white/80 py-2 px-4 md:px-10 text-[11px] font-medium tracking-widest uppercase">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p className="hidden sm:block">⚡ Envíos a todo el país | Gratis desde $50</p>
          <div className="flex gap-6 items-center ml-auto">
            <span className="hover:text-orange-400 cursor-pointer transition-colors">Locales</span>
            <span className="hover:text-orange-400 cursor-pointer transition-colors">Soporte</span>
          </div>
        </div>
      </nav>

      {/* --- HEADER --- */}
      <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="lg:hidden p-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors">
              <Menu size={24} />
            </div>
            <h1 className="text-xl md:text-2xl font-black tracking-tighter text-[#111827] cursor-pointer">
              CHIRIBOGA<span className="text-orange-500">.</span>
            </h1>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl relative group">
            <input 
              type="text" 
              placeholder="¿Qué necesitas para hoy?" 
              className="w-full bg-gray-100 border-none rounded-2xl px-6 py-2.5 text-sm focus:ring-2 focus:ring-orange-500/20 outline-none transition-all placeholder:text-gray-400"
            />
            <div className="absolute right-3 top-1.5 p-1.5 bg-white rounded-xl shadow-sm group-focus-within:text-orange-500 transition-colors">
              <Search size={18}/>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1 md:gap-4">
            <button className="p-2.5 hover:bg-gray-100 rounded-2xl transition-all relative group text-slate-600">
              <Heart size={22} className="group-hover:fill-red-500 group-hover:text-red-500 transition-colors" />
            </button>
            
            <button className="p-2.5 bg-[#111827] text-white rounded-2xl transition-all relative flex items-center gap-2 hover:bg-orange-600 shadow-lg shadow-gray-200">
              <ShoppingCart size={20} />
              <span className="hidden sm:inline font-bold text-xs uppercase tracking-tighter">Carrito</span>
              <span className="absolute -top-1 -right-1 bg-orange-500 border-2 border-white text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold font-sans">0</span>
            </button>

            <div className="h-8 w-[1px] bg-gray-200 mx-2 hidden sm:block"></div>
            
            <button className="hidden sm:flex items-center gap-2 font-bold text-xs uppercase tracking-widest hover:text-orange-600 transition-colors">
              <User size={20} className="text-orange-500" />
              <span>Login</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        
        {/* --- HERO SECTION --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16">
          {/* Banner Principal */}
          <div className="md:col-span-8 bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 rounded-[2.5rem] p-8 md:p-14 relative overflow-hidden group min-h-[350px] flex items-center shadow-2xl shadow-orange-200">
            <div className="relative z-10 max-w-md">
              <span className="inline-block bg-white/20 backdrop-blur-md text-white font-bold text-[10px] uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-4">
                Colección 2026
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-white mt-2 mb-8 leading-[1.1] tracking-tight">
                EL ARTE DE <br/> CREAR <span className="text-orange-950/30">MEJOR.</span>
              </h2>
              <button className="bg-[#111827] text-white px-10 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl active:scale-95">
                Ver Colección
              </button>
            </div>
            {/* Imagen Decorativa */}
            <img 
              src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800" 
              className="absolute right-[-10%] bottom-[-10%] w-[60%] object-cover mix-blend-overlay opacity-50 group-hover:scale-110 transition-transform duration-1000 rotate-12" 
              alt="Arte" 
            />
          </div>
          
          {/* Tarjeta de Lista Escolar */}
          <div className="md:col-span-4 bg-white rounded-[2.5rem] p-8 flex flex-col justify-center text-center relative overflow-hidden shadow-xl border border-gray-100">
             <div className="relative z-10">
                <div className="w-20 h-20 bg-orange-50 rounded-3xl flex items-center justify-center mx-auto mb-6 transform -rotate-6">
                  <Upload className="text-orange-500" size={32} />
                </div>
                <h3 className="text-[#111827] text-2xl font-black mb-3">Tu lista escolar</h3>
                <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                  Sube una foto o PDF de tu lista y <span className="font-bold text-orange-500 italic text-lg">nosotros la armamos</span> por ti.
                </p>
                <label className="w-full bg-[#111827] hover:bg-orange-600 text-white px-6 py-4 rounded-2xl cursor-pointer transition-all inline-block font-bold text-xs uppercase tracking-widest shadow-lg active:scale-95">
                  {uploading ? "Subiendo archivo..." : "Subir archivo ahora"}
                  <input type="file" className="hidden" onChange={handleUpload} disabled={uploading}/>
                </label>
             </div>
          </div>
        </div>

        {/* --- PRODUCTOS Y FILTROS --- */}
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar Filtros */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-28">
              <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
                <Filter size={14} className="text-orange-500" /> Explorar
              </h3>
              <nav className="space-y-2">
                <SidebarItem icon={<BookOpen size={18}/>} text="Escolar" active />
                <SidebarItem icon={<Briefcase size={18}/>} text="Oficina" />
                <SidebarItem icon={<Laptop size={18}/>} text="Tecnología" />
                <SidebarItem icon={<Palette size={18}/>} text="Arte & Pintura" />
              </nav>

              <div className="mt-12 p-6 bg-orange-500 rounded-[2rem] text-white relative overflow-hidden group">
                <h4 className="font-black text-xl mb-2 relative z-10 italic">15% OFF</h4>
                <p className="text-xs font-bold opacity-80 relative z-10 uppercase tracking-tighter">En tu primera compra online</p>
                <div className="absolute -right-4 -bottom-4 bg-white/10 w-24 h-24 rounded-full group-hover:scale-150 transition-transform"></div>
              </div>
            </div>
          </aside>

          {/* Grid de Productos */}
          <div className="flex-1">
            <div className="flex justify-between items-end mb-10">
              <div>
                <h2 className="text-3xl font-black text-[#111827] tracking-tight">Lo más vendido</h2>
                <p className="text-slate-400 text-sm font-medium">Productos seleccionados de esta semana</p>
              </div>
              <div className="flex gap-2">
                <div className="h-2 w-8 bg-orange-500 rounded-full"></div>
                <div className="h-2 w-2 bg-gray-200 rounded-full"></div>
                <div className="h-2 w-2 bg-gray-200 rounded-full"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProductCard img="https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=500" title="Cuaderno Espiral Pro Titanium" price="12.50" tag="Nuevo" />
              <ProductCard img="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500" title="Mochila Explore Blue Edition" price="45.00" tag="Oferta" />
              <ProductCard img="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500" title="Set Óleos Profesionales x12" price="32.99" />
              <ProductCard img="https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=500" title="Marcadores Lettering Edition" price="18.25" />
              <ProductCard img="https://images.unsplash.com/photo-1544816155-12df9643f363?w=500" title="Agenda Cuero Minimalista" price="24.00" tag="Top" />
              <ProductCard img="https://images.unsplash.com/photo-1512418490979-92798ccc1380?w=500" title="Lápices Premium de Dibujo" price="9.90" />
            </div>
          </div>
        </div>
      </main>

      {/* --- FOOTER SIMPLIFICADO --- */}
      <footer className="bg-white border-t border-gray-100 mt-20 py-12">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-400">
          <p className="text-xs font-bold uppercase tracking-widest">© 2026 CHIRIBOGA PAPELERIA. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Instagram size={18} className="hover:text-orange-500 cursor-pointer transition-colors" />
            <Facebook size={18} className="hover:text-orange-500 cursor-pointer transition-colors" />
            <Twitter size={18} className="hover:text-orange-500 cursor-pointer transition-colors" />
          </div>
        </div>
      </footer>

      {/* --- BOTÓN FLOTANTE DE WHATSAPP --- */}
      <a 
        href="https://wa.me/593900000000?text=¡Hola!%20Me%20gustaría%20tener%20más%20información%20sobre%20sus%20productos." 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_40px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all duration-300 group"
      >
        {/* Efecto de pulso */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25"></span>
        
        <div className="relative flex items-center gap-2">
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 font-black text-xs uppercase tracking-widest">
            ¿Chateamos?
          </span>
          <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217s.231.001.332.005c.109.004.253-.041.397.303.145.346.491 1.197.534 1.284.044.087.073.188.014.303-.058.116-.087.188-.173.289-.087.101-.184.226-.263.303-.087.087-.177.182-.077.354.1.173.444.732.953 1.185.656.584 1.21.765 1.383.852.173.087.274.072.376-.043.101-.116.433-.505.548-.678.116-.173.231-.145.39-.087s1.011.477 1.184.563c.173.087.289.13.332.202.045.072.045.419-.1.824z"/>
          </svg>
        </div>
      </a>

    </div>
  );
}

// --- SUB-COMPONENTES CON ESTILO MODERNO ---

function SidebarItem({ icon, text, active = false }: any) {
  return (
    <div className={`flex items-center justify-between p-4 rounded-2xl cursor-pointer transition-all duration-300 group ${active ? 'bg-white shadow-md shadow-gray-200/50 text-orange-600 translate-x-2' : 'text-slate-500 hover:bg-gray-200/50'}`}>
      <div className="flex items-center gap-3">
        <span className={`${active ? 'text-orange-500' : 'text-slate-400 group-hover:text-slate-600'}`}>{icon}</span>
        <span className="font-bold text-sm tracking-tight">{text}</span>
      </div>
      <ChevronRight size={14} className={`${active ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-all`} />
    </div>
  );
}

function ProductCard({ img, title, price, tag }: any) {
  return (
    <div className="group bg-white rounded-[2rem] p-4 shadow-sm border border-gray-100 hover:shadow-2xl hover:shadow-gray-200/60 transition-all duration-500 flex flex-col h-full hover:-translate-y-2">
      <div className="relative overflow-hidden rounded-[1.6rem] mb-5 aspect-[4/5]">
        {tag && (
          <span className="absolute top-4 left-4 z-10 bg-orange-500 text-white text-[9px] font-black px-3 py-1.5 rounded-xl uppercase tracking-widest shadow-lg shadow-orange-500/30">
            {tag}
          </span>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-0"></div>
        <img 
          src={img} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
          alt={title} 
        />
        {/* Botón rápido al hacer hover */}
        <div className="absolute bottom-4 left-4 right-4 translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
           <button className="w-full bg-white/90 backdrop-blur-md text-[#111827] py-3 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-xl">
             Vista Rápida
           </button>
        </div>
      </div>

      <div className="flex flex-col flex-1 px-2 pb-2">
        <h4 className="font-bold text-slate-800 text-sm mb-2 group-hover:text-orange-600 transition-colors line-clamp-2 leading-relaxed tracking-tight">
          {title}
        </h4>
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-50">
          <p className="text-[#111827] font-black text-xl tracking-tighter">${price}</p>
          <button className="p-3 bg-gray-100 text-[#111827] rounded-xl hover:bg-orange-500 hover:text-white transition-all active:scale-90 shadow-sm">
            <ShoppingCart size={18} fill="currentColor" className="text-inherit" />
          </button>
        </div>
      </div>
    </div>
  );
}

