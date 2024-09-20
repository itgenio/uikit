import './style.less';

import React, { Fragment, useState } from 'react';
import { Pagination, PaginationProps } from '@itgenio/gkit/pagination';

const DEFAULT_PROPS = { currentPage: 1, itemsPerPage: 2, totalItemsCount: 10 };

const PaginationWrapper = (props: PaginationProps) => {
  const [page, setPage] = useState(props.currentPage);

  const onPageChanged = (page: number) => {
    setPage(page);

    props.onPageChanged(page);
  };

  return <Pagination {...props} currentPage={page} onPageChanged={onPageChanged} />;
};

export function Paginations() {
  const states: { state: string; props: Omit<PaginationProps, 'onPageChanged'> }[] = [
    { state: 'default', props: { ...DEFAULT_PROPS } },
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
