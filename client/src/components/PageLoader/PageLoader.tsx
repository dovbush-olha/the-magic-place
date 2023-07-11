import { PageLoaderProps } from './types/types';

export function PageLoader({ isLoading, children }: PageLoaderProps) {
  return isLoading ? <div>Loading...</div> : children;
}

export default PageLoader;
