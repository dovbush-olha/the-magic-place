import { lazy } from 'react';

export const HousesPageAsync = lazy(async () => ({ default: (await import('./HousesPage')).HousesPage }));
