export const TopicType = new Map([
  ["javascript", "Javascript"],
  ["csharp", "C#"],
  ["cpp", "C++"],
  ["webdev", "Web Dev"],
  ["software", "Software"],
  ["react", "React"],
  ["typescript", "Typescript"],
]);

const TopicTypeReverse = new Map([...TopicType].map(([k, v]) => [v, k]));

export const topicValueOnly = [...TopicType.values()];

export function getValueByKey(key: string): string {
  return TopicType.get(key)!;
}

export function getKeyByValue(value: string): string {
  return TopicTypeReverse.get(value)!;
}
