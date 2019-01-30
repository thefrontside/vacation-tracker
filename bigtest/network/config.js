export default function configure() {
  this.passthrough('/_karma_webpack_/**');
  this.passthrough('/absolute/**');
  
  this.namespace = '/api';
  
  this.get('/products');

  this.get('/requests');
  this.get('/requests/:id');
  this.del('/requests/:id');
  this.post('/requests', ({ requests }, netReq) => {
    let payload = JSON.parse(netReq.requestBody);
    let record = requests.create(payload);
    return record;
  });
  this.put('/requests', ({ requests }, netReq) => {
    let payload = JSON.parse(netReq.requestBody);
    let record = requests.find(netReq.params.id);
    return record.update(payload);
  });
}
