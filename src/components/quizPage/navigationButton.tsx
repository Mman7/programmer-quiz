import { useParams, useRouter } from "next/navigation";

export default function NavigationButton({ isSubmit }: { isSubmit: boolean }) {
  const router = useRouter();
  const params = useParams();
  const id = Number(params.id);
  const handleNextQuestion = () => {
    router.push(`${id + 1}`);
  };
  const handleGoBack = () => {
    router.push(`${id - 1}`);
  };
  return (
    <div className="flex">
      <button
        onClick={() => handleGoBack()}
        className={`${isSubmit && "visible"} ${id === 1 && "hidden"} btn btn-secondary btn-outline invisible m-3 flex-1`}
      >
        Go back!
      </button>
      <button
        onClick={() => handleNextQuestion()}
        className={`${isSubmit && "visible"} btn btn-secondary btn-outline invisible m-3 flex-1`}
      >
        Next!
      </button>
    </div>
  );
}
