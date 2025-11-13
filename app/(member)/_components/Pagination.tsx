import Link from 'next/link';
import styles from './Pagination.module.scss';

type Props = {
    currentPage: number;
    totalPages: number;
    basePath: string;
}

function Pagination({ currentPage, totalPages, basePath }: Props) {
  return (
    <div className={`flex gap-[0.5rem] ${styles.pagination}`}>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
          <Link
            key={page}
            href={`${basePath}?page=${page}`}
            className={`${styles.paginationLink} ${currentPage === page ? styles.isCurrent : ''}`}
          >
            {page}
          </Link>
        ))}
      </div>
  )
}

export default Pagination
