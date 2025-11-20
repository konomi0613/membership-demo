"use client"
import { useRouter, useSearchParams } from 'next/navigation';
import styles from './SearchField.module.scss'
import { Suspense } from 'react';

function SearchFieldComponent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const handleSubmit = ( e: React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        const q = e.currentTarget.elements.namedItem("q");
        if( q instanceof HTMLInputElement ) {
            const params = new URLSearchParams();
            params.set("q", q.value.trim());
            router.push(`/courses/search?${params.toString()}`)
        }
    }
    
  return (
    <form className={styles.searchContainer}
    onSubmit={handleSubmit}>
    <label className={styles.searchWrapper}>
        <input
        type="text"
        id="category-search"
        className="form-control"
        placeholder="コースを検索..."
        name="q"
        defaultValue={searchParams.get("q") ?? undefined}
        />
        <span className={styles.searchIcon}>🔍</span>
    </label>
    </form>
  )
}

export default function SearchField() {
  return(
    <Suspense >
      <SearchFieldComponent />
    </Suspense>
  )
}
