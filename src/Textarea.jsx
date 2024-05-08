import { useState } from 'react';
import Warning from './Warning';

function Textarea({ text, setText }) {
  const [warning, setWarning] = useState('');

  const handelChang = (e) => {
    let newText = e.target.value;
    if (newText.includes('<script>') || newText.includes('<SCRIPT>')) {
      setWarning('no script is allow!');
      newText = newText.replace(/<script>/gi, '').replace(/<SCRIPT>/gi, '');
    } else if (newText.includes('@')) {
      setWarning('no @ allow');
      newText = newText.replace('@', '');
    } else {
      setWarning('');
    }
    setText(newText);
  };
  return (
    <div className="textarea">
      <textarea
        onChange={handelChang}
        value={text}
        placeholder="הכנס טקסט כאן.."
      />
      {warning ? <Warning warning={warning} /> : null}
    </div>
  );
}

export default Textarea;
