import { useState } from "react";
import { PortfolioData } from "../Data/PortfolioData";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="p-6">
      {/* --- Tab Buttons --- */}
      <div className="flex justify-center gap-4 mb-6">
        {PortfolioData.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 rounded-md ${
              activeTab === tab.id
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* --- Tab Content (Cards) --- */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PortfolioData.find((tab) => tab.id === activeTab)?.cards.map((card) => (
          <div
            key={card.id}
            className="bg-white shadow-lg rounded-2xl overflow-hidden"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-600 mb-4">{card.description}</p>
                <a className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700' target="_blank" href={card.url}>{card.buttonText}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
