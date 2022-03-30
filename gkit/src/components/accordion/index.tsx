import './style.less';
import classNames from 'classnames';
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

export type AccordionTitleProps = PropsWithChildren<{ status?: string; icon?: boolean; className?: string }>;

export function AccordionTitle({ status, icon, children, className }: AccordionTitleProps) {
  return (
    <div className={classNames('accordion-title', className, { icon })}>
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
