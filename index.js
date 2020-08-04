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

let iterations = 0;

const verifyPassword = (password) => {
  if (isNaN(password)) return console.log('Invalid password!');
  let r = [],
    c = 0,
    n = 0,
    valuesOfN = 0,
    combination = '',
    combinations = [],
    disccountColumn = 0,
    lastColumn,
    canContinue = true;

  while (c < password.length) {
    n = password[c];
    valuesOfN = payload[n];
    r.push([valuesOfN.length - 1, valuesOfN.length - 1]);
    c++;
  }

  c = 0;
  lastColumn = password.length - 1;
  while (canContinue) {
    n = password[c];
    valuesOfN = payload[n];
    indexRowValuesOfN = r[c][0];
    combination += valuesOfN[indexRowValuesOfN];

    if (c > 0 && isEnded(r, c - 1)) {
      disccountColumn = c;
    }

    if (c === lastColumn) {
      if (isEnded(r, lastColumn)) canContinue = false;
      if (disccountColumn !== 0 && isEnded(r, disccountColumn - 1)) {
        resetIndexesRows(r, disccountColumn - 1);
        r[disccountColumn][0]--;
      }
      if (r[0][0] === 0) r[0][0] = r[0][1];
      else r[0][0]--;
      c = 0;
      combinations.push(combination);
      combination = '';
    } else c++;
    iterations++;
  }
  return combinations;
};

const resetIndexesRows = (array, from) => {
  for (let i = from; i > 0; i--) {
    array[i][0] = array[i][1];
  }
};

const isEnded = (array, from) => {
  let end = true;
  for (let i = from; i >= 0; i--) {
    if (array[i][0] !== 0) {
      end = false;
      break;
    }
  }
  return end;
};

console.time('verifyPassword');
let combinations = verifyPassword('122122');
console.timeEnd('verifyPassword');

console.log(iterations);

// combinations.map((combination) => {
//   console.log(combination);
// });
console.log('combinaciones: ' + combinations.length);
