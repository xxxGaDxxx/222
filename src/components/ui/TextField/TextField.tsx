import { ComponentProps, ComponentPropsWithoutRef, forwardRef, useState } from 'react';
import cn from 'classnames';
import SVG from 'react-inlinesvg';

import hideIcon from '../../../assets/icon/form/hide.svg';
import showIcon from '../../../assets/icon/form/show.svg';
import searchIcon from '../../../assets/icon/form/search.svg';
import styles from './TextField.module.scss';

export type TextFieldProps = {
  onValueChange?: (value: string) => void;
  containerProps?: ComponentProps<'div'>;
  labelProps?: ComponentProps<'label'>;
  errorMessage?: string;
  label?: string;
  success?: boolean;
} & ComponentPropsWithoutRef<'input'>;

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      className,
      errorMessage,
      placeholder,
      type,
      containerProps,
      labelProps,
      label,
      onChange,
      success,
      onValueChange,
      ...restProps
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    const isShowPasswordButtonShown = type === 'password';
    const isShowSearchSvg = type === 'search';

    const finalType = getFinalType(type, showPassword);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e);
      onValueChange?.(e.target.value);
    };

    const classNames = {
      root: cn(styles.root, containerProps?.className),
      fieldContainer: cn(styles.fieldContainer),
      field: cn(
        styles.field,
        !!errorMessage && styles.error,
        isShowSearchSvg && styles.paddingStart,
        success && styles.success,
        className,
      ),
      label: cn(styles.label, labelProps?.className),
      error: cn(styles.error, styles.messageError),
    };

    return (
      <div className={cn(styles.wrapper)}>
        {label && <label className={classNames.label}>{label}</label>}
        <div className={classNames.fieldContainer}>
          {isShowSearchSvg && (
            <span className={cn(styles.showSearch)}>
              <SVG src={searchIcon} />
            </span>
          )}

          <input
            className={classNames.field}
            placeholder={placeholder}
            ref={ref}
            type={finalType}
            onChange={handleChange}
            {...restProps}
          />

          {isShowPasswordButtonShown && (
            <button
              className={styles.showPassword}
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <SVG src={hideIcon} /> : <SVG src={showIcon} />}
            </button>
          )}

          <span className={classNames.error}>{errorMessage}</span>
        </div>
      </div>
    );
  },
);

function getFinalType(type: ComponentProps<'input'>['type'], showPassword: boolean) {
  if (type === 'password' && showPassword) {
    return 'text';
  }

  return type;
}
