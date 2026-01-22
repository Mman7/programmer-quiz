export default function InfiniteLoading({ className }: { className: string }) {
  return (
    <span
      className={`${className} loading loading-infinity loading-xl m-auto animate-pulse text-white`}
    />
  );
}
