import React from 'react';
import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { Gallery } from './components/Gallery';
import { Message } from './components/Message';
import { Diary } from './components/Diary';
import { UserSelect } from './components/UserSelect';

function App() {
  return (
    <div className="min-h-screen">
      <UserSelect />
      <Hero />
      <Story />
      <Gallery />
      <Diary />
      <Message />
    </div>
  );
}

export default App;