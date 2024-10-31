import './style.less';
import classNames from 'classnames';
import React, { useLayoutEffect, useState } from 'react';
import { Button, ButtonGroup } from '@itgenio/gkit/button';
import { DarkModeButton } from '../../components/darkModeButton';
import { Accordions } from './components/accordions';
import { Backdrops } from './components/backdrops';
import { Badges } from './components/badges';
import { ButtonGroups } from './components/buttonGroup';
import { Buttons } from './components/buttons';
import { Carousels } from './components/carousel';
import { Checkboxes } from './components/checkboxes';
import { Colors } from './components/colors';
import { Dropdowns } from './components/dropdowns';
import { Emojis } from './components/emojis';
import { Icons } from './components/icons';
import { InlineNotifications } from './components/inlineNotifications';
import { Links } from './components/links';
import { Loaders } from './components/loaders';
import { Modals } from './components/modals';
import { MultiSelects } from './components/multiSelects';
import { Paginations } from './components/pagination';
import { Panels } from './components/panels';
import { Popovers } from './components/popovers';
import { ProgressBars } from './components/progressBars';
import { RadioButtons } from './components/radioButtons';
import { Selects } from './components/selects';
import { Sliders } from './components/sliders';
import { Switchers } from './components/switchers';
import { TabsExample } from './components/tabs';
import { TextAreas } from './components/textAreas';
import { TextFields } from './components/textFields';
import { ToastNotifications } from './components/toastNotifications';
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
  Modals,
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
  Emojis,
  InlineNotifications,
  ToastNotifications,
  ProgressBars,
  Carousels,
  Loaders,
  Sliders,
  Paginations,
  Backdrops,
].sort((a, b) => a.displayName.localeCompare(b.displayName));

const DEFAULT = 0;

const SCHEMAS = ['blue', 'green'] as const;

export function UikitDemo() {
  const names = components.map(c => c.displayName);

  const [c, setC] = useState(names[DEFAULT]);
  const [schemaIndex, setSchemaIndex] = useState(0);

  const Component = components.find(component => component.displayName === c);

  useLayoutEffect(() => {
    const schema = SCHEMAS[schemaIndex];
    const schemaClass = `schema-${schema}`;

    document.body.classList.add(schemaClass);

    return () => {
      document.body.classList.remove(schemaClass);
    };
  }, [schemaIndex]);

  return (
    <div className="uikit-page">
      <section>
        <header>
          <span className="text-xl logo">UI_KIT</span>
        </header>

        <section className="tools">
          <ButtonGroup>
            <Button
              onClick={() => setSchemaIndex(currentIndex => (currentIndex < SCHEMAS.length - 1 ? currentIndex + 1 : 0))}
              type="primary"
              size="small"
            >
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
