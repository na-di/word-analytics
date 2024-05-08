import Stats from './Stats';
import Textarea from './Textarea';
import { useState } from 'react';

function Container() {
  const [text, setText] = useState('');
  const nuberOfWord = text.split(/\s/).filter((word) => word !== '').length;
  const nuberOfCharacters = text.length;
  const instagremCharacters = 280 - text.length;
  const facebookCararacters = 2200 - text.length;
  const twiterOfCararacters = 280 - text.length;
  const gogleTitle = 60 - text.length;
  const gogleMetaDescripion = 155 - text.length;
  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats
        nuberOfCharacters={nuberOfCharacters}
        instagremCharacters={instagremCharacters}
        facebookCararacters={facebookCararacters}
        nuberOfWord={nuberOfWord}
        twiterOfCararacters={twiterOfCararacters}
        gogleTitle={gogleTitle}
        gogleMetaDescripion={gogleMetaDescripion}
      />
    </main>
  );
}

export default Container;
