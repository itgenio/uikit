import './style.less';
import React from 'react';
import { Tooltip, TooltipProps } from '@itgenio/gkit';

export function Tooltips() {
  const content: any = (
    <div>
      <div className="title">Заголовок тултипа</div>
      <p className="text-tooltip">Текст тултипа до 150 символов.</p>
    </div>
  );

  const renderState = (trigger: string, props: TooltipProps, index: number) => {
    return (
      <Tooltip key={`${index}`} {...props}>
        {trigger}
      </Tooltip>
    );
  };

  const states: { trigger: string; props: TooltipProps }[] = [
    { trigger: 'bottom start', props: { side: 'bottom', offset: 16, align: 'start', content: content } },
    { trigger: 'bottom center', props: { side: 'bottom', offset: 16, align: 'center', content: content } },
    { trigger: 'bottom end', props: { side: 'bottom', offset: 16, align: 'end', content: content } },
    { trigger: 'top start', props: { side: 'top', offset: 16, align: 'start', content: content } },
    { trigger: 'top center', props: { side: 'top', offset: 16, align: 'center', content: content } },
    { trigger: 'top end', props: { side: 'top', offset: 16, align: 'end', content: content } },
    { trigger: 'right start', props: { side: 'right', align: 'start', content: content } },
    { trigger: 'right center', props: { side: 'right', align: 'center', content: content } },
    { trigger: 'right end', props: { side: 'right', align: 'end', content: content } },
    { trigger: 'left start', props: { side: 'left', align: 'start', content: content } },
    { trigger: 'left center', props: { side: 'left', align: 'center', content: content } },
    { trigger: 'left end', props: { side: 'left', align: 'end', content: content } },
  ];

  return (
    <div className="tooltips">
      <div className="grid">{states.map(({ trigger, props }, index) => renderState(trigger, props, index))}</div>
    </div>
  );
}

Tooltips.displayName = 'Tooltips';
