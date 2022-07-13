import React, { FunctionComponent, useState } from 'react';
import { ModalPage, ModalPageHeader, ModalPageTitle, Button, ModalPageBody, ModalPageFooter } from '@itgenio/gkit';

const LazyContent = React.lazy(async () => {
  return await import('./content').then(components => {
    return new Promise<{ default: FunctionComponent }>(res => {
      setTimeout(() => res({ default: components.LazyContent }), 1000);
    });
  });
});

/**
 * Пример показывает, что модалка открывается при динамической загрузке контента внутри
 */
export const ModalExampleWithLazyLoadedContent = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Button onClick={() => setOpen(o => !o)}>Open</Button>

        <ModalPage open={open} onClose={() => setOpen(false)}>
          <ModalPageHeader>
            <ModalPageTitle title="Lazy loaded content" />
          </ModalPageHeader>

          <ModalPageBody>
            <LazyContent />
          </ModalPageBody>

          <ModalPageFooter idQa="modal-footer">
            <div style={{ display: 'flex' }}>
              <Button type="secondary">Ok</Button>

              <Button type="danger">Not OK</Button>
            </div>
          </ModalPageFooter>
        </ModalPage>
      </React.Suspense>
    </div>
  );
};
