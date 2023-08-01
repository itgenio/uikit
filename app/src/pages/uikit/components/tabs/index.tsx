import './style.less';
import React, { useState } from 'react';
import { Tab, Tabs } from '@itgenio/gkit/tabs';

const tabs = ['menu', 'item 2'];

export function TabsExample() {
  const [t, setT] = useState(tabs[0]);

  return (
    <div className="tabs">
      <section className="bg-neutral-0">
        <Tabs value={t} onChange={newVal => setT(newVal)}>
          {tabs.map(tab => (
            <Tab key={tab} value={tab} idQa={tab}>
              {tab}
            </Tab>
          ))}
        </Tabs>
      </section>

      <section className="bg-neutral-100">
        <Tabs value={t} onChange={newVal => setT(newVal)}>
          {tabs.map(tab => (
            <Tab key={tab} value={tab} idQa={tab}>
              {tab}
            </Tab>
          ))}
        </Tabs>
      </section>

      <div className="dark-mode">
        <section className="bg-neutral-100">
          <Tabs value={t} onChange={newVal => setT(newVal)}>
            {tabs.map(tab => (
              <Tab key={tab} value={tab} idQa={tab}>
                {tab}
              </Tab>
            ))}
          </Tabs>
        </section>
      </div>

      <section className="bg-neutral-0">
        <Tabs isChips value={t} onChange={newVal => setT(newVal)}>
          {tabs.map(tab => (
            <Tab isChips key={tab} value={tab} idQa={tab}>
              {tab}
            </Tab>
          ))}
        </Tabs>
      </section>

      <section className="bg-neutral-0">
        <Tabs isChips size="small" value={t} onChange={newVal => setT(newVal)}>
          {tabs.map(tab => (
            <Tab size="small" isChips key={tab} value={tab} idQa={tab}>
              {tab}
            </Tab>
          ))}
        </Tabs>
      </section>
    </div>
  );
}

TabsExample.displayName = 'Tabs';
