var express = require('express');
var s3Proxy = require('s3-proxy');

var app = express();


app.get('/*', s3Proxy({
  bucket: 'rp-temp-reports',
  prefix: 'test-reports',
  accessKeyId: '<access-key',
  secretAccessKey: '<secret-access-key>',
  overrideCacheControl: 'max-age=1000'
}));

module.exports = app;
