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
  const selectedAnswer = question.userAnswer;
  const answer = question.answer;
  const topic: Topic = {
    difficulty: question.difficulty,
    name: question.topic,
  };

  const getOptionStyle = (option: string) => {
    if (option === selectedAnswer && option === answer)
      return "bg-green-500! text-white shadow-lg shadow-green-500/50";

    if (option === selectedAnswer && option !== answer)
      return "bg-red-800! text-white";

    if (option === answer)
      return "bg-green-500! text-white! scale-103 shadow-lg shadow-lg shadow-green-500/50 correctAnswer";

    return "";
  };

  const getIcon = (option: string) => {
    if (option === selectedAnswer && option !== answer)
      return (
        <FontAwesomeIcon
          size="lg"
          icon={faCircleXmark}
          className="absolute right-5 text-red-500"
        />
      );

    if (option === answer)
      return (
        <FontAwesomeIcon
          size="lg"
          icon={faCircleCheck}
          className="absolute right-5 text-green-900"
        />
      );
  };

  return (
    <div className="collapse-arrow collapse z-10 my-4 overflow-auto bg-white/5 backdrop-blur-xl">
      <input type="radio" name="my-accordion-2" defaultChecked />
      <div className="collapse-title font-semibold">
        <h1 className="mr-3 mb-2">
          {`${index + 1}.  ${question.questionText} `}
          {question.answer !== undefined &&
          question.userAnswer === question.answer ? (
            <FontAwesomeIcon
              size="lg"
              icon={faCircleCheck}
              className="text-green-500"
            />
          ) : (
            <FontAwesomeIcon
              size="lg"
              icon={faCircleXmark}
              className="text-red-500"
            />
          )}
        </h1>
        <TopicBadge topic={topic} />
      </div>
      <div className="collapse-content flex flex-col text-sm">
        {question.options.map((item: string) => (
          <section
            key={item}
            className={`btn relative m-1 w-1/2 border-0 bg-gray-700 text-gray-300 ${getOptionStyle(item)}`}
          >
            <h1>{item}</h1>
            {getIcon(item)}
          </section>
        ))}
        <h2 className="my-2 text-lg">
          Reason: <span className="font-medium">{question.reason}</span>
        </h2>
      </div>
    </div>
  );
}
