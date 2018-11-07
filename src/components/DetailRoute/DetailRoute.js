import React from 'react';
import PropTypes from 'prop-types';
import { Typography, TextField } from '@material-ui/core';

const DetailRoute = ({ requestId }) => (
  <div id="detail-route">
    <Typography variant="h6" color="inherit" noWrap>
      Editing Request ID: {`${requestId}`}
    </Typography>
    <form>
      <TextField
        id="owner-name"
        label="Requestee"
        margin="normal"
      />
      <TextField
        id="start-date"
        label="Start Date"
        margin="normal"
      />
      <TextField
        id="end-date"
        label="End Date"
        margin="normal"
      />
      <TextField
        id="status"
        label="Status"
        margin="normal"
      />
    </form>
  </div>
);

DetailRoute.propTypes = {
  requestId: PropTypes.number.isRequired
};

export default DetailRoute;