import React from 'react';
import ReactDOM from 'react-dom';
import { MainLayout } from '../../../ui/containers/main';
import { CurrentLayout, RootProvider } from './rootProvider';

const log = (...msg: any[]) => console.log(...msg);

const getReactRoot = () => {
  const NAME = 'dynamic-react';

  let root = document.getElementById(NAME);

  if (!root) {
    root = document.createElement('div');
    root.id = NAME;

    document.body.appendChild(root);
  }

  return root!;
};

export function createReactRootProvider() {
  const root = getReactRoot();

  const rootProvider = React.createElement(RootProvider, null, null);

  ReactDOM.render(rootProvider, root);

  log(`createReactRootProvider rendered`);
}

function renderReactPage(layout: any, component: any, props?: any) {
  log(`render in layout '${layout.displayName}' component '${component.displayName ?? component.name}'`);
  CurrentLayout.render(layout, component, props);
}

export function renderInMainLayout<TProps, TComp extends React.FunctionComponent<TProps>>(
  component: TComp,
  props?: TProps
) {
  return renderReactPage(MainLayout, component, props);
}
