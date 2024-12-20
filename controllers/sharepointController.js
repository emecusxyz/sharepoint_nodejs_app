// controllers/sharepointController.js
const axios = require('axios');
const { getAccessToken } = require('../services/authService');
 
const getSharePointSites = async (req, res) => {
  try {
    const accessToken = await getAccessToken();
    // Graph API endpoint to get SharePoint sites
    const response = await axios.get('https://graph.microsoft.com/v1.0/sites', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
 
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching SharePoint sites: ', error);
    res.status(500).send('Error fetching SharePoint sites');
  }
};
 
// Endpoint to get SharePoint lists
const getSharePointLists = async (req, res) => {
  const siteId = req.params.siteId;
 
  try {
    const accessToken = await getAccessToken();
    const response = await axios.get(`https://graph.microsoft.com/v1.0/sites/${siteId}/lists`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
 
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching SharePoint lists: ', error);
    res.status(500).send('Error fetching SharePoint lists');
  }
};

const gs =  (req, res) => {
    const s = "helloooo"
    res.send(s)}
 
module.exports = { getSharePointSites, getSharePointLists,gs };

