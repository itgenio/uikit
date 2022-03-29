import './style.less';
import React, { PropsWithChildren } from 'react';
import { CheckIcon, ChevronIcon } from '../icons/accordionIcon';

export function AccordionDetails({ children }: PropsWithChildren<{}>) {
  return <details className="gkit-accordion-details">{children}</details>;
}

export function AccordionSummary({ children }: PropsWithChildren<{}>) {
  return <summary>{children}</summary>;
}

export function AccordionCheckIcon() {
  return <CheckIcon />;
}

export type AccordionTitleProps = PropsWithChildren<{ status?: string; icon?: boolean }>;

export function AccordionTitle({ status, icon, children }: AccordionTitleProps) {
  const divStyle = {
    fontSize: `${icon ? '1rem' : '1.25rem'}`,
  };
  return (
    <div style={divStyle}>
      {children}
      <p>{status}</p>
    </div>
  );
}

export function AccordionText({ children }: PropsWithChildren<{}>) {
  return <p className="text">{children}</p>;
}

export function AccordionChevronIcon() {
  return <ChevronIcon />;
}

export function AccordionLabelProjects({ children }: PropsWithChildren<{}>) {
  return <label>{children}</label>;
}

export type AccordionProjectsProps = PropsWithChildren<{ countProject?: string }>;

export function AccordionProjects({ children, countProject }: AccordionProjectsProps) {
  return (
    <p>
      {children}: <span>{countProject}</span>
    </p>
  );
}
