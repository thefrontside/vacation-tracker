export default function configure() {
  this.namespace = '/api';

  // this route will handle the URL '/api/requests'
  this.get('/requests', 'requests');
}
