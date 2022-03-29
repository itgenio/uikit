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
} from '@itgenio/gkit';

type AccordionProps = Parameters<typeof AccordionTitle>[0];

export function Accordions() {
  const renderState = (props: AccordionProps, index: number) => {
    return (
      <Fragment key={index}>
        <AccordionDetails>
          <AccordionSummary>
            <AccordionCheckIcon />
            <AccordionTitle icon {...props}>
              1. Знакомство с HTML
            </AccordionTitle>
            <AccordionChevronIcon />
          </AccordionSummary>
          <AccordionText>
            Мы вынуждены отталкиваться от того, что социально-экономическое развитие в значительной степени
            обусловливает важность переосмысления внешнеэкономических политик.
          </AccordionText>
          <AccordionLabelProjects {...props}>
            <AccordionProjects countProject="15">Выполненных проектов</AccordionProjects>
            <AccordionProjects countProject="2/2">Контрольный проект</AccordionProjects>
          </AccordionLabelProjects>
        </AccordionDetails>
      </Fragment>
    );
  };

  const states: [AccordionProps][] = [[{ status: 'Пройдено' }]];

  return (
    <div className="accordion">
      <div>{states.map(([props], index) => renderState(props, index))}</div>
    </div>
  );
}

Accordions.displayName = 'Accordions';
