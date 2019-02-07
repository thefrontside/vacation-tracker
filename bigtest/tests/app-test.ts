import AppInteractor from '../interactors/app';
import { when } from '@bigtest/convergence';
import { setupApp } from '../helpers/setup-app';
import { AppModule } from '../../src/app/app.module';
import * as expect from 'expect';

describe('AppComponent', () => {
  const app = new AppInteractor();

  setupApp(AppModule);

  it('has a heading', when(() => {
    expect(app.hasHeading).toBe(true);
  }));
});
