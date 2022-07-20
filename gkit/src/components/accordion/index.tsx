import './style.less';
import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import { ChevronDownIcon } from '../../icons/chevron';

type AccordionProps = PropsWithChildren<{ idQa?: string }>;

export function AccordionDetails({ children, idQa }: AccordionProps) {
  return (
    <details id-qa={idQa} className="gkit-accordion">
      {children}
    </details>
  );
}

export function AccordionSummary({ children, idQa }: AccordionProps) {
  return (
    <summary id-qa={idQa}>
      {children}

      <ChevronDownIcon />
    </summary>
  );
}

export type AccordionTitleProps = AccordionProps & {
  status?: string;
  icon?: boolean;
  className?: string;
};

export function AccordionTitle({ status, icon, children, className, idQa }: AccordionTitleProps) {
  return (
    <div id-qa={idQa} className={classNames('accordion-title', className, { icon })}>
      {children}
      {status && <p>{status}</p>}
    </div>
  );
}

export function AccordionText({ children, idQa }: AccordionProps) {
  return (
    <p id-qa={idQa} className="accordion-text">
      {children}
    </p>
  );
}
