import { ErrorFallbackProps } from './types/types';

export function ErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
  return (
    <>
      <div>Merlin&apos;s beard! Something went wrong...</div>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>Try again</button>
    </>
  );
}
