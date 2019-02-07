import {
  interactor,
  isPresent,
  text
} from '@bigtest/interactor';

@interactor
class DetailPage {
  static defaultScope = '[data-test-detail-route]';

  hasHeading = isPresent('h6');
  headingText = text('h6');
}

export default DetailPage;
