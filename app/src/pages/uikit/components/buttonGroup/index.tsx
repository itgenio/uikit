import './style.less';
import React from 'react';
import { Button, ButtonGroup } from '@itgenio/gkit';

const Svg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path
      d="M6.5 0.75C6.5 0.335786 6.16421 0 5.75 0C5.33579 0 5 0.335786 5 0.75V5H0.75C0.335786 5 0 5.33579 0 5.75C0 6.16421 0.335786 6.5 0.75 6.5H5V10.75C5 11.1642 5.33579 11.5 5.75 11.5C6.16421 11.5 6.5 11.1642 6.5 10.75V6.5H10.75C11.1642 6.5 11.5 6.16421 11.5 5.75C11.5 5.33579 11.1642 5 10.75 5H6.5V0.75Z"
      fill="currentColor"
    />
  </svg>
);

export function ButtonGroups() {
  return (
    <div className="button-groups">
      <div>
        <label>1 button</label>
        <ButtonGroup>
          <Button>1</Button>
        </ButtonGroup>
      </div>
      <div>
        <label>2 buttons</label>
        <ButtonGroup>
          <Button>1</Button>
          <Button>2</Button>
        </ButtonGroup>
      </div>
      <div>
        <label>3 buttons</label>
        <ButtonGroup size="small">
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button type="secondary">1</Button>
          <Button type="secondary">2</Button>
          <Button type="secondary">3</Button>
        </ButtonGroup>
        <ButtonGroup size="large">
          <Button type="danger">1</Button>
          <Button type="danger">2</Button>
          <Button type="danger">3</Button>
        </ButtonGroup>
      </div>
      <div>
        <label>Buttons different(denied!)</label>
        <ButtonGroup>
          <Button type="neutral">0</Button>
          <Button type="secondary">1</Button>
          <Button>2</Button>
          <Button type="danger">3</Button>
          <Button type="neutral">4</Button>
        </ButtonGroup>
      </div>
      <div>
        <label>3 buttons with borders</label>
        <ButtonGroup>
          <Button type="neutral">1</Button>
          <Button type="neutral" asIcon disabled>
            <Svg />
          </Button>
          <Button type="neutral">3</Button>
        </ButtonGroup>
      </div>
      <div>
        <label>Set type and size for group</label>
        <ButtonGroup size="large" type="neutral">
          <Button size="small" type="neutral">
            0
          </Button>
          <Button size="large" type="secondary">
            1
          </Button>
          <Button>2</Button>
          <Button type="danger">3</Button>
          <Button type="neutral">4</Button>
        </ButtonGroup>
      </div>
    </div>
  );
}

ButtonGroups.displayName = 'ButtonGroups';
