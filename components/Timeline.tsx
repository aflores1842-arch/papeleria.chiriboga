import React from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

export default function Timeline({ pasos }: any) {
  return (
    <div className="space-y-8 relative">
      <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-white/10"></div>
      {pasos.map((paso: any, index: number) => (
        <div key={index} className="flex gap-4 items-start relative z-10">
          {paso.completado ? (
            <CheckCircle2 className="text-cyan-400 bg-black rounded-full" size={24} />
          ) : (
            <Circle className="text-gray-600 bg-black rounded-full" size={24} />
          )}
          <div>
            <h5 className={`font-bold ${paso.completado ? 'text-white' : 'text-gray-500'}`}>{paso.titulo}</h5>
            <p className="text-sm text-gray-500">{paso.descripcion}</p>
          </div>
        </div>
      ))}
    </div>
  );
}