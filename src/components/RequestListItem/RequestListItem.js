import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  Card,
  CardContent,
  Typography,
  withStyles
} from '@material-ui/core';

const styles = {
  card: {
    margin: '0.5em 0'
  },
  details: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-around'
  },
  ownerName: {
    alignSelf: 'center'
  },
  endDate: {
    display: 'flex',
    flexDirection: 'column'
  },
  startDate: {
    display: 'flex',
    flexDirection: 'column'
  },
  status: {
    display: 'flex',
    flexDirection: 'column'
  }
};

const RequestListItem = ({ classes, request }) => {
  return (
    <Card className={classes.card} data-test-id="request-list-item">
      <CardContent className={classes.details}>
        <Typography
          className={classes.ownerName}
          variant="subtitle1"
          color="textPrimary"
          data-test-id="owner-name"
        >
          {request.owner}
        </Typography>
        <div className={classes.startDate} data-test-id="start-date">
          <Typography component="label" variant="subtitle2" color="textSecondary" >
            From
          </Typography>
          <Typography variant="subtitle1" color="textPrimary" data-test-id="value" >
            {moment(request.startDate).format('MM-DD-YYYY')}
          </Typography>
        </div>
        <div className={classes.endDate} data-test-id="end-date">
          <Typography component="label" variant="subtitle2" color="textSecondary" >
            To
          </Typography>
          <Typography variant="subtitle1" color="textPrimary" data-test-id="value" >
            {moment(request.endDate).format('MM-DD-YYYY')}
          </Typography>
        </div>
        <div className={classes.status} data-test-id="status">
          <Typography component="label" variant="subtitle2" color="textSecondary" >
            Status
          </Typography>
          <Typography variant="subtitle1" color="textPrimary" data-test-id="value" >
            {request.status}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

RequestListItem.propTypes = {
  classes: PropTypes.object.isRequired,
  request: PropTypes.object
};

export default withStyles(styles)(RequestListItem);