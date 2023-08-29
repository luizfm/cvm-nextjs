import ReactPaginate from 'react-paginate'
import classnames from 'classnames'
import { useCallback } from 'react'

import styles from './styles.module.scss'

const PAGINATE_STYLES = {
  previousClassName: styles.previous,
  previousLinkClassName: styles['previous-link'],
  nextClassName: styles.next,
  nextLinkClassName: styles['next-link'],
  activeClassName: styles.active,
  pageClassName: styles.page,
  pageLinkClassName: styles['page-link'],
  disabledClassName: styles.disabled,
}

type PageProps = {
  selected: number
}

export type PagechangeProps = {
  pageNumber: number
}

type PaginationProps = {
  totalItemsCount: number
  itemsPerPage: number
  onPageChange: (pageNumber: number) => void
  rangeDisplay?: number
  className?: string
}

export default function Pagination({
  totalItemsCount,
  itemsPerPage,
  onPageChange,
  rangeDisplay = 5,
  className,
}: PaginationProps) {
  const handlePageChange = useCallback(
    ({ selected }: PageProps) => {
      onPageChange(selected + 1)
    },
    [onPageChange],
  )

  const pageCount = Math.ceil(totalItemsCount / itemsPerPage)

  const formattedPageCount = isNaN(pageCount) ? 0 : pageCount

  return (
    <div className={classnames(styles['pagination-wrapper'], className)}>
      <ReactPaginate
        className={styles['pagination-container']}
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        pageRangeDisplayed={rangeDisplay}
        pageCount={formattedPageCount}
        onPageChange={handlePageChange}
        {...PAGINATE_STYLES}
      />
    </div>
  )
}
