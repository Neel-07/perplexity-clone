import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <img src="/logo.png" alt="Perplexity Logo" className="w-36" />
        <nav className="space-x-6">
          <a href="/" className="text-gray-700 hover:text-black">
            Discover
          </a>
          <a href="/ask" className="text-gray-700 hover:text-black">
            Ask
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
