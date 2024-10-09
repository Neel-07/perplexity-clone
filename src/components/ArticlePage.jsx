import React from "react";
import { useParams } from "react-router-dom";
import ChatBar from "./ChatBar.jsx";
import { GitFork, Share, Eye, Clock, Bookmark, Link } from "lucide-react";

const staticContent = `
  <h2 id="introduction" style="font-weight: bold; margin-top: 20px; margin-bottom-10px; font-size:20px;">Introduction</h2>
  <p style="margin-bottom: 20px; color:#dddddd;">Quantum computing represents a groundbreaking shift in computation, harnessing the principles of quantum mechanics to process information in ways traditional computers cannot. This innovative technology offers the potential to solve complex problems that are currently unsolvable, revolutionizing fields such as cryptography, artificial intelligence, and drug discovery with extraordinary speed and efficiency...</p>
  
  <h2 id="study-details" style="font-weight: bold; margin-top: 20px;margin-bottom-10px; font-size:20px;">Study Details</h2>
  <p style="margin-bottom: 20px;color:#dddddd;">Recent studies have demonstrated the impressive capabilities of quantum computers in outperforming classical systems for specific tasks. Researchers have utilized quantum bits (qubits) to address problems like factoring large integers and conducting searches in unsorted databases, showcasing significant advancements in speed and resource efficiency. These breakthroughs highlight the transformative potential of quantum technology...</p>
  
  <h2 id="implications" style="font-weight: bold; margin-top: 20px;margin-bottom-10px; font-size:20px;">Implications for Future Treatment</h2>
  <p style="margin-bottom: 20px;color:#dddddd;">The implications of quantum computing extend well beyond theoretical exploration. As quantum technology becomes more practical, it could revolutionize industries by providing solutions to problems that have long posed challenges. Fields such as materials science, pharmaceuticals, and financial modeling stand to benefit significantly from quantum computing, leading to breakthroughs that could change the world...</p>
  
  <h2 id="conclusion" style="font-weight: bold; margin-top: 20px;margin-bottom-10px; font-size:20px;color:#dddddd;">Conclusion</h2>
  <p style="margin-bottom: 20px;">As research in quantum technology progresses, experts remain optimistic about its potential to reshape our understanding of computation and its applications across various disciplines. The journey towards realizing the full capabilities of quantum computing is just beginning, but the future holds immense promise for innovations that could redefine problem-solving and technology development in profound ways...</p>
`;

const articleContent = {
  1: {
    id: 1,
    title: "Quantum Computer Doom Challenge",
    image:
      "https://plus.unsplash.com/premium_photo-1681426669771-d2113672a49b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHF1YW50dW0lMjBjb21wdXRpbmd8ZW58MHwwfDB8fHww",
    author: "Neel",
    time: "15 hours ago",
    views: "21,076",
    content: staticContent,
  },
  2: {
    id: 2,
    title: "AI in Healthcare: Transforming Diagnosis and Treatment",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWklMjBpbiUyMGhlYWx0aGNhcmV8ZW58MHx8MHx8fDA%3D",
    author: "Dr. Smith",
    time: "10 hours ago",
    views: "15,320",
    content: staticContent,
  },
  3: {
    id: 3,
    title: "The Future of Space Exploration: Innovations and Challenges",
    image:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHNwYWNlfGVufDB8fHx8fDE2NjI2NjI5NzM&dpr=1",
    author: "Astronaut Jane",
    time: "5 hours ago",
    views: "18,450",
    content: staticContent,
  },
  4: {
    id: 4,
    title: "Renewable Energy Solutions",
    image:
      "https://plus.unsplash.com/premium_photo-1680210006949-a0b4754d70b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVuZXdhYmxlJTIwcmVzb3VyY2VzfGVufDB8fDB8fHww",
    author: "Energy Expert",
    time: "2 days ago",
    views: "12,900",
    content: staticContent,
  },
  5: {
    id: 5,
    title: "The Impact of Social Media on Society",
    image:
      "https://images.unsplash.com/photo-1592578629295-73a151d69c96?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c29jaWFsJTIwbWVkaWF8ZW58MHx8MHx8fDA%3D",
    author: "Social Media Analyst",
    time: "8 hours ago",
    views: "22,135",
    content: staticContent,
  },
  6: {
    id: 6,
    title: "Blockchain Technology in Finance",
    image:
      "https://images.unsplash.com/photo-1640161704729-cbe966a08476?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxvY2tjaGFpbnxlbnwwfHwwfHx8MA%3D%3D",
    author: "Finance Guru",
    time: "3 days ago",
    views: "9,700",
    content: staticContent,
  },
  7: {
    id: 7,
    title: "The Rise of Autonomous Vehicles",
    image:
      "https://images.unsplash.com/photo-1592365559088-225c15dc3f10?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXV0b21vYmlsZSUyMHZlaGljbGVzfGVufDB8fDB8fHww",
    author: "Tech Innovator",
    time: "1 day ago",
    views: "30,002",
    content: staticContent,
  },
  8: {
    id: 8,
    title: "The Importance of Cybersecurity",
    image:
      "https://images.unsplash.com/photo-1590494165264-1ebe3602eb80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3liZXJzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D",
    author: "Cybersecurity Expert",
    time: "4 hours ago",
    views: "11,654",
    content: staticContent,
  },
};

