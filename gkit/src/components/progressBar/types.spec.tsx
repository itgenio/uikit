import React, { Fragment } from 'react';
import { ProgressBarCustomCheckpointElementProps, ProgressBar } from '.';

const Component1 = (props: ProgressBarCustomCheckpointElementProps<{ id: string }>) => {
  return <Fragment>{props}</Fragment>;
};

const Component2 = (props: ProgressBarCustomCheckpointElementProps<{ id: number; title?: string }>) => {
  return <Fragment>{props}</Fragment>;
};

//#region Один чекпоинт
ProgressBar({
  // @ts-expect-error Не переданы обязательные пропсы, ошибка
  checkpoints: [{ CheckpointComponent: Component2, CheckpointComponentProps: {} }],
});

ProgressBar({
  // Все обязательные пропсы переданы, ошибки нет
  checkpoints: [{ CheckpointComponent: Component2, CheckpointComponentProps: { id: 1 } }],
});

ProgressBar({
  // @ts-expect-error Обязательные пропсы переданы, но не правильного типа, ошибка
  checkpoints: [{ CheckpointComponent: Component2, CheckpointComponentProps: { id: '1' } }],
});

ProgressBar({
  // @ts-expect-error Передан только опциональный пропс, ошибка
  checkpoints: [{ CheckpointComponent: Component2, CheckpointComponentProps: { title: '1' } }],
});
//#endregion

//#region Несколько чекпоинтов
ProgressBar({
  checkpoints: [
    // @ts-expect-error qwe должен быть строкой, ошибка
    { CheckpointComponent: Component1, CheckpointComponentProps: { id: 1 } },
    // @ts-expect-error qwe должен быть числом, ошибка
    { CheckpointComponent: Component2, CheckpointComponentProps: { id: '1', title: 'qwe' } },
  ],
});

ProgressBar({
  checkpoints: [
    // Передан null, ошибки нет
    { CheckpointComponent: null },
    // Все пропсы соответствуют типам, ошибки нет
    { CheckpointComponent: Component2, CheckpointComponentProps: { id: 1, title: 'qwe' } },
  ],
});
//#endregion
