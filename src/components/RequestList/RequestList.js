import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

import RequestListItem from '../RequestListItem';

const styles = {
  requestList: {
    margin: '1em'
  }
};

const RequestList = ({ classes, requests }) => {
  return (
    <div className={classes.requestList} data-test-id="request-list">
      {requests.map(req => (
        <RequestListItem
          request={req}
          key={req.id}
        />
      ))}
    </div>
  );
};

RequestList.propTypes = {
  classes: PropTypes.object.isRequired,
  requests: PropTypes.arrayOf(PropTypes.object)
};

export default withStyles(styles)(RequestList);