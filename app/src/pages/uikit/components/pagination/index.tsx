import './style.less';

import React, { Fragment, useState } from 'react';
import { Pagination, PaginationProps } from '@itgenio/gkit/pagination';

const DEFAULT_PROPS = { currentPage: 1, itemsPerPage: 2, totalItemsCount: 10 };

type WrapperProps = Omit<PaginationProps, 'onPageChanged'>;

const PaginationWrapper = (props: WrapperProps) => {
  const [page, setPage] = useState(props.currentPage);

  return <Pagination {...props} currentPage={page} onPageChanged={setPage} />;
};

export function Paginations() {
  const states: { state: string; props: WrapperProps }[] = [
    { state: 'default, 5 pages', props: { ...DEFAULT_PROPS } },
    { state: 'default, 10 pages', props: { ...DEFAULT_PROPS, totalItemsCount: 20 } },
    { state: 'loading', props: { ...DEFAULT_PROPS, isLoading: true } },
  ];

  return (
    <div className="paginations">
      {states.map(({ state, props }, index) => {
        return (
          <Fragment key={state}>
            <div className="pagination-state">
              <div>{state}</div>

              <PaginationWrapper key={`pagination-${index}`} {...props} />
            </div>

            {index < states.length - 1 && <hr />}
          </Fragment>
        );
      })}
    </div>
  );
}

Paginations.displayName = 'Paginations';
