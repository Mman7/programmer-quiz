"use client";
import { useLoading } from "@/src/store/useLoadingStore";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function ShowLoading() {
  const { isLoading } = useLoading();

  if (!isLoading) return null;

  return (
    <div className="flex h-full w-full items-center justify-center shadow-2xl">
      <h1 className="m-auto rounded-2xl bg-white/10 p-8 font-bold backdrop-blur-xl sm:text-3xl">
        <DotLottieReact
          className="m-auto max-w-100"
          src="/lottie/truck_delivering.lottie"
          loop
          autoplay
        />
        <div className="flex justify-center">
          <span className="text-center text-white">
            Delivering question for you
            <span className="loading loading-dots sm:loading-xl loading-sm ml-4 text-white"></span>
          </span>
        </div>
      </h1>
    </div>
  );
}
