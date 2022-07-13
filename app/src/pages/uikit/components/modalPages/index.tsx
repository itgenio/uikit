import './style.less';
import React, { Fragment, FunctionComponent } from 'react';
import {
  ModalExampleAsBlockWithFooter,
  ModalExampleDefault,
  ModalExampleDefaultAsBlock,
  ModalExampleWithContentInPortal,
  ModalExampleWithLazyLoadedContent,
} from './examples';

const EXAMPLES: { name: string; Modal: FunctionComponent }[] = [
  { name: 'Default', Modal: ModalExampleDefault },
  { name: 'Default as block', Modal: ModalExampleDefaultAsBlock },
  { name: 'As block with footer', Modal: ModalExampleAsBlockWithFooter },
  { name: 'With content in portal', Modal: ModalExampleWithContentInPortal },
  { name: 'With lazy loaded content', Modal: ModalExampleWithLazyLoadedContent },
];

export function ModalPages() {
  return (
    <div className="modalPages bg-neutral-50">
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

ModalPages.displayName = 'ModalPages';
