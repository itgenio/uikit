import './style.less';
import React from 'react';
import { PopoverRoot, PopoverTrigger, PopoverContent, TextField, Toggle, Button } from '@itgenio/gkit';

export function Popovers() {
  return (
    <div className="popover">
      <PopoverRoot onOpenChange={(open: boolean) => console.log(open)}>
        <PopoverTrigger>
          <Button className="trigger-button" type="neutral" size="small">
            Click
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <TextField className="popover-textField" placeholder="Денис" label="Имя" />
          <TextField placeholder="Смирнов" label="Фамилия" />
          <div className="popover-button-container popover-container-button">
            <Button className="popover-button">Сохранить</Button>
            <Button type="neutral">Отменить</Button>
          </div>
        </PopoverContent>
      </PopoverRoot>

      <PopoverRoot open>
        <PopoverTrigger>
          <Button className="trigger-button" type="neutral" size="small">
            Popover open
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="popover-header">Заголовок</div>
          <div className="popover-text">
            Popover используется для позиционирования элементов, привязанных к координате или якорю.
          </div>
          <div className="popover-button-container">
            <Button className="popover-button">Сохранить</Button>
            <Button type="neutral">Пропустить</Button>
          </div>
        </PopoverContent>
      </PopoverRoot>

      <PopoverRoot open>
        <PopoverTrigger />
        <PopoverContent>
          <div className="popover-header">Проверка связи</div>
          <div className="popover-text">
            Popover используется для позиционирования элементов, привязанных к координате или якорю.
          </div>
          <div className="popover-separator" />
          <Toggle checked onChange={() => console.log('click on toggle')}>
            Шумоподавление
          </Toggle>
          <div className="popover-text">Приглушает посторонние звуки, слышен только ваш голос</div>
        </PopoverContent>
      </PopoverRoot>
    </div>
  );
}

Popovers.displayName = 'Popovers';
