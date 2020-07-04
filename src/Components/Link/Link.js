import React, { forwardRef } from 'react';
import style from './Link.module.css';
import cx from 'classnames';
import Button from '../Button';

const LinkBase = (props) => {
  const { ref, href, target, rel, to, children, ...rest } = props;

  if (to) {
    return (
      <a ref={ref} href={to} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <a
      ref={ref}
      href={href}
      target={target ? target : '_blank'}
      rel={rel ? rel : 'noopener noreferrer'}
      {...rest}
    >
      {children}
    </a>
  );
};

const InternalLink = ({ to, ...rest }) => {
  return <LinkBase to={to} {...rest} />;
};

const Link = forwardRef((props, ref) => {
  const { className, href, rel, onClick, target, ...rest } = props;
  if (href) {
    return (
      <LinkBase ref={ref} href={href} target={target} rel={rel} {...rest}>
        {props.children}
      </LinkBase>
    );
  }

  if (!onClick) {
    return <InternalLink ref={ref} className={style.link} {...props} />;
  }

  return (
    <LinkBase
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      className={cx(className, style.link)}
      {...rest}
    >
      {props.children}
    </LinkBase>
  );
});

export default Link;
