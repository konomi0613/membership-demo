export type SlugPageProps = {
    params: Promise<{
        slug: string, 
        id: string,
     }>
}

export type ListPageProps = {
  searchParams: Promise<{
    page?: string,
    id: string,
 }>
}