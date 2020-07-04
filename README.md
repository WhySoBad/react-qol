# react-qol

> A npm package simplifying often used react components to improve the quality of life when using react.

[![NPM](https://img.shields.io/npm/v/react-qol.svg)](https://www.npmjs.com/package/react-qol) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-qol
```

## Usage

### Square

```jsx
import React from 'react';
import { Square as SquareTemplate } from 'react-qol';

const Square = (props) => {
  return <SquareTemplate {...props} />; //returns a square based on width
};
```

### Link

```jsx
import React from 'react';
import { Link } from 'react-qol';

const InternalLink = (props) => {
  return <Link to={'/home'} {...props} />; //returns an internal link [e.g. home]
};

const ExternalLink = (props) => {
  return <Link href={'https://www.google.com/'} {...props} />; //returns an external link [e.g. https://www.google.com/]
};
```

### Button

```jsx
import React from 'react';
import { Button as ButtonTemplate } from 'react-qol';

const LinkButton = (props) => {
  return <ButtonTemplate to={'/home'} {...props} />; //returns a button working as a link [see "Link"]
};

const Button = (props) => {
  return <ButtonTemplate {...props} />; //returns a button working as a button [e.g. onClick]
};
```

### Icon

```jsx
import React from 'react';
import { Icon as IconTemplate, addIcon } from 'react-qol';
import { ReactComponent as SVGLogo } from './logo.svg';

const Icon = (props) => {
  addIcon('SVGLogo', SVGLogo);
  return <IconTemplate name={'SVGLogo'} />; //returns a simple svg icon surrounded by a div
};
```

## License

MIT © [WhySoBad](https://github.com/WhySoBad)
