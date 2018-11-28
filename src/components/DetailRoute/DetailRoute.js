import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DetailRoute extends Component {
  static propTypes = {
    requestId: PropTypes.string.isRequired
  }; 

  constructor(props) {
    super(props);

    this.state = {
      request: {}
    };
  }

  componentDidMount() {
    fetch(`https://api.frontside.io/v1/requests/${this.props.requestId}`)
      .then(response => response.json())
      .then(data => this.setState({ request: data.request }));
  }

  render() {
    const { requestId } = this.props;
    const { request } = this.state;
    return (
      <div id="detail-route">
        <h6>
          Editing Request ID: {`${requestId}`}
        </h6>
        <form>
          <div className="field">
            <label className="label">Requestee</label>
            <div className="control">
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
              <input className="input" type="text" value={request.owner} />
            </div>
          </div>
          <div className="field">
            <label className="label">Start Date</label>
            <div className="control">
              <span className="icon is-small is-left">
                <i className="fas fa-calendar-alt"></i>
              </span>
              <input className="input" type="text" value={request.startDate} />
            </div>
          </div>
          <div className="field">
            <label className="label">End Date</label>
            <div className="control">
              <span className="icon is-small is-left">
                <i className="fas fa-calendar-alt"></i>
              </span>
              <input className="input" type="text" value={request.endDate} />
            </div>
          </div>
          <div className="field">
            <label className="label">Status</label>
            <div className="control">
              <span className="icon is-small is-left">
                <i className="fas fa-check-square"></i>
              </span>
              <input className="input" type="text" value={request.status} />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default DetailRoute;