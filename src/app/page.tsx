"use client";
import Image from "next/image";
import Searchbar from "../components/searchbar/searchbar";
import StartQuizButton from "../components/startQuizButton";

export default function Home() {
  return (
    <div className="m-auto flex h-full w-3/4 max-w-2xl flex-col justify-center">
      <div className="mx-auto mb-8 size-64 rounded-4xl bg-white/10 backdrop-blur-2xl">
        <Image
          className="m-auto"
          src="/img/logo.png"
          width={300}
          height={300}
          alt="Logo"
        />
      </div>
      <Searchbar />
      <StartQuizButton />
    </div>
  );
}
