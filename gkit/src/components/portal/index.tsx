import { PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';

type Props = PropsWithChildren<{ container?: Element }>;

export const Portal = ({ container = document.body, children }: Props) => {
  return ReactDOM.createPortal(children, container);
};
