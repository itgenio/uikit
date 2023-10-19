import './style.less';

import React, { Fragment } from 'react';
import { Carousel, CarouselProps } from '@itgenio/gkit/carousel';

export function Carousels() {
  const states: { state: string; props: Omit<CarouselProps, 'children'> }[] = [{ state: 'default', props: {} }];

  return (
    <div className="carousels">
      {states.map(({ state }, index) => {
        return (
          <Fragment key={state}>
            <div className="carousel-state">
              <div>{state}</div>

              <Carousel key={`carousel-${index}`}>
                {['green', 'red', 'blue', 'yellow'].map(color => {
                  return <div key={color} style={{ width: '100%', maxWidth: 400, height: 200, background: color }} />;
                })}
              </Carousel>
            </div>

            {index < states.length - 1 && <hr />}
          </Fragment>
        );
      })}
    </div>
  );
}

Carousels.displayName = 'Carousels';
