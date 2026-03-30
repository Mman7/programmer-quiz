export interface Sounds {
  correct: HTMLAudioElement;
  wrong: HTMLAudioElement;
  uiHover: HTMLAudioElement;
  pressed: HTMLAudioElement;
  removed: HTMLAudioElement;
}

let sounds: Sounds | null = null;

function hasUserInteracted(): boolean {
  if (typeof window === "undefined") return false;
  // Browsers may block audio until the first trusted user gesture.
  const nav: Navigator = window.navigator;
  return nav.userActivation.hasBeenActive;
}

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
  if (!hasUserInteracted()) return;

  const sounds = getSounds();
  if (!sounds) return;

  const sfx = sounds[key].cloneNode(true) as HTMLAudioElement;

  void sfx.play().catch((err) => {
    console.log(err);
  });
};
