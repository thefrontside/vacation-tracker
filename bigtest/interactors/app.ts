import {
  clickable,
  collection,
  interactor,
  isPresent,
  text,
} from '@bigtest/interactor';

@interactor
class AppInteractor {
  static defaultScope = 'app-root';

  hasHeading = isPresent('h1');
}

export default AppInteractor;
