export type ErrorBoundaryProps = {
  children: React.ReactNode;
};

export type ErrorFallbackProps = {
  error: Error;
  resetErrorBoundary: () => void;
};
