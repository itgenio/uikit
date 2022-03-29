import './style.less';
import React from 'react';
import {
  PopoverRoot,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverText,
  PopoverInput,
  PopoverButtonContainer,
  PopoverButton,
  PopoverSeparator,
  Toggle,
} from '@itgenio/gkit';

export function Popovers() {
  return (
    <div className="popover">
      <PopoverRoot open>
        <PopoverTrigger />
        <PopoverContent>
          <PopoverInput placeholder="Денис">Имя</PopoverInput>
          <PopoverInput placeholder="Смирнов">Фамилия</PopoverInput>
          <PopoverButtonContainer>
            <PopoverButton>Сохранить</PopoverButton>
            <PopoverButton whiteBackground>Отменить</PopoverButton>
          </PopoverButtonContainer>
        </PopoverContent>
      </PopoverRoot>

      <PopoverRoot open>
        <PopoverTrigger />
        <PopoverContent>
          <PopoverHeader>Заголовок</PopoverHeader>
          <PopoverText>
            Поповер используется для позиционирования элементов, привязанных к координате или якорю.
          </PopoverText>
          <PopoverButtonContainer>
            <PopoverButton>Сохранить</PopoverButton>
            <PopoverButton whiteBackground>Пропустить</PopoverButton>
          </PopoverButtonContainer>
        </PopoverContent>
      </PopoverRoot>

      <PopoverRoot open>
        <PopoverTrigger />
        <PopoverContent>
          <PopoverHeader>Проверка связи</PopoverHeader>
          <PopoverText>
            Поповер используется для позиционирования элементов, привязанных к координате или якорю.
          </PopoverText>
          <PopoverSeparator />
          <Toggle checked>Шумоподавление</Toggle>
          <PopoverText>Приглушает посторонние звуки, слышен только ваш голос</PopoverText>
        </PopoverContent>
      </PopoverRoot>
    </div>
  );
}

Popovers.displayName = 'Popovers';
