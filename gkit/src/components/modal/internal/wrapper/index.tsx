import './style.less';

import FocusTrap from 'focus-trap-react';
import React, { useEffect, useState } from 'react';
import { ModalProps } from '../..';

const MODAL_WRAPPER_CN = 'modal-wrapper';

type Props = Pick<ModalProps, 'children'>;

const observerConfig = {
  attributes: true,
  attributeFilter: ['data-state'],
  subtree: true,
  characterData: true,
};

export const ModalWrapperInternal = React.memo(({ children }: Props) => {
  const [node, setNode] = useState<HTMLDivElement>(null);
  const [isPaused, setPaused] = useState(false);

  useEffect(() => {
    if (!node) return;

    const modalContent = node.querySelector('.modal-content');

    if (!modalContent) return;

    const observer = new MutationObserver(mutations => {
      const filteredMutations = mutations.filter(m => {
        return (m.target as HTMLElement).className.includes('gkit-select');
      });

      if (filteredMutations.length === 0) return;

      const needPaused = filteredMutations.some(m => (m.target as HTMLElement).getAttribute('data-state') === 'open');

      //Приостанавливаем для корректной работы элементов dropdown в select
      setPaused(needPaused);
    });

    observer.observe(modalContent, observerConfig);

    return () => observer.disconnect();
  }, [node]);

  return (
    // При динамической загрузке у FocusTrap'a нет tabbable elements, поэтому нужно передать селектор в fallbackFocus
    <FocusTrap paused={isPaused} focusTrapOptions={{ allowOutsideClick: true, fallbackFocus: `.${MODAL_WRAPPER_CN}` }}>
      <div
        ref={node => {
          if (node) {
            setNode(node);
          }
        }}
        className={MODAL_WRAPPER_CN}
      >
        {children}
      </div>
    </FocusTrap>
  );
});

ModalWrapperInternal.displayName = 'ModalWrapperInternal';
