// const jwt = require('jsonwebtoken');
// const fs = require('fs');
// const crypto = require('crypto');

// // keys: public and private
// const privateKey = fs.readFileSync('./private.pem', 'utf8');
// const publicKey = fs.readFileSync('./public.pem', 'utf8');

// const secretKey = 'supersecret';
// const payload = {
//   id: 123456789,
//   name: 'Fredy Ricardo Cortés',
//   cc: 1193443881,
//   admin: false,
// };

// // signing token

// const token = jwt.sign(payload, secretKey);
// console.log(token);

// // decode payload without secretKey

// const base64TokenSplitted = token.split('.');
// let base64Payload = base64TokenSplitted[1];
// const normalPayload = JSON.parse(
//   Buffer.from(base64Payload, 'base64').toString()
// );
// console.log(normalPayload);

// // build a validate token function

// const validateToken = (token, secretKey) => {
//   if (!jwt.verify(token, secretKey)) new Error('Not a valid token!');

//   console.log('success!', token);
// };

// // verify the validate token

// validateToken(token, secretKey);

// // verify the invalidate token

// normalPayload.employee = true;
// base64Payload = Buffer.from(JSON.stringify(normalPayload)).toString('base64');
// base64TokenSplitted[1] = base64Payload;
// invalidToken = base64TokenSplitted.join('.');

// //validateToken(invalidToken, secretKey);

// // signing token with the rsa256 algorithm

// const tokenRSA = jwt.sign(
//   payload,
//   { key: privateKey, passphrase: secretKey },
//   { algorithm: 'RS256' }
// );

// console.log('Token with RSA256: ', tokenRSA);

// // const tokenRSAEncrypt = crypto.publicEncrypt(
// //   {
// //     key: publicKey,
// //     padding: crypto.constants.RSA_NO_PADDING,
// //   },
// //   Buffer.from(token)
// // );

// console.log('--------------------------------');
// console.log(token);
// console.log(Buffer.from(token, 'base64').toString());
// console.log(Buffer.from(token));

const { generateCombinations, generateDictionary } = require('./utils/');

let payload = {
  0: ['C', 'F', 'M', '3'],
  1: ['1', '6'],
  2: ['R', '5', '9'],
  3: ['W', '4', '7', '8'],
  4: ['B', 'G', 'N', 'V'],
  5: ['E', 'Ñ', 'O', 'P'],
  6: ['H', 'K', 'L', 'U'],
  7: ['D', 'J', 'T', 'Y'],
  8: ['A', 'I', 'Q', '0'],
  9: ['S', 'X', 'Z', '2'],
};

console.time('verifyPassword');
let combinations = generateCombinations('0928092859', payload);
console.timeEnd('verifyPassword');
console.log('combinaciones: ' + combinations.length);
