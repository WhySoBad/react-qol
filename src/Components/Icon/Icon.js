import React from 'react';
import cx from 'classnames';
import style from './Icon.module.css';
let Icons = {};

export const addIcon = (name, icon) => {
  Icons[name] = icon;
  return Icons;
};

const Container = (props) => {
  const { className, children, ...rest } = props;
  return (
    <div className={cx(className, style.container)} {...rest}>
      {children}
    </div>
  );
};

const Icon = (props) => {
  const { name, ...rest } = props;
  const Tag =
    Icons[
      Object.keys(Icons).find((key) => key.toLowerCase() === name.toLowerCase())
    ];
  return (
    <Container {...rest}>
      <Tag />
    </Container>
  );
};
export default Icon;
