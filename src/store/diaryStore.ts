import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface DiaryEntry {
  id: string;
  author: string;
  content: string;
  date: string;
}

interface DiaryState {
  entries: DiaryEntry[];
  addEntry: (author: string, content: string) => void;
}

export const useDiaryStore = create<DiaryState>()(
  persist(
    (set) => ({
      entries: [],
      addEntry: (author, content) =>
        set((state) => ({
          entries: [
            {
              id: Date.now().toString(),
              author,
              content,
              date: new Date().toLocaleString(),
            },
            ...state.entries,
          ],
        })),
    }),
    {
      name: 'diary-storage',
    }
  )
);