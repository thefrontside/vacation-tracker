import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from '@reach/router';

const RequestListItem = ({ request }) => {
  return (
    <div className="level is-mobile">
      <div className="level-item has-text-centered">
        <div>
          <p className="heading is-6">Requestee</p>
          <p className="title is-5">{request.owner}</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading is-6">Start date</p>
          <p className="title is-5">{moment(request.startDate).format('MM-DD-YYYY')}</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading is-6">End date</p>
          <p className="title is-5">{moment(request.endDate).format('MM-DD-YYYY')}</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading is-6">Status</p>
          <p className="title is-5">{request.status}</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <Link to={`/requests/${request.id}`}>
          <span className="icon" >
            <i className="fas fa-edit"></i>
          </span>
        </Link>
      </div>
    </div>
  );
};

RequestListItem.propTypes = {
  request: PropTypes.object
};

export default RequestListItem;