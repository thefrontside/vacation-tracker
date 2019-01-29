export default function configure() {
  this.passthrough('/_karma_webpack_/**');
  this.passthrough('/absolute/**');
  
  this.namespace = '/api';
  
  this.get('/products');
}
