import './style.less';
import React, { Fragment } from 'react';
import { Badge, BadgeProps } from '@itgenio/gkit/badge';
import { DismissIcon } from '@itgenio/icons/dismissIcon';
import { StarIcon } from '@itgenio/icons/starIcon';

export function Badges() {
  const sizes = ['small', 'large'] as const;
  const colors = ['neutral', 'green', 'blue', 'purple', 'orange', 'danger', 'white'] as const;

  const renderState = (state: string, props: BadgeProps, index: number) => {
    return (
      <Fragment key={index}>
        <div>{state}</div>
        {colors.map(color => (
          <div key={`${color}${index}`} className="column">
            {sizes.map(size => {
              const p = { ...props, color, size };
              return (
                <Badge key={`${color}${size}`} {...p}>
                  Badge
                </Badge>
              );
            })}

            {sizes.map(size => {
              const p = { ...props, color, size };
              return (
                <Badge key={`${color}${size}`} {...p}>
                  <StarIcon className="star-icon" />
                  Badge
                </Badge>
              );
            })}

            {sizes.map(size => {
              const p = { ...props, color, size };
              return (
                <Badge key={`${color}${size}`} {...p} onClick={() => console.log('click')}>
                  Badge
                  <DismissIcon />
                </Badge>
              );
            })}
          </div>
        ))}
      </Fragment>
    );
  };

  const states: { state: string; props?: BadgeProps }[] = [
    { state: 'Secondary', props: { type: 'secondary' } },
    { state: 'Primary', props: { type: 'primary' } },
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
        <div>
          <span className="title">White</span>
        </div>
        {states.map(({ state, props = {} }, index) => renderState(state, props, index))}
      </div>
    </div>
  );
}

Badges.displayName = 'Badges';
