import './style.less';
import classNames from 'classnames';
import React, { ForwardedRef, forwardRef } from 'react';

export const BUTTON_CN = 'gkit-btn';

type Sizes = 'small' | 'normal' | 'large';
type Types =
  | 'primary'
  | 'secondary'
  | 'tertiaryPrimary'
  | 'tertiaryNeutral'
  | 'danger'
  | 'blue'
  | 'green'
  | 'purple'
  | 'orange';

export type ButtonProps = React.PropsWithChildren<{
  size?: Sizes;
  type?: Types;
  disabled?: boolean;
  hover?: boolean;
  active?: boolean;
  focus?: boolean;
  asIcon?: boolean;
  className?: string;
  idQa?: string;
  tabIndex?: number;
}> &
  React.DOMAttributes<HTMLButtonElement>;

export const Button = forwardRef(function Button(
  {
    children,
    size = 'normal',
    hover,
    type = 'primary',
    disabled,
    active,
    focus,
    asIcon,
    className,
    onClick,
    onMouseDown,
    idQa,
    ...props
  }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) {
  return (
    <button
      ref={ref}
      id-qa={idQa}
      disabled={disabled}
      className={classNames(BUTTON_CN, className, size, type, { hover, active, focus, icon: asIcon })}
      onClick={e => {
        const activeElement = document.activeElement as HTMLElement | null;

        if (activeElement?.classList.contains(BUTTON_CN)) {
          activeElement.blur();
        }

        onClick?.(e);
      }}
      onMouseDown={e => {
        // Предотвращаем фокус при нажатии кнопки мыши, т.к сейчас фокус может быть только через клавиатуру
        e.preventDefault();

        onMouseDown?.(e);
      }}
      {...props}
    >
      {children}
    </button>
  );
});

type ButtonGroupProps<C extends typeof Button = typeof Button> = {
  children?:
    | (React.ReactElement<ButtonProps, C> | null | false)
    | (React.ReactElement<ButtonProps, C> | null | false)[];
  className?: string;
  idQa?: string;
} & Pick<ButtonProps, 'size' | 'type' | 'asIcon'>;

export function ButtonGroup({ idQa, className, size, type, asIcon, children }: ButtonGroupProps) {
  return (
    <div className={classNames('gkit-btn-group', className)} id-qa={idQa}>
      {React.Children.map(
        children,
        child =>
          child &&
          React.cloneElement(child, {
            ...child.props,
            size: size ?? child.props.size,
            type: type ?? child.props.type,
            asIcon: asIcon ?? child.props.asIcon,
          })
      )}
    </div>
  );
}
