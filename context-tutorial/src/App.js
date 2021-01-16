import React from 'react';
import ColorBox from './components/ColorBox';
import SelectColor from './components/SelectColor';
import { ColorProvider } from './contexts/color';

const App = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColor></SelectColor>
        <ColorBox></ColorBox>
      </div>
    </ColorProvider>
  );
};

export default App;
