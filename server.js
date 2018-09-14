const express = require('express');
const subdomain = require('express-subdomain');
const port = process.env.PORT || 80;
const app = express();

// serve web components and node_module dependencies normally
app.use('/components', express.static(__dirname + '/src/components'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use(subdomain('api', require('./src/routers/api.js')));
app.use(subdomain('*', require('./src/routers/app.js')));

app.listen(port);
console.log(`server started on port ${port}`);
