import { lazy } from 'react';

export const ResearchPageAsync = lazy(async () => ({ default: (await import('./ResearchPage')).ResearchPage }));
