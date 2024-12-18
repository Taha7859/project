"use client"
import { useState } from "react";

interface Dropdown {
  text: string;
  placeholder: string;
  list: string[]; // List of countries
}

export default function CountryDropdown({ text, placeholder, list = [] }: Dropdown) {
  const [selectedCountry, setSelectedCountry] = useState(""); // Selected country state

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value); // Update state on selection
  };

  return (
    <div className="relative w-full">
      <p className="font-medium">{text}</p>
      <div className="relative">
        <select
          className="outline-none border-[1px] mt-6 border-[#9F9F9F] rounded-xl w-full py-6 px-4 appearance-none"
          value={selectedCountry}
          onChange={handleChange}
        >
          <option value="" disabled hidden>
            {placeholder}
          </option>
          {list.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
        {/* Dropdown icon */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
