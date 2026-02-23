"use client";
import React, { useState } from 'react';
import { 
  Search, ShoppingCart, Menu, Upload, 
  ChevronRight, Laptop, BookOpen, Palette, 
  Gift, Headphones, Star, User, Heart, Bell,
  Briefcase, Scissors, FileText, LayoutGrid
} from 'lucide-react';
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
    } catch (e: any) { alert(e.message); } finally { setUploading(false); }
  };

  return (
    <div className="min-h-screen">
      
      {/* --- TOP BAR --- */}
      <div className="bg-[#1D252C] text-white py-2 px-6">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center text-xs font-bold">
          <div className="flex items-center gap-4">
            <span className="text-[#FF9900]">CHIRIBOGA<span className="text-white"> PAPELERIA</span></span>
          </div>
          <div className="flex items-center gap-6">
            <span className="cursor-pointer hover:text-[#FF9900]">Envios a todo el país ➔</span>
            <div className="flex gap-3 items-center">
              <Heart size={16} className="cursor-pointer hover:text-[#FF9900]" />
              <Bell size={16} className="cursor-pointer hover:text-[#FF9900]" />
              <User size={16} className="cursor-pointer hover:text-[#FF9900]" />
              <Menu size={16} className="cursor-pointer hover:text-[#FF9900]" />
            </div>
          </div>
        </div>
      </div>

      {/* --- HEADER --- */}
      <header className="bg-white py-4 px-6 sticky top-0 z-50 shadow-sm">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-10">
          <h1 className="text-3xl font-black italic tracking-tighter">
            CHIRIBOGA<span className="text-[#FF9900]"> PAPELERIA</span>
          </h1>

          <div className="flex-1 flex max-w-2xl border-2 border-gray-100 rounded-xl overflow-hidden focus-within:border-[#FF9900] transition-all">
            <input type="text" placeholder="Buscar cuadernos, tecnología, arte..." className="w-full px-4 py-2 outline-none" />
            <button className="px-4 text-gray-400 hover:text-[#FF9900]"><Search size={20}/></button>
          </div>

          <div className="flex items-center gap-4">
            <button className="bg-[#1D252C] text-white px-6 py-2 rounded-xl font-bold flex items-center gap-2 hover:bg-black transition-all">
              <ShoppingCart size={20}/>
              Carrito
            </button>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto flex gap-6 text-[13px] font-bold text-gray-500 mt-4 overflow-x-auto whitespace-nowrap pb-2">
          <a href="#" className="hover:text-[#FF9900]">Ofertas Escolares</a>
          <a href="#" className="hover:text-[#FF9900]">Escolar y oficinas</a>
          <a href="#" className="hover:text-[#FF9900]">Libros y textos</a>
          <a href="#" className="hover:text-[#FF9900]">Artes y manualidades</a>
          <a href="#" className="hover:text-[#FF9900]">Tecnologia</a>
          <a href="#" className="hover:text-[#FF9900]">Pedido de listas escolares</a>

        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-6 py-10">
        
        {/* --- BANNERS PRINCIPALES --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#FFC107] rounded-[2rem] p-8 h-[380px] relative overflow-hidden card-shadow group">
            <div className="relative z-10">
              <h2 className="text-4xl font-black leading-none mb-2 tracking-tighter">MEGA<br/>OFERTAS</h2>
              <p className="bg-[#232F3E] text-white px-3 py-1 inline-block rounded-md text-sm font-bold mb-4 italic">Regreso a clases</p>
              <button className="block bg-[#1D252C] text-white px-6 py-2 rounded-full text-xs font-bold group-hover:bg-black transition-all">COMPRAR AHORA</button>
            </div>
            <img src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400" className="absolute right-[-20px] bottom-10 w-48 animate-float" />
          </div>

          <div className="bg-[#26C6DA] rounded-[2rem] p-8 h-[380px] relative overflow-hidden card-shadow flex flex-col items-center justify-center text-center">
            <img src="https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=400" className="w-44 mb-4 drop-shadow-2xl animate-float" />
            <div className="bg-white/30 backdrop-blur-md p-4 rounded-2xl border border-white/20">
              <p className="text-white text-sm font-black uppercase tracking-tighter">Envío Gratis por compras mayores a $50</p>
            </div>
          </div>

          <div className="bg-[#FFC107] rounded-[2rem] p-8 h-[380px] relative overflow-hidden card-shadow group">
            <div className="relative z-10">
              <h2 className="text-4xl font-black leading-none mb-2 tracking-tighter uppercase">TODO EN<br/>ARTE</h2>
              <div className="text-2xl font-black text-gray-800 mb-4 tracking-tighter italic">Nuevos Óleos</div>
              <button className="bg-white text-black px-6 py-2 rounded-full text-xs font-bold hover:bg-gray-100 transition-all">VER COLECCIÓN</button>
            </div>
            <img src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=400" className="absolute right-[-20px] bottom-10 w-48 animate-float" />
          </div>
        </div>

        {/* --- SECCIÓN INFERIOR --- */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* BARRA LATERAL ACTUALIZADA */}
          <aside className="space-y-6">
            <div className="bg-white rounded-[2rem] p-8 card-shadow border border-white sticky top-28">
              <h3 className="text-xs font-black text-[#FF9900] uppercase tracking-[0.2em] mb-8">Categorías</h3>
              
              <nav className="space-y-2">
                <SidebarItem icon={<BookOpen size={20}/>} text="Escolar" active />
                <SidebarItem icon={<Briefcase size={20}/>} text="Oficina" />
                <SidebarItem icon={<Laptop size={20}/>} text="Tecnología" />
                <SidebarItem icon={<Palette size={20}/>} text="Arte & Pintura" />
                <SidebarItem icon={<Scissors size={20}/>} text="Manualidades" />
                
                {/* BOTÓN ESPECIAL DE LISTA */}
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <label className="bg-[#232F3E] text-white p-5 rounded-2xl hover:bg-black transition-all cursor-pointer group flex flex-col items-center text-center">
                    <div className="flex items-center gap-3 mb-2">
                      <Upload size={22} className="text-[#FF9900]" />
                      <span className="font-bold text-sm">Pedido de Lista</span>
                    </div>
                    <p className="text-[10px] text-gray-400 leading-tight group-hover:text-white">
                      Sube tu lista escolar aquí y te cotizamos de inmediato.
                    </p>
                    <input type="file" className="hidden" onChange={handleUpload}/>
                  </label>
                </div>
              </nav>
            </div>
          </aside>

          {/* PRODUCTOS */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProductCard img="https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=500" title="Cuadernos Espiral Pro - Pack 5u." price="$12.50" />
            <ProductCard img="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500" title="Mochila Ergonómica Explore Blue" price="$45.00" />
            <ProductCard img="https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=500" title="Kit Escolar Completo Primaria" isSpecial price="$89.00" />
            <ProductCard img="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500" title="Set de Acuarelas Profesionales" price="$32.99" />
          </div>
        </div>
      </main>
    </div>
  );
}

