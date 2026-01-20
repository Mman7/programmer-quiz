import { useQuizOption } from "@/src/store/useSelectedTopicsStore";
import SelectedTopic from "../../sidebar/selectedTopic";

export function SettingOpion() {
  const { setQuizNumber } = useQuizOption();
  return (
    <div className="mx-2 my-2.5">
      <h2 className="font-medium text-gray-600">Number of quiz</h2>
      <input
        type="number"
        className="input validator"
        required
        onChange={(e) => setQuizNumber(parseInt(e.target.value))}
        placeholder="Type a number between 10 to 30"
        min="10"
        max="30"
        step={10}
        title="Must be between be 10 to 30"
      />
      <p className="validator-hint">Must be between be 1 to 30</p>
      <section>
        <h2 className="font-medium text-gray-600">Topics includes</h2>
        <TopicOptions />
      </section>
    </div>
  );
}

export default function TopicOptions() {
  const { topics } = useQuizOption();
  return (
    <div className="flex flex-wrap">
      <section className="my-1 flex flex-row flex-wrap gap-3 rounded-xl bg-gray-100/50 p-3">
        {topics.map((item, index) => (
          <SelectedTopic topic={item} key={index} />
        ))}
      </section>
    </div>
  );
}
