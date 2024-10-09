// src/components/DiscoverPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card.jsx";
import { Compass } from "lucide-react";
import {
  Star,
  Cog,
  DollarSign,
  Palette,
  Trophy,
  Tv,
  ChevronRight,
  Menu,
} from "lucide-react";

const categories = [
  { name: "Top", icon: <Star className="w-4 h-4" /> },
  { name: "Tech & Science", icon: <Cog className="w-4 h-4" /> },
  { name: "Finance", icon: <DollarSign className="w-4 h-4" /> },
  { name: "Arts & Culture", icon: <Palette className="w-4 h-4" /> },
  { name: "Sports", icon: <Trophy className="w-4 h-4" /> },
  { name: "Entertain", icon: <Tv className="w-4 h-4" /> },
];

const articles = [
  {
    id: 1,
    title: "Quantum Computer Doom Challenge",
    description:
      "Exploring the potential of quantum computing to revolutionize industries.",
    image:
      "https://plus.unsplash.com/premium_photo-1681426669771-d2113672a49b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHF1YW50dW0lMjBjb21wdXRpbmd8ZW58MHwwfDB8fHww",
  },
  {
    id: 2,
    title: "AI in Healthcare",
    description:
      "How AI is transforming healthcare from diagnosis to treatment.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWklMjBpbiUyMGhlYWx0aGNhcmV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    title: "The Future of Space Exploration",
    description:
      "Innovations in technology that are enabling new missions to Mars and beyond.",
    image:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHNwYWNlfGVufDB8fHx8fDE2NjI2NjI5NzM&dpr=1",
  },
  {
    id: 4,
    title: "Renewable Energy Solutions",
    description:
      "Exploring advancements in solar and wind energy technologies.",
    image:
      "https://plus.unsplash.com/premium_photo-1680210006949-a0b4754d70b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVuZXdhYmxlJTIwcmVzb3VyY2VzfGVufDB8fDB8fHww",
  },
  {
    id: 5,
    title: "The Impact of Social Media on Society",
    description:
      "Exploring how social media influences public opinion and behavior.",
    image:
      "https://images.unsplash.com/photo-1592578629295-73a151d69c96?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c29jaWFsJTIwbWVkaWF8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 6,
    title: "Blockchain Technology in Finance",
    description:
      "Understanding how blockchain is changing the landscape of financial transactions.",
    image:
      "https://images.unsplash.com/photo-1640161704729-cbe966a08476?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxvY2tjaGFpbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 7,
    title: "The Rise of Autonomous Vehicles",
    description:
      "How self-driving cars are shaping the future of transportation.",
    image:
      "https://images.unsplash.com/photo-1592365559088-225c15dc3f10?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXV0b21vYmlsZSUyMHZlaGljbGVzfGVufDB8fDB8fHww",
  },
  {
    id: 8,
    title: "The Importance of Cybersecurity",
    description:
      "Understanding the key strategies to protect data in the digital age.",
    image:
      "https://images.unsplash.com/photo-1590494165264-1ebe3602eb80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3liZXJzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D",
  },
];

const DiscoverPage = () => {
  const navigate = useNavigate();

  // Function to handle card click and navigate to the article page
  const handleCardClick = (id) => {
    navigate(`/article/${id}`);
  };

  // Determine if a card should be full width based on its index
  const isFullWidthCard = (index) => {
    return (index + 1) % 4 === 1; // Cards 1, 5, 9, 13, etc.
  };

  return (
    <div className="flex justify-center min-h-screen">
      <div className="container mx-auto">
        <div className="flex items-center mb-4 pb-4 gap-2 border-b-2 border-gray-800">
          <Compass size={24} color="#fff" />
          <h1 className="text-3xl font-semibold mb-1 text-white">Discover</h1>
        </div>

        <nav className="p-2 overflow-x-auto mb-6">
          <div className="container mx-auto flex space-x-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`flex items-center space-x-1 px-4 py-2 rounded text-sm ${
                  index === 0
                    ? "bg-teal-300 bg-opacity-20 text-teal-200"
                    : "text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
            <button className="flex items-center space-x-1 px-3 py-1 rounded-full text-sm text-gray-300 hover:bg-gray-700">
              <ChevronRight className="w-4 h-4" />
            </button>
            <button className="flex items-center space-x-1 px-3 py-1 rounded-full text-sm text-gray-300 hover:bg-gray-700">
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </nav>

        {/* Render all cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <Card
              key={article.id}
              title={article.title}
              description={article.description}
              image={article.image}
              id={article.id}
              onClick={() => handleCardClick(article.id)}
              isFullWidth={isFullWidthCard(index)} // Pass isFullWidth prop
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscoverPage;
