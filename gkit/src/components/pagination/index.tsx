import './style.less';

import classNames from 'classnames';
import React, { PropsWithChildren, useCallback, useMemo } from 'react';
import { ChevronLeftIcon } from '@itgenio/icons/chevronLeftIcon';
import { ChevronRightIcon } from '@itgenio/icons/chevronRightIcon';
import { Button } from '../button';

const MAX_PAGES_VIEW = 7;

export type PaginationProps = PropsWithChildren<{
  className?: string;
  currentPage: number;
  itemsPerPage: number;
  totalItemsCount: number;
  onPageChanged: (page: number) => void;
  isLoading?: boolean;
  idQa?: string;
}>;

export const Pagination = React.memo(
  ({
    className,
    isLoading,
    currentPage,
    itemsPerPage,
    totalItemsCount,
    onPageChanged,
    idQa,
    children,
  }: PaginationProps) => {
    const onPrevPageClicked = useCallback(() => onPageChanged(currentPage - 1), [onPageChanged, currentPage]);
    const onNextPageClicked = useCallback(() => onPageChanged(currentPage + 1), [onPageChanged, currentPage]);

    const totalPages = Math.ceil(totalItemsCount / itemsPerPage);

    const needEllipsis = totalPages > MAX_PAGES_VIEW;

    const hasStartEllipsis = needEllipsis && currentPage > MAX_PAGES_VIEW - 3;
    const hasEndEllipsis = needEllipsis && currentPage < totalPages - MAX_PAGES_VIEW + 4;

    const pagesArray = useMemo(() => [...new Array(totalPages)].map((_, i) => i + 1), [totalPages]);

    const renderItem = (pageIndex: number) => {
      return (
        <Button
          key={`page-index-${pageIndex}`}
          className={classNames('pagination-btn', 'page-index')}
          hover={currentPage === pageIndex}
          type="tertiaryNeutral"
          asIcon
          onClick={() => onPageChanged(pageIndex)}
          size="small"
          disabled={!!isLoading}
          idQa={classNames({ [`${idQa}-btn-page`]: !!idQa })}
          data-page={pageIndex}
        >
          {pageIndex}
        </Button>
      );
    };

    const getItems = (startIndex: number = 0, endIndex: number = totalPages) => {
      return pagesArray.slice(startIndex, endIndex).map(renderItem);
    };

    const renderPages = () => {
      if (!needEllipsis) {
        return pagesArray.map(renderItem);
      }

      if (hasStartEllipsis && !hasEndEllipsis) {
        return [...getItems(0, 1), <Ellipsis key="ellipsis-start" />, ...getItems(totalPages - (MAX_PAGES_VIEW - 2))];
      }

      if (!hasStartEllipsis && hasEndEllipsis) {
        return [...getItems(0, MAX_PAGES_VIEW - 2), <Ellipsis key="ellipsis-end" />, ...getItems(totalPages - 1)];
      }

      const pageCount = MAX_PAGES_VIEW - 4;

      return [
        ...getItems(0, 1),
        <Ellipsis key="ellipsis-start-both" />,
        ...getItems(currentPage - Math.floor(pageCount / 2) - 1, currentPage + pageCount - 2),
        <Ellipsis key="ellipsis-end-both" />,
        ...getItems(totalPages - 1),
      ];
    };

    return (
      <div className={classNames('gkit-pagination', className)} id-qa={classNames({ [idQa]: !!idQa })}>
        <div className="pagination-actions">
          <Button
            className="pagination-btn prev"
            onClick={onPrevPageClicked}
            type="secondary"
            size="small"
            asIcon
            disabled={currentPage <= 1 || !!isLoading}
            idQa={classNames({ [`${idQa}-btn-prev`]: !!idQa })}
          >
            <ChevronLeftIcon />
          </Button>

          {renderPages()}

          <Button
            className="pagination-btn next"
            onClick={onNextPageClicked}
            type="secondary"
            size="small"
            asIcon
            disabled={currentPage >= totalPages || !!isLoading}
            idQa={classNames({ [`${idQa}-btn-next`]: !!idQa })}
          >
            <ChevronRightIcon />
          </Button>
        </div>

        {children}
      </div>
    );
  }
);

Pagination.displayName = 'Pagination';

const Ellipsis = React.memo(() => {
  return <span className="pagination-ellipsis">...</span>;
});

Ellipsis.displayName = 'Ellipsis';
