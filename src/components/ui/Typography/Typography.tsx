import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import cn from 'classnames';

import styles from './Typography.module.scss';

export type TypographyProps<T extends ElementType = ElementType> = {
  as?: T;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'text' | 'error';
  children?: ReactNode;
  className?: string;
};

export const Typography = <T extends ElementType = ElementType>(
  props: TypographyProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>,
) => {
  const { as: Component = 'p', className, variant = 'p', ...restProps } = props;

  return (
    <Component
      className={cn(styles[variant], className)}
      {...restProps}
    />
  );
};
