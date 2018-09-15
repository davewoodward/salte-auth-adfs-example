const express = require('express');
const path = require('path');
const router = express.Router();
const bodyParser = require('body-parser')
const queryString = require('query-string');

router.use(bodyParser.urlencoded({ extended: false }))

router.get('*', (req, res, next) => {
  res.sendFile(path.resolve(`${__dirname}/../..`, 'index.html'));
});


// ****************************************************************************
// Allows the ID Token returned to the client application to contain additional
// user attribution whenever the following are true:
//
// - The Client Application is part of an ADFS Application Group.
// - A Web API is also part of the ADFS Application Group.
// - The Client Application is setup as a caller to the Web API within the ADFS Application Group.
// - The Web API has issuance transform rules that include additional user attribution.
// - The Client Application passes "response_mode=form_post" to ADFS' authorize endpoint.
// ****************************************************************************
router.post('*', (req, res, next) => {
  // Return contents of POST to browser as a fragment so Salte Auth can parse it.
  res.redirect(path.resolve(`${__dirname}/../..`, 'index.html#') + queryString.stringify(req.body));
});


module.exports = router;
