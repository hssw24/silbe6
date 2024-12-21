import React, { useState } from 'react';

const syllables = [
  ["A a", "E e", "I i", "O o", "U u", "Ä ä", "Ö ö", "Ü ü", "ie", "Ei ei", "ai", "Au au", "Eu eu", "Äu äu", 
  "oi", "ui", "St st", "Sp sp", "Pf pf", "Ch ch", "chen", "Qu qu", "Sch sch", "Ah ah", "Eh eh", "Ih ih", 
  "Oh oh", "Uh uh"],
  [
    "Apfel",
    "Esel",
    "Igel",
    "Opa",
    "Uhu",
    "Äffchen",
    "Öl",
    "Übung",
    "Ziege",
    "Eis",
    "Mai",
    "Auge",
    "Eule",
    "Äußeres",
    "Ahoi",
    "pfui",
    "Stier",
    "Sport",
    "Pfeife",
    "China",
    "Häuschen",
    "Qualle",
    "Schule",
    "Ahnung",
    "Ehre",
    "Ihle",
    "Ohr",
    "Uhr"],
  ["Lama", "Henne", "Zicke", "Rolle", "Wunder", "Säge", "Löwe", "üben", "liegen", "Meise", "Hai", "kauen", "Beule", 
  "Häuschen", "Spoiler", "hui", "Kiste", "spielen", "Topf", "lachen", "Mädchen", "quieken", "rascheln", "Zahn", "Zeh", 
  "ihre", "ohne", "Huhn"],
    ];

function SyllableButton({ index, onSpeak }) {
  const [currentSyllable, setCurrentSyllable] = useState(syllables[index][0]);

  const handleClick = () => {
    const nextIndex = (syllables[index].indexOf(currentSyllable) + 1) % syllables[index].length;
    setCurrentSyllable(syllables[index][nextIndex]);
  };

  return (
    <div className="syllable-button-container">
      <button onClick={handleClick}>
        {currentSyllable}
      </button>
      <button onClick={() => onSpeak(currentSyllable)}>
        🎤
      </button>
    </div>
  );
}

export default SyllableButton;