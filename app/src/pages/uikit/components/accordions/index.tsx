import './style.less';

import React from 'react';
import { Accordion, AccordionTitle } from '@itgenio/gkit/accordion';
import { CheckIcon } from './checkIcon';

export function Accordions() {
  const content = (
    <div>
      Мы вынуждены отталкиваться от того, что социально-экономическое развитие в значительной степени обусловливает
      важность переосмысления внешнеэкономических политик.
      <div className="footer">
        <p>
          Выполненных проектов: <span>15</span>
        </p>
        <p>
          Контрольный проект: <span>2/2 Выполнено</span>
        </p>
      </div>
    </div>
  );

  return (
    <div className="accordion">
      <Accordion idQa="id-qa accordion" idQaSummary="id-qa summary" content={content}>
        <CheckIcon />
        <AccordionTitle idQa="id-qa title" icon status="Пройдено">
          1. Знакомство с HTML
        </AccordionTitle>
      </Accordion>
    </div>
  );
}

Accordions.displayName = 'Accordions';
