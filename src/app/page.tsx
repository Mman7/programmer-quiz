"use client";

import Searchbar from "../components/searchbar/searchbar";
import StartQuizButton from "../components/startQuizButton";

export default function Home() {
  return (
    <div className="m-auto w-3/4 max-w-2xl">
      <Searchbar />
      <StartQuizButton />
    </div>
  );
}
