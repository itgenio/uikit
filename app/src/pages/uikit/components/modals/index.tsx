import './style.less';

import React, { Fragment, FunctionComponent } from 'react';
import {
  ModalExampleAsBlockWithFooter,
  ModalExampleDefault,
  ModalExampleDefaultAsBlock,
  ModalExampleDefaultFullScreen,
  ModalExampleWithContentInPortal,
  ModalExampleWithLazyLoadedContent,
} from './examples';

const EXAMPLES: { name: string; Modal: FunctionComponent }[] = [
  { name: 'Default as block', Modal: ModalExampleDefaultAsBlock },
  { name: 'As block with footer', Modal: ModalExampleAsBlockWithFooter },
  { name: 'Default', Modal: ModalExampleDefault },
  { name: 'Full screen', Modal: ModalExampleDefaultFullScreen },
  { name: 'With content in portal', Modal: ModalExampleWithContentInPortal },
  { name: 'With lazy loaded content', Modal: ModalExampleWithLazyLoadedContent },
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
