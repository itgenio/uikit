import './style.less';
import React from 'react';
import { TooltipContainer, TooltipTrigger, TooltipContent, TooltipContentProps } from '@itgenio/gkit';

export function Tooltips() {
  const renderState = (trigger: string, props: TooltipContentProps) => {
    return (
      <TooltipContainer>
        <TooltipTrigger>{trigger}</TooltipTrigger>
        <TooltipContent {...props}>
          <div className="title">Заголовок тултипа</div>
          <p className="text-tooltip">Текст тултипа до 150 символов.</p>
        </TooltipContent>
      </TooltipContainer>
    );
  };

  const states: { trigger: string; props?: TooltipContentProps }[] = [
    { trigger: 'bottom start', props: { side: 'bottom', offset: 16, align: 'start' } },
    { trigger: 'bottom center', props: { side: 'bottom', offset: 16, align: 'center' } },
    { trigger: 'bottom end', props: { side: 'bottom', offset: 16, align: 'end' } },
    { trigger: 'top start', props: { side: 'top', offset: 16, align: 'start' } },
    { trigger: 'top center', props: { side: 'top', offset: 16, align: 'center' } },
    { trigger: 'top end', props: { side: 'top', offset: 16, align: 'end' } },
    { trigger: 'right start', props: { side: 'right', align: 'start' } },
    { trigger: 'right center', props: { side: 'right', align: 'center' } },
    { trigger: 'right end', props: { side: 'right', align: 'end' } },
    { trigger: 'left start', props: { side: 'left', align: 'start' } },
    { trigger: 'left center', props: { side: 'left', align: 'center' } },
    { trigger: 'left end', props: { side: 'left', align: 'end' } },
  ];

  return (
    <div className="tooltips">
      <div className="grid">{states.map(({ trigger, props = {} }) => renderState(trigger, props))}</div>
    </div>
  );
}

Tooltips.displayName = 'Tooltips';
