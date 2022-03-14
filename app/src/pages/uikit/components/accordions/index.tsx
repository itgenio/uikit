import React, { Fragment } from 'react';
import { Accordion } from '@itgenio/gkit';

export function Accordions() {
  const renderState = (state: string, props: any = {}) => {
    return (
      <Fragment key={state}>
        <div>{state}</div>
        <Accordion {...props} />
      </Fragment>
    );
  };

  const states = [
    [
      '',
      {
        title: '1. Знакомство с HTML',
        status: 'Пройдено',
        label:
          'Мы вынуждены отталкиваться от того, что социально-экономическое развитие в значительной степени обусловливает\n' +
          '      важность переосмысления внешнеэкономических политик.',
        completedProjects: 'Выполненных проектов',
        controlProject: 'Контрольный проект',
        countProject: '15',
        countCompleted: '2/2',
      },
    ],
  ] as const;

  return (
    <div className="accordion">
      <div>{states.map(([name, props]) => renderState(name, props))}</div>
    </div>
  );
}

Accordions.displayName = 'Accordions';
