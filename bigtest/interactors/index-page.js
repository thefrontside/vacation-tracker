import {
  collection,
  interactor,
  isPresent,
  scoped,
  text
} from '@bigtest/interactor';

const testId = str => `[data-test-id="${str}"]`;

@interactor class IndexPage {
  hasHeading = isPresent(testId('index-header'));
  headingText = text(testId('index-header'));

  requestList = collection(testId('request-list-item'), {
    ownerName: text(testId('owner-name')),
    status: scoped(testId('status'), {
      label: text('label'),
      text: text(testId('value'))
    }),
    startDate: scoped(testId('start-date'), {
      label: text('label'),
      text: text(testId('value'))
    }),
    endDate: scoped(testId('end-date'), {
      label: text('label'),
      text: text(testId('value'))
    })
  });
}

export default new IndexPage(testId('index-route'));
