const crypto = require("crypto");

module.exports = {
  /**
  * Gives a algorithmically generated string based on a cipher
  @param {String} cipher - The word that your string will be scrambled by.
  @param {String} root - The string you want to be scrambled.
  */
  encrypt: (cipher,root) => {
    let mykey = crypto.createCipher("aes-128-cbc",cipher);
    let token = mykey.update(root,'utf8','hex');
    token += mykey.final('hex');
    return token;
  },
  /**
  * Deciphers a string generated by the encrpyt function above, it needs to know what the cipher used on it to encrpyt it to decipher correctly. This returns a string so please keep that in mind if you're using this to decipher id's.
  @param {String} cipher - The word that the string was scrambled with.
  @param {String} root - The scrambled string that needs to be deciphered.
  */
  decrypt: (cipher,root) => {
    let mykey = crypto.createDecipher("aes-128-cbc",cipher);
    let token = mykey.update(root,'hex','utf8');
    token += mykey.final('utf8');
    return token;
  }
};