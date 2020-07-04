import React from 'react';
import style from './Square.module.css';
import cx from 'classnames';

const Square = (props) => {
  let { className, children, ...rest } = props;
  return (
    <div className={style.square}>
      <div className={cx(style.content, className)} {...rest}>
        {children}
      </div>
    </div>
  );
};

export default Square;