const ArticlePage = () => {
  const { id } = useParams();
  const article = articleContent[id];
  const forkCount = Math.floor(Math.random() * 1000); // Generate random fork count

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="min-h-screen min-w-screen">
      <div className="container mx-auto max-w-3xl text-white shadow-lg rounded-lg overflow-hidden ">
        {/* Header with bookmark, copy, and share buttons */}
        <div className="flex justify-end items-center p-4 border-b">
          <div className="flex space-x-2">
            <button
              aria-label="Bookmark"
              className="p-2 rounded-md hover:bg-gray-200 hover:text-black"
            >
              <Bookmark />
            </button>
            <button
              aria-label="Link"
              className="p-2 rounded-md hover:bg-gray-200 bg-teal-400 text-black"
            >
              <Link />
            </button>
            <button
              aria-label="Share"
              className="flex gap-2 p-2 rounded-md hover:bg-gray-200 bg-teal-400 text-black"
            >
              <Share />
              <p className="font-semibold">Share</p>
            </button>
          </div>
        </div>

        {/* Article image */}
        <img
          src={article.image}
          alt={article.title}
          className="mt-4 w-full h-60 object-cover"
        />

        {/* Article title and metadata */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-2">{article.title}</h1>

          {/* Flex container for avatar, name, and stats */}
          <div className="flex justify-between text-gray-500 mb-4">
            {/* Author Info */}
            <div className="flex items-center">
              <img
                src="https://i.pinimg.com/474x/f2/d3/88/f2d388ce2aa7042913b5150e01e1b68e.jpg"
                alt="Neel"
                className="w-8 h-8 rounded-full object-cover mr-2 border-2 border-gray-200"
              />
              <div>
                <span className="text-sm font-medium">Neel</span>
                <span className="block text-xs text-gray-400">2 min read</span>
              </div>
            </div>

            {/* Time, Views, Fork Count */}
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>{article.time}</span>
              </div>
              <div className="flex items-center">
                <Eye className="w-4 h-4 mr-1" />
                <span>{article.views}</span>
              </div>
              <div className="flex items-center">
                <GitFork className="w-4 h-4 mr-1" />
                <span>{forkCount} Forks</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation links for article sections */}
        <div className="flex items-center justify-end space-x-4 pr-4 text-white">
          {["Introduction", "Study Details", "Implications", "Conclusion"].map(
            (section, idx) => (
              <a
                key={idx}
                href={`#${section.toLowerCase().replace(" ", "-")}`}
                className="hover:underline hover:underline-offset-4 hover:decoration-white hover:font-semibold transition-all"
              >
                {section}
              </a>
            )
          )}
        </div>

        {/* Article content */}
        <div
          className="p-4 prose prose-lg max-w-none text-white"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>

      <ChatBar />
    </div>
  );
};

export default ArticlePage;
