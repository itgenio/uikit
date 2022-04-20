import './style.less';
import React, { Fragment } from 'react';
import { Badge, BadgeProps } from '@itgenio/gkit';

export function Badges() {
  const sizes = ['small', 'large'] as const;
  const colors = ['neutral', 'primary', 'blue', 'purple', 'orange', 'danger'] as const;

  const renderState = (state: string, props: BadgeProps, index: number) => {
    return (
      <Fragment key={index}>
        <div>{state}</div>
        {colors.map(color => (
          <div key={`${color}${index}`} className="column">
            {sizes.map(size => {
              const p = { ...props, color, size };
              return <Badge key={`${color}${size}`} {...p} />;
            })}

            {sizes.map(size => {
              const p = { ...props, color, size };
              return <Badge key={`${color}${size}`} {...p} icon="star" />;
            })}

            {sizes.map(size => {
              const p = { ...props, color, size };
              return <Badge key={`${color}${size}`} {...p} icon="remove" onDelete={() => console.log('delete')} />;
            })}
          </div>
        ))}
      </Fragment>
    );
  };

  const states: { state: string; props?: BadgeProps }[] = [
    { state: 'Outline', props: { variant: 'outlined', label: 'Badge' } },
    { state: 'Inline', props: { variant: 'inline', label: 'Badge' } },
  ];

  return (
    <div className="badges">
      <div className="grid">
        <div>
          <span className="title">Color</span>
        </div>
        <div>
          <span className="title">Neutral</span>
        </div>
        <div>
          <span className="title">Primary</span>
        </div>
        <div>
          <span className="title">Blue</span>
        </div>
        <div>
          <span className="title">Purple</span>
        </div>
        <div>
          <span className="title">Orange</span>
        </div>
        <div>
          <span className="title">Danger</span>
        </div>
        {states.map(({ state, props = {} }, index) => renderState(state, props, index))}
      </div>
    </div>
  );
}

Badges.displayName = 'Badges';
