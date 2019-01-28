import { interactor, isPresent, scoped } from '@bigtest/interactor';

@interactor
class AppInteractor {
  static defaultScope = 'app-root';

  hasHeading = isPresent('h1');
  hello = scoped('hello-world');
}

export default AppInteractor;
