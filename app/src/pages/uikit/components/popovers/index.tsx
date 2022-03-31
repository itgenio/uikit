import './style.less';
import React from 'react';
import {
  PopoverRoot,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverText,
  TextField,
  PopoverButtonContainer,
  PopoverSeparator,
  Toggle,
  Button,
} from '@itgenio/gkit';

export function Popovers() {
  return (
    <div className="popover">
      <PopoverRoot>
        <PopoverTrigger>
          <Button className="trigger-button" type="neutral" size="small">
            Click
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <TextField className="popover-textField" placeholder="Денис" label="Имя" />
          <TextField placeholder="Смирнов" label="Фамилия" />
          <PopoverButtonContainer className="popover-container-button">
            <Button className="popover-button">Сохранить</Button>
            <Button type="neutral">Отменить</Button>
          </PopoverButtonContainer>
        </PopoverContent>
      </PopoverRoot>

      <PopoverRoot open>
        <PopoverTrigger>
          <Button className="trigger-button" type="neutral" size="small">
            Popover open
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader>Заголовок</PopoverHeader>
          <PopoverText>
            Поповер используется для позиционирования элементов, привязанных к координате или якорю.
          </PopoverText>
          <PopoverButtonContainer>
            <Button className="popover-button">Сохранить</Button>
            <Button type="neutral">Пропустить</Button>
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
          <Toggle checked onChange={() => console.log('click on toggle')}>
            Шумоподавление
          </Toggle>
          <PopoverText>Приглушает посторонние звуки, слышен только ваш голос</PopoverText>
        </PopoverContent>
      </PopoverRoot>
    </div>
  );
}

Popovers.displayName = 'Popovers';
