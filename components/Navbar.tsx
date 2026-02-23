"use client";
import React from 'react';
import { ShoppingCart, Zap, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 border-b border-white/10 backdrop-blur-md sticky top-0 z-50 bg-black/50">
      {/* Lado Izquierdo: Logo */}
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)]">
          <Zap className="text-black" fill="currentColor" size={20} />
        </div>
        <h1 className="text-xl font-black tracking-tighter uppercase text-white">
          Chiriboga <span className="text-cyan-400 font-mono italic">Digital</span>
        </h1>
      </div>
      
      {/* Centro: Links (Ocultos en móvil, puedes activarlos luego) */}
      <div className="hidden md:flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
        <a href="/" className="hover:text-cyan-400 transition-colors border-b-2 border-cyan-400 pb-1">Inicio</a>
        <a href="#" className="hover:text-cyan-400 transition-colors">Catálogo</a>
        <a href="#" className="hover:text-cyan-400 transition-colors">Seguimiento</a>
      </div>

      {/* Lado Derecho: Botón de Carrito */}
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full hover:bg-cyan-500 hover:text-black transition-all group">
          <ShoppingCart size={18} className="group-hover:scale-110 transition-transform" />
          <span className="text-xs font-bold uppercase tracking-tight">Mi Pedido</span>
        </button>
        <button className="md:hidden text-white">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
}