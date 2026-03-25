"use client";
import Image from "next/image";
import Searchbar from "../components/searchbar/searchbar";
import StartQuizButton from "../components/startQuizButton";

export default function Home() {
  return (
    <div className="m-auto flex h-full max-w-2xl flex-col justify-center">
      <div className="relative mx-auto mb-8 aspect-square w-full max-w-64 rounded-4xl bg-white/10 shadow-2xl backdrop-blur-2xl">
        <Image
          loading="eager"
          className="m-auto"
          src="/img/logo.png"
          priority
          fill={true}
          sizes="(max-width: 768px) 100vw, 256px"
          alt="Logo"
        />
      </div>
      <Searchbar />
      <StartQuizButton />
    </div>
  );
}
