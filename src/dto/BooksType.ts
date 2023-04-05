export interface BooksI {
  id: number;
  image_url: string | null;
  release_date: string;
  title: string;
}

export interface FetchedBooksI {
  books: BooksI[] | undefined;
  isLoading: boolean;
  error: Error | undefined;
}
