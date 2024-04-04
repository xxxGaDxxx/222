import { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import { VariantButton } from './Button';
import styles from './Button.module.scss';

export type LinkButtonProps = {
  variant?: VariantButton;
  tegA?: boolean;
  to?: string;
  href?: string;
  children: ReactNode;
  uppercase?: boolean;
  target?: string;
  onClick?: () => void;
  fullWidth?: boolean;
  disabled?: boolean;
  classNames?: string;
};

export const LinkButton: FC<LinkButtonProps> = ({
  variant = 'empty',
  uppercase,
  children,
  to = '/',
  fullWidth,
  onClick,
  tegA,
  href,
  target,
  classNames,
  disabled,
  ...props
}) => {
  const stylesLink = cn(
    styles.button,
    fullWidth && styles.fullWidth,
    uppercase && styles.uppercase,
    variant && styles[variant],
    classNames,
  );

  return (
    <>
      {tegA ? (
        <a
          {...props}
          target={target}
          href={href}
          onClick={onClick}
          className={stylesLink}
        >
          {children}
        </a>
      ) : (
        <NavLink
          {...props}
          to={to}
          onClick={onClick}
          className={cn(stylesLink, { [styles.disabled]: disabled })}
        >
          {children}
        </NavLink>
      )}
    </>
  );
};
