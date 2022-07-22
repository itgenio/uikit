import './style.less';
import classNames from 'classnames';
import React, { useState } from 'react';
import { Button, ButtonGroup } from '@itgenio/gkit';
import { DarkModeButton } from '../../components/darkModeButton';
import { Accordions } from './components/accordions';
import { Badges } from './components/badges';
import { ButtonGroups } from './components/buttonGroup';
import { Buttons } from './components/buttons';
import { Checkboxes } from './components/checkboxes';
import { Colors } from './components/colors';
import { Dialogs } from './components/dialogs';
import { Dropdowns } from './components/dropdowns';
import { Icons } from './components/icons';
import { Links } from './components/links';
import { ModalPages } from './components/modalPages';
import { MultiSelects } from './components/multiSelects';
import { Panels } from './components/panels';
import { Popovers } from './components/popovers';
import { RadioButtons } from './components/radioButtons';
import { Selects } from './components/selects';
import { Switchers } from './components/switchers';
import { TabsExample } from './components/tabs';
import { TextAreas } from './components/textAreas';
import { TextFields } from './components/textFields';
import { Toggles } from './components/toggles';
import { Tooltips } from './components/tooltips';

const components = [
  Colors,
  Buttons,
  ButtonGroups,
  Links,
  Panels,
  TabsExample,
  TextFields,
  Dialogs,
  ModalPages,
  Dropdowns,
  TextAreas,
  Popovers,
  Switchers,
  Checkboxes,
  Accordions,
  RadioButtons,
  Toggles,
  Tooltips,
  Badges,
  Icons,
  Selects,
  MultiSelects,
].sort((a, b) => a.displayName.localeCompare(b.displayName));

const DEFAULT = 0;

export function UikitDemo() {
  const names = components.map(c => c.displayName);

  const [c, setC] = useState(names[DEFAULT]);

  const Component = components.find(component => component.displayName === c);

  return (
    <div className="uikit-page">
      <section>
        <header>
          <span className="text-xl logo">UI_KIT</span>
        </header>

        <section className="tools">
          <ButtonGroup>
            <Button onClick={() => document.body.classList.toggle('schema-green')} type="primary" size="small">
              Schema
            </Button>

            <DarkModeButton />
          </ButtonGroup>
        </section>

        <nav>
          {names.map(name => (
            <Button
              key={name}
              className={classNames({ selected: name === c })}
              onClick={() => setC(name)}
              size="small"
              type="tertiaryNeutral"
            >
              {name}
            </Button>
          ))}
        </nav>
      </section>
      <main>{Component && <Component />}</main>
    </div>
  );
}