// Componentes Reutilizables
function SidebarItem({ icon, text, active = false }: any) {
  return (
    <div className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all group ${active ? 'bg-gray-100 text-black' : 'text-gray-500 hover:bg-gray-50 hover:text-black'}`}>
      <div className="flex items-center gap-4">
        <span className={`${active ? 'text-[#FF9900]' : 'text-gray-400 group-hover:text-[#FF9900]'} transition-colors`}>
          {icon}
        </span>
        <span className="font-bold text-sm tracking-tight">{text}</span>
      </div>
      <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
}

function ProductCard({ img, title, isSpecial, price }: any) {
  return (
    <div className="bg-white rounded-[2rem] p-8 card-shadow border border-white group cursor-pointer text-center hover:translate-y-[-5px] transition-all duration-300">
      <div className="aspect-[4/5] overflow-hidden mb-6 flex items-center justify-center">
        {isSpecial ? (
          <div className="relative">
            <img src={img} className="w-56 drop-shadow-2xl animate-float" alt="Special" />
            <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-black p-2 rounded-full shadow-lg">-20%</div>
          </div>
        ) : (
          <img src={img} className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-all" alt="Product" />
        )}
      </div>
      <h4 className="font-bold text-gray-800 leading-tight mb-2 line-clamp-2">{title}</h4>
      <p className="text-[#FF9900] font-black text-xl mb-4">{price}</p>
      <button className="w-full py-3 bg-gray-100 rounded-xl font-bold text-sm group-hover:bg-[#232F3E] group-hover:text-white transition-all">
        Añadir al Carrito
      </button>
    </div>
  );
}