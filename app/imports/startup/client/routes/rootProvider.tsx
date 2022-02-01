import React, { useState } from 'react';

const Empty = () => {
  return <div>Loading...</div>;
};

class Store {
  component: () => JSX.Element | null = () => null;

  invalidateState(_: any): void {}

  render(LayoutComponent: React.FunctionComponent, Component: React.FunctionComponent, props?: any) {
    const children = () => <Component {...props} />;

    // eslint-disable-next-line react/display-name
    this.component = () => <LayoutComponent>{children()}</LayoutComponent>;
    this.invalidate();
  }

  private invalidate(): void {
    this.invalidateState(Math.random() * 100000 + '_' + new Date().getTime());
  }
}

export const CurrentLayout = new Store();

export const RootProvider: React.FunctionComponent = () => {
  const [, invalidate] = useState();

  CurrentLayout.invalidateState = invalidate;

  return CurrentLayout.component() ?? <Empty />;
};

RootProvider.displayName = 'RootProvider';
