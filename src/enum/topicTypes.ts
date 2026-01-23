//! TopicType match the key name in [allTopic] variable,naming key randomly would cause backend can't not find the data
// file: ./src/lib/cache-store.ts

export enum TopicType {
  js = "Javascript",
  csharp = "C#",
  cpp = "C++",
  webdev = "Web Dev",
  software = "Software",
}

export function getKeyByValue(value: string): string | undefined {
  const keys = Object.keys(TopicType);
  return keys.find((key) => TopicType[key as keyof typeof TopicType] === value);
}
