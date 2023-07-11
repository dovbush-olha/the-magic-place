import { ErrorBoundary } from 'react-error-boundary';
import { ErrorBoundaryProps } from './types/types';
import { ErrorFallback } from './ErrorFallback';

export function ErrorBoundaryComponent({ children }: ErrorBoundaryProps) {
  return <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>;
}

export default ErrorBoundaryComponent;
