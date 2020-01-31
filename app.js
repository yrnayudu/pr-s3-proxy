var express = require('express');
var s3Proxy = require('s3-proxy');

var app = express();


app.get('/*', s3Proxy({
  bucket: 'rp-temp-reports',
  prefix: 'test-reports',
  accessKeyId: 'AKIA4WBIWDIPEJ7ZZSVE',
  secretAccessKey: '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',
  overrideCacheControl: 'max-age=1000'
}));

module.exports = app;
