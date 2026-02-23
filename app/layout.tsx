import './globals.css';
import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <title>Papelería Chiriboga Digital</title>
      </head>
      <body className="bg-[#050505] text-white">
        {children}
      </body>
    </html>
  );
}