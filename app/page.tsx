"use client";
import React, { useState } from 'react';
import { 
  Search, ShoppingCart, Menu, Upload, 
  ChevronRight, Laptop, BookOpen, Palette, 
  Heart, Bell, User, Briefcase, Filter,
  Instagram, Facebook, Twitter, CheckCircle2
} from 'lucide-react';
// Asegúrate de que este archivo exista en tu carpeta lib
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
    <div className="min-h-screen bg-[#F3F4F6] text-slate-900 font-sans">
      
      {/* --- BARRA SUPERIOR (ANUNCIOS) --- */}
      <nav className="bg-[#111827] text-orange-400 py-2.5 px-4 md:px-10 text-[11px] font-bold tracking-[0.15em] uppercase">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p className="flex items-center gap-2">
            <CheckCircle2 size={14} /> Envíos a todo el Ecuador
          </p>
          <div className="flex gap-6 items-center ml-auto text-white/80">
            <span className="hover:text-orange-400 cursor-pointer transition-colors">Nuestros Locales</span>
            <span className="hover:text-orange-400 cursor-pointer transition-colors">Ayuda</span>
          </div>
        </div>
      </nav>

      {/* --- HEADER PRINCIPAL --- */}
      <header className="bg-white sticky top-0 z-50 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between gap-4">
          
          {/* LOGO - Texto en Negro para contraste */}
          <div className="flex items-center gap-4">
            <Menu className="lg:hidden text-slate-800" />
            <h1 className="text-2xl md:text-3xl font-black tracking-tighter text-[#111827]">
              CHIRIBOGA<span className="text-orange-500">.</span>
            </h1>
          </div>

          {/* BUSCADOR */}
          <div className="hidden md:flex flex-1 max-w-xl relative">
            <input 
              type="text" 
              placeholder="Buscar productos, marcas y más..." 
              className="w-full bg-gray-100 border-2 border-transparent rounded-xl px-5 py-2.5 text-sm focus:bg-white focus:border-orange-500 outline-none transition-all text-slate-800"
            />
            <Search className="absolute right-4 top-3 text-slate-400" size={20}/>
          </div>

          {/* ACCIONES */}
          <div className="flex items-center gap-2 md:gap-5">
            <button className="p-2 hover:bg-gray-100 rounded-full text-slate-700 transition-colors">
              <Heart size={24} />
            </button>
            <button className="flex items-center gap-2 bg-[#111827] text-white px-4 py-2.5 rounded-xl hover:bg-orange-600 transition-all shadow-md">
              <ShoppingCart size={20} />
              <span className="hidden sm:inline font-bold text-xs uppercase">Carrito</span>
            </button>
            <div className="h-8 w-[1px] bg-gray-200 hidden sm:block"></div>
            <button className="hidden sm:flex items-center gap-2 font-bold text-xs text-slate-800 hover:text-orange-600 uppercase tracking-wider">
              <User size={20} className="text-orange-500" />
              <span>Entrar</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        
        {/* --- BANNERS PRINCIPALES --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {/* Banner Hero */}
          <div className="lg:col-span-2 bg-orange-500 rounded-[2rem] p-8 md:p-12 relative overflow-hidden flex items-center shadow-xl shadow-orange-200 group">
            <div className="relative z-10 max-w-md">
              <p className="text-orange-950 font-black text-xs uppercase tracking-widest mb-4">¡Novedades 2026!</p>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.1] mb-8">TODO EL ARTE EN UN SOLO LUGAR.</h2>
              <button className="bg-[#111827] text-white px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform">Ver Catálogo</button>
            </div>
            <img src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600" className="absolute right-[-5%] bottom-[-5%] w-1/2 opacity-40 group-hover:scale-110 transition-transform duration-700" alt="arte" />
          </div>

          {/* Banner de Lista (Subida de archivos) */}
          <div className="bg-white border-2 border-dashed border-gray-300 rounded-[2rem] p-8 flex flex-col justify-center text-center shadow-sm">
            <div className="bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Upload className="text-orange-500" size={30} />
            </div>
            <h3 className="text-[#111827] text-xl font-black mb-3 text-slate-900">¿Tienes tu lista?</h3>
            <p className="text-slate-500 text-sm mb-8">Sube una foto o PDF y nosotros te enviamos el presupuesto hoy mismo.</p>
            <label className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-4 rounded-xl cursor-pointer transition-all font-black text-xs uppercase tracking-widest shadow-lg">
              {uploading ? "Cargando..." : "Subir archivo aquí"}
              <input type="file" className="hidden" onChange={handleUpload} disabled={uploading}/>
            </label>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* SIDEBAR FILTROS */}
          <aside className="lg:w-64 flex-shrink-0">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
              <Filter size={14} className="text-orange-500" /> Categorías
            </h3>
            <nav className="space-y-2">
              <SidebarItem icon={<BookOpen size={18}/>} text="Escolar" active />
              <SidebarItem icon={<Briefcase size={18}/>} text="Oficina" />
              <SidebarItem icon={<Laptop size={18}/>} text="Tecnología" />
              <SidebarItem icon={<Palette size={18}/>} text="Arte & Pintura" />
            </nav>
          </aside>

          {/* GRID DE PRODUCTOS */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-10 border-b border-gray-200 pb-4">
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Productos Destacados</h2>
              <span className="text-orange-600 font-bold text-sm cursor-pointer hover:underline">Ver todos →</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
              <ProductCard img="https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=500" title="Cuaderno Espiral Pro" price="12.50" tag="Nuevo" />
              <ProductCard img="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500" title="Mochila Explore Blue" price="45.00" />
              <ProductCard img="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500" title="Óleos Profesionales x12" price="32.99" tag="Oferta" />
            </div>
          </div>
        </div>
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-white border-t border-gray-200 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-500">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">© 2026 CHIRIBOGA PAPELERIA</p>
          <div className="flex gap-6">
            <Instagram size={20} className="hover:text-orange-500 transition-colors" />
            <Facebook size={20} className="hover:text-orange-500 transition-colors" />
            <Twitter size={20} className="hover:text-orange-500 transition-colors" />
          </div>
        </div>
      </footer>

      {/* --- BOTÓN FLOTANTE DE WHATSAPP --- */}
      <a 
        href="https://wa.me/593900000000?text=Hola!%20Vengo%20de%20la%20web%20y%20quiero%20consultar%20sobre%20un%20producto." 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group flex items-center overflow-hidden"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
        <div className="relative flex items-center">
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:mr-3 transition-all duration-500 font-bold text-sm">
            Escríbenos
          </span>
          <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217s.231.001.332.005c.109.004.253-.041.397.303.145.346.491 1.197.534 1.284.044.087.073.188.014.303-.058.116-.087.188-.173.289-.087.101-.184.226-.263.303-.087.087-.177.182-.077.354.1.173.444.732.953 1.185.656.584 1.21.765 1.383.852.173.087.274.072.376-.043.101-.116.433-.505.548-.678.116-.173.231-.145.39-.087s1.011.477 1.184.563c.173.087.289.13.332.202.045.072.045.419-.1.824z"/>
          </svg>
        </div>
      </a>

    </div>
  );
}

