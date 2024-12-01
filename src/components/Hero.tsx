import React from 'react';
import { Heart } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=2070&q=80"
          alt="Romance Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-pink-500/30 to-rose-600/30" />
      </div>
      
      <div className="relative text-center px-4 animate-fade-in">
        <Heart className="w-16 h-16 text-rose-500 mx-auto mb-6 animate-pulse" />
        <h1 className="text-5xl md:text-7xl font-bold text-rose-900 mb-4">
          Oscar & Yutitzi
        </h1>
        <p className="text-2xl md:text-3xl text-rose-700 mb-8">
          Celebrando Nuestro Amor
        </p>
        <button 
          onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-rose-500 text-white px-8 py-3 rounded-full text-lg hover:bg-rose-600 transition-all transform hover:scale-105"
        >
          Nuestra Historia
        </button>
      </div>
    </div>
  );
}