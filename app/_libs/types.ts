export type SlugPageProps = {
    params: Promise<{
        slug: string, 
        id: string,
     }>
     searchParams: {
      dk?: string;
      q?: string;
     }
}

export type ListPageProps = {
  searchParams: Promise<{
    page?: string,
    id: string,
 }>
}