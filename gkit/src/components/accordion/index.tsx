import './style.less';
import React from 'react';

type Props = {
  className?: string;
  label?: string;
  status?: string;
  children?: React.PropsWithChildren<any>;
  completedProjects?: string;
  controlProject?: string;
  countProject?: number;
  countCompleted?: string;
};

export function AccordionDetails({ children }: Props) {
  return <details className="gkit-accordion">{children}</details>;
}

export function AccordionSummary({ children }: Props) {
  return <summary>{children}</summary>;
}

export function AccordionIcon() {
  return (
    <span>
      <span className="check" />
    </span>
  );
}

export function AccordionTitle({ status, children }: Props) {
  return (
    <div>
      {children}
      <p>{status}</p>
    </div>
  );
}

export function AccordionText({ children }: Props) {
  return <p className="text">{children}</p>;
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
