const crypto = require('crypto');

module.exports = function gerarIdUnico(){
    return crypto.randomBytes(4).toString('HEX');
}