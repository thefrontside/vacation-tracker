import { interactor, isPresent, clickable, text, collection } from '@bigtest/interactor';

@interactor
class AppInteractor {
  static defaultScope = 'app-root';

  hasHeading = isPresent('h1');
  messageIsPresent = isPresent('[data-test-message]');
  clickToggleButton = clickable('[data-test-toggle-button]');

  helloWorldText = text('hello-world');

  productList = collection('[data-test-product]');

  isProductsListPresent = isPresent('[data-test-products-list]');
}

export default AppInteractor;
