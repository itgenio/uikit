import './index.css';
export * from './button';
export * from './tabs';
export * from './dialog';
export * from './link';
export * from './modalPage';
export * from './textArea';
export * from './textField';
export * from './select';
export * from './multiSelect';
export * from './popover';
export * from './switcher';
export * from './checkbox';
export * from './accordion';
export * from './radioButton';
export * from './toggle';
export * from './tooltip';
export * from './badge';
export * from './icons';


declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;

  export default content;
}