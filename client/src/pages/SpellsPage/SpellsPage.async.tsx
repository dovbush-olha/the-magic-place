import { lazy } from 'react';

export const SpellsPageAsync = lazy(async () => ({ default: (await import('./SpellsPage')).SpellsPage }));
