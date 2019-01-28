import { interactor, isPresent, clickable, text } from '@bigtest/interactor';

@interactor
class AppInteractor {
  static defaultScope = 'app-root';

  hasHeading = isPresent('h1');
  messageIsPresent = isPresent('[data-test-message]');
  clickToggleButton = clickable('[data-test-toggle-button]');

  helloWorldText = text('hello-world')
}

export default AppInteractor;
