// services/authService.js
const msal = require('@azure/msal-node');
const { CLIENT_ID, CLIENT_SECRET, TENANT_ID, AUTHORITY, SCOPE } = process.env;
 
const msalConfig = {
  auth: {
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    authority: AUTHORITY,
  },
};
 
const cca = new msal.ConfidentialClientApplication(msalConfig);
 
const getAccessToken = async () => {
  const clientCredentialRequest = {
    scopes: [SCOPE],
  };
 
  try {
    const response = await cca.acquireTokenByClientCredential(clientCredentialRequest);
    return response.accessToken;
  } catch (error) {
    console.error("Error acquiring token: ", error);
    throw error;
  }
};
 
module.exports = { getAccessToken };