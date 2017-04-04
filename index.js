const port = process.env.PORT || 8080;
const iface = process.env.OPENSHIFT_NODEJS_IP;
const server = require('./modules/server');
server.listen(port, iface, function () {
  console.log('%s listening at %s', server.name, server.url); //eslint-disable-line
});
