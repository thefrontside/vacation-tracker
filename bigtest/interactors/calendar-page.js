import { interactor, isPresent, text, collection, clickable } from '@bigtest/interactor';

@interactor class Calendar {
  headingText = text('.rbc-toolbar-label');

  toolbarButtons = collection('.rbc-toolbar button', {
    clickButton: clickable()
  });

  clickNext() { 
    return this.toolbarButtons(2).clickButton();
  }

  events = collection('button.rbc-event', {
    text: text('.rbc-event-content')
  });
}

@interactor class CalendarPage {
  hasHeading = isPresent('h6');
  headingText = text('h6');

  calendar = new Calendar('[data-test-calendar]');
}

export default new CalendarPage('[data-test-calendar-route]');
