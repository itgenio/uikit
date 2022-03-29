import React, { Fragment } from 'react';
import {
  AccordionDetails,
  AccordionCheckIcon,
  AccordionTitle,
  AccordionText,
  AccordionSummary,
  AccordionLabelProjects,
  AccordionProjects,
  AccordionChevronIcon,
  AccordionTitleProps,
} from '@itgenio/gkit';

export function Accordions() {
  const renderState = (titleProps: AccordionTitleProps, index: number) => {
    return (
      <Fragment key={index}>
        <AccordionDetails>
          <AccordionSummary>
            <AccordionCheckIcon />
            <AccordionTitle icon {...titleProps}>
              1. Знакомство с HTML
            </AccordionTitle>
            <AccordionChevronIcon />
          </AccordionSummary>
          <AccordionText>
            Мы вынуждены отталкиваться от того, что социально-экономическое развитие в значительной степени
            обусловливает важность переосмысления внешнеэкономических политик.
          </AccordionText>
          <AccordionLabelProjects>
            <AccordionProjects countProject="15">Выполненных проектов</AccordionProjects>
            <AccordionProjects countProject="2/2">Контрольный проект</AccordionProjects>
          </AccordionLabelProjects>
        </AccordionDetails>
      </Fragment>
    );
  };

  const states: [AccordionTitleProps][] = [[{ status: 'Пройдено' }]];

  return (
    <div className="accordion">
      <div>{states.map(([props], index) => renderState(props, index))}</div>
    </div>
  );
}

Accordions.displayName = 'Accordions';
