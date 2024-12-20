
// services/authService.js

const msal = require('@azure/msal-node');

const { CLIENT_ID, TENANT_ID, AUTHORITY, SCOPE } = process.env;
const CLIENT_SECRET = '4dA8Q~-L._N2XZxr1oYOqK6IIboWnQlG3EhP-cd4'
const CLIENT_ID='caacdf22-3a82-47b6-a1c2-52af1b800d05'

const TENANT_ID='b1bb0a34-b3ce-4837-b8e0-09bcba775f34'

const AUTHORITY='https://login.microsoftonline.com/b1bb0a34-b3ce-4837-b8e0-09bcba775f34'



const SCOPE='https://graph.microsoft.com/.default'  
// Ensure that CLIENT_SECRET is not empty

if (!CLIENT_SECRET) {   console.error('CLIENT_SECRET is required but not set.');  
    
//    const CLIENT_SECRET = process.env.CLIENT_SECRET
    
    process.exit(1); // Exit if credentials are missing 
    
}
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
    clientSecret: CLIENT_SECRET

  };
 
  try {

    const response = await cca.acquireTokenByClientCredential(clientCredentialRequest);
    console.log("response.accessToken:",response.accessToken)

    return response.accessToken;

  } catch (error) {

    console.error("Error acquiring token: ", error);

    throw error;

  }

};
 
module.exports = { getAccessToken };

 
