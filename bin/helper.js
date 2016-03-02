/**
 * Created by Kishan on 02-Mar-16.
 */
//To convert from string to MD5.
function stringToMD5(string) {
    var crypto = require('crypto');
    var md5crypt = crypto.createHash('md5');
    md5crypt.update(string);
    return md5crypt.digest('hex');
}

module.exports = {
    stringToMD5:stringToMD5
};