import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

export default function GoBackButton({ className }: { className?: string }) {
  const router = useRouter();
  function handleBack(): void {
    router.push("/");
  }

  return (
    <button
      className={`${className} btn btn-outline btn-success group mx-3 hidden font-bold sm:flex`}
      onClick={() => handleBack()}
    >
      <FontAwesomeIcon
        className="opacity-0 group-hover:opacity-100"
        icon={faBackward}
      />
      <h1 className="-ml-5 group-hover:m-0">Back to homepage</h1>
    </button>
  );
}
