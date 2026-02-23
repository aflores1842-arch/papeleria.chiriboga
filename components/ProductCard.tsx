import React from 'react';
import { Plus } from 'lucide-react';

export default function ProductCard({ nombre, precio, categoria }: any) {
  return (
    <div className="group relative p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all">
      <div className="aspect-square bg-white/5 rounded-xl mb-4 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent"></div>
        {/* Aquí iría la imagen del producto */}
      </div>
      <div className="flex justify-between items-start mb-1">
        <h4 className="font-bold text-white group-hover:text-cyan-400 transition-colors">{nombre}</h4>
        <span className="text-cyan-400 font-mono text-sm">${precio}</span>
      </div>
      <p className="text-gray-500 text-xs uppercase tracking-widest mb-4">{categoria}</p>
      <button className="w-full py-2 bg-white/5 border border-white/10 rounded-lg text-xs font-bold uppercase hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2">
        <Plus size={14} /> Añadir
      </button>
    </div>
  );
}