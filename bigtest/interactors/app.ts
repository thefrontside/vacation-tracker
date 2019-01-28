import { interactor, isPresent, scoped, text } from '@bigtest/interactor';

@interactor
class AppInteractor {
  static defaultScope = 'app-root';

  hasHeading = isPresent('h1');
  helloWorldText = text('hello-world')
}

export default AppInteractor;
