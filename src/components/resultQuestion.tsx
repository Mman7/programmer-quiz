import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { QuizQuestion } from "../types/quizQuestion";
import { Topic } from "../types/topic";
import TopicBadge from "./topicBadge/topicBadge";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

export default function resultQuestion({
  question,
  index,
}: {
  index: number;
  question: QuizQuestion;
}) {
  const topic: Topic = {
    difficulty: question.difficulty,
    name: question.topic,
  };

  const getOptionStyle = (option: string) => {
    const selectedAnswer = question.userAnswer;
    const answer = question.answer;

    if (option === selectedAnswer && option === answer)
      return "bg-green-300! text-shadow-gray-700!";

    if (option === selectedAnswer && option !== answer)
      return "bg-red-400! text-shadow-gray-700!";

    if (option === answer) return "bg-info! text-white! scale-105";

    return "";
  };
  return (
    <div className="collapse-arrow collapse z-10 my-4 overflow-auto bg-white/50 backdrop-blur-lg">
      <input type="radio" name="my-accordion-2" defaultChecked />
      <div className="collapse-title font-semibold">
        <h1 className="mr-3 mb-2">
          {`${index + 1}.  ${question.questionText} `}
          {question.answer !== undefined &&
          question.userAnswer === question.answer ? (
            <FontAwesomeIcon icon={faCircleCheck} className="text-green-500" />
          ) : (
            <FontAwesomeIcon icon={faCircleXmark} className="text-red-500" />
          )}
        </h1>
        <TopicBadge topic={topic} className="btn!" />
      </div>
      <div className="collapse-content flex flex-col text-sm">
        {question.options.map((item: string) => (
          <section
            key={item}
            className={`btn m-1 w-1/2 ${getOptionStyle(item)}`}
          >
            <h1>{item}</h1>
          </section>
        ))}
        <h2 className="text-lg">
          Reason: <span className="font-medium">{question.reason}</span>
        </h2>
      </div>
    </div>
  );
}
