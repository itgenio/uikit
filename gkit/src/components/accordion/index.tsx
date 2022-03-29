import './style.less';
import React from 'react';
import { CheckIcon, ChevronIcon } from '../icons/accordionIcon';

type Props = React.PropsWithChildren<{
  status?: string;
  children?: React.PropsWithChildren<any>;
  countProject?: number;
  icon?: boolean;
}>;

export function AccordionDetails({ children }: Props) {
  return <details className="gkit-accordion-details">{children}</details>;
}

export function AccordionSummary({ children }: Props) {
  return <summary>{children}</summary>;
}

export function AccordionCheckIcon() {
  return <CheckIcon />;
}

export function AccordionTitle({ status, icon, children }: Props) {
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

export function AccordionText({ children }: Props) {
  return <p className="text">{children}</p>;
}

export function AccordionChevronIcon() {
  return <ChevronIcon />;
}

export function AccordionLabelProjects({ children }: Props) {
  return <label>{children}</label>;
}

export function AccordionProjects({ children, countProject }: Props) {
  return (
    <p>
      {children}: <span>{countProject}</span>
    </p>
  );
}
