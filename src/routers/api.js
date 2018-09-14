const express = require('express');
const cors = require('cors');
const path = require('path');
const oauth2 = require('express-jwt');
const router = express.Router();

router.use(cors());
let publicKey = process.env.PUBLIC_KEY.match(/.{1,64}/g).join('\n');
publicKey = `-----BEGIN CERTIFICATE-----\n${publicKey}\n-----END CERTIFICATE-----\n`;
// router.use(oauth2({ secret: publicKey, audience: process.env.AUDIENCE, issuer: process.env.ISSUER }).unless({ path: ['/health'] }));
router.use(oauth2({ secret: publicKey }).unless({ path: ['/health'] }));
router.get('*', (req, res, next) => {
  const response = {
    Message: 'Hello World'
  };
  res.send(JSON.stringify(response));
});

module.exports = router;
