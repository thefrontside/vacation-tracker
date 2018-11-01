import { setupAppForTesting } from '@bigtest/react';

import App from '../../src/app.js';

export async function setupApplicationForTesting() {
  await setupAppForTesting(App, {
    mountId: 'bigtesting-container'
  });
}
