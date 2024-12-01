import React, { useState } from 'react';
import { PenLine, Send } from 'lucide-react';
import { useDiaryStore } from '../store/diaryStore';
import { useUserStore } from '../store/userStore';

export function Diary() {
  const [newEntry, setNewEntry] = useState('');
  const { entries, addEntry } = useDiaryStore();
  const { username } = useUserStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newEntry.trim() && username) {
      addEntry(username, newEntry.trim());
      setNewEntry('');
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <PenLine className="w-12 h-12 text-rose-500 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-rose-900 mb-4">
            Nuestro Diario de Amor
          </h2>
          <p className="text-rose-700">Comparte tus pensamientos y sentimientos</p>
        </div>

        {username && (
          <form onSubmit={handleSubmit} className="mb-12">
            <div className="flex gap-4">
              <input
                type="text"
                value={newEntry}
                onChange={(e) => setNewEntry(e.target.value)}
                placeholder="Escribe tu mensaje..."
                className="flex-1 px-4 py-3 rounded-xl border-2 border-rose-200 focus:border-rose-500 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-rose-500 text-white px-6 py-3 rounded-xl hover:bg-rose-600 transition-colors flex items-center gap-2"
              >
                <Send className="w-5 h-5" />
                Enviar
              </button>
            </div>
          </form>
        )}

        <div className="space-y-6">
          {entries.map((entry) => (
            <div
              key={entry.id}
              className="bg-rose-50 p-6 rounded-xl shadow-md"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold text-rose-900">{entry.author}</span>
                <span className="text-sm text-rose-600">{entry.date}</span>
              </div>
              <p className="text-rose-800">{entry.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}