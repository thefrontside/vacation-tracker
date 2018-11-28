export default function configure() {
  const API = 'https://api.frontside.io/v1';

  this.post(`${API}/requests`, 'requests');

  this.get(`${API}/requests`, 'requests');

  this.get(`${API}/requests/:id`, 'request');

  this.put(`${API}/requests/:id`, 'request');

  this.del(`${API}/request/:id`, 'request');
}
