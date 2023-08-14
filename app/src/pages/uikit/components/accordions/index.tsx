import './style.less';

import React, { useState } from 'react';
import { Accordion, AccordionTitle } from '@itgenio/gkit/accordion';
import { CheckIcon } from './checkIcon';

export function Accordions() {
  const [value, setValue] = useState('acc-1');

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

      <Accordion
        idQa="id-qa accordion 2"
        idQaSummary="id-qa summary 2"
        content={content}
        value={value}
        itemValue="acc-1"
        onValueChange={setValue}
      >
        <CheckIcon />
        <AccordionTitle idQa="id-qa title" icon status="Пройдено">
          {`2.Контролируемый компонент: ${value ? 'open' : 'close'}`}
        </AccordionTitle>
      </Accordion>
    </div>
  );
}

Accordions.displayName = 'Accordions';
