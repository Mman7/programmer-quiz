"use client";

import React, { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import DifficultyOption from "./difficultyOption";

export const Topics = ["JavaScript", "C#", "C++"];

export default function Searchbar() {
  const [inputValue, setInputValue] = useState<string>("");
  const [searchList, setSearchList] = useState<string[]>([]);

  const debounced = useDebouncedCallback((value) => {
    const filtered: string[] = Topics.filter((topic) =>
      topic.toLowerCase().includes(value.toLowerCase()),
    ).slice(0, 5);
    setSearchList(filtered);
  }, 300);

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
      <input
        value={inputValue}
        onChange={(e) => handleChange(e)}
        type="text"
        className="input w-full"
        placeholder="What topics do you like?"
      />
      <section className="absolute top-full left-0 z-10 flex w-full flex-col divide-y divide-sky-100 rounded-2xl bg-white/30 backdrop-blur-md">
        {searchList.map((item: string, index: number) => (
          <DifficultyOption key={item} item={item} />
        ))}
      </section>
    </fieldset>
  );
}
