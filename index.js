var restify = require('restify');
 
var server = restify.createServer({
  name: 'demo-app-two',
});
const response = {
    status: 'ok'
}
const response2 = {
    status: 'ok',
    app: 'Demo App Two',
 	branch : 'Branch 1'
}
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());
 
server.get('/health', function (req, res, next) {
  res.send(response);
  return next();
});

server.get('/serviceB', function (req, res, next) {
  res.send(response2);
  return next();
});
 
server.listen(9000, function () {
  console.log('%s listening at %s', server.name, server.url);
});
