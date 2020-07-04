import React, { forwardRef } from 'react';
import cx from 'classnames';
import style from './Button.module.css';
import Link from '../Link';

const Button = forwardRef((props, ref) => {
  const { href, to, children, className, ...rest } = props;
  if (href || to) {
    return (
      <button className={style.button}>
        <Link ref={ref} {...props}>
          {children}
        </Link>
      </button>
    );
  }
  return (
    <button ref={ref} className={cx(className, style.button)} {...rest}>
      {children}
    </button>
  );
});

export default Button;
