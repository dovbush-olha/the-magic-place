import { lazy } from 'react';

export const AuthPageAsync = lazy(async () => ({ default: (await import('./AuthPage')).AuthPage }));
