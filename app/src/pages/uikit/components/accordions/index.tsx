import './style.less';
import React, { Fragment } from 'react';
import {
  AccordionDetails,
  AccordionCheckIcon,
  AccordionTitle,
  AccordionText,
  AccordionSummary,
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
          <div className="accordion-div">
            <p>
              Выполненных проектов: <span>15</span>
            </p>
            <p>
              Контрольный проект: <span>2/2 Выполнено</span>
            </p>
          </div>
        </AccordionDetails>
      </Fragment>
    );
  };

  const states: AccordionTitleProps[] = [{ status: 'Пройдено' }];

  return (
    <div className="accordion">
      <div>{states.map((props, index) => renderState(props, index))}</div>
    </div>
  );
}

Accordions.displayName = 'Accordions';
