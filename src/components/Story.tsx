import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

export function Story() {
  const memories = [
    {
      date: "Primer Encuentro",
      description: "El día que nuestros caminos se cruzaron por primera vez",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      date: "Primera Cita",
      description: "Un momento mágico que marcó el inicio de nuestra historia",
      icon: <MapPin className="w-6 h-6" />,
    },
    {
      date: "Nuestro Aniversario",
      description: "Celebrando otro año de amor y felicidad juntos",
      icon: <Calendar className="w-6 h-6" />,
    },
  ];

  return (
    <section id="story" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-rose-900 mb-16">
          Nuestra Historia de Amor
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {memories.map((memory, index) => (
            <div 
              key={index}
              className="bg-rose-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2"
            >
              <div className="text-rose-500 mb-4">{memory.icon}</div>
              <h3 className="text-xl font-semibold text-rose-900 mb-2">
                {memory.date}
              </h3>
              <p className="text-rose-700">{memory.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}