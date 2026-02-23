"use client";
import React, { useState } from 'react';
import { 
  Search, ShoppingCart, Menu, Upload, 
  ChevronRight, Laptop, BookOpen, Palette, 
  Gift, Headphones, Star, User, Heart, Bell,
  Briefcase, Scissors, FileText
} from 'lucide-react';
// Importamos supabase con cuidado por si no está configurado aún
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
    <div className="min-h-screen bg-gray-50">
      
      {/* --- TOP BAR --- */}
      <div className="bg-[#1D252C] text-white py-2 px-6">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center text-xs font-bold">
          <div className="flex items-center gap-4">
            <span className="text-[#FF9900]">CHIRIBOGA<span className="text-white"> PAPELERIA</span></span>
          </div>
          <div className="flex items-center gap-6">
            <span className="hidden md:inline cursor-pointer hover:text-[#FF9900]">Envios a todo el país ➔</span>
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
        <div className="max-w-[1400px] mx-auto flex flex-wrap items-center justify-between gap-4 md:gap-10">
          <h1 className="text-2xl md:text-3xl font-black italic tracking-tighter">
            CHIRIBOGA<span className="text-[#FF9900]"> PAPELERIA</span>
          </h1>

          <div className="order-3 md:order-2 flex-1 flex max-w-2xl border-2 border-gray-100 rounded-xl overflow-hidden focus-within:border-[#FF9900] transition-all">
            <input type="text" placeholder="Buscar cuadernos, tecnología, arte..." className="w-full px-4 py-2 outline-none" />
            <button className="px-4 text-gray-400 hover:text-[#FF9900]"><Search size={20}/></button>
          </div>

          <div className="order-2 md:order-3 flex items-center gap-4">
            <button className="bg-[#1D252C] text-white px-4 md:px-6 py-2 rounded-xl font-bold flex items-center gap-2 hover:bg-black transition-all">
              <ShoppingCart size={20}/>
              <span className="hidden sm:inline">Carrito</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-6 py-10">
        
        {/* --- BANNERS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Banner cardColor="bg-[#FFC107]" title="MEGA OREFTAS" subtitle="Regreso a clases" buttonText="COMPRAR AHORA" img="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400" />
          <div className="bg-[#26C6DA] rounded-[2rem] p-8 h-[300px] md:h-[380px] relative overflow-hidden flex flex-col items-center justify-center text-center shadow-lg">
             <div className="bg-white/30 backdrop-blur-md p-4 rounded-2xl border border-white/20">
               <p className="text-white text-sm font-black uppercase">Envío Gratis por compras mayores a $50</p>
             </div>
          </div>
          <Banner cardColor="bg-[#FFC107]" title="TODO EN ARTE" subtitle="Nuevos Óleos" buttonText="VER COLECCIÓN" img="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=400" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-[2rem] p-6 shadow-md border border-gray-50">
              <h3 className="text-xs font-black text-[#FF9900] uppercase tracking-[0.2em] mb-6">Categorías</h3>
              <nav className="space-y-1">
                <SidebarItem icon={<BookOpen size={18}/>} text="Escolar" active />
                <SidebarItem icon={<Briefcase size={18}/>} text="Oficina" />
                <SidebarItem icon={<Laptop size={18}/>} text="Tecnología" />
                <SidebarItem icon={<Palette size={18}/>} text="Arte & Pintura" />
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <label className="bg-[#232F3E] text-white p-4 rounded-2xl hover:bg-black transition-all cursor-pointer flex flex-col items-center text-center">
                    <Upload size={20} className="text-[#FF9900] mb-2" />
                    <span className="font-bold text-sm">{uploading ? "Subiendo..." : "Subir Lista"}</span>
                    <input type="file" className="hidden" onChange={handleUpload} disabled={uploading}/>
                  </label>
                </div>
              </nav>
            </div>
          </aside>

          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ProductCard img="https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=500" title="Cuadernos Espiral Pro" price="$12.50" />
            <ProductCard img="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500" title="Mochila Explore Blue" price="$45.00" />
          </div>
        </div>
      </main>
    </div>
  );
}

function Banner({ cardColor, title, subtitle, buttonText, img }: any) {
  return (
    <div className={`${cardColor} rounded-[2rem] p-8 h-[300px] md:h-[380px] relative overflow-hidden shadow-lg group`}>
      <div className="relative z-10">
        <h2 className="text-3xl font-black leading-none mb-2">{title}</h2>
        <p className="bg-[#232F3E] text-white px-3 py-1 inline-block rounded-md text-xs font-bold mb-4 italic">{subtitle}</p>
        <button className="block bg-[#1D252C] text-white px-6 py-2 rounded-full text-[10px] font-bold">{buttonText}</button>
      </div>
      <img src={img} className="absolute right-[-10px] bottom-5 w-32 md:w-40 opacity-80 md:opacity-100" alt="banner" />
    </div>
  );
}

function SidebarItem({ icon, text, active = false }: any) {
  return (
    <div className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all ${active ? 'bg-gray-100 text-black' : 'text-gray-500 hover:bg-gray-50'}`}>
      <div className="flex items-center gap-3">
        <span className={active ? 'text-[#FF9900]' : 'text-gray-400'}>{icon}</span>
        <span className="font-bold text-sm">{text}</span>
      </div>
      <ChevronRight size={14} />
    </div>
  );
}

function ProductCard({ img, title, price }: any) {
  return (
    <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-all">
      <img src={img} className="w-full h-48 object-cover rounded-xl mb-4" alt="product" />
      <h4 className="font-bold text-gray-800 text-sm mb-2">{title}</h4>
      <p className="text-[#FF9900] font-black text-lg mb-4">{price}</p>
      <button className="w-full py-2 bg-gray-100 rounded-lg font-bold text-xs hover:bg-[#1D252C] hover:text-white transition-all">
        Añadir
      </button>
    </div>
  );
}
