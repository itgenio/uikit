import './style.less';
import React, { useState } from 'react';
import {
  Button,
  ModalPage,
  ModalPageBody,
  ModalPageFooter,
  ModalPageHeader,
  ModalPageText,
  ModalPageTitle,
} from '@itgenio/gkit';

export function ModalPages() {
  const [open, setOpen] = useState(false);

  return (
    <div className="modalPages bg-neutral-50">
      <div className="grid">
        <ModalPage asBlock idQa="custom-modal-id-qa">
          <ModalPageHeader idQa="modal-header">
            <ModalPageTitle title="ModalPage with footer" idQa="modal-title" />
          </ModalPageHeader>

          <ModalPageFooter idQa="modal-footer">
            <div className="flex gap-4 items-start">
              <Button type="secondary">Ok</Button>

              <Button type="danger">Not OK</Button>
            </div>
          </ModalPageFooter>
        </ModalPage>

        <ModalPage asBlock>
          <ModalPageHeader>
            <ModalPageTitle title="ModalPage with body and footer" />
          </ModalPageHeader>

          <ModalPageBody>
            <ModalPageText>Какой-то длинный текст не помещается на всю ширину строки!</ModalPageText>
          </ModalPageBody>
        </ModalPage>
      </div>

      <div>
        <Button onClick={() => setOpen(o => !o)}>Open</Button>

        <ModalPage open={open} onClose={() => setOpen(false)}>
          <ModalPageHeader>
            <ModalPageTitle title="Complex" />
          </ModalPageHeader>

          <ModalPageBody>
            <ModalPageText>Какой-то длинный текст</ModalPageText>
          </ModalPageBody>

          <ModalPageFooter>
            <div className="flex gap-4 items-start">
              <Button type="secondary">Ok</Button>

              <Button type="danger">Not OK</Button>
            </div>
          </ModalPageFooter>
        </ModalPage>
      </div>
    </div>
  );
}

ModalPages.displayName = 'ModalPages';
