import { useQuizOption } from "@/src/store/useSelectedTopicsStore";
import SelectedTopic from "../../sidebar/selectedTopic";

export function SettingOpion() {
  const { setQuizNumber, numberOfQuiz } = useQuizOption();

  return (
    <div className="mx-2 my-2.5">
      <h2 className="font-medium text-gray-400">Number of quiz</h2>
      <input
        type="number"
        className="input validator"
        required
        value={numberOfQuiz}
        onChange={(e) => setQuizNumber(parseInt(e.target.value))}
        placeholder="Type a number between 10 to 30"
        min="10"
        max="30"
        step={10}
        title="Must be between be 10 to 30"
      />
      <p className="validator-hint">Must be between be 10 to 30</p>
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
