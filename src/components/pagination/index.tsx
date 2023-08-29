import ReactPaginate from 'react-paginate'

import styles from './styles.module.scss'

type PaginationProps = {
  totalItemsCount: number
  onPageChange: (selectedItem: { selected: number }) => void
  rangeDisplay?: number
}

export default function Pagination({
  totalItemsCount,
  onPageChange,
  rangeDisplay = 10,
}: PaginationProps) {
  return (
    <div className={styles['pagination-wrapper']}>
      <ReactPaginate
        className={styles['pagination-container']}
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        pageRangeDisplayed={rangeDisplay}
        pageCount={totalItemsCount / rangeDisplay}
        onPageChange={onPageChange}
      />
    </div>
  )
}
