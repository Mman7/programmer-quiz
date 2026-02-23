export interface Sounds {
  correct: HTMLAudioElement;
  wrong: HTMLAudioElement;
  uiHover: HTMLAudioElement;
  pressed: HTMLAudioElement;
  removed: HTMLAudioElement;
}

let sounds: Sounds | null = null;

function getSounds(): Sounds | null {
  if (typeof window === "undefined") return null;

  if (!sounds) {
    sounds = {
      correct: new Audio("/sfx/correct.mp3"),
      wrong: new Audio("/sfx/wrong.mp3"),
      uiHover: new Audio("/sfx/ui-hover.mp3"),
      pressed: new Audio("/sfx/pressed.mp3"),
      removed: new Audio("/sfx/removed.mp3"),
    };
  }

  return sounds;
}

export const playSound = (key: keyof Sounds) => {
  const sounds = getSounds();
  if (!sounds) return;
  const a = sounds[key].cloneNode(true) as HTMLAudioElement;
  try {
    a.play();
  } catch (err) {
    console.log(err);
  }
};
// export const playSound = () => {
//   const sounds = getSounds();
//   if (!sounds) return;
//   const a = sounds.wrong.cloneNode(true) as HTMLAudioElement;
//   a.play();
// };

// export const playPressedSound = () => {
//   const sounds = getSounds();
//   sounds?.pressed.play();
// };

// export const playWrongSound = () => {
//   const sounds = getSounds();
//   if (!sounds) return;
//   const a = sounds.wrong.cloneNode(true) as HTMLAudioElement;
//   a.play();
// };

// export const playCorrectSound = () => {
//   if (!sounds) return;
//   const a = sounds.correct.cloneNode(true) as HTMLAudioElement;
//   a.play();
// };
