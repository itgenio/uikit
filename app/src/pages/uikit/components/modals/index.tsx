import './style.less';

import React, { Fragment, FunctionComponent } from 'react';
import {
  ModalExampleAsBlockFullScreen,
  ModalExampleAsBlockWithFooter,
  ModalExampleDefault,
  ModalExampleDefaultAsBlock,
  ModalExampleDefaultFullScreen,
  ModalExampleDefaultWideScreen,
  ModalExampleIgnoreClickOverlay,
  ModalExampleWithContentInPortal,
  ModalExampleWithLazyLoadedContent,
  ModalExampleWithSelect,
} from './examples';

const EXAMPLES: { name: string; Modal: FunctionComponent }[] = [
  { name: 'Default', Modal: ModalExampleDefault },
  { name: 'Ignore click on overlay', Modal: ModalExampleIgnoreClickOverlay },
  { name: 'Full screen', Modal: ModalExampleDefaultFullScreen },
  { name: 'Wide screen', Modal: ModalExampleDefaultWideScreen },
  { name: 'With content in portal', Modal: ModalExampleWithContentInPortal },
  { name: 'With lazy loaded content', Modal: ModalExampleWithLazyLoadedContent },
  { name: 'With select, multiselect', Modal: ModalExampleWithSelect },
  { name: 'Default as block', Modal: ModalExampleDefaultAsBlock },
  { name: 'As block with footer', Modal: ModalExampleAsBlockWithFooter },
  { name: 'As block full screen', Modal: ModalExampleAsBlockFullScreen },
];

export function Modals() {
  return (
    <div className="modals">
      <div className="grid">
        {EXAMPLES.map(({ name, Modal }, index) => {
          return (
            <Fragment key={index}>
              {name}

              <Modal />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

Modals.displayName = 'Modals';
