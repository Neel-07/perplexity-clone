// src/components/ChatBar.jsx
import React, { useState } from "react";
import { GitFork } from "lucide-react";

const ChatBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [isProEnabled, setIsProEnabled] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const togglePro = () => {
    setIsProEnabled(!isProEnabled);
  };

  return (
    <div className="fixed bottom-4 left-[20%] w-[50%] bg-gray-800 p-2 shadow-inner m-2 border-gray-200 rounded-full">
      <div className="container mx-auto max-w-3xl ">
        <div className="flex items-center justify-between w-full rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm focus-within:ring-1 focus-within:ring-blue-500 dark:focus-within:ring-blue-400 transition-all duration-200 p-4">
          <textarea
            placeholder="Ask follow-up"
            value={inputValue}
            onChange={handleInputChange}
            className="overflow-auto max-h-[45vh] lg:max-h-[40vh] sm:max-h-[25vh] outline-none w-full resize-none bg-transparent text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent"
            style={{ height: "24px" }}
          />
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <button
                onClick={togglePro}
                role="switch"
                aria-checked={isProEnabled}
                className={`w-10 h-5 flex items-center rounded-full p-1 ${
                  isProEnabled ? "bg-teal-600 " : "bg-gray-300 dark:bg-gray-600"
                }`}
              >
                <span
                  className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                    isProEnabled ? "translate-x-4" : "translate-x-0"
                  }`}
                />
              </button>
              <label
                className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300 cursor-pointer"
                onClick={togglePro}
              >
                Pro
              </label>
            </div>
            <button
              aria-label="Submit"
              type="button"
              disabled={!inputValue.trim()}
              className={`rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                inputValue.trim()
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : "bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed"
              }`}
            >
              <GitFork size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBar;
