import React, { Component } from 'react';

import RequestList from '../RequestList';

const API = 'https://api.frontside.io/v1/requests';

class IndexRoute extends Component {
  constructor(props) {
    super(props);

    this.state = {
      requests: []
    };
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ requests: data.requests }));
  }

  render() {
    let { requests } = this.state;
    return (
      <div data-test-id="index-route">
        <h6 data-test-id="index-header">
          Requests
        </h6>
        <br />
        <RequestList requests={requests} />
        {/* <Typography variant="h4" color="textSecondary" noWrap>
          Requests Length: {requests.length}
        </Typography> */}
      </div>
    );
  }
}

export default IndexRoute;