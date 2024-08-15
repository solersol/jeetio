

import React from 'react';
import { rd5 } from '../assets/images';

const Roadmap5 = () => {
  const cards = [
    { title: "DEX PREPAID", text: "We are so confident of our project we will prepay before KOFH", link: "https://example.com/1" },
    { title: "BUMP IT", text: "1SOL Will be deposited every 20 mins into the bump it bot to stay in the front page", link: "https://example.com/2" },
    { title: "ALPHA GROUPS", text: "Paid influencers from X/Telegram", link: "https://example.com/3" },
    { title: "TOKEN BURNS", text: "Our team will only hold 2.5% of the total supply after we burn the rest", link: "https://example.com/4" },
    { title: "MOONTOK", text: "DEX Listing from the moment we go live on Raydium", link: "https://example.com/5" },
    { title: "MORE TO BE REVEALED", text: "We will reveal PhaseII once we are at over 500k mcap", link: "https://example.com/6" }
  ];

  return (
    <section className="w-full h-full flex flex-col justify-between items-center p-8 bg-transparent">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {cards.map((card, index) => (
          <a
            key={index}
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white bg-opacity-20 backdrop-blur-lg p-6 rounded-xl text-center transition-transform transform hover:scale-105 hover:bg-opacity-30 hover:bg-gray-700 text-white"
          >
            <h3 className="text-xl font-bold mb-4">{card.title}</h3>
            <p className="text-sm mb-4">{card.text}</p>
          </a>
        ))}
      </div>

      <div className="w-full flex justify-center">
        <img
          src={rd5}
          alt="Centered Roadmap Image"
          className="w-auto h-[2144px] max-h-[300px] md:max-h-[500px] lg:max-h-[600px] object-cover"
        />
      </div>
    </section>
  );
};

export default Roadmap5;
