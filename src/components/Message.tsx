import React, { useState } from 'react';
import { Heart } from 'lucide-react';

export function Message() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <section className="py-20 bg-rose-100">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="bg-rose-500 text-white px-8 py-3 rounded-full text-lg hover:bg-rose-600 transition-all transform hover:scale-105 flex items-center gap-2 mx-auto"
        >
          <Heart className="w-5 h-5" />
          Mensaje Especial
        </button>
        
        {isVisible && (
          <div className="mt-8 animate-fade-in">
            <p className="text-2xl text-rose-900 italic">
              "Cada día a tu lado es un regalo. Gracias por llenar mi vida de amor y felicidad.
              Este es solo el comienzo de nuestra hermosa historia juntos."
            </p>
            <p className="mt-4 text-xl text-rose-700">Con amor, Oscar</p>
          </div>
        )}
      </div>
    </section>
  );
}