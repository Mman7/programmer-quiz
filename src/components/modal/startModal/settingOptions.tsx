import { useQuizOption } from "@/src/store/useSelectedTopicsStore";
import SelectedTopic from "../../sidebar/selectedTopic";
import { playHoverSound, playPressedSound } from "@/src/utils/playSound";

const questionNumber = [
  { number: 10, color: "btn-success" },
  { number: 20, color: "btn-warning" },
  { number: 30, color: "btn-error" },
];

export function SettingOpion() {
  const { setQuizNumber, numberOfQuiz } = useQuizOption();

  const handleClick = (e: any) => {
    playPressedSound();
    setQuizNumber(parseInt(e.target.value));
  };

  return (
    <div className="mx-2 my-2.5">
      <h2 className="mb-1 font-medium text-gray-400">Number of quiz</h2>
      <section className="flex gap-3">
        {questionNumber.map((item) => (
          <button
            onMouseEnter={() => playHoverSound()}
            key={item.number}
            value={item.number}
            onClick={(e) => handleClick(e)}
            className={`btn btn-outline ${item.color} ${numberOfQuiz == item.number && "btn-active"} `}
          >
            {item.number}
          </button>
        ))}
      </section>
      <section>
        <h2 className="mb-1 font-medium text-gray-400">Topics includes</h2>
        <TopicOptions />
      </section>
    </div>
  );
}

export default function TopicOptions() {
  const { topics } = useQuizOption();
  return (
    <div className="flex flex-wrap">
      <h2 className={`text-red-400 ${topics.length > 0 && "hidden"}`}>
        Please select some topics
      </h2>
      <section
        className={`invisible my-1 flex flex-row flex-wrap gap-3 rounded-xl bg-gray-100/10 p-3 ${topics.length > 0 && "visible"}`}
      >
        {topics.map((item, index) => (
          <SelectedTopic topic={item} key={index} />
        ))}
      </section>
    </div>
  );
}
