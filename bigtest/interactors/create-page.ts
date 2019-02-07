import {
  interactor,
  isPresent,
  text
} from '@bigtest/interactor';

@interactor
class CreatePage {
  static defaultScope = '[data-test-create-route]';

  hasHeading = isPresent('h6');
  headingText = text('h6');
}

export default CreatePage;
