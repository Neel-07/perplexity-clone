import React, { useState } from "react";
import {
  AlignLeft,
  Plus,
  ArrowRight,
  Smartphone,
  Scale,
  Clapperboard,
  FlaskConical,
} from "lucide-react";

export default function Component() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="min-h-screen text-gray-100 flex flex-col items-center justify-center p-4 bg-black">
      <h1 className="text-4xl md:text-5xl lg:text-4xl font-medium font-sans mb-8">
        Where Knowledge begins
      </h1>

      <div className="w-full max-w-3xl mx-auto">
        {/* Textarea Input with Buttons (Focus, Attach, Pro, Submit) */}
        <div className="grid grid-cols-3 grid-rows-[1fr,auto] w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm focus-within:ring-1 focus-within:ring-blue-500 dark:focus-within:ring-blue-400 transition-all duration-200">
          <div className="col-span-3 relative">
            <textarea
              placeholder="Ask anything..."
              value={inputValue}
              onChange={handleInputChange}
              className="w-full h-12 min-h-[48px] max-h-[45vh] lg:max-h-[40vh] sm:max-h-[25vh] p-3 bg-transparent text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 resize-none overflow-auto focus:outline-none"
              style={{ height: "48px" }}
            />
          </div>
          <div className="col-start-1 row-start-2 flex items-center space-x-2 p-2">
            <button className="flex items-center space-x-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full p-1">
              <AlignLeft size={18} />
              <span className="text-sm font-medium">Focus</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full p-1">
              <Plus size={18} />
              <span className="text-sm font-medium">Attach</span>
            </button>
          </div>
          <div className="col-start-3 row-start-2 flex items-center justify-end space-x-2 p-2">
            <div className="flex items-center space-x-2">
              <button
                className="relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 bg-gray-200 dark:bg-gray-700"
                role="switch"
                aria-checked="false"
              >
                <span className="translate-x-0 inline-block h-4 w-4 transform rounded-full bg-white shadow-lg transition duration-200 ease-in-out"></span>
              </button>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Pro
              </span>
            </div>
            <button
              aria-label="Submit"
              disabled={!inputValue.trim()}
              className={`rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                inputValue.trim()
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : "bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed"
              }`}
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Suggestion Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <SuggestionBox
            icon={<Smartphone className="h-5 w-5" />}
            text="When will the next iPhone be released?"
          />
          <SuggestionBox
            icon={<Scale className="h-5 w-5" />}
            text="City with the most bike lanes"
          />
          <SuggestionBox
            icon={<Clapperboard className="h-5 w-5" />}
            text="The next James Bond"
          />
          <SuggestionBox
            icon={<FlaskConical className="h-5 w-5" />}
            text="Healthiest cooking oils"
          />
        </div>
      </div>
    </div>
  );
}

function SuggestionBox({ icon, text }) {
  return (
    <div className="bg-gray-800 rounded-lg p-3 flex items-center space-x-3 hover:bg-gray-700 transition duration-150 ease-in-out cursor-pointer">
      <div className="flex-shrink-0 text-gray-400">{icon}</div>
      <div className="flex-grow">
        <p className="text-sm font-medium">{text}</p>
      </div>
    </div>
  );
}
