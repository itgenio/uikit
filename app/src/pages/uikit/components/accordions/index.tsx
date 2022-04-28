import './style.less';
import React, { Fragment } from 'react';
import { AccordionDetails, AccordionTitle, AccordionText, AccordionSummary, AccordionTitleProps } from '@itgenio/gkit';
import { CheckIcon } from '../icons/checkIcon';

export function Accordions() {
  const renderState = (titleProps: AccordionTitleProps, index: number) => {
    return (
      <Fragment key={index}>
        <AccordionDetails idQa="id-qa accordion">
          <AccordionSummary idQa="id-qa summary">
            <CheckIcon />
            <AccordionTitle idQa="id-qa title" icon {...titleProps}>
              1. Знакомство с HTML
            </AccordionTitle>
          </AccordionSummary>
          <AccordionText idQa="id-qa text">
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
