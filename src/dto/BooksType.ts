export interface BooksType {
  id: number;
  image_url: string | null;
  release_date: string;
  title: string;
}

export interface FetchedBooksType {
  books: BooksType[];
  isLoading: boolean;
  isError: Error;
}
