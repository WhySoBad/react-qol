import React from 'react';
import { ReactComponent as Logo } from './logo.svg';
import { Button, Square, Link, Icon, addIcon } from 'react-qol';
import 'react-qol/dist/index.css';

const App = () => {
  addIcon('Logo', Logo);
  return (
    <>
      <Button href={'https://www.youtube.com/'}>Hi</Button>
      <div style={{ maxWidth: '100px', height: '50vh' }}>
        <Square style={{ backgroundColor: 'red' }}>
          <Icon name={'logo'} />
        </Square>
      </div>
    </>
  );
};

export default App;
