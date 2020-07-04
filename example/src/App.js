import React from 'react';
import { ReactComponent as Logo } from './logo.svg';
import { Button, Square, Link, Icon, addIcon } from 'react-qol';

const App = () => {
  addIcon('Logo', Logo);
  return (
    <>
      <Button href={'https://google.com/'}>
        <div>Insert text</div>
      </Button>
      <div style={{ maxWidth: '100px' }}>
        <Square style={{ backgroundColor: '#333', color: '#fff' }}>
          <div>Insert text</div>
        </Square>
      </div>
      <Icon name={'logo'} />
      <Link href={'https://google.com/'}>
        <div>Insert text</div>
      </Link>
    </>
  );
};

export default App;
