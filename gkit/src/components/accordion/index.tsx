import './style.less';
import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import { ChevronIcon } from '../icons/chevron';

type AccordionDetailsProps = PropsWithChildren<{ idQa?: string }>;

export function AccordionDetails({ children, idQa }: AccordionDetailsProps) {
  return (
    <details id-qa={idQa} className="gkit-accordion">
      {children}
    </details>
  );
}

export function AccordionSummary({ children }: PropsWithChildren<{}>) {
  return (
    <summary>
      {children}
      <ChevronIcon />
    </summary>
  );
}

export type AccordionTitleProps = PropsWithChildren<{ status?: string; icon?: boolean; className?: string }>;

export function AccordionTitle({ status, icon, children, className }: AccordionTitleProps) {
  return (
    <div className={classNames('accordion-title', className, { icon })}>
      {children}
      {status && <p>{status}</p>}
    </div>
  );
}

export function AccordionText({ children }: PropsWithChildren<{}>) {
  return <p className="accordion-text">{children}</p>;
}
