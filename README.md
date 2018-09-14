# Overview
This project demonstrates the use of [Salte Auth](https://www.npmjs.com/package/@salte-io/salte-auth) to obtain an ID Token for use in personalizing the look and feel of a front-end application and an access token for use in authenticating to a back-end API.

# Running the Example
1. Clone this repository to your local machine.
2. Create a new client-server application group in ADFS 4.0 using the "Native application accessing a web API" template.
3. Set the "Redirect URI" for the native application to "http://app.example.com/".
4. Set the "Relying party identifier" for the web API to "http://api.example.com/".
5. Replace the "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX" placeholder in this project's index.html file with the native application Client ID from ADFS.
6. Create a ".env" file in the root directory and add the environment variables described below.
7. Add the following entries to the "hosts" file on your local machine: "127.0.0.1 app.example.com" and "127.0.0.1 api.example.com".
8. Run "yarn start".  You may need to prefix this command with sudo or as an admin user if you are running on port 80.

# Environment Variables
Name | Description | Required | Sample Value
---- | ----------- | -------- | ------------
PUBLIC_KEY | This is the public side of the ADFS' signing certificate pulled from the JWKS endpoint's x5c attribute. | Y | MIIC7jCCAd...
ISSUER | This is ADFS' Federation Service Identifier. | Y | http://adfs.example.com/adfs/services/trust
AUDIENCE | This is the Relying party identifer for the web API.  See step 4 under "Running the Example." | Y | http://api.example.com/
PORT | This is the port that you want application and API requests served from. The default value is 80. If you change this value then you will need to update the "Redirect URI" for the native application configuration in ADFS and you will need to update the URL embedded within the greeting.html file. | N | 8080
