var bitcoin = require('bitcoin');
var fs = require('fs');
var config = require('./config');

var client = new bitcoin.Client({
    host: config.bitcoind.BITCOIND_HOST || "",
    port: config.bitcoind.BITCOIND_PORT || 8332,
    user: config.bitcoind.BITCOIND_USER || "",
    pass: config.bitcoind.BITCOIND_PASS || "",
    ssl: false,
    sslStrict: true,
    sslCa: fs.readFileSync(config.bitcoind.CERT)
});

module.exports = client;