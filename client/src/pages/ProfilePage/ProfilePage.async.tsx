import { lazy } from 'react';

export const ProfilePageAsync = lazy(async () => ({ default: (await import('./ProfilePage')).ProfilePage }));
