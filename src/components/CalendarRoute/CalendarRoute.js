import React, { Component } from 'react';
import moment from 'moment';

import { addOffset } from '../../utils';
import Calendar from '../Calendar';

class CalendarRoute extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);

    this.state = {
      requests: []
    };
  }

  componentDidMount() {
    this._isMounted = true;

    fetch('https://api.frontside.io/v1/requests')
      .then(res => res.json())
      .then(data => {
        let requests = data.requests.map(req => ({
          ...req,
          startDate: addOffset(req.startDate),
          endDate: addOffset(req.endDate)
        }));
        if (this._isMounted) {
          this.setState({ requests });
        }
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  get date() {
    let { date } = this.props;
    let newDate = date ? moment(date, 'MM-DD-YYYY') : moment();
    return newDate.toDate();
  }

  get events() {
    let { requests } = this.state;

    return requests.map(event => ({
      title: event.owner,
      start: event.startDate,
      end: event.endDate
    }));
  }

  onNavigate = (date) => {
    let formattedDate = moment(date).format('MM-DD-YYYY');
    this.props.navigate(`/calendar/${formattedDate}`)
  }

  render() { 
    return (
      <div data-test-calendar-route>
        <h6>
          Calendar
        </h6>
        <br />
        <Calendar
          events={this.events}
          date={this.date}
          onNavigate={this.onNavigate}
        />
      </div>
    );
  }
}

export default CalendarRoute;