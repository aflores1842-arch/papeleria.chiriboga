"use client";
import React from 'react';
import { Upload, FileText } from 'lucide-react';

export default function UploadZone() {
  return (
    <div className="border-2 border-dashed border-white/10 rounded-[2rem] p-12 text-center hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all cursor-pointer group">
      <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
        <Upload className="text-cyan-400" />
      </div>
      <h3 className="text-xl font-bold mb-1">Arrastra tu lista aquí</h3>
      <p className="text-gray-500 text-sm mb-6">Formatos: PDF, JPG o PNG</p>
      <div className="flex items-center justify-center gap-2 text-xs font-mono text-cyan-500/50">
        <FileText size={14} />
        <span>PROCESADO POR IA CHIRIBOGA</span>
      </div>
    </div>
  );
}