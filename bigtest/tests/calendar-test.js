import { expect } from 'chai';
import { beforeEach, describe, it } from '@bigtest/mocha';
import { describeApp } from '../helpers/setup-app';

import CalendarPage from '../interactors/calendar-page.js';

describeApp('Calendar', () => {
  describe('without specific date', () => {
    beforeEach(function() {
      return this.visit('/calendar');
    });

    it('has a heading', () => {
      expect(CalendarPage.hasHeading).to.equal(true);
      expect(CalendarPage.headingText).to.equal('Calendar');
    });

    it('renders the calendar', () => {
      expect(CalendarPage.calendar.isPresent).to.be.true;
    });
  });

  describe('navigating to a specific date', () => {
    beforeEach(function() {
      this.server.create('request', {
        owner: 'Bartholomew',
        status: 'Approved',
        startDate: '2020-02-14T00:00:00.000Z',
        endDate: '2020-02-14T23:59:59.999Z'
      });

      return this.visit('/calendar/02-01-2020');
    });

    it('shows the month view of the intended date', () => {
      expect(CalendarPage.calendar.headingText).to.equal('February 2020');
    });

    it('shows events passed in correctly', () => {
      expect(CalendarPage.calendar.events(0).text).to.equal('Bartholomew');
    });

    describe('navigating with the toolbar', () => {
      beforeEach(() => {
        return CalendarPage.calendar.clickNext();
      });

      it('shows the next month view correctly', () => {
        expect(CalendarPage.calendar.headingText).to.equal('March 2020');
      });
    });
  });
});

