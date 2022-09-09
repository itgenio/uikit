import './style.less';
import React from 'react';
import { Tooltip, TooltipProps } from '@itgenio/gkit/tooltip';

export function Tooltips() {
  const content = (
    <div>
      <div className="title">Заголовок тултипа</div>
      <p className="text-tooltip">Текст тултипа до 150 символов.</p>
    </div>
  );

  const renderState = (trigger: string, props: TooltipProps, index: number) => {
    return (
      <Tooltip key={`${index}`} {...props} idQa="id-qa tooltip">
        {trigger}
      </Tooltip>
    );
  };

  const states: { trigger: string; props: TooltipProps }[] = [
    { trigger: 'bottom start', props: { side: 'bottom', arrowOffset: 16, align: 'start', defaultOpen: true, content } },
    { trigger: 'bottom center', props: { side: 'bottom', arrowOffset: 16, align: 'center', content } },
    { trigger: 'bottom end', props: { side: 'bottom', arrowOffset: 16, align: 'end', content } },
    { trigger: 'top start', props: { side: 'top', arrowOffset: 16, align: 'start', content } },
    { trigger: 'top center', props: { side: 'top', arrowOffset: 16, align: 'center', content } },
    { trigger: 'top end', props: { side: 'top', arrowOffset: 16, align: 'end', content } },
    { trigger: 'right start', props: { side: 'right', align: 'start', content } },
    { trigger: 'right center', props: { side: 'right', align: 'center', content } },
    { trigger: 'right end', props: { side: 'right', align: 'end', content } },
    { trigger: 'left start', props: { side: 'left', align: 'start', content } },
    { trigger: 'left center', props: { side: 'left', align: 'center', content } },
    { trigger: 'left end', props: { side: 'left', align: 'end', content } },
  ];

  return (
    <div className="tooltips">
      <div className="grid">{states.map(({ trigger, props }, index) => renderState(trigger, props, index))}</div>
    </div>
  );
}

Tooltips.displayName = 'Tooltips';
