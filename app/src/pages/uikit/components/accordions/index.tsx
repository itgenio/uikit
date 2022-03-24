import React, { Fragment } from 'react';
import {
  AccordionDetails,
  AccordionIcon,
  AccordionTitle,
  AccordionText,
  AccordionSummary,
  AccordionLabelProjects,
  AccordionProjects,
  AccordionChevron,
} from '@itgenio/gkit';

export function Accordions() {
  const renderState = (props: any = {}) => {
    return (
      <Fragment>
        <AccordionDetails>
          <AccordionSummary>
            <AccordionIcon />
            <AccordionTitle icon {...props}>
              1. Знакомство с HTML
            </AccordionTitle>
            <AccordionChevron />
          </AccordionSummary>
          <AccordionText>
            Мы вынуждены отталкиваться от того, что социально-экономическое развитие в значительной степени
            обусловливает важность переосмысления внешнеэкономических политик.
          </AccordionText>
          <AccordionLabelProjects {...props}>
            <AccordionProjects countProject={props.countProject}>Выполненных проектов</AccordionProjects>
            <AccordionProjects countProject={props.countCompleted}>Контрольный проект</AccordionProjects>
          </AccordionLabelProjects>
        </AccordionDetails>
      </Fragment>
    );
  };

  const states = [
    [
      {
        status: 'Пройдено',
        countProject: 15,
        countCompleted: '2/2',
      },
    ],
  ] as const;

  return (
    <div className="accordion">
      <div>{states.map(([props]) => renderState(props))}</div>
    </div>
  );
}

Accordions.displayName = 'Accordions';
