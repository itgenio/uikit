import './style.less';

import React, { Fragment, useState } from 'react';
import { Carousel, CarouselOnChange, CarouselProps } from '@itgenio/gkit/carousel';

const DEFAULT_ITEMS = ['red', 'green', 'blue', 'yellow'];

export function Carousels() {
  const [controlledStateIndex, setControlledStateIndex] = useState(0);

  const states: { state: string; props: Omit<CarouselProps, 'children'> }[] = [
    { state: 'default', props: { onChange: (params: CarouselOnChange) => console.log('default', params) } },
    {
      state: 'autoPlay === false',
      props: { autoPlay: false, onChange: (params: CarouselOnChange) => console.log('autoPlay === false', params) },
    },
    {
      state: 'controlled state',
      props: {
        autoPlay: false,
        slideIndex: controlledStateIndex,
        onChange: (params: CarouselOnChange) => {
          console.log('controlled state', params);

          setControlledStateIndex(params.newIndex);
        },
      },
    },
  ];

  return (
    <div className="carousels">
      {states.map(({ state, props }, index) => {
        return (
          <Fragment key={state}>
            <div className="carousel-state">
              <div>{state}</div>

              {state === 'controlled state' && (
                <div style={{ display: 'flex', gap: '8px' }}>
                  {DEFAULT_ITEMS.map((item, index) => {
                    return (
                      <button
                        key={item}
                        onClick={() => setControlledStateIndex(index)}
                        style={{ padding: '0 4px', border: `1px solid ${item}`, cursor: 'pointer' }}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              )}

              <Carousel key={`carousel-${index}`} {...props}>
                {DEFAULT_ITEMS.map(color => {
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
