'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const tarotCards = [
    { id: 1, name: 'The Fool', src: '/tarot/fool.jpg' },
    { id: 2, name: 'The Magician', src: '/tarot/magician.jpg' },
    { id: 3, name: 'The High Priestess', src: '/tarot/high-priestess.jpg' },
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl mb-8">Tarot Card Viewer</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {tarotCards.map(card => (
          <div key={card.id} className="flex flex-col items-center">
            <Image
              src={card.src}
              alt={card.name}
              width={200}
              height={300}
              className="rounded-lg shadow-md"
            />
            <h2 className="mt-4 text-xl">{card.name}</h2>
          </div>
        ))}
      </div>
    </main>
  );
}
