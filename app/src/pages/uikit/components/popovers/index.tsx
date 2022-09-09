import './style.less';
import React from 'react';
import { Button } from '@itgenio/gkit/button';
import { Popover, PopoverProps } from '@itgenio/gkit/popover';

export function Popovers() {
  const content = (
    <div>
      <div className="popover-header">Заголовок</div>
      <div className="popover-text">
        Popover используется для позиционирования элементов, привязанных к координате или якорю.
      </div>
      <div className="popover-button-container">
        <Button className="popover-button">Сохранить</Button>
        <Button type="secondary">Пропустить</Button>
      </div>
    </div>
  );

  const renderState = (trigger: string, props: PopoverProps, index: number) => {
    return (
      <Popover key={`${index}`} idQa="id-qa popover" {...props}>
        {trigger}
      </Popover>
    );
  };

  const states: { trigger: string; props: PopoverProps }[] = [
    { trigger: 'bottom end', props: { side: 'bottom', arrowOffset: 16, align: 'end', open: true, content } },
    { trigger: 'left start', props: { side: 'left', align: 'start', open: true, content } },
    { trigger: 'left center', props: { side: 'left', align: 'center', content } },
    { trigger: 'bottom center', props: { side: 'bottom', arrowOffset: 16, align: 'center', content } },
  ];
  return (
    <div className="popover">
      <div className="grid">{states.map(({ trigger, props }, index) => renderState(trigger, props, index))}</div>
    </div>
  );
}

Popovers.displayName = 'Popovers';
