import cn from 'classnames';
import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from 'react';

import styles from './Button.module.scss';

export type VariantButton = 'primary' | 'secondary' | 'empty';

// TODO типизация prefix suffix
type ButtonProps = {
  prefix?: ReactNode;
  suffix?: ReactNode;
  variant?: VariantButton;
  size?: 'medium' | 'small';
  classNames?: string;
  fullWidth?: boolean;
  uppercase?: boolean;
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({
  prefix,
  suffix,
  variant,
  fullWidth,
  uppercase,
  classNames,
  children,
  size = 'small',
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(
        styles.button,
        styles[size],
        fullWidth && styles.fullWidth,
        uppercase && styles.uppercase,
        variant && styles[variant],
        classNames,
      )}
    >
      {prefix && <span className={styles.prefix}>{prefix}</span>}
      {children}
      {suffix && <span className={styles.suffix}>{suffix}</span>}
    </button>
  );
};
