import './style.less';
import React from 'react';

export function Panels() {
  return (
    <div className="panels">
      <div className="panel bg-neutral-50 shadow">Panel with Base Shadow</div>
      <div className="panel bg-neutral-50 shadow-md">Panel with Medium shadow</div>
      <div className="panel bg-neutral-50 shadow-lg">Panel with Large shadow</div>
    </div>
  );
}

Panels.displayName = 'Panels';
