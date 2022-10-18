import './style.less';

import classNames from 'classnames';
import React, { PropsWithChildren, ReactNode, useRef } from 'react';
import { ChevronDownIcon } from '../icons';

type AccordionProps = PropsWithChildren<{
  idQa?: string;
  idQaSummary?: string;
  className?: string;
  content: ReactNode;
}>;

export function Accordion({ children, idQa, idQaSummary, className, content }: AccordionProps) {
  const summaryRef = useRef(null);
  const contentRef = useRef(null);

  const handleClick = e => {
    e.preventDefault();

    const accordion = summaryRef.current.parentNode;
    const content = contentRef.current;

    if (accordion.hasAttribute('open')) {
      content.classList.add('closed');

      setTimeout(() => {
        accordion.removeAttribute('open');
      }, 300);
      return;
    }

    accordion.setAttribute('open', '');

    setTimeout(() => {
      content.classList.remove('closed');
    }, 0);
  };

  return (
    <details id-qa={idQa} className="gkit-accordion">
      <summary id-qa={idQaSummary} onClick={handleClick} ref={summaryRef}>
        {children}

        <ChevronDownIcon />
      </summary>
      <div ref={contentRef} className="content-container closed">
        <div className={classNames('content', className)}>{content}</div>
      </div>
    </details>
  );
}

export type AccordionTitleProps = PropsWithChildren<{
  idQa?: string;
  className?: string;
  status?: string;
  icon?: boolean;
}>;

export function AccordionTitle({ status, icon, children, className, idQa }: AccordionTitleProps) {
  return (
    <div id-qa={idQa} className={classNames('accordion-title', className, { icon })}>
      {children}
      {status && <p>{status}</p>}
    </div>
  );
}
