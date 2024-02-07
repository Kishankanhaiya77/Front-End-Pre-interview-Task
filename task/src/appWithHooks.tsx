import React, { useState } from 'react';

const App: React.FC = ({props: object}) => {
  const [lastClicked, setLastClicked] = useState<Date | null>(null);
  const [buttonColor, setButtonColor] = useState<'red' | 'blue' | 'green'>('red');

   const handleClick = () => {
    setLastClicked( new Date());
    setButtonColor(getNextButtonColor());
  };

  const getNextButtonColor = (): 'red' | 'blue' | 'green' => {
    switch (buttonColor) {
      case 'red':
        return 'blue';
      case 'blue':
        return 'green';
      case 'green':
        return 'red';
      default:
        throw new Error('Invalid color');
    }
  };

  return (
    <div>
      <button onClick={handleClick} style={{ backgroundColor: buttonColor }}>
        Click
      </button>
      <p>Last clicked: {lastClicked ? lastClicked.toString() : 'Never'}</p>
    </div>
  );
};

export default App;
