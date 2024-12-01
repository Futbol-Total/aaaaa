import React from 'react';
import { useUserStore } from '../store/userStore';

export function UserSelect() {
  const { username, setUsername } = useUserStore();

  if (username) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full mx-4">
        <h2 className="text-2xl font-bold text-rose-900 mb-6 text-center">
          ¿Quién eres?
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => setUsername('Oscar')}
            className="bg-rose-500 text-white py-4 px-6 rounded-xl hover:bg-rose-600 transition-colors"
          >
            Oscar
          </button>
          <button
            onClick={() => setUsername('Yutitzi')}
            className="bg-rose-500 text-white py-4 px-6 rounded-xl hover:bg-rose-600 transition-colors"
          >
            Yutitzi
          </button>
        </div>
      </div>
    </div>
  );
}