// --- SUB-COMPONENTES ---

function SidebarItem({ icon, text, active = false }: any) {
  return (
    <div className={`flex items-center justify-between p-3.5 rounded-xl cursor-pointer transition-all ${active ? 'bg-orange-500 text-white shadow-lg' : 'text-slate-600 hover:bg-gray-200'}`}>
      <div className="flex items-center gap-3">
        <span className={`${active ? 'text-white' : 'text-orange-500'}`}>{icon}</span>
        <span className="font-bold text-sm tracking-tight">{text}</span>
      </div>
      <ChevronRight size={14} className={active ? 'text-white' : 'text-slate-400'} />
    </div>
  );
}

function ProductCard({ img, title, price, tag }: any) {
  return (
    <div className="bg-white rounded-[1.5rem] p-5 shadow-sm border border-gray-100 hover:shadow-xl transition-all flex flex-col group">
      <div className="relative rounded-xl overflow-hidden mb-4">
        {tag && (
          <span className="absolute top-3 left-3 z-10 bg-orange-500 text-white text-[9px] font-black px-2.5 py-1 rounded-lg uppercase tracking-widest shadow-md">
            {tag}
          </span>
        )}
        <img src={img} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" alt={title} />
      </div>
      <h4 className="font-bold text-slate-800 text-[15px] mb-2 leading-tight">{title}</h4>
      <div className="mt-auto flex items-center justify-between">
        <p className="text-[#111827] font-black text-xl">${price}</p>
        <button className="bg-gray-100 p-3 rounded-xl hover:bg-orange-500 hover:text-white transition-all text-slate-700">
          <ShoppingCart size={18} />
        </button>
      </div>
    </div>
  );
}

