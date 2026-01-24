"use client";

import React, { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import DifficultyOption from "./difficultyOption";
import { topicValueOnly } from "@/src/enum/topicTypes";

export default function Searchbar() {
  const [inputValue, setInputValue] = useState<string>("");
  const [searchList, setSearchList] = useState<string[]>([]);

  const debounced = useDebouncedCallback((value) => {
    const filtered: string[] = topicValueOnly
      .filter((topic) => topic.toLowerCase().includes(value.toLowerCase()))
      .slice(0, 5);
    setSearchList(filtered);
  }, 200);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value === "") {
      setSearchList([]);
      setInputValue(value);
      return;
    }
    setInputValue(value);
    debounced(value);
  };

  return (
    <fieldset className="fieldset relative">
      <label className="input w-full">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          type="search"
          value={inputValue}
          onChange={(e) => handleChange(e)}
          required
          placeholder="What topics do you like? ( webdev / c# )"
          className="w-full"
        />
      </label>
      {searchList.length !== 0 && (
        <section className="absolute top-full left-0 z-10 flex w-full flex-col divide-y divide-sky-100 rounded-lg bg-white/30 p-1 backdrop-blur-md">
          {searchList.map((item: string, index: number) => (
            <DifficultyOption key={item} item={item} />
          ))}
        </section>
      )}
    </fieldset>
  );
}
