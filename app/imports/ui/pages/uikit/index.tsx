import './style.less';
import classNames from 'classnames';
import React, { useState } from 'react';
import { DarkModeButton } from '../../components/darkModeButton';
import { Buttons } from './components/buttons';
import { Colors } from './components/colors';
import { Dialogs } from './components/dialogs';
import { Panels } from './components/panels';
import { TabsExample } from './components/tabs';
import { TextFields } from './components/textFields';

const components = [Colors, Buttons, Panels, TabsExample, TextFields, Dialogs];

export function UikitDemo() {
  const names = components.map(c => c.displayName);

  const [c, setC] = useState(names[0]);

  const Component = components.find(component => component.displayName === c);

  return (
    <div className="uikit-page">
      <section>
        <header>
          <span className="text-xl logo font-bold">UI_KIT</span>
          <DarkModeButton />
        </header>
        <nav>
          {names.map(name => (
            <button
              key={name}
              className={classNames('gkit-btn small', { selected: name === c })}
              onClick={() => setC(name)}
            >
              {name}
            </button>
          ))}
        </nav>
      </section>
      <main>{Component && <Component />}</main>
    </div>
  );
}
