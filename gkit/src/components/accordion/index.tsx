import './style.less';
import classNames from 'classnames';
import React from 'react';

type Props = {
  className?: string;
  label?: string;
  title?: string;
  status?: string;
  completedProjects?: string;
  controlProject?: string;
  countProject?: number;
  countCompleted?: number;
};

export function Accordion({
  label,
  title,
  status,
  className,
  completedProjects,
  controlProject,
  countProject,
  countCompleted,
}: Props) {
  return (
    <details className={classNames(className, 'gkit-accordion')}>
      <summary>
        <span>
          <span className="check"></span>
        </span>
        <div>
          {title}
          <p>{status}</p>
        </div>
      </summary>
      <p className="text">{label}</p>
      <label>
        <p>
          {completedProjects}: <span>{countProject}</span>
        </p>
        <p>
          {controlProject}: <span>{countCompleted} Выполнено</span>
        </p>
      </label>
    </details>
  );
}
